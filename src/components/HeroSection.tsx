import React from 'react';
import AcidSquares from './AcidSquares';
import BlurText from './BlurText';
import { Sparkles } from 'lucide-react';
import PillNav from './PillNav';
import logo from '../logo.svg';

interface HeroSectionProps {
  onExploreClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreClick,
}) => {
  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  return (
    <section id="hero" className="relative min-h-[100dvh] w-full flex flex-col justify-between bg-[#0a0a0c] text-white overflow-hidden select-none px-3 sm:px-6 md:px-12 pt-16 sm:pt-20 pb-3 border-b border-neutral-900">
      {/* Background radial atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.03)_0%,transparent_60%)] pointer-events-none" />

      {/* 1. Header with small PillNav dock: fixed top for continuous navigation on mobile and desktop */}
      <header className="fixed top-2 sm:top-3.5 inset-x-0 z-50 flex justify-center pointer-events-none px-2 sm:px-4">
        <PillNav
          logo={logo}
          logoAlt="AI Dev Academy"
          items={[
            { label: 'Home', href: '#hero' },
            { label: 'Manifesto', href: '#manifesto' },
            { label: 'Curriculum', href: '#curriculum' },
            { label: 'Alumni', href: '#graduates' },
            { label: 'FAQ', href: '#faq' }
          ]}
          activeHref="#hero"
          itemStyle="pill"
          hoverEffect="fill"
          indicator="dot"
          className="pointer-events-auto"
        />
      </header>

      {/* 2. CENTER HERO BACKGROUND: AcidSquares (Responsive viewport height tuned for mobile & desktop) */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center my-1 sm:my-2 w-full overflow-hidden rounded-2xl">
        <div className="w-full relative h-[250px] xs:h-[300px] sm:h-[400px] md:h-[500px] lg:h-[560px]">
          <AcidSquares
            color="#120f17"
            accentColor="#ff4fb8"
            secondaryColor="#3b6bff"
            tileSize={1}
            gap={0.12}
            roundness={0.25}
            rotation={35}
            waves={1}
            pulse={1}
            lighting="split"
            tilt={0.7}
            grain={0.12}
            intro={true}
            mouseInteraction={true}
          />
        </div>
      </div>

      {/* 3. HERO FOOTER: Sub-kicker + Giant Bottom Title matching "Adoratorio® Studio" */}
      <div className="relative z-20 w-full flex flex-col">
        {/* Subtle status/metadata row above the giant title */}
        <div className="flex flex-wrap items-center justify-between gap-1.5 sm:gap-4 pb-1.5 sm:pb-2 border-b border-neutral-900 text-[10px] sm:text-[11px] md:text-xs text-neutral-400 font-mono">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-3">
            <span className="text-white font-medium">CURRICULUM 2026</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span>Vibecoding Architecture</span>
            <span aria-hidden="true" className="text-neutral-600 hidden xs:inline">·</span>
            <span className="hidden xs:inline">Multi-Agent Swarms</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-neutral-300" />
            <span>40 Seats / Batch</span>
          </div>
        </div>

        {/* Giant Hero Title anchored across bottom with BlurText */}
        <div className="w-full overflow-hidden pt-1 sm:pt-2">
          <BlurText
            as="h1"
            text="AI Dev Academy®"
            effect="blur"
            animateBy="words"
            direction="top"
            staggerFrom="start"
            trigger="view"
            delay={200}
            stepDuration={0.35}
            blur={10}
            distance={50}
            onAnimationComplete={handleAnimationComplete}
            className="text-[11.8vw] xs:text-[12.2vw] font-bold tracking-tighter leading-[0.9] text-white whitespace-nowrap flex-nowrap select-none drop-shadow-[0_4px_24px_rgba(255,255,255,0.05)] hover:text-neutral-100 transition-colors"
          />
        </div>
      </div>
    </section>
  );
};
