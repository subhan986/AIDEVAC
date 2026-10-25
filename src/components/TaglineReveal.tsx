import React, { useEffect, useRef, useState } from 'react';

interface TaglineRevealProps {
  className?: string;
}

export const TaglineReveal: React.FC<TaglineRevealProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeWordsCount, setActiveWordsCount] = useState<number>(0);

  // Core benefit tagline (no hyphens, sentence case, outcome driven)
  const line1 = 'You do not write syntax anymore.';
  const line2 = 'You steer autonomous swarms that compile natural intent into verified production software.';
  const words = `${line1} ${line2}`.split(' ');

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!containerRef.current) return;
          const rect = containerRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          // When top enters lower half of viewport to upper third
          const startTrigger = windowHeight * 0.85;
          const endTrigger = windowHeight * 0.35;
          const progress = Math.min(
            1,
            Math.max(0, (startTrigger - rect.top) / (startTrigger - endTrigger))
          );

          const count = Math.floor(progress * words.length);
          setActiveWordsCount(count);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [words.length]);

  return (
    <section className={`relative w-full py-24 px-4 sm:px-6 md:px-12 bg-[#000000] border-b border-[#181818] ${className}`}>
      <div ref={containerRef} className="max-w-[680px] mx-auto text-center flex flex-col items-center">
        <span className="text-xs font-mono uppercase tracking-widest text-[#9B9B9B] mb-6">
          The Engineering Law
        </span>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight text-left sm:text-center select-none [text-wrap:balance]">
          {words.map((word, idx) => {
            const isLit = idx < activeWordsCount;
            return (
              <span
                key={idx}
                className={`inline-block mr-2 sm:mr-3 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                  isLit ? 'text-white opacity-100 scale-100' : 'text-[#f3f4f6] opacity-30 scale-[0.98]'
                }`}
              >
                {word}
              </span>
            );
          })}
        </h2>

        <p className="mt-8 text-sm sm:text-base text-[#9B9B9B] max-w-[540px] [text-wrap:pretty]">
          Modern software leverage is measured by how fast you translate architectural specifications into running applications.
        </p>
      </div>
    </section>
  );
};
