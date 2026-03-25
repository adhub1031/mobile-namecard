import Image from "next/image";

/* ─── 유튜브 크리에이터 — 네온 바이올렛 볼드 ─── */
const P = {
  name: "하은 HAEUN",
  title: "YouTube Creator",
  subs: "52만 구독자",
  tagline: "일상을 콘텐츠로, 콘텐츠를 브랜드로",
  bio: "뷰티·라이프스타일 유튜버. 52만 구독자와 함께 성장하고 있으며, 브랜드 콜라보와 자체 굿즈 기획까지 크리에이터의 모든 가능성을 탐구합니다.",
  image: "/profiles/creator.png",
  channels: [
    { label: "YouTube", value: "@haeun_official", icon: "▶️" },
    { label: "Instagram", value: "@haeun.daily", icon: "📸" },
    { label: "TikTok", value: "@haeun_tt", icon: "🎵" },
  ],
  stats: [
    { value: "520K", label: "구독자" },
    { value: "1.2억", label: "총 조회수" },
    { value: "200+", label: "영상" },
  ],
  expertise: [
    { title: "뷰티 리뷰", desc: "스킨케어·메이크업 솔직 리뷰" },
    { title: "브이로그", desc: "일상·여행·카페 탐방" },
    { title: "브랜드 콜라보", desc: "광고·협찬·자체 굿즈" },
    { title: "라이브 커머스", desc: "실시간 소통 판매 방송" },
  ],
  contact: { email: "haeun.biz@gmail.com", phone: "+82-10-1234-5678" },
};

export default function CreatorPage() {
  return (
    <main className="min-h-screen bg-[#0d0015] text-white">
      {/* BG Glow */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-violet-600/20 blur-[100px]" />
        <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-fuchsia-600/15 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-lg px-5 pb-20 pt-10">
        {/* Hero */}
        <section className="mb-10 text-center animate-fade-up">
          <div className="relative mx-auto mb-6 size-32">
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-br from-violet-500 via-fuchsia-500 to-pink-500 blur-sm" />
            <div className="relative size-32 overflow-hidden rounded-full ring-2 ring-violet-400/40">
              <Image src={P.image} alt={P.name} fill className="object-cover" priority />
            </div>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight">{P.name}</h1>
          <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-violet-500/20 px-4 py-1.5">
            <span className="text-xs font-bold text-violet-300">▶️ {P.title}</span>
            <span className="text-[10px] text-violet-400">|</span>
            <span className="text-xs text-violet-400">{P.subs}</span>
          </div>
          <p className="mx-auto mt-4 max-w-xs text-sm italic text-violet-200/70">&ldquo;{P.tagline}&rdquo;</p>
        </section>

        {/* Stats */}
        <section className="mb-10 grid grid-cols-3 gap-3 animate-fade-up-delay-1">
          {P.stats.map((s) => (
            <div key={s.label} className="rounded-2xl bg-violet-950/60 p-4 text-center ring-1 ring-violet-500/20">
              <p className="text-xl font-extrabold text-violet-300">{s.value}</p>
              <p className="mt-1 text-[10px] uppercase tracking-widest text-violet-500">{s.label}</p>
            </div>
          ))}
        </section>

        {/* About */}
        <section className="mb-10 animate-fade-up-delay-2">
          <h2 className="mb-3 text-sm font-bold uppercase tracking-widest text-violet-400">About</h2>
          <div className="rounded-2xl bg-violet-950/40 p-5 ring-1 ring-violet-500/10">
            <p className="text-sm leading-relaxed text-violet-100/80">{P.bio}</p>
          </div>
        </section>

        {/* Content */}
        <section className="mb-10 animate-fade-up-delay-3">
          <h2 className="mb-3 text-sm font-bold uppercase tracking-widest text-violet-400">Content</h2>
          <div className="grid grid-cols-2 gap-3">
            {P.expertise.map((e) => (
              <div key={e.title} className="rounded-2xl bg-violet-950/40 p-4 ring-1 ring-violet-500/10">
                <h3 className="text-sm font-bold text-white">{e.title}</h3>
                <p className="mt-1 text-xs text-violet-300/70">{e.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Channels */}
        <section className="mb-10 animate-fade-up-delay-4">
          <h2 className="mb-3 text-sm font-bold uppercase tracking-widest text-violet-400">Channels</h2>
          <div className="space-y-3">
            {P.channels.map((c) => (
              <div key={c.label} className="flex items-center gap-4 rounded-2xl bg-violet-950/40 px-5 py-4 ring-1 ring-violet-500/10">
                <span className="text-xl">{c.icon}</span>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-violet-500">{c.label}</p>
                  <p className="text-sm font-semibold text-white">{c.value}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="mb-10 animate-fade-up-delay-5">
          <a href={`mailto:${P.contact.email}`}
            className="block rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 p-px">
            <div className="rounded-2xl bg-[#0d0015]/90 px-6 py-4 text-center">
              <p className="text-sm font-bold text-violet-200">비즈니스 문의</p>
              <p className="mt-1 text-xs text-violet-400">{P.contact.email}</p>
            </div>
          </a>
        </section>

        <footer className="text-center">
          <div className="mb-4 h-px bg-gradient-to-r from-transparent via-violet-800 to-transparent" />
          <p className="text-[10px] tracking-widest text-violet-800">&copy; 2026 {P.name}</p>
        </footer>
      </div>
    </main>
  );
}
