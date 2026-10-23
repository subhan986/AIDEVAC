import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Globe, Smartphone, Bot, Layers, Calendar, Clock, Laptop, ShieldAlert, Sparkles } from 'lucide-react';
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
      title: 'Vibe Coding: Websites & Web Apps',
      badge: 'Start Here',
      duration: '10 Days',
      hoursPerDay: '2 hrs/day',
      totalHours: '20 Total Hours',
      level: 'Beginner',
      launchFee: 'Rs. 4,999',
      regularFee: 'Rs. 6,999',
      icon: Globe,
      summary: 'Build and deploy responsive business web apps with AI coding assistants, Git version control, and production hosting.',
      outcome: 'Each student ships a verified live responsive web app, integrates form handling, and creates a public GitHub portfolio.',
      tools: ['Cursor', 'Google AI Studio', 'HTML5/Tailwind', 'JavaScript', 'GitHub', 'Vercel'],
      capstones: [
        'Responsive commercial business landing page with lead forms.',
        'Interactive developer portfolio with live project embeds.',
        'Restaurant/retail directory with menus and inquiry flow.',
      ],
      // Concise syllabus with less text
      dailyPlan: [
        { day: 1, topic: 'Setup & Editor', highlight: 'Tooling, Cursor setup, prompt brief, local workspace creation' },
        { day: 2, topic: 'Specification Prompting', highlight: 'Role, constraints, iterative prompting, UI direction' },
        { day: 3, topic: 'Web Core', highlight: 'HTML layout, modern Tailwind styling, responsive mobile view' },
        { day: 4, topic: 'Visual Hierarchy', highlight: 'Spacing, contrast, responsive breakpoints, user ergonomics' },
        { day: 5, topic: 'Forms & State', highlight: 'Input handling, form validation, error/loading feedback states' },
        { day: 6, topic: 'Live APIs & Data', highlight: 'Fetching external JSON, async handlers, secure key separation' },
        { day: 7, topic: 'CRUD & Mock Data', highlight: 'Frontend vs backend, relational models, state synchronization' },
        { day: 8, topic: 'Debugging & Git', highlight: 'Reading stack traces, diff inspection, clean Git commits' },
        { day: 9, topic: 'Production Deploy', highlight: 'Zero-config hosting, custom domains, pre-flight checklists' },
        { day: 10, topic: 'Capstone Defense', highlight: 'Live demo, code walk-through, architecture review' },
      ],
    },
    {
      id: 'course-2',
      number: '02',
      title: 'AI Android App Development',
      badge: 'Mobile Native',
      duration: '12–15 Days',
      hoursPerDay: '2 hrs/day',
      totalHours: '24–30 Hours',
      level: 'Beginner to Intermediate',
      launchFee: 'Rs. 6,999',
      regularFee: 'Rs. 8,999',
      icon: Smartphone,
      summary: 'Build real Android apps with Kotlin, Jetpack Compose, and AI-assisted workflows in Android Studio from scratch to tested APK.',
      outcome: 'A working Android app, source code, tested APK build artifact, and Play Store release readiness.',
      tools: ['Android Studio', 'Kotlin', 'Jetpack Compose', 'Google AI Studio', 'ADB Debugging'],
      capstones: [
        'Persistent task & habit tracker saving state across phone reboots.',
        'Student study schedule & campus exam notification organizer.',
        'Live weather or public transit tracker consuming open REST APIs.',
      ],
      // Concise syllabus with less text
      dailyPlan: [
        { day: 1, topic: 'Android Studio Setup', highlight: 'SDK configuration, emulator testing, physical device ADB' },
        { day: 2, topic: 'AI Architecture Planning', highlight: 'Screen flow maps, Jetpack Compose wireframes, schema design' },
        { day: 3, topic: 'Kotlin Fundamentals', highlight: 'Null safety, lambdas, data classes, model declarations' },
        { day: 4, topic: 'Jetpack Compose UI', highlight: 'Modifiers, lazy columns, theme cards, fluid interactions' },
        { day: 5, topic: 'Navigation & App State', highlight: 'Multi-screen navigation, hoisted state, view models' },
        { day: 6, topic: 'Local Persistence', highlight: 'Room DB / Preferences, data persistence on restart' },
        { day: 7, topic: 'AI Assisted Refactoring', highlight: 'Diff review, clean architecture, performance passes' },
        { day: 8, topic: 'Networking & APIs', highlight: 'Retrofit/Ktor, parsing JSON feeds, offline fallback UI' },
        { day: 9, topic: 'Error Resilience', highlight: 'Logcat analysis, handling edge cases, boundary testing' },
        { day: 10, topic: 'APK Compilation', highlight: 'Build variants, signing certificates, sideloading on devices' },
        { day: 11, topic: 'Publishing Checklist', highlight: 'Icon assets, app permissions review, privacy compliance' },
        { day: 12, topic: 'Capstone Demo', highlight: 'Physical device demo, APK artifact release, code review' },
      ],
    },
    {
      id: 'course-3',
      number: '03',
      title: 'Agentic AI & Automation',
      badge: 'Autonomous Systems',
      duration: '12 Days',
      hoursPerDay: '2 hrs/day',
      totalHours: '24 Total Hours',
      level: 'Intermediate',
      launchFee: 'Rs. 8,999',
      regularFee: 'Rs. 10,999',
      icon: Bot,
      summary: 'Master tool calling, autonomous agent execution loops, structured outputs, multi-agent coordination, and prompt safety guardrails.',
      outcome: 'An autonomous multi-step agent pipeline that executes tools safely with human approval gates on critical actions.',
      tools: ['Python/TypeScript', 'Gemini 2.5/Claude', 'Function Calling', 'Webhooks', 'Pydantic/Zod'],
      capstones: [
        'Autonomous customer support triage agent with CRM ticket auto-tagging.',
        'Legal contract clause checker highlighting indemnity risks.',
        'Automated competitive intelligence researcher outputting verified briefs.',
      ],
      // Concise syllabus with less text
      dailyPlan: [
        { day: 1, topic: 'Agent Paradigm', highlight: 'Autocomplete vs autonomous swarms, agent lifecycle' },
        { day: 2, topic: 'Tool & Function Calling', highlight: 'Strict JSON schemas, parameter parsing, runtime safety' },
        { day: 3, topic: 'Execution Loops', highlight: 'ReAct pattern, stopping invariants, iteration bounds' },
        { day: 4, topic: 'Structured Outputs', highlight: 'Guaranteed JSON validation via Pydantic & Zod schemas' },
        { day: 5, topic: 'Retrieval & RAG', highlight: 'Vector embeddings, semantic search, grounded source citations' },
        { day: 6, topic: 'External Integrations', highlight: 'Webhooks, REST dispatch, third-party system automation' },
        { day: 7, topic: 'Approval Gates', highlight: 'Human-in-the-loop safeguards before destructive actions' },
        { day: 8, topic: 'Multi-Agent Teams', highlight: 'Supervisor, planner, coder, and evaluator agent routing' },
        { day: 9, topic: 'Prompt Injections', highlight: 'Defenses against indirect injection and context poisoning' },
        { day: 10, topic: 'Evaluation Frameworks', highlight: 'Automated test benchmarks, latency and token metrics' },
        { day: 11, topic: 'Production Hardening', highlight: 'Telemetry, logging, retry strategies, cost limits' },
        { day: 12, topic: 'Live Agent Defense', highlight: 'Autonomous pipeline demonstration with stress tests' },
      ],
    },
    {
      id: 'course-4',
      number: '04',
      title: 'AI Full-Stack Builder Bootcamp',
      badge: 'Comprehensive',
      duration: '20 Days',
      hoursPerDay: '2 hrs/day',
      totalHours: '40 Total Hours',
      level: 'Advanced',
      launchFee: 'Rs. 14,999',
      regularFee: 'Rs. 17,999',
      icon: Layers,
      summary: 'Complete full-stack intensive: frontend UX, REST/GraphQL APIs, relational SQL databases, auth, and staging deployments.',
      outcome: 'Full-stack SaaS application with user accounts, database persistence, secure API endpoints, and public deployment.',
      tools: ['React/Next.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Docker', 'Vercel'],
      capstones: [
        'Team collaboration dashboard with multi-tenant permissions.',
        'AI content studio with user quotas, billing tiers, and analytics.',
        'Knowledge-base SaaS with grounded semantic document Q&A.',
      ],
      // Concise syllabus with less text
      dailyPlan: [
        { day: 1, topic: 'System Design', highlight: 'Architecture blueprint, data models, API contract definition' },
        { day: 2, topic: 'Modern Frontend', highlight: 'Component hierarchy, state management, design tokens' },
        { day: 3, topic: 'Backend APIs', highlight: 'Routing, middleware, request validation, CORS' },
        { day: 4, topic: 'Relational Database', highlight: 'PostgreSQL schema, indexes, foreign keys, migrations' },
        { day: 5, topic: 'CRUD Workflows', highlight: 'End-to-end data pipelines, pagination, filter queries' },
        { day: 6, topic: 'Authentication & RBAC', highlight: 'Session tokens, user roles, protected endpoint routes' },
        { day: 7, topic: 'File & Asset Storage', highlight: 'Secure signed upload URLs, media optimization' },
        { day: 8, topic: 'AI Agent Service', highlight: 'Background processing, token streaming, fallback queues' },
        { day: 9, topic: 'Automated Testing', highlight: 'Unit, integration, and end-to-end smoke tests' },
        { day: 10, topic: 'Production Staging', highlight: 'CI/CD pipeline, environment variables, health checks' },
      ],
    },
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
    <section id="curriculum" className="relative w-full py-12 sm:py-24 px-3 sm:px-6 md:px-12 bg-[#0a0a0c] border-b border-neutral-900 text-neutral-200">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-6 pb-6 sm:pb-12 border-b border-neutral-800/80">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] sm:text-xs font-mono uppercase tracking-widest text-neutral-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Curriculum &amp; Tracks</span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mt-2">
              Practical AI Engineering Tracks
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm md:text-base text-neutral-400 leading-relaxed">
            Four specialized hands-on tracks designed for tangible software drops. Choose a course card below to inspect its syllabus and tech stack.
          </p>
        </div>

        {/* Laptop Provided & Classroom Strip (Prominently Rounded as requested) */}
        <div className="my-6 sm:my-8 p-2.5 sm:p-4 bg-gradient-to-r from-neutral-900/80 via-neutral-900/40 to-neutral-900/80 border border-white/10 rounded-2xl sm:rounded-3xl shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 text-xs font-mono text-neutral-200">
            <div className="flex items-center gap-2 sm:gap-2.5 p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-white/[0.05] border border-white/10 shadow-sm">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <Laptop className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-semibold text-white text-[11px] sm:text-xs truncate">Laptops Provided</span>
                <span className="text-[9px] sm:text-[10px] text-neutral-400 truncate">In Air-Conditioned Lab</span>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-2.5 p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-white/[0.05] border border-white/10 shadow-sm">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-neutral-200" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-semibold text-white text-[11px] sm:text-xs truncate">2 Hours / Day</span>
                <span className="text-[9px] sm:text-[10px] text-neutral-400 truncate">Active Hands-on</span>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-2.5 p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-white/[0.05] border border-white/10 shadow-sm">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-neutral-200" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-semibold text-white text-[11px] sm:text-xs truncate">10 to 20 Days</span>
                <span className="text-[9px] sm:text-[10px] text-neutral-400 truncate">Intensive Cohorts</span>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-2.5 p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-white/[0.05] border border-white/10 shadow-sm">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <ShieldAlert className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-300" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-semibold text-white text-[11px] sm:text-xs truncate">Grounded Evals</span>
                <span className="text-[9px] sm:text-[10px] text-neutral-400 truncate">Verified Working Apps</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Card PixelCard Grid (Unified view, no split syllabus toggle) */}
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
                  radius={24}
                  clickPulse
                  intro
                  theme="dark"
                  className={`w-full min-h-[440px] p-6 flex flex-col justify-between text-left transition-all duration-300 cursor-pointer rounded-3xl ${
                    isSelected
                      ? 'border-[#debce9]/70 shadow-[0_8px_32px_rgba(222,188,233,0.22)] ring-2 ring-[#debce9]/50'
                      : 'border-white/10 hover:border-[#debce9]/40'
                  }`}
                  onClick={() => handleTrackClick(i)}
                  role="button"
                  tabIndex={0}
                >
                  <div className="w-full flex flex-col h-full justify-between">
                    <div>
                      {/* Header badge & number */}
                      <div className="flex items-center justify-between text-xs font-mono mb-4">
                        <span className="text-[#debce9] font-bold tracking-wider">TRACK {course.number}</span>
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-purple-500/20 text-purple-200 border border-purple-500/30">
                          {course.badge}
                        </span>
                      </div>

                      {/* PixelCard Icon */}
                      <div className="w-13 h-13 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 shadow-[0_4px_20px_rgba(222,188,233,0.12)]">
                        <CourseIcon className="w-6 h-6 text-[#debce9]" />
                      </div>

                      {/* Title */}
                      <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug mb-2">
                        {course.title}
                      </h3>

                      {/* Summary */}
                      <p className="text-xs text-neutral-300 leading-relaxed line-clamp-3 mb-4">
                        {course.summary}
                      </p>

                      {/* Meta Pills */}
                      <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-mono text-neutral-400">
                        <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-neutral-200">
                          {course.duration}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-neutral-200">
                          {course.hoursPerDay}
                        </span>
                      </div>
                    </div>

                    {/* Bottom Action */}
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between mt-4">
                      <div>
                        <span className="text-[10px] font-mono uppercase text-neutral-400 block">Tuition</span>
                        <span className="text-sm font-bold text-white font-mono">{course.launchFee}</span>
                      </div>
                      <span className={`text-xs font-mono flex items-center gap-1 transition-colors px-3 py-1 rounded-full ${
                        isSelected ? 'bg-white text-black font-semibold' : 'text-neutral-300 bg-white/5'
                      }`}>
                        <span>{isSelected ? 'Viewing' : 'Inspect'}</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </PixelCard>
              );
            })}
          </div>
        </div>

        {/* Selected Course Detail & Concise Syllabus */}
        <div id="course-details-view" className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-neutral-900">
          <div className="p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-neutral-900/60 border border-neutral-800 backdrop-blur-xl">
            {/* Header Row */}
            <div className="flex flex-wrap items-center justify-between gap-2.5 sm:gap-3 pb-3 sm:pb-4 border-b border-neutral-800 text-[11px] sm:text-xs font-mono text-neutral-400">
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                <span className="px-2 py-0.5 rounded-full bg-white/10 text-white font-semibold text-[10px] sm:text-xs">
                  TRACK {current.number}
                </span>
                <span aria-hidden="true">·</span>
                <span>{current.duration}</span>
                <span aria-hidden="true">·</span>
                <span>{current.hoursPerDay}</span>
                <span aria-hidden="true">·</span>
                <span className="text-neutral-300">{current.level}</span>
              </div>
              <div>
                <span className="text-white font-bold text-sm sm:text-base font-mono">{current.launchFee}</span>
                <span className="text-[10px] sm:text-[11px] text-neutral-400 ml-1.5">(Launch pricing)</span>
              </div>
            </div>

            {/* Course Title & Objective */}
            <div className="mt-4 sm:mt-5 flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4">
              <div>
                <h3 className="text-lg sm:text-2xl font-bold text-white tracking-tight">
                  {current.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 mt-1 max-w-2xl leading-relaxed">
                  {current.outcome}
                </p>
              </div>
            </div>

            {/* View Mode Toggle: Overview vs Concise Syllabus (Pill Rounded) */}
            <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 border-b border-neutral-800 pb-3">
              <div className="flex items-center gap-1 p-1 bg-black/50 backdrop-blur-md rounded-full border border-white/10 w-full sm:w-auto">
                <button
                  onClick={() => setViewMode('overview')}
                  className={`flex-1 sm:flex-none px-3.5 sm:px-4 py-1.5 text-xs font-medium rounded-full transition-all cursor-pointer text-center ${
                    viewMode === 'overview'
                      ? 'bg-white text-black font-semibold shadow-sm'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  Overview &amp; Projects
                </button>
                <button
                  onClick={() => setViewMode('daily')}
                  className={`flex-1 sm:flex-none px-3.5 sm:px-4 py-1.5 text-xs font-medium rounded-full transition-all cursor-pointer text-center ${
                    viewMode === 'daily'
                      ? 'bg-white text-black font-semibold shadow-sm'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  Syllabus ({current.dailyPlan.length} Days)
                </button>
              </div>
              <span className="text-xs font-mono text-neutral-400 hidden sm:inline">
                {current.totalHours} Active
              </span>
            </div>

            {/* Tab 1: Overview */}
            {viewMode === 'overview' && (
              <div className="mt-5 space-y-6">
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                    Core Stack &amp; Tools
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs font-mono text-neutral-200">
                    {current.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 bg-black/60 border border-neutral-800 rounded-full text-neutral-200"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2.5">
                    Capstone Deliverables
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {current.capstones.map((cap, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 text-xs text-neutral-300 p-3.5 rounded-2xl bg-black/40 border border-neutral-850"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Concise Day-by-Day Syllabus (Less Info, Compact) */}
            {viewMode === 'daily' && (
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {current.dailyPlan.map((d) => (
                  <div
                    key={d.day}
                    className="p-3 rounded-2xl bg-black/40 border border-neutral-850 text-xs flex items-center justify-between gap-3 hover:border-neutral-750 transition-colors"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="w-7 h-7 rounded-full bg-white/10 text-white font-mono text-[11px] font-semibold flex items-center justify-center shrink-0">
                        {d.day}
                      </span>
                      <div className="truncate">
                        <span className="font-semibold text-white block truncate">{d.topic}</span>
                        <span className="text-[11px] text-neutral-400 truncate block">{d.highlight}</span>
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
