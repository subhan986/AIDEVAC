import React, { useEffect, useRef, useState } from 'react';

interface AsciiTorusProps {
  className?: string;
  preset?: 'neural' | 'swarm' | 'matrix';
}

export const AsciiTorus: React.FC<AsciiTorusProps> = ({
  className = '',
  preset = 'neural',
}) => {
  const [currentPreset, setCurrentPreset] = useState<'neural' | 'swarm' | 'matrix'>(preset);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [asciiFrame, setAsciiFrame] = useState<string>('');
  
  // Animation state
  const stateRef = useRef({
    A: 0.5,
    B: 0.2,
    mouseX: 0,
    mouseY: 0,
    targetMouseX: 0,
    targetMouseY: 0,
  });

  useEffect(() => {
    let animId: number;
    let lastTime = performance.now();

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      stateRef.current.targetMouseX = Math.max(-1, Math.min(1, x));
      stateRef.current.targetMouseY = Math.max(-1, Math.min(1, y));
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Render loop for 3D Torus ASCII projection
    const render = (time: number) => {
      const dt = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      const state = stateRef.current;
      // Smooth mouse follow
      state.mouseX += (state.targetMouseX - state.mouseX) * 0.05;
      state.mouseY += (state.targetMouseY - state.mouseY) * 0.05;

      // Rotation angles with gentle auto-rotation plus mouse bias
      const speedMultiplier = isHovered ? 1.6 : 1.0;
      state.A += dt * 0.5 * speedMultiplier + state.mouseY * 0.01;
      state.B += dt * 0.7 * speedMultiplier + state.mouseX * 0.01;

      // Character sets matching the reference image ("H", "S", "E", "N", "I")
      let charSet = [' ', 'I', 'N', 'E', 'S', 'H'];
      if (currentPreset === 'swarm') {
        charSet = [' ', '.', ':', '*', '#', '@'];
      } else if (currentPreset === 'matrix') {
        charSet = [' ', '0', '1', '<', '>', '{', '}'];
      }

      // Torus projection calculations
      const screenWidth = 46;
      const screenHeight = 28;
      const buffer: string[] = Array(screenWidth * screenHeight).fill(' ');
      const zBuffer: number[] = Array(screenWidth * screenHeight).fill(0);

      const cosA = Math.cos(state.A);
      const sinA = Math.sin(state.A);
      const cosB = Math.cos(state.B);
      const sinB = Math.sin(state.B);

      const R1 = 1.0; // Circle radius
      const R2 = 2.0; // Donut radius
      const K2 = 5.0; // Distance from camera
      const K1 = (screenWidth * K2 * 3) / (8 * (R1 + R2));

      // Step over torus coordinates theta and phi
      for (let theta = 0; theta < 6.28; theta += 0.08) {
        const costheta = Math.cos(theta);
        const sintheta = Math.sin(theta);

        for (let phi = 0; phi < 6.28; phi += 0.03) {
          const cosphi = Math.cos(phi);
          const sinphi = Math.sin(phi);

          // 3D coordinates before rotation
          const circlex = R2 + R1 * costheta;
          const circley = R1 * sintheta;

          // 3D coordinates after rotation around axes A and B
          const x = circlex * (cosB * cosphi + sinA * sinB * sinphi) - circley * cosA * sinB;
          const y = circlex * (sinB * cosphi - sinA * cosB * sinphi) + circley * cosA * cosB;
          const z = K2 + cosA * circlex * sinphi + circley * sinA;
          const ooz = 1 / z;

          // Screen 2D projection
          const xp = Math.floor(screenWidth / 2 + K1 * ooz * x * 1.8);
          const yp = Math.floor(screenHeight / 2 - K1 * ooz * y * 0.95);

          // Calculate surface normal luminance
          const L =
            cosphi * costheta * sinB -
            cosA * costheta * sinphi -
            sinA * sintheta +
            cosB * (cosA * sintheta - costheta * sinA * sinphi);

          if (yp >= 0 && yp < screenHeight && xp >= 0 && xp < screenWidth) {
            const idx = xp + yp * screenWidth;
            if (ooz > zBuffer[idx]) {
              zBuffer[idx] = ooz;
              // Map luminance to characters in charSet
              const luminanceIndex = Math.floor(Math.max(0, (L + 1.4) / 2.8) * (charSet.length - 1));
              const safeIndex = Math.min(charSet.length - 1, Math.max(1, luminanceIndex));
              buffer[idx] = charSet[safeIndex];
            }
          }
        }
      }

      // Format buffer into lines
      const lines: string[] = [];
      for (let r = 0; r < screenHeight; r++) {
        lines.push(buffer.slice(r * screenWidth, (r + 1) * screenWidth).join(''));
      }
      setAsciiFrame(lines.join('\n'));

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [currentPreset, isHovered]);

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative flex flex-col items-center justify-center select-none ${className}`}
    >
      {/* Subtle radial glow behind the ASCII art */}
      <div className="absolute w-72 h-72 rounded-full bg-white/[0.03] blur-3xl pointer-events-none -z-10" />

      {/* ASCII Output */}
      <pre
        className="font-mono text-[9px] sm:text-[11px] md:text-[13px] leading-[1.05] tracking-[0.22em] text-neutral-300 font-medium whitespace-pre transition-colors duration-300 drop-shadow-[0_0_12px_rgba(255,255,255,0.08)] cursor-pointer"
        style={{
          textShadow: isHovered
            ? '0 0 8px rgba(255, 255, 255, 0.45)'
            : '0 0 2px rgba(255, 255, 255, 0.1)',
        }}
        title="Interactive 3D Neural Torus — Drag cursor to deflect"
      >
        {asciiFrame}
      </pre>

      {/* Interactive preset badges */}
      <div className="mt-4 flex items-center gap-1.5 p-1 bg-neutral-900/80 border border-neutral-800 rounded-lg backdrop-blur-md">
        <button
          onClick={() => setCurrentPreset('neural')}
          className={`px-2.5 py-1 text-[11px] font-mono rounded transition-colors whitespace-nowrap ${
            currentPreset === 'neural'
              ? 'bg-neutral-800 text-white font-semibold'
              : 'text-neutral-400 hover:text-neutral-200'
          }`}
        >
          HSENI·Torus
        </button>
        <button
          onClick={() => setCurrentPreset('swarm')}
          className={`px-2.5 py-1 text-[11px] font-mono rounded transition-colors whitespace-nowrap ${
            currentPreset === 'swarm'
              ? 'bg-neutral-800 text-white font-semibold'
              : 'text-neutral-400 hover:text-neutral-200'
          }`}
        >
          Agent·Swarm
        </button>
        <button
          onClick={() => setCurrentPreset('matrix')}
          className={`px-2.5 py-1 text-[11px] font-mono rounded transition-colors whitespace-nowrap ${
            currentPreset === 'matrix'
              ? 'bg-neutral-800 text-white font-semibold'
              : 'text-neutral-400 hover:text-neutral-200'
          }`}
        >
          Token·Flow
        </button>
      </div>
      <p className="mt-1.5 text-[10px] font-mono text-neutral-500 tracking-wider uppercase">
        Hover & drag to orient neural lattice
      </p>
    </div>
  );
};
