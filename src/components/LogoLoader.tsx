import React, { useState, useEffect } from 'react';
import logo from '../logo.svg';

interface LogoLoaderProps {
  onLoaded?: () => void;
  duration?: number;
}

export default function LogoLoader({ onLoaded, duration = 1200 }: LogoLoaderProps) {
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFadingOut(true);
      const removeTimer = setTimeout(() => {
        setIsRemoved(true);
        if (onLoaded) onLoaded();
      }, 500);
      return () => clearTimeout(removeTimer);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onLoaded]);

  if (isRemoved) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#070709] transition-all duration-500 select-none ${
        isFadingOut ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.08)_0%,transparent_60%)] pointer-events-none" />

      {/* Center Logo with elegant pulsing glow animation — NO TEXT */}
      <div className="relative z-10 flex items-center justify-center">
        {/* Outer glowing pulsing ring */}
        <div className="absolute -inset-8 rounded-full bg-white/[0.04] blur-xl animate-pulse pointer-events-none" />
        
        {/* Logo container (Bigger, fluid shine) */}
        <div className="relative w-36 h-36 sm:w-44 sm:h-44 p-7 rounded-full bg-white/[0.06] border border-white/20 backdrop-blur-2xl shadow-[0_0_60px_rgba(255,255,255,0.18)] flex items-center justify-center animate-bounce-slight transition-all">
          <img
            src={logo}
            alt="Academy Logo"
            className="w-full h-full object-contain filter invert drop-shadow-[0_0_20px_rgba(255,255,255,0.6)] animate-pulse"
          />
        </div>
      </div>
    </div>
  );
}
