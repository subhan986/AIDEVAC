import React, { useState } from 'react';
import { Terminal, Cpu, Lightning, ShieldCheck, Sparkle } from '@phosphor-icons/react';

export const ManifestoSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'vibecoding' | 'legacy'>('vibecoding');

  return (
    <section id="manifesto" className="relative w-full py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-[#000000] border-b border-[#181818] text-[#f3f4f6]">
      <div className="max-w-5xl mx-auto">
        {/* Section Header: Sentence case */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 sm:pb-12 border-b border-[#181818]">
          <div className="max-w-[680px]">
            <span className="text-xs font-mono uppercase tracking-widest text-[#9B9B9B]">
              01. The paradigm shift
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mt-2 [text-wrap:balance]">
              From syntax typing to architectural orchestration
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#9B9B9B] leading-relaxed [text-wrap:pretty]">
            Writing boilerplate by hand is obsolete. The defining superpower of modern engineering is steering autonomous agent swarms from natural intent.
          </p>
        </div>

        {/* 3 Core Tenets: Sentence case, no hyphens, nested radius */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 py-12 border-b border-[#181818]">
          <div className="flex flex-col gap-3 p-4 sm:p-6 rounded-2xl bg-[#181818] border border-[#272727]">
            <div className="w-10 h-10 rounded-xl bg-[#272727] border border-[#313131] flex items-center justify-center text-white shrink-0">
              <Lightning size={20} weight="fill" className="text-white" />
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-white [text-wrap:balance]">
              Natural language as compiler
            </h3>
            <p className="text-sm text-[#9B9B9B] leading-relaxed [text-wrap:pretty]">
              Vibecoding is specification driven engineering. You articulate system boundaries in plain English and steer agent swarms to generate production grade codebases.
            </p>
          </div>

          <div className="flex flex-col gap-3 p-4 sm:p-6 rounded-2xl bg-[#181818] border border-[#272727]">
            <div className="w-10 h-10 rounded-xl bg-[#272727] border border-[#313131] flex items-center justify-center text-white shrink-0">
              <Cpu size={20} weight="fill" className="text-white" />
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-white [text-wrap:balance]">
              Autonomous agent swarms
            </h3>
            <p className="text-sm text-[#9B9B9B] leading-relaxed [text-wrap:pretty]">
              Move beyond single prompt autocomplete. You deploy multi agent setups where planner, researcher, coder, and evaluator agents collaborate in parallel.
            </p>
          </div>

          <div className="flex flex-col gap-3 p-4 sm:p-6 rounded-2xl bg-[#181818] border border-[#272727]">
            <div className="w-10 h-10 rounded-xl bg-[#272727] border border-[#313131] flex items-center justify-center text-white shrink-0">
              <ShieldCheck size={20} weight="fill" className="text-white" />
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-white [text-wrap:balance]">
              Invariants and feedback loops
            </h3>
            <p className="text-sm text-[#9B9B9B] leading-relaxed [text-wrap:pretty]">
              When models write code, your role is establishing boundary constraints, security checks, and automated feedback loops that fix runtime errors on the fly.
            </p>
          </div>
        </div>

        {/* Workflow Comparison Simulator: sentence case, no hyphens */}
        <div className="pt-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight [text-wrap:balance]">
                The workflow contrast
              </h3>
              <p className="text-xs font-mono text-[#9B9B9B] mt-1">
                Compare traditional manual engineering with agentic vibecoding
              </p>
            </div>

            {/* Interactive Toggle */}
            <div className="flex items-center p-1 bg-[#181818] rounded-full border border-[#272727] w-full sm:w-auto">
              <button
                onClick={() => setActiveTab('vibecoding')}
                className={`flex-1 sm:flex-none px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] cursor-pointer text-center ${
                  activeTab === 'vibecoding'
                    ? 'bg-white text-black shadow-sm'
                    : 'text-[#9B9B9B] hover:text-white'
                }`}
              >
                Vibecoding 2026 (Agentic)
              </button>
              <button
                onClick={() => setActiveTab('legacy')}
                className={`flex-1 sm:flex-none px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] cursor-pointer text-center ${
                  activeTab === 'legacy'
                    ? 'bg-[#272727] text-white shadow-sm'
                    : 'text-[#9B9B9B] hover:text-white'
                }`}
              >
                Legacy 2020 (Manual)
              </button>
            </div>
          </div>

          {activeTab === 'vibecoding' ? (
            <div className="p-4 sm:p-6 md:p-8 rounded-2xl bg-[#181818] border border-[#272727] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-6 border-b border-[#272727] text-xs font-mono text-[#9B9B9B]">
                <span className="flex items-center gap-2 text-white">
                  <Sparkle size={16} weight="fill" className="text-white" />
                  <span>Agentic multi process pipeline</span>
                </span>
                <span className="text-[#f3f4f6]">Execution velocity: 4 hours to production</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-[#1F1F1F] border border-[#272727] flex flex-col gap-2">
                  <div className="text-xs font-mono text-[#9B9B9B]">STEP 01</div>
                  <div className="text-sm font-semibold text-white">Specification intent framing</div>
                  <p className="text-xs text-[#9B9B9B] leading-relaxed [text-wrap:pretty]">
                    Human author articulates system constraints, database schemas, and user stories in clear natural language.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#1F1F1F] border border-[#272727] flex flex-col gap-2">
                  <div className="text-xs font-mono text-[#9B9B9B]">STEP 02</div>
                  <div className="text-sm font-semibold text-white">Multi agent swarm</div>
                  <p className="text-xs text-[#9B9B9B] leading-relaxed [text-wrap:pretty]">
                    Lead architect agent distributes workload across database, user interface, backend, and test synthesis agents in parallel.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#1F1F1F] border border-[#272727] flex flex-col gap-2">
                  <div className="text-xs font-mono text-[#9B9B9B]">STEP 03</div>
                  <div className="text-sm font-semibold text-white">Automated correction loop</div>
                  <p className="text-xs text-[#9B9B9B] leading-relaxed [text-wrap:pretty]">
                    Test harnesses run continuously. Compile errors and runtime anomalies are routed directly back to agent context for instant repair.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#1F1F1F] border border-[#272727] flex flex-col gap-2">
                  <div className="text-xs font-mono text-[#9B9B9B]">STEP 04</div>
                  <div className="text-sm font-semibold text-white">Frictionless deployment</div>
                  <p className="text-xs text-[#9B9B9B] leading-relaxed [text-wrap:pretty]">
                    Full application containerizes, validates security invariants, and deploys to production servers in 120 seconds.
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-[#000000] border border-[#272727] font-mono text-xs text-[#f3f4f6] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span>Outcome: High architectural leverage, 10x shipping velocity, zero syntax friction.</span>
                <span className="text-[#9B9B9B]">Taught in Tracks 01 and 02</span>
              </div>
            </div>
          ) : (
            <div className="p-4 sm:p-6 md:p-8 rounded-2xl bg-[#181818] border border-[#272727] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-6 border-b border-[#272727] text-xs font-mono text-[#9B9B9B]">
                <span className="flex items-center gap-2 text-[#9B9B9B]">
                  <Terminal size={16} weight="regular" />
                  <span>Manual typing pipeline</span>
                </span>
                <span className="text-[#9B9B9B]">Execution velocity: 4 weeks per sprint</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-[#1F1F1F] border border-[#272727] flex flex-col gap-2 opacity-80">
                  <div className="text-xs font-mono text-[#9B9B9B]">STEP 01</div>
                  <div className="text-sm font-semibold text-[#f3f4f6]">Boilerplate setup</div>
                  <p className="text-xs text-[#9B9B9B] leading-relaxed [text-wrap:pretty]">
                    Days spent wrestling build tools, package managers, linter configs, tsconfigs, and repetitive starter templates.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#1F1F1F] border border-[#272727] flex flex-col gap-2 opacity-80">
                  <div className="text-xs font-mono text-[#9B9B9B]">STEP 02</div>
                  <div className="text-sm font-semibold text-[#f3f4f6]">Manual keystroking</div>
                  <p className="text-xs text-[#9B9B9B] leading-relaxed [text-wrap:pretty]">
                    Typing thousands of lines of repetitive endpoints, object mappings, and form state handlers.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#1F1F1F] border border-[#272727] flex flex-col gap-2 opacity-80">
                  <div className="text-xs font-mono text-[#9B9B9B]">STEP 03</div>
                  <div className="text-sm font-semibold text-[#f3f4f6]">Manual debugging</div>
                  <p className="text-xs text-[#9B9B9B] leading-relaxed [text-wrap:pretty]">
                    Hours spent reading forum threads, fixing subtle type mismatches, and hunting asynchronous race conditions.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#1F1F1F] border border-[#272727] flex flex-col gap-2 opacity-80">
                  <div className="text-xs font-mono text-[#9B9B9B]">STEP 04</div>
                  <div className="text-sm font-semibold text-[#f3f4f6]">Stalled deployments</div>
                  <p className="text-xs text-[#9B9B9B] leading-relaxed [text-wrap:pretty]">
                    Long code review queues, manual staging tests, and slow iteration cycles draining engineering momentum.
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-[#000000] border border-[#272727] font-mono text-xs text-[#9B9B9B] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span>The old way: High cognitive overhead spent on repetitive plumbing rather than product value.</span>
                <span className="text-[#9B9B9B]">Legacy paradigm</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
