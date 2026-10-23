import React, { useState } from 'react';
import { Terminal, Cpu, Zap, ShieldCheck, Sparkles } from 'lucide-react';

export const ManifestoSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'vibecoding' | 'legacy'>('vibecoding');

  return (
    <section id="manifesto" className="relative w-full py-12 sm:py-24 px-3 sm:px-6 md:px-12 bg-[#0d0d11] border-b border-neutral-900 text-neutral-200">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-6 pb-6 sm:pb-12 border-b border-neutral-800/80">
          <div>
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-neutral-400">
              01. The Paradigm Shift
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mt-1.5 sm:mt-2">
              From Syntax Wrestling to Vibecoding
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm md:text-base text-neutral-400 leading-relaxed">
            Writing boilerplate by hand is obsolete. The defining superpower of the next decade of software engineering is orchestrating autonomous AI agent swarms from natural intent.
          </p>
        </div>

        {/* 3 Core Tenets */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 py-10 sm:py-14 border-b border-neutral-800/80">
          <div className="flex flex-col gap-2.5 sm:gap-3 p-4 sm:p-0 rounded-xl bg-neutral-900/40 sm:bg-transparent border sm:border-0 border-neutral-800/60">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-200" />
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-white">Natural Language as Compiler</h3>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Vibecoding isn&apos;t sloppy guessing; it&apos;s rigorous specification-driven design. You articulate systems in plain English and steer agent swarms to generate production-grade architectures.
            </p>
          </div>

          <div className="flex flex-col gap-2.5 sm:gap-3 p-4 sm:p-0 rounded-xl bg-neutral-900/40 sm:bg-transparent border sm:border-0 border-neutral-800/60">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white">
              <Cpu className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-200" />
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-white">Autonomous Agent Swarms</h3>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Move beyond single-turn autocomplete. Learn to spin up multi-agent architectures where planner, researcher, coder, and evaluator agents collaborate autonomously.
            </p>
          </div>

          <div className="flex flex-col gap-2.5 sm:gap-3 p-4 sm:p-0 rounded-xl bg-neutral-900/40 sm:bg-transparent border sm:border-0 border-neutral-800/60">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white">
              <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-200" />
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-white">Invariants & Self-Healing Evals</h3>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              When models write code, your role is setting mathematical constraints, security boundary rules, and automated self-healing feedback loops that correct runtime anomalies.
            </p>
          </div>
        </div>

        {/* Interactive Comparison Simulator: Legacy SWE vs Vibecoding 2026 */}
        <div className="pt-10 sm:pt-14">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">The Workflow Contrast</h3>
              <p className="text-[11px] sm:text-xs font-mono text-neutral-400 mt-0.5">Compare traditional hand-coded engineering with 2026 agentic vibecoding</p>
            </div>
            
            {/* Interactive Toggle */}
            <div className="flex items-center p-1 bg-neutral-900/60 backdrop-blur-md rounded-full border border-white/10 w-full sm:w-auto">
              <button
                onClick={() => setActiveTab('vibecoding')}
                className={`flex-1 sm:flex-none px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-medium rounded-full transition-all whitespace-nowrap cursor-pointer text-center ${
                  activeTab === 'vibecoding'
                    ? 'btn-glass-primary shadow-sm font-semibold'
                    : 'text-neutral-400 hover:text-white hover:bg-white/5'
                }`}
              >
                Vibecoding 2026 (Agentic)
              </button>
              <button
                onClick={() => setActiveTab('legacy')}
                className={`flex-1 sm:flex-none px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-medium rounded-full transition-all whitespace-nowrap cursor-pointer text-center ${
                  activeTab === 'legacy'
                    ? 'btn-glass-dark text-white font-semibold'
                    : 'text-neutral-400 hover:text-white hover:bg-white/5'
                }`}
              >
                Legacy 2020 (Manual)
              </button>
            </div>
          </div>

          {activeTab === 'vibecoding' ? (
            <div className="p-4 sm:p-6 md:p-8 rounded-xl bg-neutral-900/60 border border-neutral-800 backdrop-blur-sm transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 mb-4 sm:mb-6 border-b border-neutral-800 text-xs font-mono text-neutral-400">
                <span className="flex items-center gap-2 text-white">
                  <Sparkles className="w-4 h-4 text-white" />
                  <span>Agentic Multi-Process Pipeline</span>
                </span>
                <span className="text-neutral-300">Execution Velocity: 4 Hours to Production</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                <div className="p-3.5 sm:p-4 rounded-lg bg-black/40 border border-neutral-800/80 flex flex-col gap-1.5 sm:gap-2">
                  <div className="text-[10px] sm:text-[11px] font-mono text-neutral-400">STEP 01</div>
                  <div className="text-sm font-semibold text-white">Spec Intent Framing</div>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Human author provides system constraints, DB schema requirements, and user stories in conversational markdown.
                  </p>
                </div>

                <div className="p-3.5 sm:p-4 rounded-lg bg-black/40 border border-neutral-800/80 flex flex-col gap-1.5 sm:gap-2">
                  <div className="text-[10px] sm:text-[11px] font-mono text-neutral-400">STEP 02</div>
                  <div className="text-sm font-semibold text-white">Multi-Agent Swarm</div>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Lead architect agent distributes tasks across database, frontend, backend API, and test synthesis agents in parallel.
                  </p>
                </div>

                <div className="p-3.5 sm:p-4 rounded-lg bg-black/40 border border-neutral-800/80 flex flex-col gap-1.5 sm:gap-2">
                  <div className="text-[10px] sm:text-[11px] font-mono text-neutral-400">STEP 03</div>
                  <div className="text-sm font-semibold text-white">Self-Healing Loop</div>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Test harness runs automatically. Compile and runtime errors are fed back into agent context for immediate self-correction.
                  </p>
                </div>

                <div className="p-3.5 sm:p-4 rounded-lg bg-black/40 border border-neutral-800/80 flex flex-col gap-1.5 sm:gap-2">
                  <div className="text-[10px] sm:text-[11px] font-mono text-neutral-400">STEP 04</div>
                  <div className="text-sm font-semibold text-white">Zero-Friction Ship</div>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Full application containerizes, passes security invariants, and deploys to serverless edge in under 120 seconds.
                  </p>
                </div>
              </div>

              <div className="mt-4 sm:mt-6 p-3 sm:p-4 rounded-lg bg-neutral-950 border border-neutral-800 font-mono text-[11px] sm:text-xs text-neutral-300 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span>Outcome: High architectural leverage, 10x shipping velocity, zero syntax friction.</span>
                <span className="text-neutral-400">Taught in Tracks 01 & 02</span>
              </div>
            </div>
          ) : (
            <div className="p-4 sm:p-6 md:p-8 rounded-xl bg-neutral-900/40 border border-neutral-800/60 transition-all duration-300 opacity-90">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 mb-4 sm:mb-6 border-b border-neutral-800 text-xs font-mono text-neutral-400">
                <span className="flex items-center gap-2 text-neutral-300">
                  <Terminal className="w-4 h-4 text-neutral-400" />
                  <span>Manual Keystroke Pipeline</span>
                </span>
                <span className="text-neutral-400">Execution Velocity: 4 Weeks per Sprint</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                <div className="p-3.5 sm:p-4 rounded-lg bg-black/20 border border-neutral-800/50 flex flex-col gap-1.5 sm:gap-2">
                  <div className="text-[10px] sm:text-[11px] font-mono text-neutral-500">STEP 01</div>
                  <div className="text-sm font-semibold text-neutral-300">Boilerplate Setup</div>
                  <p className="text-xs text-neutral-500 leading-relaxed">
                    2 days configuring build tools, package managers, linter configs, tsconfigs, and repetitive starter templates.
                  </p>
                </div>

                <div className="p-3.5 sm:p-4 rounded-lg bg-black/20 border border-neutral-800/50 flex flex-col gap-1.5 sm:gap-2">
                  <div className="text-[10px] sm:text-[11px] font-mono text-neutral-500">STEP 02</div>
                  <div className="text-sm font-semibold text-neutral-300">Manual Keystroking</div>
                  <p className="text-xs text-neutral-500 leading-relaxed">
                    Typing thousands of lines of boilerplate CRUD endpoints, schema mappings, and repetitive form state handlers.
                  </p>
                </div>

                <div className="p-3.5 sm:p-4 rounded-lg bg-black/20 border border-neutral-800/50 flex flex-col gap-1.5 sm:gap-2">
                  <div className="text-[10px] sm:text-[11px] font-mono text-neutral-500">STEP 03</div>
                  <div className="text-sm font-semibold text-neutral-300">Manual Debugging</div>
                  <p className="text-xs text-neutral-500 leading-relaxed">
                    Hours spent reading StackOverflow, fixing subtle typing errors, and chasing asynchronous race conditions.
                  </p>
                </div>

                <div className="p-3.5 sm:p-4 rounded-lg bg-black/20 border border-neutral-800/50 flex flex-col gap-1.5 sm:gap-2">
                  <div className="text-[10px] sm:text-[11px] font-mono text-neutral-500">STEP 04</div>
                  <div className="text-sm font-semibold text-neutral-300">Stalled Deployments</div>
                  <p className="text-xs text-neutral-500 leading-relaxed">
                    Long pull request review queues, manual staging tests, and slow iteration cycles draining engineering morale.
                  </p>
                </div>
              </div>

              <div className="mt-4 sm:mt-6 p-3 sm:p-4 rounded-lg bg-neutral-950/70 border border-neutral-800/50 font-mono text-[11px] sm:text-xs text-neutral-400 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span>The old way: High cognitive overhead spent on plumbing rather than product value.</span>
                <span className="text-neutral-500">Legacy Paradigm</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
