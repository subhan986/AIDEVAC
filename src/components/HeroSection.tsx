import React from 'react';
import AcidSquares from './AcidSquares';
import PillNav from './PillNav';
import logo from '../logo.svg';
import { ArrowRight, CheckCircle, Sparkle } from '@phosphor-icons/react';

interface HeroSectionProps {
  onExploreClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreClick,
}) => {
  const scrollToCurriculum = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('curriculum');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[100dvh] w-full flex flex-col justify-between bg-[#000000] text-[#f3f4f6] overflow-hidden select-none px-4 sm:px-6 md:px-12 pt-16 sm:pt-20 pb-8 border-b border-[#181818]">
      {/* 1. Fluid island nav (B7) */}
      <header className="fixed top-3 sm:top-6 inset-x-0 z-50 flex justify-center pointer-events-none px-3">
        <PillNav
          logo={logo}
          logoAlt="AI Dev Academy"
          items={[
            { label: 'Home', href: '#hero' },
            { label: 'Manifesto', href: '#manifesto' },
            { label: 'Benefits', href: '#benefits' },
            { label: 'Curriculum', href: '#curriculum' },
            { label: 'Drops', href: '#graduates' },
            { label: 'FAQ', href: '#faq' }
          ]}
          activeHref="#hero"
          itemStyle="pill"
          hoverEffect="fill"
          indicator="dot"
          className="pointer-events-auto"
        />
      </header>

      {/* 2. Above the fold: Headline and subheadline capped at 680px per B5 */}
      <div className="relative z-20 max-w-[680px] mx-auto text-center flex flex-col items-center mt-6 sm:mt-10">
        {/* Subtle proof tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181818] border border-[#272727] text-xs font-mono text-[#f3f4f6] mb-4">
          <Sparkle size={14} weight="fill" className="text-white" />
          <span>Curriculum 2026</span>
          <span className="text-[#9B9B9B]">·</span>
          <span>40 seats per cohort</span>
        </div>

        {/* Heading: Left to right gradient #FFFFFF to #9B9B9B per B5 */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight max-w-[680px] [text-wrap:balance] bg-gradient-to-r from-[#FFFFFF] to-[#9B9B9B] bg-clip-text text-transparent">
          Ship production apps from natural specification
        </h1>

        {/* Subheadline: Clarifies how, max-w-[680px], no hyphens */}
        <p className="mt-4 text-base sm:text-lg text-[#9B9B9B] max-w-[680px] leading-relaxed [text-wrap:pretty]">
          Master autonomous agent swarms, invariant test harnesses, and prompt architecture. Go from conversational intent to verified deployed software in hours.
        </p>

        {/* Primary CTA + One proof signal (A2 / A4 / B1 / B2) */}
        <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
          <a
            href="#curriculum"
            onClick={scrollToCurriculum}
            className="btn-primary group"
          >
            <span>Explore course tracks</span>
            <ArrowRight size={16} weight="bold" className="transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1" />
          </a>

          {/* Proof signal beside primary action */}
          <div className="flex items-center gap-2 text-xs font-mono text-[#9B9B9B]">
            <CheckCircle size={16} weight="fill" className="text-white" />
            <span>Dedicated M3 laptops provided in class</span>
          </div>
        </div>
      </div>

      {/* 3. Hero Visual: AcidSquares visual container */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center my-4 sm:my-6 w-full max-w-5xl mx-auto overflow-hidden rounded-2xl border border-[#181818] bg-[#181818]">
        <div className="w-full relative h-[260px] xs:h-[320px] sm:h-[400px] md:h-[460px]">
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

      {/* Bottom Proof Metric Strip with organic real numbers per B8 */}
      <div className="relative z-20 max-w-5xl mx-auto w-full pt-4 border-t border-[#181818] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#9B9B9B]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-white" />
          <span className="text-[#f3f4f6] font-semibold">312 graduates</span>
          <span>shipping production code</span>
        </div>
        <div>
          <span>Average build time cut from 4 weeks to 6 hours</span>
        </div>
        <div>
          <span className="text-[#f3f4f6]">San Francisco lab</span>
          <span className="text-[#9B9B9B]"> &amp; Global cloud cohort</span>
        </div>
      </div>
    </section>
  );
};
