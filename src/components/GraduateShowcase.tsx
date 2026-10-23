import React from 'react';
import { ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';

export const GraduateShowcase: React.FC = () => {
  const projects = [
    {
      title: 'VibePulse Observability',
      builder: 'Elena Rostova',
      role: 'AI Engineer',
      metric: '120k Req/Day',
      stack: ['Cursor', 'FastAPI', 'Claude 3.7'],
    },
    {
      title: 'LexiAgent Contract Auditor',
      builder: 'Marcus Chen',
      role: 'Founder',
      metric: '$18k MRR',
      stack: ['LangGraph', 'Next.js', 'MCP'],
    },
    {
      title: 'OmniVoice Conversationalist',
      builder: 'Sarah Al-Mansoor',
      role: 'AI Architect',
      metric: '220ms Latency',
      stack: ['WebRTC', 'Gemini Live', 'TypeScript'],
    },
    {
      title: 'GitHealer Autonomous PR Bot',
      builder: 'David Kim',
      role: 'Systems Eng',
      metric: '320 Bugs Patched',
      stack: ['Claude Code', 'GitHub Actions', 'Zod'],
    },
  ];

  return (
    <section id="graduates" className="relative w-full py-10 sm:py-16 px-3 sm:px-6 md:px-12 bg-[#09090b] border-b border-neutral-900 text-neutral-200">
      <div className="max-w-6xl mx-auto">
        {/* Compact Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-neutral-800/80">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[10px] font-mono uppercase tracking-wider text-neutral-300">
              <Sparkles className="w-3 h-3 text-neutral-200" />
              <span>Alumni Drops</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white mt-1.5">
              Shipped by Our Alumni
            </h2>
          </div>
          <div className="flex items-center gap-4 text-xs font-mono text-neutral-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              480+ Production Apps
            </span>
            <span className="text-neutral-600">·</span>
            <span>14-Day Velocity</span>
          </div>
        </div>

        {/* Small & Minimal Project Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 pt-6">
          {projects.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-neutral-900/50 border border-neutral-800/80 hover:border-neutral-700 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-neutral-300 font-semibold">
                    {item.metric}
                  </span>
                  <ExternalLink className="w-3 h-3 text-neutral-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-sm font-semibold text-white tracking-tight group-hover:text-neutral-100">
                  {item.title}
                </h3>
                <p className="text-[11px] text-neutral-400 mt-0.5">
                  {item.builder} · <span className="text-neutral-500">{item.role}</span>
                </p>
              </div>

              {/* Stack Pills */}
              <div className="flex flex-wrap gap-1 mt-3 pt-2.5 border-t border-neutral-800/60">
                {item.stack.map((s, i) => (
                  <span
                    key={i}
                    className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-black/40 text-neutral-400 border border-neutral-850"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
