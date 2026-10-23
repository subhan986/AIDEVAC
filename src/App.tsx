import React, { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { ManifestoSection } from './components/ManifestoSection';
import { CurriculumTracks } from './components/CurriculumTracks';
import { GraduateShowcase } from './components/GraduateShowcase';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import LogoLoader from './components/LogoLoader';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleExploreClick = () => {
    const el = document.getElementById('manifesto');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-neutral-100 flex flex-col font-sans selection:bg-neutral-800 selection:text-white">
      {/* 0. Clean Loading Animation with ONLY the logo and NO text */}
      {isLoading && (
        <LogoLoader
          duration={1200}
          onLoaded={() => setIsLoading(false)}
        />
      )}

      {/* 1. Hero Section with Compact PillNav Dock (Logo + Buttons) and AcidSquares */}
      <HeroSection
        onExploreClick={handleExploreClick}
      />

      {/* 2. Manifesto: What is Vibecoding & The Paradigm Shift */}
      <ManifestoSection />

      {/* 3. Practical Curriculum Tracks (PixelCard Course Cards, Rounded Laptops Strip, Concise Syllabus) */}
      <CurriculumTracks />

      {/* 4. Shipped by Alumni (Compact & Minimal Info) */}
      <GraduateShowcase />

      {/* 5. Frequently Asked Questions & Standards */}
      <FaqSection />

      {/* 6. Modern Minimalist Footer (Bigger Logo, Rounded Buttons) */}
      <Footer />
    </div>
  );
}
