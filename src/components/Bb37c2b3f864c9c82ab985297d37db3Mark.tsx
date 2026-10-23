import React from 'react';
import MetallicPaint from './MetallicPaint';
import logo from './5bb37c2b-3f86-4c9c-82ab-985297d37db3.svg';

interface Bb37c2b3f864c9c82ab985297d37db3MarkProps {
  size?: number | string;
  scale?: number;
  className?: string;
}

export default function Bb37c2b3f864c9c82ab985297d37db3Mark({
  size,
  scale = 1,
  className = '',
}: Bb37c2b3f864c9c82ab985297d37db3MarkProps = {}) {
  // If size is provided, use it; otherwise default to 480 as in user code snippet
  const containerStyle: React.CSSProperties = {
    width: size ? (typeof size === 'number' ? `${size}px` : size) : 480,
    maxWidth: '100%',
    aspectRatio: '1 / 1',
  };

  return (
    <div
      style={containerStyle}
      className={`relative mx-auto flex items-center justify-center ${className}`}
    >
      <MetallicPaint
        imageSrc={logo}
        scale={scale}
      />
    </div>
  );
}
