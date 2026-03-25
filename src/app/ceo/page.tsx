import Image from "next/image";

/* ─── 스타트업 대표 — 미니멀 화이트 클린 ─── */
const P = {
  name: "이정우",
  nameEn: "Jungwoo Lee",
  title: "CEO & Co-Founder",
  company: "NexaFlow",
  tagline: "데이터로 세상을 연결합니다",
  bio: "B2B SaaS 스타트업 NexaFlow의 공동창업자이자 대표입니다. 시리즈 A 투자 유치를 완료하고, 국내외 200+ 기업에 데이터 파이프라인 솔루션을 제공하고 있습니다.",
  image: "/profiles/ceo.png",
  stats: [
    { value: "200+", label: "고객사" },
    { value: "Series A", label: "투자 단계" },
    { value: "35명", label: "팀 규모" },
  ],
  milestones: [
    { year: "2026", text: "글로벌 확장 — 일본·동남아 진출" },
    { year: "2025", text: "시리즈 A 투자 유치 (50억)" },
    { year: "2024", text: "NexaFlow 법인 설립 · MVP 런칭" },
    { year: "2022", text: "데이터 엔지니어링 컨설팅 시작" },
  ],
  values: [
    { title: "데이터 엔지니어링", desc: "실시간 파이프라인 설계" },
    { title: "프로덕트 전략", desc: "PMF 달성 및 스케일링" },
    { title: "팀 빌딩", desc: "엔지니어링 조직 구축" },
    { title: "투자 유치", desc: "IR 자료 및 피칭" },
  ],
  contacts: [
    { label: "Email", value: "jw@nexaflow.io" },
    { label: "Phone", value: "+82-10-9876-5432" },
    { label: "LinkedIn", value: "linkedin.com/in/jungwoo-lee" },
  ],
};

export default function CeoPage() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-slate-900">
      <div className="mx-auto max-w-lg px-5 pb-20 pt-10">
        {/* Hero */}
        <section className="mb-10 text-center animate-fade-up">
          <div className="relative mx-auto mb-6 size-28">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-slate-300 to-slate-100 blur-sm" />
            <div className="relative size-28 overflow-hidden rounded-full ring-1 ring-slate-200">
              <Image src={P.image} alt={P.name} fill className="object-cover" priority />
            </div>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">{P.name}</h1>
          <p className="text-xs text-slate-400">{P.nameEn}</p>
          <div className="mt-3 flex items-center justify-center gap-2">
            <span className="rounded-md bg-slate-900 px-3 py-1 text-[10px] font-semibold text-white">{P.title}</span>
            <span className="text-xs text-slate-400">{P.company}</span>
          </div>
          <p className="mx-auto mt-4 max-w-xs text-sm text-slate-500">{P.tagline}</p>
        </section>

        {/* Stats */}
        <section className="mb-10 grid grid-cols-3 gap-3 animate-fade-up-delay-1">
          {P.stats.map((s) => (
            <div key={s.label} className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm">
              <p className="text-xl font-bold text-slate-900">{s.value}</p>
              <p className="mt-1 text-[10px] uppercase tracking-widest text-slate-400">{s.label}</p>
            </div>
          ))}
        </section>

        {/* About */}
        <section className="mb-10 animate-fade-up-delay-2">
          <SectionTitle>About</SectionTitle>
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm leading-relaxed text-slate-600">{P.bio}</p>
          </div>
        </section>

        {/* Values */}
        <section className="mb-10 animate-fade-up-delay-3">
          <SectionTitle>Expertise</SectionTitle>
          <div className="grid grid-cols-2 gap-3">
            {P.values.map((v) => (
              <div key={v.title} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <h3 className="text-sm font-semibold text-slate-900">{v.title}</h3>
                <p className="mt-1 text-xs text-slate-500">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Milestones */}
        <section className="mb-10 animate-fade-up-delay-4">
          <SectionTitle>Milestones</SectionTitle>
          <div className="relative space-y-0">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-slate-200" />
            {P.milestones.map((m, i) => (
              <div key={i} className="relative pl-7 pb-6 last:pb-0">
                <div className="absolute left-0 top-1.5 size-[15px] rounded-full border-2 border-slate-900 bg-white" />
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{m.year}</p>
                <p className="mt-1 text-sm text-slate-700">{m.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="mb-10 animate-fade-up-delay-5">
          <SectionTitle>Contact</SectionTitle>
          <div className="space-y-3">
            {P.contacts.map((c) => (
              <div key={c.label} className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-5 py-3 shadow-sm">
                <span className="text-xs text-slate-400">{c.label}</span>
                <span className="text-sm font-medium text-slate-900">{c.value}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <a href={`mailto:${P.contacts[0].value}`}
          className="mb-10 block rounded-xl bg-slate-900 py-4 text-center text-sm font-semibold text-white shadow-lg transition-transform hover:scale-[1.02] animate-fade-up-delay-5">
          미팅 요청하기
        </a>

        <footer className="text-center">
          <div className="mb-4 h-px bg-slate-200" />
          <p className="text-[10px] tracking-widest text-slate-400">&copy; 2026 {P.company}</p>
        </footer>
      </div>
    </main>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-3 flex items-center gap-3">
      <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400">{children}</h2>
      <div className="h-px flex-1 bg-slate-200" />
    </div>
  );
}
