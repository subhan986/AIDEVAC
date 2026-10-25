import React from 'react';
import { ArrowUp } from '@phosphor-icons/react';
import logo from '../logo.svg';

interface FooterProps {
  onApplyClick?: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#000000] border-t border-[#181818] text-[#9B9B9B] py-12 sm:py-16 px-4 sm:px-6 md:px-12 select-none">
      <div className="max-w-5xl mx-auto">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 pb-12 border-b border-[#181818]">
          {/* Brand Col */}
          <div className="sm:col-span-2 md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#181818] border border-[#272727] p-2 flex items-center justify-center shrink-0">
                  <img
                    src={logo}
                    alt="AI Dev Academy official emblem"
                    className="w-full h-full object-contain filter invert"
                  />
                </div>
                <div>
                  <span className="text-base font-bold tracking-tight text-white block">
                    AI Dev Academy
                  </span>
                  <span className="text-xs font-mono text-[#9B9B9B]">
                    San Francisco and Global Cloud
                  </span>
                </div>
              </div>
              <p className="mt-4 text-xs sm:text-sm text-[#9B9B9B] max-w-sm leading-relaxed [text-wrap:pretty]">
                The premier engineering academy for vibecoding, autonomous multi agent pipelines, and specification driven software design.
              </p>
            </div>

            <div className="mt-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white" />
              <span className="text-xs font-mono text-white">
                Spring cohorts open · 40 seats per batch
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white mb-4">
              Focus tracks
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#curriculum" className="hover:text-white transition-colors py-1 block">Web apps and sites</a>
              </li>
              <li>
                <a href="#curriculum" className="hover:text-white transition-colors py-1 block">Mobile app studio</a>
              </li>
              <li>
                <a href="#curriculum" className="hover:text-white transition-colors py-1 block">AI agents and automation</a>
              </li>
              <li>
                <a href="#curriculum" className="hover:text-white transition-colors py-1 block">Full stack SaaS</a>
              </li>
            </ul>
          </div>

          {/* Academy Info */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white mb-4">
              Academy
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#manifesto" className="hover:text-white transition-colors py-1 block">The manifesto</a>
              </li>
              <li>
                <a href="#benefits" className="hover:text-white transition-colors py-1 block">Outcomes</a>
              </li>
              <li>
                <a href="#graduates" className="hover:text-white transition-colors py-1 block">Alumni drops</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors py-1 block">Questions</a>
              </li>
            </ul>
          </div>

          {/* Admissions Col */}
          <div className="sm:col-span-2 md:col-span-3 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-white mb-4">
                Admissions
              </h4>
              <p className="text-xs text-[#9B9B9B] mb-4 leading-relaxed [text-wrap:pretty]">
                Applications reviewed on a rolling basis. Direct architectural feedback provided on every submission.
              </p>
              <a
                href="mailto:admissions@aidevacademy.org"
                className="btn-secondary w-full text-xs font-mono py-2 px-3 text-center block"
              >
                admissions@aidevacademy.org
              </a>
            </div>

            <div className="mt-4 text-xs font-mono text-[#9B9B9B]">
              <span>Direct inquiries · San Francisco lab</span>
            </div>
          </div>
        </div>

        {/* Bottom Sub-Footer with B10 Ship Requirements (Privacy, Terms) */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#9B9B9B]">
          <div className="flex flex-wrap items-center gap-4">
            <span>© 2026 AI Dev Academy. All rights reserved.</span>
            <span>·</span>
            <a href="#hero" className="hover:text-white transition-colors">Privacy policy</a>
            <span>·</span>
            <a href="#hero" className="hover:text-white transition-colors">Terms of service</a>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="btn-secondary text-xs font-mono py-1.5 px-3 flex items-center gap-1.5 cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp size={14} weight="bold" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
