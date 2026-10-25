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

  // Sync active href based on current scroll position across sections using requestAnimationFrame
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY + 180;

          if (window.scrollY < 180) {
            setCurrentHref(items[0]?.href || '#hero');
            ticking = false;
            return;
          }

          for (let i = items.length - 1; i >= 0; i--) {
            const item = items[i];
            if (item.href.startsWith('#')) {
              const el = document.querySelector(item.href);
              if (el) {
                const rect = el.getBoundingClientRect();
                const top = rect.top + window.scrollY;
                if (scrollPosition >= top) {
                  setCurrentHref(item.href);
                  ticking = false;
                  return;
                }
              }
            }
          }
          ticking = false;
        });
        ticking = true;
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
      className={`w-full flex justify-center z-40 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${className}`}
      aria-label="Main Navigation"
    >
      {/* Fluid island nav matching B7 */}
      <div className="w-fit max-w-[96vw] overflow-x-auto no-scrollbar touch-manipulation flex items-center gap-1 sm:gap-1.5 p-1 sm:p-1.5 bg-[#181818]/90 backdrop-blur-2xl border border-[#272727] rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.8)]">
        {/* Logo Button - Scrolls to Top / Home */}
        <a
          href="#hero"
          onClick={(e) => handleClick(e, '#hero')}
          aria-label={logoAlt}
          className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#272727] hover:bg-[#313131] border border-[#313131] p-1.5 sm:p-2 flex items-center justify-center shrink-0 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] cursor-pointer group hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-white"
        >
          <img
            src={logo}
            alt={logoAlt}
            className="w-full h-full object-contain filter invert transition-transform group-hover:rotate-6"
          />
        </a>

        {/* Subtle vertical separator */}
        <div className="w-[1px] h-3.5 bg-[#272727] mx-0.5 shrink-0" />

        {/* Navigation Buttons for each section */}
        <div className="flex items-center gap-0.5 sm:gap-1 shrink-0">
          {items.map((item) => {
            const isActive = currentHref === item.href;

            let itemClass =
              'relative px-3 sm:px-3.5 py-1 sm:py-1.5 text-xs font-semibold transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] cursor-pointer flex items-center gap-1.5 select-none whitespace-nowrap touch-manipulation active:scale-95 focus-visible:ring-2 focus-visible:ring-white ';

            if (itemStyle === 'pill') {
              itemClass += 'rounded-full ';
            } else {
              itemClass += 'rounded-lg ';
            }

            if (isActive) {
              itemClass += 'bg-white text-black shadow-sm ';
            } else {
              itemClass += 'text-[#9B9B9B] hover:text-white hover:bg-[#272727] ';
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
                  <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                )}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
