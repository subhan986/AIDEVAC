import React from 'react';
import { ArrowSquareOut, Sparkle, CheckCircle } from '@phosphor-icons/react';

export const GraduateShowcase: React.FC = () => {
  const projects = [
    {
      title: 'VibePulse Observability',
      builder: 'Elena Rostova',
      role: 'Staff Engineer',
      metric: '124k requests daily',
      stack: ['Cursor', 'FastAPI', 'Claude 3.7']
    },
    {
      title: 'LexiAgent Contract Auditor',
      builder: 'Marcus Chen',
      role: 'Founder',
      metric: '$18,400 monthly revenue',
      stack: ['LangGraph', 'Next.js', 'MCP']
    },
    {
      title: 'OmniVoice Conversationalist',
      builder: 'Sarah Al Mansoor',
      role: 'AI Architect',
      metric: '220ms median latency',
      stack: ['WebRTC', 'Gemini Live', 'TypeScript']
    },
    {
      title: 'GitHealer Autonomous PR Bot',
      builder: 'David Kim',
      role: 'Systems Engineer',
      metric: '318 bugs patched',
      stack: ['Claude Code', 'GitHub Actions', 'Zod']
    }
  ];

  return (
    <section id="graduates" className="relative w-full py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-[#000000] border-b border-[#181818] text-[#f3f4f6]">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-[#181818]">
          <div className="max-w-[680px]">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#181818] border border-[#272727] text-xs font-mono uppercase tracking-wider text-[#9B9B9B]">
              <Sparkle size={14} weight="fill" className="text-white" />
              <span>Alumni drops</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mt-2 [text-wrap:balance]">
              Shipped by our alumni
            </h2>
          </div>
          <div className="flex items-center gap-4 text-xs font-mono text-[#9B9B9B]">
            <span className="flex items-center gap-1.5 text-[#f3f4f6]">
              <CheckCircle size={16} weight="fill" className="text-white" />
              480 production apps shipped
            </span>
            <span>·</span>
            <span>14 day velocity</span>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-8">
          {projects.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#181818] border border-[#272727] hover:border-[#313131] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-[#1F1F1F] border border-[#272727] text-white font-medium">
                    {item.metric}
                  </span>
                  <ArrowSquareOut size={16} className="text-[#9B9B9B] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-base font-bold text-white tracking-tight group-hover:text-neutral-100 [text-wrap:balance]">
                  {item.title}
                </h3>
                <p className="text-xs text-[#9B9B9B] mt-1 [text-wrap:pretty]">
                  {item.builder} · <span className="text-[#f3f4f6]">{item.role}</span>
                </p>
              </div>

              {/* Stack Pills */}
              <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-[#272727]">
                {item.stack.map((s, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#1F1F1F] text-[#9B9B9B] border border-[#272727]"
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
