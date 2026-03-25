import Image from "next/image";

/* ─── Profile Data ─── */
const PROFILE = {
  name: "Alice",
  nameKo: "엘리스",
  title: "Software Engineer",
  company: "OpenClaw",
  tagline: "Building the future with code & AI",
  bio: "풀스택 개발자로서 Next.js, React, TypeScript 기반의 웹 애플리케이션을 개발하고 있습니다. AI 자동화와 시스템 아키텍처에 깊은 관심을 가지고, 복잡한 문제를 우아하게 해결하는 것을 추구합니다.",
  profileImage: "/profile.svg",
  stats: [
    { label: "경력", value: "5+" , unit: "Years" },
    { label: "프로젝트", value: "30+", unit: "Projects" },
    { label: "기술스택", value: "15+", unit: "Skills" },
  ],
  expertise: [
    { title: "Frontend", desc: "React · Next.js · TypeScript · Tailwind CSS", icon: "🎨" },
    { title: "Backend", desc: "Node.js · Python · FastAPI · PostgreSQL", icon: "⚙️" },
    { title: "DevOps", desc: "Docker · Vercel · CI/CD · Cloudflare", icon: "☁️" },
    { title: "AI / ML", desc: "LLM Integration · Automation · RAG", icon: "🤖" },
  ],
  experience: [
    {
      period: "2024 — Present",
      role: "Lead Engineer",
      company: "OpenClaw",
      desc: "AI 기반 자동화 플랫폼 설계 및 개발. 멀티에이전트 시스템 아키텍처 구축.",
    },
    {
      period: "2021 — 2024",
      role: "Senior Developer",
      company: "Tech Startup",
      desc: "풀스택 웹 애플리케이션 개발 및 팀 리드. 서비스 런칭부터 스케일링까지 주도.",
    },
    {
      period: "2019 — 2021",
      role: "Frontend Developer",
      company: "Digital Agency",
      desc: "다수의 클라이언트 프로젝트 UI/UX 구현. 반응형 디자인 및 성능 최적화.",
    },
  ],
  contacts: [
    { label: "Email", value: "alice@example.com", href: "mailto:alice@example.com", icon: EmailIcon },
    { label: "Phone", value: "+82-10-0000-0000", href: "tel:+821000000000", icon: PhoneIcon },
    { label: "Location", value: "Seoul, Korea", href: null, icon: LocationIcon },
    { label: "Website", value: "alice.dev", href: "https://alice.dev", icon: GlobeIcon },
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/alice", icon: GithubIcon },
    { label: "LinkedIn", href: "https://linkedin.com/in/alice", icon: LinkedInIcon },
    { label: "Twitter / X", href: "https://twitter.com/alice", icon: TwitterIcon },
    { label: "Instagram", href: "https://instagram.com/alice", icon: InstagramIcon },
  ],
};

/* ─── Page ─── */
export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background effects */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-gold-500/8 blur-[120px]" />
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-violet-600/8 blur-[120px]" />
        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-lg px-5 pb-20 pt-12">
        {/* ─── Hero Section ─── */}
        <section className="animate-fade-up mb-12">
          {/* Profile Image */}
          <div className="relative mx-auto mb-8 size-36">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-gold-400 via-gold-500 to-amber-700 opacity-75 blur-sm" />
            <div className="relative size-36 overflow-hidden rounded-full ring-2 ring-gold-500/30">
              <Image
                src={PROFILE.profileImage}
                alt={PROFILE.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Status indicator */}
            <div className="absolute bottom-2 right-2 size-4 rounded-full border-2 border-dark-900 bg-emerald-400 shadow-lg shadow-emerald-400/50" />
          </div>

          {/* Name */}
          <div className="text-center">
            <h1
              className="text-3xl font-bold tracking-tight sm:text-4xl"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {PROFILE.name}
            </h1>
            <p className="mt-1 text-sm text-slate-400">{PROFILE.nameKo}</p>
            <div className="mt-3 flex items-center justify-center gap-2">
              <span className="rounded-full bg-gold-500/15 px-3 py-1 text-xs font-semibold text-gold-400">
                {PROFILE.title}
              </span>
              <span className="text-xs text-slate-500">@</span>
              <span className="text-xs font-medium text-slate-300">{PROFILE.company}</span>
            </div>
            <p className="mx-auto mt-4 max-w-xs text-sm italic text-slate-400">
              &ldquo;{PROFILE.tagline}&rdquo;
            </p>
          </div>
        </section>

        {/* ─── Stats ─── */}
        <section className="animate-fade-up-delay-1 mb-12">
          <div className="grid grid-cols-3 gap-3">
            {PROFILE.stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl bg-dark-800 p-4 text-center ring-1 ring-white/5"
              >
                <p className="text-2xl font-bold text-gold-400">{s.value}</p>
                <p className="mt-1 text-[10px] font-medium uppercase tracking-wider text-slate-500">
                  {s.unit}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── About ─── */}
        <section className="animate-fade-up-delay-2 mb-12">
          <SectionTitle>About</SectionTitle>
          <div className="rounded-2xl bg-dark-800/80 p-6 ring-1 ring-white/5 backdrop-blur-sm">
            <p className="text-sm leading-relaxed text-slate-300">{PROFILE.bio}</p>
          </div>
        </section>

        {/* ─── Expertise ─── */}
        <section className="animate-fade-up-delay-3 mb-12">
          <SectionTitle>Expertise</SectionTitle>
          <div className="grid grid-cols-2 gap-3">
            {PROFILE.expertise.map((e) => (
              <div
                key={e.title}
                className="group rounded-2xl bg-dark-800/80 p-5 ring-1 ring-white/5 backdrop-blur-sm transition-all hover:ring-gold-500/20"
              >
                <span className="mb-3 block text-2xl">{e.icon}</span>
                <h3 className="text-sm font-semibold text-white">{e.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-400">{e.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Experience ─── */}
        <section className="animate-fade-up-delay-4 mb-12">
          <SectionTitle>Experience</SectionTitle>
          <div className="relative space-y-0">
            {/* Timeline line */}
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-gold-500/40 via-gold-500/20 to-transparent" />
            {PROFILE.experience.map((exp, i) => (
              <div key={i} className="relative pl-8 pb-8 last:pb-0">
                {/* Timeline dot */}
                <div className="absolute left-0 top-1.5 size-[15px] rounded-full border-2 border-gold-500/60 bg-dark-900" />
                <p className="text-[10px] font-semibold uppercase tracking-widest text-gold-400/80">
                  {exp.period}
                </p>
                <h3 className="mt-1 text-sm font-semibold text-white">{exp.role}</h3>
                <p className="text-xs font-medium text-slate-400">{exp.company}</p>
                <p className="mt-2 text-xs leading-relaxed text-slate-500">{exp.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Contact ─── */}
        <section className="animate-fade-up-delay-5 mb-12">
          <SectionTitle>Contact</SectionTitle>
          <div className="space-y-3">
            {PROFILE.contacts.map((c) => {
              const inner = (
                <div className="flex items-center gap-4 rounded-2xl bg-dark-800/80 px-5 py-4 ring-1 ring-white/5 backdrop-blur-sm transition-all hover:ring-gold-500/20">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-dark-600 text-gold-400">
                    <c.icon />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-medium uppercase tracking-wider text-slate-500">
                      {c.label}
                    </p>
                    <p className="truncate text-sm font-medium text-white">{c.value}</p>
                  </div>
                  {c.href && (
                    <svg className="size-4 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </div>
              );
              return c.href ? (
                <a key={c.label} href={c.href} className="block">
                  {inner}
                </a>
              ) : (
                <div key={c.label}>{inner}</div>
              );
            })}
          </div>
        </section>

        {/* ─── Social Links ─── */}
        <section className="animate-fade-up-delay-5 mb-12">
          <SectionTitle>Social</SectionTitle>
          <div className="grid grid-cols-2 gap-3">
            {PROFILE.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl bg-dark-800/80 px-5 py-4 ring-1 ring-white/5 backdrop-blur-sm transition-all hover:ring-gold-500/20"
              >
                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-dark-600 text-slate-300">
                  <s.icon />
                </div>
                <span className="text-sm font-medium text-white">{s.label}</span>
              </a>
            ))}
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="animate-fade-up-delay-5 mb-16">
          <a
            href="mailto:alice@example.com"
            className="group relative block overflow-hidden rounded-2xl bg-gradient-to-r from-gold-500 to-amber-600 p-px"
          >
            <div className="rounded-2xl bg-dark-900/90 px-6 py-4 text-center transition-all group-hover:bg-dark-900/70">
              <p className="text-sm font-semibold text-gold-400">Let&apos;s Work Together</p>
              <p className="mt-1 text-xs text-slate-400">프로젝트 문의 &middot; 협업 제안</p>
            </div>
          </a>
        </section>

        {/* ─── Footer ─── */}
        <footer className="text-center">
          <div className="mb-4 h-px bg-gradient-to-r from-transparent via-dark-500 to-transparent" />
          <p className="text-[10px] uppercase tracking-widest text-slate-600">
            &copy; {new Date().getFullYear()} {PROFILE.name} &middot; All Rights Reserved
          </p>
        </footer>
      </div>
    </main>
  );
}

/* ─── Components ─── */
function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <h2
        className="text-lg font-semibold tracking-tight"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {children}
      </h2>
      <div className="h-px flex-1 bg-gradient-to-r from-gold-500/30 to-transparent" />
    </div>
  );
}

/* ─── Icons ─── */
function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="size-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="size-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="size-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="size-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-4.247m0 0A8.966 8.966 0 013 12c0-1.528.38-2.968 1.05-4.228" />
    </svg>
  );
}
