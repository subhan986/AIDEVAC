import React, { useState } from 'react';
import { Plus, Minus, ShieldCheck, ArrowRight } from '@phosphor-icons/react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What is vibecoding and how is it different from normal autocomplete?',
      a: 'Autocomplete suggests syntax lines while you type. Vibecoding is specification driven engineering where you act as systems architect: you write precise natural language constraints, define schemas, and orchestrate autonomous multi agent swarms to generate, test, and deploy entire multi file applications in hours instead of weeks.'
    },
    {
      q: 'Do I need a Computer Science degree or senior engineering background?',
      a: 'No Computer Science degree is required. However, you should have basic familiarity with web concepts such as APIs, databases, and frontend interfaces. The greatest advantage belongs to systems thinkers: founders, designers, and engineers who articulate clear product requirements and evaluate output critically.'
    },
    {
      q: 'What models and tech stacks will we master in the cohorts?',
      a: 'You will master Cursor, Claude 3.7, Claude Code, Model Context Protocol, LangGraph, CrewAI, pgvector, and modern TypeScript full stack frameworks including Next.js, React, and FastAPI. We focus on timeless agent patterns rather than transient hype.'
    },
    {
      q: 'Can this tuition be reimbursed through my company learning budget?',
      a: 'Yes. Over 65 percent of our fellows have tuition covered by employer professional development or engineering education budgets. We provide an itemized official receipt and an employer sponsorship letter outlining the tangible shipping velocity you bring back.'
    },
    {
      q: 'What is the schedule and weekly time commitment?',
      a: 'Plan for 10 to 14 hours per week: 3 hours of live interactive build sprints, 2 hours of direct office hours, and 6 to 8 hours of hands on project shipping. Everything is recorded and scheduled for both San Francisco and London timezones.'
    },
    {
      q: 'What happens if I get stuck on an agent bug or runtime error?',
      a: 'You have 24/7 access to our alumni community and technical teaching assistants. For fellows, you also receive scheduled 1 on 1 architecture critiques to resolve bottlenecks immediately.'
    },
    {
      q: 'What is the risk reversal policy if the cohort is not right for me?',
      a: 'We offer a 100 percent full refund within the first 3 days of class if you decide the curriculum does not match your expectations. No questions asked.'
    }
  ];

  return (
    <section id="faq" className="relative w-full py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-[#000000] border-b border-[#181818] text-[#f3f4f6]">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="pb-8 sm:pb-12 border-b border-[#181818]">
          <span className="inline-block px-3 py-1 rounded-full bg-[#181818] border border-[#272727] text-xs font-mono uppercase tracking-widest text-[#9B9B9B]">
            Questions and answers
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mt-2 [text-wrap:balance]">
            Frequently asked questions
          </h2>
          <p className="text-sm sm:text-base text-[#9B9B9B] mt-2 [text-wrap:pretty]">
            Everything you need to know about curriculum expectations, hardware, and cohort admissions.
          </p>
        </div>

        {/* Accordions */}
        <div className="divide-y divide-[#181818] pt-6">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-4 sm:py-6">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between text-left gap-4 cursor-pointer group min-h-[44px] p-3 rounded-xl transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[#181818] focus-visible:ring-2 focus-visible:ring-white"
                >
                  <span className="text-base sm:text-lg font-semibold text-white group-hover:text-neutral-200 transition-colors [text-wrap:balance]">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                    isOpen ? 'bg-white text-black' : 'bg-[#181818] border border-[#272727] text-white'
                  }`}>
                    {isOpen ? <Minus size={16} weight="bold" /> : <Plus size={16} weight="bold" />}
                  </div>
                </button>
                {isOpen && (
                  <p className="mt-3 text-sm text-[#9B9B9B] leading-relaxed pr-8 pl-3 [text-wrap:pretty]">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* A2 Step 11 & 12: Risk reversal & Final CTA */}
        <div className="mt-16 p-8 sm:p-10 rounded-2xl bg-[#181818] border border-[#272727] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="max-w-[480px]">
            <div className="flex items-center gap-2 text-xs font-mono text-white mb-2">
              <ShieldCheck size={18} weight="fill" className="text-white" />
              <span className="font-semibold uppercase tracking-wider">Zero risk guarantee</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight [text-wrap:balance]">
              Test the first 3 days with a 100% money back guarantee
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#9B9B9B] [text-wrap:pretty]">
              Experience live sessions, lab hardware, and initial swarm builds. If you are not satisfied, request a full refund instantly.
            </p>
          </div>

          <a
            href="#curriculum"
            className="btn-primary shrink-0 group"
          >
            <span>Explore course tracks</span>
            <ArrowRight size={16} weight="bold" className="transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};
