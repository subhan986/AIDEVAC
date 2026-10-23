import React, { useState, useEffect } from 'react';

export interface PillNavItem {
  label: string;
  href: string;
}

export interface PillNavProps {
  logo: string;
  logoAlt?: string;
  items: PillNavItem[];
  activeHref?: string;
  itemStyle?: 'pill' | 'default';
  hoverEffect?: 'fill' | 'glow' | 'underline';
  indicator?: 'dot' | 'line' | 'none';
  className?: string;
  onItemClick?: (href: string) => void;
}

export default function PillNav({
  logo,
  logoAlt = 'AI Dev Academy',
  items,
  activeHref = '#hero',
  itemStyle = 'pill',
  hoverEffect = 'fill',
  indicator = 'dot',
  className = '',
  onItemClick,
}: PillNavProps) {
  const [currentHref, setCurrentHref] = useState(activeHref);

  // Sync active href based on current scroll position across sections
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;

      // Check if at the very top
      if (window.scrollY < 200) {
        setCurrentHref(items[0]?.href || '#hero');
        return;
      }

      // Check sections from bottom to top
      for (let i = items.length - 1; i >= 0; i--) {
        const item = items[i];
        if (item.href.startsWith('#')) {
          const el = document.querySelector(item.href);
          if (el) {
            const rect = el.getBoundingClientRect();
            const top = rect.top + window.scrollY;
            if (scrollPosition >= top) {
              setCurrentHref(item.href);
              return;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [items]);

  const handleClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setCurrentHref(href);
    if (onItemClick) {
      onItemClick(href);
    }

    if (href === '/' || href === '#hero' || href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (href.startsWith('#')) {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav
      className={`w-full flex justify-center z-40 transition-all duration-300 ${className}`}
      aria-label="Main Navigation"
    >
      {/* Compact dock perfectly tailored for mobile and desktop */}
      <div className="w-fit max-w-[96vw] overflow-x-auto no-scrollbar touch-manipulation flex items-center gap-0.5 sm:gap-1.5 p-1 sm:p-1.5 bg-neutral-900/90 backdrop-blur-2xl border border-white/10 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.15)]">
        {/* Logo Button - Scrolls to Top / Home */}
        <a
          href="#hero"
          onClick={(e) => handleClick(e, '#hero')}
          aria-label={logoAlt}
          className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-white/[0.08] hover:bg-white/[0.16] border border-white/20 hover:border-white/40 p-1.5 sm:p-2 flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(255,255,255,0.12)] transition-all cursor-pointer group hover:scale-105 active:scale-95"
        >
          <img
            src={logo}
            alt={logoAlt}
            className="w-full h-full object-contain filter invert transition-transform group-hover:rotate-6"
          />
        </a>

        {/* Subtle vertical separator */}
        <div className="w-[1px] h-3 sm:h-3.5 bg-white/15 mx-0.5 shrink-0" />

        {/* Navigation Buttons for each section */}
        <div className="flex items-center gap-0.5 sm:gap-1 shrink-0">
          {items.map((item) => {
            const isActive = currentHref === item.href;

            let itemClass =
              'relative px-2.5 sm:px-3.5 py-1 sm:py-1.5 text-[11px] sm:text-xs font-medium transition-all duration-200 cursor-pointer flex items-center gap-1 sm:gap-1.5 select-none whitespace-nowrap touch-manipulation active:scale-95 ';

            if (itemStyle === 'pill') {
              itemClass += 'rounded-full ';
            } else {
              itemClass += 'rounded-lg ';
            }

            if (isActive) {
              if (hoverEffect === 'fill') {
                itemClass += 'bg-white text-black font-semibold shadow-[0_2px_10px_rgba(255,255,255,0.25)] ';
              } else {
                itemClass += 'bg-white/10 text-white font-medium ';
              }
            } else {
              if (hoverEffect === 'fill') {
                itemClass += 'text-neutral-300 hover:text-white hover:bg-white/10 ';
              } else if (hoverEffect === 'glow') {
                itemClass += 'text-neutral-300 hover:text-white hover:shadow-[0_0_10px_rgba(255,255,255,0.2)] ';
              } else {
                itemClass += 'text-neutral-300 hover:text-white ';
              }
            }

            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={itemClass}
              >
                <span>{item.label}</span>
                {indicator === 'dot' && isActive && (
                  <span
                    className={`w-1.5 h-1.5 rounded-full transition-all shrink-0 ${
                      hoverEffect === 'fill' ? 'bg-black' : 'bg-emerald-400 shadow-[0_0_6px_#34d399]'
                    }`}
                  />
                )}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
