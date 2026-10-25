import React from 'react';
import { Rocket, ShieldCheck, Cpu, Code, CheckCircle, Users } from '@phosphor-icons/react';

export const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: Rocket,
      headline: 'Cut software delivery from weeks to hours',
      detail: 'Replace manual boilerplate keystroking with agent swarms that produce complete validated codebases in one session.',
      stat: '10x velocity boost'
    },
    {
      icon: ShieldCheck,
      headline: 'Prevent hallucinations with invariant testing',
      detail: 'Enforce mathematical schemas and continuous feedback loops that reject invalid output before it touches production.',
      stat: '100% verified runs'
    },
    {
      icon: Cpu,
      headline: 'Deploy multi agent teams in parallel',
      detail: 'Distribute complex engineering tasks across specialized planner, coder, database, and security evaluator agents simultaneously.',
      stat: '4 parallel agents'
    },
    {
      icon: Users,
      headline: 'Direct mentorship from active AI engineers',
      detail: 'Learn alongside 40 peers per cohort with dedicated 1 on 1 architectural reviews and live lab equipment.',
      stat: '40 seats cap'
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Articulate intent and system constraints',
      description: 'Define relational models, user stories, security boundaries, and API contracts in structured natural language.'
    },
    {
      number: '02',
      title: 'Steer autonomous multi agent swarms',
      description: 'Orchestrate Claude Code, Cursor, and custom agent workflows to draft full stack components, migrations, and tests in parallel.'
    },
    {
      number: '03',
      title: 'Ship verified production software',
      description: 'Run automated evaluation suites, verify test coverage, and deploy to live edge infrastructure with zero manual syntax friction.'
    }
  ];

  return (
    <section id="benefits" className="relative w-full py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-[#000000] border-b border-[#181818] text-[#f3f4f6]">
      <div className="max-w-5xl mx-auto">
        {/* Section Header: Sentence case */}
        <div className="max-w-[680px] pb-12 border-b border-[#181818]">
          <span className="text-xs font-mono uppercase tracking-widest text-[#9B9B9B]">
            02. Tangible outcomes
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mt-2 [text-wrap:balance]">
            Measurable engineering leverage for modern builders
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#9B9B9B] leading-relaxed [text-wrap:pretty]">
            Every week in the academy is focused on tangible production deliverables instead of theoretical toy exercises.
          </p>
        </div>

        {/* Benefits Grid (Outcome driven bullets with bold benefit + detail) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-12 border-b border-[#181818]">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#181818] border border-[#272727] flex flex-col justify-between transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-[#313131]"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#272727] border border-[#313131] flex items-center justify-center text-white shrink-0">
                      <Icon size={20} weight="fill" className="text-white" />
                    </div>
                    <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-[#1F1F1F] border border-[#272727] text-white font-medium">
                      {item.stat}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight [text-wrap:balance]">
                    {item.headline}
                  </h3>
                  <p className="mt-2 text-sm text-[#9B9B9B] leading-relaxed [text-wrap:pretty]">
                    {item.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* How it works (A2: Step 8: Three steps) */}
        <div className="pt-12">
          <div className="max-w-[680px] mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-[#9B9B9B]">
              03. How it works
            </span>
            <h3 className="text-xl sm:text-3xl font-bold text-white tracking-tight mt-1 [text-wrap:balance]">
              Three steps to complete architectural mastery
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((s, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#181818] border border-[#272727] flex flex-col gap-3"
              >
                <div className="text-xs font-mono font-bold text-white px-2.5 py-1 rounded-lg bg-[#272727] border border-[#313131] w-fit">
                  STEP {s.number}
                </div>
                <h4 className="text-base font-bold text-white tracking-tight [text-wrap:balance]">
                  {s.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#9B9B9B] leading-relaxed [text-wrap:pretty]">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
