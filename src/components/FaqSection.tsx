import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What exactly is 'Vibecoding' and how is it different from normal AI autocomplete?",
      a: "Autocomplete (like early Copilot) suggests individual lines of syntax while you type. Vibecoding is a fundamentally different paradigm where you act as an executive systems architect: you write precise natural-language system specifications, define schemas and invariant constraints, and orchestrate autonomous multi-agent swarms (using tools like Cursor, Claude Code, and LangGraph) to generate, test, and deploy entire multi-file codebases in hours instead of weeks."
    },
    {
      q: "Do I need a Computer Science degree or deep senior engineering background?",
      a: "No CS degree is required. However, you should have basic conceptual comfort with web concepts (what is an API, what is a database, what is a frontend). The greatest advantage in vibecoding belongs to systems thinkers: people who can articulate clear product requirements, spot edge cases, and evaluate system outputs critically. We have had designers, product managers, and senior staff engineers all successfully graduate."
    },
    {
      q: "What tools, models, and tech stacks will we learn?",
      a: "You'll master Cursor, Claude 3.7 / Claude Code, Windsurf, LangGraph, CrewAI, Model Context Protocol (MCP), pgvector, Ollama/vLLM for local open-weights inference, and modern TypeScript full-stack frameworks (Next.js/React, FastAPI/Node). We focus on timeless agent patterns rather than fleeting hype."
    },
    {
      q: "Can this tuition be reimbursed through my company?",
      a: "Yes. Over 65% of our fellows have their tuition covered by employer professional development, L&D, or engineering education budgets. We provide an itemized official receipt and an employer sponsorship letter outlining the tangible ROI and shipping velocity you bring back to your team."
    },
    {
      q: "What is the weekly schedule and time commitment?",
      a: "For the Builder Fellowship, plan for 10–14 hours per week: 3 hours of live interactive build sprints (recorded if you cannot make it live), 2 hours of office hours, and 6–8 hours of hands-on project shipping. Everything is designed around working professionals across global timezones (SF, London, Singapore schedules)."
    },
    {
      q: "What happens if I fall behind or get stuck on an agent bug?",
      a: "You have 24/7 access to our dedicated alumni discord enclave and technical teaching assistants. For Architect Residency members, you also have scheduled 1-on-1 private architecture critiques to unblock technical bottlenecks directly."
    }
  ];

  return (
    <section id="faq" className="relative w-full py-12 sm:py-24 px-3 sm:px-6 md:px-12 bg-[#0d0d11] border-b border-neutral-900 text-neutral-200">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="pb-8 sm:pb-12 border-b border-neutral-800/80">
          <span className="inline-block px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] sm:text-xs font-mono uppercase tracking-widest text-neutral-400">
            Clarifications &amp; Standards
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mt-1.5 sm:mt-2">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-neutral-400 mt-2">
            Everything you need to know about curriculum, expectations, and admissions.
          </p>
        </div>

        {/* Accordions */}
        <div className="divide-y divide-neutral-850 pt-3 sm:pt-6">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-4 sm:py-6">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between text-left gap-3 sm:gap-4 cursor-pointer group min-h-[44px] p-2.5 sm:p-3 rounded-2xl transition-all hover:bg-white/[0.03]"
                >
                  <span className="text-sm sm:text-base md:text-lg font-semibold text-white group-hover:text-neutral-200 transition-colors leading-snug">
                    {faq.q}
                  </span>
                  <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${
                    isOpen ? 'btn-glass-primary' : 'btn-glass-dark text-neutral-300 group-hover:text-white'
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4 stroke-[2.5]" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                {isOpen && (
                  <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-neutral-300 leading-relaxed sm:pr-8 animate-fadeIn">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
