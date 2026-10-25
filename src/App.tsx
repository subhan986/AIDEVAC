import React, { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { ManifestoSection } from './components/ManifestoSection';
import { TaglineReveal } from './components/TaglineReveal';
import { BenefitsSection } from './components/BenefitsSection';
import { CurriculumTracks } from './components/CurriculumTracks';
import { GraduateShowcase } from './components/GraduateShowcase';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import LogoLoader from './components/LogoLoader';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen bg-[#000000] text-[#f3f4f6] flex flex-col font-sans selection:bg-[#272727] selection:text-white">
      {/* Skip to content link for keyboard accessibility (B10) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded-full focus:font-semibold focus:shadow-lg"
      >
        Skip to main content
      </a>

      {/* Loading animation with only logo and no text */}
      {isLoading && (
        <LogoLoader
          duration={1100}
          onLoaded={() => setIsLoading(false)}
        />
      )}

      {/* Hero Section with Fluid Island Dock and AcidSquares */}
      <HeroSection />

      {/* Main content semantic container (B10) */}
      <main id="main-content" className="flex-1 w-full flex flex-col">
        {/* 1. Problem to solution: Manifesto and the paradigm shift */}
        <ManifestoSection />

        {/* 2. Mandatory Tagline reveal section (B11) */}
        <TaglineReveal />

        {/* 3. Outcomes and Benefits (A2 step 7 & 8) */}
        <BenefitsSection />

        {/* 4. Practical Curriculum Tracks (A2 core offer) */}
        <CurriculumTracks />

        {/* 5. Social proof: Alumni drops (A2 step 9) */}
        <GraduateShowcase />

        {/* 6. Frequently asked questions, objection handling & Risk reversal (A2 step 10 & 11) */}
        <FaqSection />
      </main>

      {/* 7. Footer with legal links (B10) */}
      <Footer />
    </div>
  );
}
