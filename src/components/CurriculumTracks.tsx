import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle, Globe, DeviceMobile, Robot, Stack, Calendar, Clock, Laptop, ShieldCheck, Sparkle } from '@phosphor-icons/react';
import PixelCard from './PixelCard';

interface CurriculumTracksProps {
  onSelectTrack?: (trackName: string) => void;
}

export const CurriculumTracks: React.FC<CurriculumTracksProps> = () => {
  const [selectedTrack, setSelectedTrack] = useState<number>(0);
  const [viewMode, setViewMode] = useState<'overview' | 'daily'>('overview');

  const courses = [
    {
      id: 'course-1',
      number: '01',
      title: 'Vibe Coding: Websites and Web Apps',
      badge: 'Start here',
      duration: '10 Days',
      hoursPerDay: '2 hrs per day',
      totalHours: '20 Total Hours',
      level: 'Beginner',
      launchFee: 'Rs. 4,999',
      regularFee: 'Rs. 6,999',
      icon: Globe,
      summary: 'Build and deploy responsive business web applications with AI coding assistants, version control, and production hosting.',
      outcome: 'Each student ships a verified live responsive web app, integrates form handling, and creates a public code portfolio.',
      tools: ['Cursor', 'Google AI Studio', 'HTML5 and Tailwind', 'JavaScript', 'GitHub', 'Vercel'],
      capstones: [
        'Responsive commercial business landing page with lead capture.',
        'Interactive developer portfolio with live project embeds.',
        'Restaurant and retail directory with inquiry flow.'
      ],
      dailyPlan: [
        { day: 1, topic: 'Setup and editor', highlight: 'Tooling, Cursor setup, prompt brief, local workspace creation' },
        { day: 2, topic: 'Specification prompting', highlight: 'Role, constraints, iterative prompting, UI direction' },
        { day: 3, topic: 'Web core and layouts', highlight: 'Layout design, Tailwind styling, responsive mobile view' },
        { day: 4, topic: 'Visual hierarchy', highlight: 'Spacing, contrast, responsive breakpoints, user ergonomics' },
        { day: 5, topic: 'Forms and state', highlight: 'Input handling, form validation, error and loading feedback' },
        { day: 6, topic: 'Live APIs and data', highlight: 'Fetching external JSON, async handlers, secure key separation' },
        { day: 7, topic: 'Data models and mocks', highlight: 'Frontend vs backend, relational models, state synchronization' },
        { day: 8, topic: 'Debugging and git', highlight: 'Reading stack traces, diff inspection, clean Git commits' },
        { day: 9, topic: 'Production deploy', highlight: 'Zero config hosting, custom domains, preflight checklists' },
        { day: 10, topic: 'Capstone defense', highlight: 'Live demo, code walkthrough, architecture review' }
      ]
    },
    {
      id: 'course-2',
      number: '02',
      title: 'Mobile App Studio: iOS and Android',
      badge: 'Popular',
      duration: '15 Days',
      hoursPerDay: '2 hrs per day',
      totalHours: '30 Total Hours',
      level: 'Intermediate',
      launchFee: 'Rs. 7,499',
      regularFee: 'Rs. 9,999',
      icon: DeviceMobile,
      summary: 'Prompt, build, test, and package cross platform mobile apps with modern React Native and Expo.',
      outcome: 'Ship a working mobile application running natively on your own device with local SQLite storage.',
      tools: ['Expo EAS', 'React Native', 'Cursor', 'Claude Code', 'Supabase Mobile', 'Native APIs'],
      capstones: [
        'Offline first personal habit tracker with local SQLite persistence.',
        'Marketplace client with real time cart state and notifications.',
        'Field inspector utility featuring device camera capture.'
      ],
      dailyPlan: [
        { day: 1, topic: 'Mobile setup', highlight: 'Expo CLI, device pairing, hot reload on physical hardware' },
        { day: 2, topic: 'Cross platform layout', highlight: 'Flexbox mobile layout, notch and safe area handling' },
        { day: 3, topic: 'Touch ergonomics', highlight: 'Gestures, scroll views, touchable components, haptics' },
        { day: 4, topic: 'Navigation stacks', highlight: 'Tab bars, nested stack routes, dynamic route parameters' },
        { day: 5, topic: 'Local persistence', highlight: 'AsyncStorage, local SQLite setup, offline caching' },
        { day: 6, topic: 'Device hardware', highlight: 'Camera permissions, photo picker, secure file storage' },
        { day: 7, topic: 'Push alerts and background', highlight: 'Local scheduled reminders, lifecycle notifications' },
        { day: 8, topic: 'Backend connection', highlight: 'REST and GraphQL APIs, JWT mobile authentication' },
        { day: 9, topic: 'Performance tuning', highlight: 'List virtualization, image optimization, memory profiling' },
        { day: 10, topic: 'Beta packaging', highlight: 'Expo EAS build, TestFlight and Android APK generation' }
      ]
    },
    {
      id: 'course-3',
      number: '03',
      title: 'AI Agents and Process Automation',
      badge: 'Advanced',
      duration: '15 Days',
      hoursPerDay: '2 hrs per day',
      totalHours: '30 Total Hours',
      level: 'Advanced',
      launchFee: 'Rs. 8,999',
      regularFee: 'Rs. 11,999',
      icon: Robot,
      summary: 'Architect autonomous multi agent swarms with custom tool use, memory, and automated workflows.',
      outcome: 'Deploy a multi agent team that executes complex multi step research, code generation, and verification.',
      tools: ['LangGraph', 'CrewAI', 'Claude 3.7', 'Python', 'FastAPI', 'pgvector', 'Ollama'],
      capstones: [
        'Autonomous customer intelligence agent pulling live APIs.',
        'Self checking code reviewer that tests and merges pull requests.',
        'Multi agent market research synthesiser generating PDFs.'
      ],
      dailyPlan: [
        { day: 1, topic: 'Agent foundations', highlight: 'Reasoning loops, tools, execution state boundaries' },
        { day: 2, topic: 'Model context protocol', highlight: 'MCP server setup, dynamic resource access, tool calls' },
        { day: 3, topic: 'Structured data output', highlight: 'Pydantic schemas, strict JSON validation, retry loops' },
        { day: 4, topic: 'Vector memory', highlight: 'Embeddings, pgvector, similarity search, chunking' },
        { day: 5, topic: 'Multi agent graphs', highlight: 'LangGraph state machines, supervisor agent patterns' },
        { day: 6, topic: 'Evaluator loops', highlight: 'Critique agents, self healing code patches, unit eval runs' },
        { day: 7, topic: 'Background tasks', highlight: 'Celery queues, token streaming, webhook dispatches' },
        { day: 8, topic: 'Local open weights', highlight: 'Ollama, vLLM, local privacy first inference' },
        { day: 9, topic: 'Observability', highlight: 'Token tracing, latency benchmarking, error budgets' },
        { day: 10, topic: 'Live deployment', highlight: 'FastAPI containerization, Docker, API authentication' }
      ]
    },
    {
      id: 'course-4',
      number: '04',
      title: 'Full Stack SaaS Engineering',
      badge: 'Comprehensive',
      duration: '20 Days',
      hoursPerDay: '2 hrs per day',
      totalHours: '40 Total Hours',
      level: 'Mastery',
      launchFee: 'Rs. 12,999',
      regularFee: 'Rs. 16,999',
      icon: Stack,
      summary: 'Ship a complete production SaaS: PostgreSQL, authentication, payment subscriptions, and edge hosting.',
      outcome: 'A commercial SaaS application with real customer authentication, automated database migrations, and checkout.',
      tools: ['Next.js', 'PostgreSQL', 'Drizzle ORM', 'Stripe Billing', 'Tailwind', 'Docker', 'Vercel'],
      capstones: [
        'Complete B2B SaaS boilerplate with tenant isolation and Stripe.',
        'Digital asset studio with secure customer file uploads.',
        'Team dashboard with role based permissions and audit logs.'
      ],
      dailyPlan: [
        { day: 1, topic: 'System design', highlight: 'Architecture blueprint, data models, API contract definition' },
        { day: 2, topic: 'Modern frontend', highlight: 'Component hierarchy, state management, design tokens' },
        { day: 3, topic: 'Backend APIs', highlight: 'Routing, middleware, request validation, CORS' },
        { day: 4, topic: 'Relational database', highlight: 'PostgreSQL schema, indexes, foreign keys, migrations' },
        { day: 5, topic: 'Data pipelines', highlight: 'End to end data pipelines, pagination, filter queries' },
        { day: 6, topic: 'Authentication and roles', highlight: 'Session tokens, user roles, protected endpoint routes' },
        { day: 7, topic: 'File and asset storage', highlight: 'Secure signed upload URLs, media optimization' },
        { day: 8, topic: 'AI agent service', highlight: 'Background processing, token streaming, fallback queues' },
        { day: 9, topic: 'Automated testing', highlight: 'Unit, integration, and smoke tests' },
        { day: 10, topic: 'Production staging', highlight: 'CI CD pipeline, environment variables, health checks' }
      ]
    }
  ];

  const current = courses[selectedTrack];

  const handleTrackClick = (index: number) => {
    setSelectedTrack(index);
    const detailEl = document.getElementById('course-details-view');
    if (detailEl) {
      detailEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="curriculum" className="relative w-full py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-[#000000] border-b border-[#181818] text-[#f3f4f6]">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 sm:pb-12 border-b border-[#181818]">
          <div className="max-w-[680px]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181818] border border-[#272727] text-xs font-mono uppercase tracking-widest text-[#9B9B9B]">
              <Sparkle size={14} weight="fill" className="text-white" />
              <span>Curriculum and tracks</span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mt-2 [text-wrap:balance]">
              Practical AI engineering tracks
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#9B9B9B] leading-relaxed [text-wrap:pretty]">
            Four focused tracks designed for tangible software drops. Select a course card below to inspect its syllabus and tech stack.
          </p>
        </div>

        {/* Laptops Provided & Facility Strip (Rounded, sentence case, no hyphens) */}
        <div className="my-8 p-3 sm:p-4 bg-[#181818] border border-[#272727] rounded-2xl shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 text-xs font-mono text-[#f3f4f6]">
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#1F1F1F] border border-[#272727]">
              <div className="w-8 h-8 rounded-lg bg-[#272727] border border-[#313131] flex items-center justify-center shrink-0">
                <Laptop size={18} weight="fill" className="text-white" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-semibold text-white truncate">Laptops provided</span>
                <span className="text-[10px] text-[#9B9B9B] truncate">Air conditioned lab</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#1F1F1F] border border-[#272727]">
              <div className="w-8 h-8 rounded-lg bg-[#272727] border border-[#313131] flex items-center justify-center shrink-0">
                <Clock size={18} weight="fill" className="text-white" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-semibold text-white truncate">2 hours per day</span>
                <span className="text-[10px] text-[#9B9B9B] truncate">Active lab practice</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#1F1F1F] border border-[#272727]">
              <div className="w-8 h-8 rounded-lg bg-[#272727] border border-[#313131] flex items-center justify-center shrink-0">
                <Calendar size={18} weight="fill" className="text-white" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-semibold text-white truncate">10 to 20 days</span>
                <span className="text-[10px] text-[#9B9B9B] truncate">Intensive cohorts</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#1F1F1F] border border-[#272727]">
              <div className="w-8 h-8 rounded-lg bg-[#272727] border border-[#313131] flex items-center justify-center shrink-0">
                <ShieldCheck size={18} weight="fill" className="text-white" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-semibold text-white truncate">Grounded evals</span>
                <span className="text-[10px] text-[#9B9B9B] truncate">Verified working apps</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Card PixelCard Grid */}
        <div className="pt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {courses.map((course, i) => {
              const isSelected = selectedTrack === i;
              const CourseIcon = course.icon;
              return (
                <PixelCard
                  key={course.id}
                  colors={["#debce9", "#36023c", "#36023c"]}
                  glowColor="#cbd5e1"
                  shape="square"
                  origin="center"
                  gap={5}
                  pixelSize={2}
                  speed={35}
                  revealDuration={600}
                  spotlight={0.5}
                  glow={0.5}
                  opacity={0.35}
                  fade={0.7}
                  trigger="hover"
                  radius={16}
                  clickPulse
                  intro
                  theme="dark"
                  onClick={() => handleTrackClick(i)}
                  className={`cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                    isSelected ? 'ring-2 ring-white shadow-2xl' : 'hover:scale-[1.01]'
                  }`}
                >
                  <div className="p-5 flex flex-col justify-between h-full min-h-[300px]">
                    <div>
                      {/* Top Row: Track & Badge */}
                      <div className="flex items-center justify-between gap-2 pb-3 border-b border-white/10">
                        <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                          TRACK {course.number}
                        </span>
                        <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-white/10 text-white font-medium">
                          {course.badge}
                        </span>
                      </div>

                      {/* Course Icon & Title */}
                      <div className="mt-4 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0 text-white">
                          <CourseIcon size={20} weight="fill" />
                        </div>
                        <h3 className="text-base font-bold text-white tracking-tight leading-snug [text-wrap:balance]">
                          {course.title}
                        </h3>
                      </div>

                      {/* Summary */}
                      <p className="mt-3 text-xs text-neutral-300 leading-relaxed [text-wrap:pretty]">
                        {course.summary}
                      </p>
                    </div>

                    {/* Bottom Action */}
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between mt-4">
                      <div>
                        <span className="text-xs font-mono uppercase text-neutral-400 block">Tuition</span>
                        <span className="text-sm font-bold text-white font-mono">{course.launchFee}</span>
                      </div>
                      <span className={`text-xs font-mono flex items-center gap-1 transition-all px-3 py-1 rounded-full ${
                        isSelected ? 'bg-white text-black font-semibold' : 'text-neutral-300 bg-white/5'
                      }`}>
                        <span>{isSelected ? 'Viewing' : 'Inspect'}</span>
                        <ArrowUpRight size={14} weight="bold" />
                      </span>
                    </div>
                  </div>
                </PixelCard>
              );
            })}
          </div>
        </div>

        {/* Selected Course Detail View */}
        <div id="course-details-view" className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-[#181818]">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#181818] border border-[#272727]">
            {/* Header Row */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#272727] text-xs font-mono text-[#9B9B9B]">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-[#272727] text-white font-semibold">
                  TRACK {current.number}
                </span>
                <span>·</span>
                <span>{current.duration}</span>
                <span>·</span>
                <span>{current.hoursPerDay}</span>
                <span>·</span>
                <span className="text-white">{current.level}</span>
              </div>
              <div>
                <span className="text-white font-bold text-base font-mono">{current.launchFee}</span>
                <span className="text-xs text-[#9B9B9B] ml-2">(Launch pricing)</span>
              </div>
            </div>

            {/* Course Title & Objective */}
            <div className="mt-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight [text-wrap:balance]">
                  {current.title}
                </h3>
                <p className="text-sm text-[#9B9B9B] mt-1 max-w-2xl leading-relaxed [text-wrap:pretty]">
                  {current.outcome}
                </p>
              </div>
            </div>

            {/* View Mode Toggle */}
            <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#272727] pb-3">
              <div className="flex items-center gap-1 p-1 bg-[#1F1F1F] rounded-full border border-[#272727] w-full sm:w-auto">
                <button
                  onClick={() => setViewMode('overview')}
                  className={`flex-1 sm:flex-none px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] cursor-pointer text-center ${
                    viewMode === 'overview'
                      ? 'bg-white text-black font-semibold shadow-sm'
                      : 'text-[#9B9B9B] hover:text-white'
                  }`}
                >
                  Overview and projects
                </button>
                <button
                  onClick={() => setViewMode('daily')}
                  className={`flex-1 sm:flex-none px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] cursor-pointer text-center ${
                    viewMode === 'daily'
                      ? 'bg-white text-black font-semibold shadow-sm'
                      : 'text-[#9B9B9B] hover:text-white'
                  }`}
                >
                  Syllabus ({current.dailyPlan.length} Days)
                </button>
              </div>
              <span className="text-xs font-mono text-[#9B9B9B] hidden sm:inline">
                {current.totalHours} active instruction
              </span>
            </div>

            {/* Tab 1: Overview */}
            {viewMode === 'overview' && (
              <div className="mt-6 space-y-6">
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-[#9B9B9B] mb-2.5">
                    Core stack and tools
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs font-mono text-[#f3f4f6]">
                    {current.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 bg-[#1F1F1F] border border-[#272727] rounded-full text-[#f3f4f6]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-[#9B9B9B] mb-3">
                    Capstone deliverables
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {current.capstones.map((cap, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 text-xs text-[#f3f4f6] p-4 rounded-xl bg-[#1F1F1F] border border-[#272727]"
                      >
                        <CheckCircle size={16} weight="fill" className="text-white shrink-0 mt-0.5" />
                        <span className="leading-relaxed [text-wrap:pretty]">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Concise Day by Day Syllabus */}
            {viewMode === 'daily' && (
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {current.dailyPlan.map((d) => (
                  <div
                    key={d.day}
                    className="p-3.5 rounded-xl bg-[#1F1F1F] border border-[#272727] text-xs flex items-center justify-between gap-3 hover:border-[#313131] transition-colors"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="w-7 h-7 rounded-lg bg-[#272727] text-white font-mono text-xs font-semibold flex items-center justify-center shrink-0">
                        {d.day}
                      </span>
                      <div className="truncate">
                        <span className="font-semibold text-white block truncate">{d.topic}</span>
                        <span className="text-xs text-[#9B9B9B] truncate block">{d.highlight}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
