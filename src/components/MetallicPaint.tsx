import React, { useEffect, useRef, useState } from 'react';

export interface MetallicPaintProps {
  imageSrc: string;
  scale?: number;
  speed?: number;
  roughness?: number;
  brightness?: number;
  className?: string;
  style?: React.CSSProperties;
  mouseInteraction?: boolean;
}

export default function MetallicPaint({
  imageSrc,
  scale = 1,
  speed = 1.0,
  roughness = 0.35,
  brightness = 1.15,
  className = '',
  style,
  mouseInteraction = true,
}: MetallicPaintProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    let animationFrameId: number;
    let gl: WebGLRenderingContext | null = null;
    let program: WebGLProgram | null = null;
    let texture: WebGLTexture | null = null;
    let isCleanedUp = false;

    // Mouse coordinates in [0, 1]
    const mouse = { x: 0.5, y: 0.5, targetX: 0.5, targetY: 0.5 };

    const handleMouseMove = (e: MouseEvent) => {
      if (!mouseInteraction || !container) return;
      const rect = container.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        mouse.targetX = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
        mouse.targetY = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height));
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Initialize WebGL
    try {
      gl = (canvas.getContext('webgl', {
        alpha: true,
        premultipliedAlpha: false,
        antialias: true,
        preserveDrawingBuffer: false,
      }) ||
        canvas.getContext('experimental-webgl', {
          alpha: true,
          premultipliedAlpha: false,
          antialias: true,
        })) as WebGLRenderingContext | null;
    } catch {
      gl = null;
    }

    if (!gl) {
      setHasError(true);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }

    // Shaders
    const vertexShaderSource = `
      attribute vec2 a_position;
      varying vec2 v_uv;
      void main() {
        v_uv = (a_position + 1.0) * 0.5;
        // Invert Y for correct WebGL texture mapping
        v_uv.y = 1.0 - v_uv.y;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    const fragmentShaderSource = `
      precision highp float;
      varying vec2 v_uv;
      uniform sampler2D u_texture;
      uniform float u_time;
      uniform float u_scale;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;
      uniform float u_roughness;
      uniform float u_brightness;

      void main() {
        // Center-zoom based on u_scale
        vec2 uv = (v_uv - 0.5) / max(u_scale, 0.01) + 0.5;

        if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) {
          gl_FragColor = vec4(0.0);
          return;
        }

        vec4 texColor = texture2D(u_texture, uv);
        float mask = texColor.a;

        if (mask < 0.02) {
          gl_FragColor = vec4(0.0);
          return;
        }

        // Compute beveled surface normal from texture alpha gradients
        vec2 texel = 1.0 / u_resolution;
        float right = texture2D(u_texture, uv + vec2(texel.x * 2.5, 0.0)).a;
        float left  = texture2D(u_texture, uv - vec2(texel.x * 2.5, 0.0)).a;
        float down  = texture2D(u_texture, uv + vec2(0.0, texel.y * 2.5)).a;
        float up    = texture2D(u_texture, uv - vec2(0.0, texel.y * 2.5)).a;

        vec3 normal = normalize(vec3((left - right) * 4.5, (up - down) * 4.5, 0.5));

        // Fluid liquid ripples and dynamic waves
        float t = u_time * 1.35;
        float wave1 = sin(uv.x * 14.0 + t + normal.x * 2.0);
        float wave2 = cos(uv.y * 18.0 - t * 1.1 + normal.y * 2.0);
        float wave3 = sin((uv.x + uv.y) * 22.0 + t * 2.0);
        vec3 wavePerturb = vec3(wave1 * 0.28, wave2 * 0.28, wave3 * 0.15);
        vec3 fluidNormal = normalize(normal + wavePerturb);

        // Dynamic light source tracking mouse pointer
        vec3 lightPos = vec3((u_mouse.x - 0.5) * 2.5, -(u_mouse.y - 0.5) * 2.5, 1.4);
        vec3 lightDir = normalize(lightPos - vec3(uv - 0.5, 0.0));
        vec3 viewDir = vec3(0.0, 0.0, 1.0);

        // Specular & reflection mapping (liquid chrome)
        vec3 halfVector = normalize(lightDir + viewDir);
        float NdotL = max(dot(fluidNormal, lightDir), 0.0);
        float NdotH = max(dot(fluidNormal, halfVector), 0.0);
        float specExponent = mix(64.0, 16.0, u_roughness);
        float spec = pow(NdotH, specExponent);

        // Fresnel reflection factor
        float NdotV = max(dot(fluidNormal, viewDir), 0.0);
        float fresnel = pow(1.0 - NdotV, 3.2);

        // Liquid chrome metallic palette (hyper-reflective platinum with iridescent highlights)
        vec3 baseMetal = vec3(0.88, 0.90, 0.96);
        vec3 iridescent = 0.5 + 0.5 * cos(6.28318 * (t * 0.08 + fluidNormal.xyx * 0.7 + vec3(0.0, 0.33, 0.67)));
        vec3 chrome = mix(baseMetal, iridescent, 0.18 + fresnel * 0.25);

        // Edge rim glow
        float edgeStrength = length(vec2(left - right, up - down));
        float rim = smoothstep(0.05, 0.6, edgeStrength * 5.0);

        // Composite metallic finish
        vec3 color = chrome * (0.35 + 0.65 * NdotL);
        color += vec3(1.0, 1.0, 1.0) * spec * 1.35;
        color += chrome * fresnel * 0.65;
        color += vec3(0.85, 0.7, 1.0) * rim * 0.4;
        color *= u_brightness;

        // Apply silhouette mask
        gl_FragColor = vec4(color * mask, mask);
      }
    `;

    const createShader = (type: number, source: string): WebGLShader | null => {
      if (!gl) return null;
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader compile error:', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertShader = createShader(gl.VERTEX_SHADER, vertexShaderSource);
    const fragShader = createShader(gl.FRAGMENT_SHADER, fragmentShaderSource);

    if (!vertShader || !fragShader) {
      setHasError(true);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }

    program = gl.createProgram();
    if (!program) {
      setHasError(true);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }

    gl.attachShader(program, vertShader);
    gl.attachShader(program, fragShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program link error:', gl.getProgramInfoLog(program));
      setHasError(true);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }

    gl.useProgram(program);

    // Quad geometry
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([
        -1.0, -1.0,
         1.0, -1.0,
        -1.0,  1.0,
        -1.0,  1.0,
         1.0, -1.0,
         1.0,  1.0,
      ]),
      gl.STATIC_DRAW
    );

    const aPositionLoc = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(aPositionLoc);
    gl.vertexAttribPointer(aPositionLoc, 2, gl.FLOAT, false, 0, 0);

    // Uniform locations
    const uTextureLoc = gl.getUniformLocation(program, 'u_texture');
    const uTimeLoc = gl.getUniformLocation(program, 'u_time');
    const uScaleLoc = gl.getUniformLocation(program, 'u_scale');
    const uResolutionLoc = gl.getUniformLocation(program, 'u_resolution');
    const uMouseLoc = gl.getUniformLocation(program, 'u_mouse');
    const uRoughnessLoc = gl.getUniformLocation(program, 'u_roughness');
    const uBrightnessLoc = gl.getUniformLocation(program, 'u_brightness');

    // Create & setup texture from image
    texture = gl.createTexture();
    const img = new Image();
    img.crossOrigin = 'anonymous';

    let textureLoaded = false;

    img.onload = () => {
      if (isCleanedUp || !gl || !texture) return;
      // Draw image to offscreen canvas to standardize alpha silhouette
      const offscreen = document.createElement('canvas');
      const size = 1024;
      offscreen.width = size;
      offscreen.height = size;
      const offCtx = offscreen.getContext('2d');

      if (offCtx) {
        // Draw image centered and preserve sharp alpha mask
        offCtx.drawImage(img, 0, 0, size, size);

        // Turn all non-transparent pixels into solid white so the alpha mask is intact
        offCtx.globalCompositeOperation = 'source-in';
        offCtx.fillStyle = '#ffffff';
        offCtx.fillRect(0, 0, size, size);

        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texImage2D(
          gl.TEXTURE_2D,
          0,
          gl.RGBA,
          gl.RGBA,
          gl.UNSIGNED_BYTE,
          offscreen
        );
      } else {
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texImage2D(
          gl.TEXTURE_2D,
          0,
          gl.RGBA,
          gl.RGBA,
          gl.UNSIGNED_BYTE,
          img
        );
      }

      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      textureLoaded = true;
    };

    img.onerror = () => {
      setHasError(true);
    };

    img.src = imageSrc;

    // Resize handling
    const updateSize = () => {
      if (!canvas || !container || !gl) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = container.clientWidth || 480;
      const height = container.clientHeight || 480;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    const resizeObserver = new ResizeObserver(() => updateSize());
    resizeObserver.observe(container);
    updateSize();

    // Render loop
    const startTime = performance.now();

    const render = () => {
      if (isCleanedUp || !gl || !program) return;

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      const elapsed = ((performance.now() - startTime) / 1000) * speed;

      gl.clearColor(0.0, 0.0, 0.0, 0.0);
      gl.clear(gl.COLOR_BUFFER_BIT);

      if (textureLoaded && texture) {
        gl.useProgram(program);

        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.uniform1i(uTextureLoc, 0);

        gl.uniform1f(uTimeLoc, elapsed);
        gl.uniform1f(uScaleLoc, scale);
        gl.uniform2f(uResolutionLoc, canvas.width, canvas.height);
        gl.uniform2f(uMouseLoc, mouse.x, mouse.y);
        gl.uniform1f(uRoughnessLoc, roughness);
        gl.uniform1f(uBrightnessLoc, brightness);

        gl.drawArrays(gl.TRIANGLES, 0, 6);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      isCleanedUp = true;
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      resizeObserver.disconnect();

      if (gl) {
        if (texture) gl.deleteTexture(texture);
        if (program) gl.deleteProgram(program);
        if (vertShader) gl.deleteShader(vertShader);
        if (fragShader) gl.deleteShader(fragShader);
        if (positionBuffer) gl.deleteBuffer(positionBuffer);
      }
    };
  }, [imageSrc, scale, speed, roughness, brightness, mouseInteraction]);

  if (hasError) {
    // Elegant fallback rendering the image directly
    return (
      <div
        ref={containerRef}
        className={`relative overflow-hidden flex items-center justify-center ${className}`}
        style={{ width: '100%', height: '100%', ...style }}
      >
        <img
          src={imageSrc}
          alt="Mark"
          className="w-full h-full object-contain filter invert drop-shadow-[0_0_24px_rgba(255,255,255,0.4)]"
        />
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden flex items-center justify-center ${className}`}
      style={{ width: '100%', height: '100%', ...style }}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block pointer-events-none drop-shadow-[0_12px_40px_rgba(255,255,255,0.18)]"
      />
    </div>
  );
}
