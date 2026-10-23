import React from 'react';
import { ArrowUp } from 'lucide-react';
import logo from '../logo.svg';

interface FooterProps {
  onApplyClick?: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#070709] border-t border-neutral-900 text-neutral-400 py-10 sm:py-16 px-3 sm:px-6 md:px-12 select-none">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 sm:gap-12 pb-10 sm:pb-14 border-b border-neutral-900">
          {/* Brand Col */}
          <div className="sm:col-span-2 md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5">
                {/* Noticeably bigger logo */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/[0.08] border border-white/20 p-2.5 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(255,255,255,0.18)]">
                  <img
                    src={logo}
                    alt="AI Dev Academy Logo"
                    className="w-full h-full object-contain filter invert"
                  />
                </div>
                <div>
                  <span className="text-base sm:text-lg font-bold tracking-tight text-white block">
                    AI Dev Academy
                  </span>
                  <span className="text-[11px] font-mono text-neutral-400">
                    San Francisco · Cloud Global
                  </span>
                </div>
              </div>
              <p className="mt-4 text-xs sm:text-sm text-neutral-400 max-w-sm leading-relaxed">
                The premier production engineering guild for vibecoding, autonomous multi-agent pipelines, and zero-syntax system architecture.
              </p>
            </div>

            <div className="mt-6 sm:mt-8 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono text-neutral-300">
                Cohorts Active · Global Discord Enclave
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h4 className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-neutral-300 mb-3 sm:mb-4">
              Focus Tracks
            </h4>
            <ul className="space-y-2 sm:space-y-2.5 text-xs">
              <li>
                <a href="#curriculum" className="hover:text-white transition-colors py-1 block">Websites &amp; Web Apps</a>
              </li>
              <li>
                <a href="#curriculum" className="hover:text-white transition-colors py-1 block">Mobile App Studio</a>
              </li>
              <li>
                <a href="#curriculum" className="hover:text-white transition-colors py-1 block">AI Agents &amp; Automation</a>
              </li>
              <li>
                <a href="#curriculum" className="hover:text-white transition-colors py-1 block">Full-Stack SaaS</a>
              </li>
            </ul>
          </div>

          {/* Academy Info */}
          <div className="md:col-span-2">
            <h4 className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-neutral-300 mb-3 sm:mb-4">
              Academy
            </h4>
            <ul className="space-y-2 sm:space-y-2.5 text-xs">
              <li>
                <a href="#manifesto" className="hover:text-white transition-colors py-1 block">The Manifesto</a>
              </li>
              <li>
                <a href="#curriculum" className="hover:text-white transition-colors py-1 block">Curriculum Tracks</a>
              </li>
              <li>
                <a href="#graduates" className="hover:text-white transition-colors py-1 block">Alumni Drops</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors py-1 block">FAQ &amp; Standards</a>
              </li>
            </ul>
          </div>

          {/* Action Col */}
          <div className="sm:col-span-2 md:col-span-3 flex flex-col justify-between">
            <div>
              <h4 className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-neutral-300 mb-3 sm:mb-4">
                Admissions
              </h4>
              <p className="text-xs text-neutral-400 mb-3 sm:mb-4 leading-relaxed">
                Reviewed on a rolling basis. Direct architectural feedback provided on every submission.
              </p>
              <a
                href="mailto:admissions@aidevacademy.org"
                className="btn-glass-subtle inline-flex items-center justify-center w-full py-2.5 px-4 rounded-full font-mono text-xs text-neutral-200 hover:text-white transition-all text-center cursor-pointer min-h-[40px]"
              >
                admissions@aidevacademy.org
              </a>
            </div>

            <div className="mt-4 sm:mt-6 text-xs font-mono text-neutral-500">
              <span className="text-neutral-400">Direct Inquiries · SF &amp; Global</span>
            </div>
          </div>
        </div>

        {/* Bottom Sub-Footer */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs font-mono text-neutral-600">
          <div>
            © 2026 AI Dev Academy. All rights reserved.
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={scrollToTop}
              className="btn-glass-subtle px-4 py-2 rounded-full flex items-center gap-1.5 text-xs font-mono cursor-pointer min-h-[36px]"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
