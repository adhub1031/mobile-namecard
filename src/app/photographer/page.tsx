import Image from "next/image";

/* ─── 포토그래퍼 — 갤러리 스타일 + 무드 ─── */
const P = {
  name: "수진 SUJIN",
  title: "Photographer",
  tagline: "순간을 영원으로",
  bio: "인물·공간·브랜드 사진을 전문으로 촬영합니다. 빛과 그림자로 이야기를 담아내고, 한 장의 사진에 감정을 압축하는 작업을 합니다.",
  image: "/profiles/photographer.png",
  stats: [
    { value: "8년", label: "경력" },
    { value: "500+", label: "프로젝트" },
    { value: "50+", label: "브랜드" },
  ],
  specialties: [
    { title: "인물 사진", desc: "프로필·화보·스냅" },
    { title: "공간 촬영", desc: "인테리어·건축·카페" },
    { title: "브랜드 촬영", desc: "제품·룩북·캠페인" },
    { title: "웨딩 스냅", desc: "본식·스냅·DVD" },
  ],
  clients: ["삼성전자", "아모레퍼시픽", "무신사", "스타벅스코리아", "현대카드"],
  contacts: [
    { label: "Email", value: "sujin@studio-moment.kr" },
    { label: "Phone", value: "+82-10-5555-7890" },
    { label: "Instagram", value: "@sujin.moment" },
  ],
};

export default function PhotographerPage() {
  return (
    <main className="min-h-screen bg-[#111] text-white">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-amber-600/8 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-lg px-5 pb-20 pt-10">
        {/* Hero — Cinematic */}
        <section className="mb-10 animate-fade-up">
          <div className="relative mx-auto mb-6 aspect-[3/4] w-56 overflow-hidden rounded-2xl shadow-2xl">
            <Image src={P.image} alt={P.name} fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <h1 className="text-2xl font-bold tracking-tight">{P.name}</h1>
              <p className="text-xs text-amber-300">{P.title}</p>
            </div>
          </div>
          <p className="mt-4 text-center text-sm italic text-amber-200/60">&ldquo;{P.tagline}&rdquo;</p>
        </section>

        {/* Stats */}
        <section className="mb-10 grid grid-cols-3 gap-3 animate-fade-up-delay-1">
          {P.stats.map((s) => (
            <div key={s.label} className="rounded-xl bg-white/5 p-4 text-center ring-1 ring-white/10">
              <p className="text-xl font-bold text-amber-300">{s.value}</p>
              <p className="mt-1 text-[10px] uppercase tracking-widest text-neutral-500">{s.label}</p>
            </div>
          ))}
        </section>

        {/* Bio */}
        <section className="mb-10 animate-fade-up-delay-2">
          <div className="rounded-xl bg-white/5 p-5 ring-1 ring-white/10">
            <p className="text-sm leading-relaxed text-neutral-300">{P.bio}</p>
          </div>
        </section>

        {/* Specialties */}
        <section className="mb-10 animate-fade-up-delay-3">
          <h2 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-amber-400">Specialties</h2>
          <div className="grid grid-cols-2 gap-3">
            {P.specialties.map((s) => (
              <div key={s.title} className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                <h3 className="text-sm font-semibold">{s.title}</h3>
                <p className="mt-1 text-xs text-neutral-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Clients */}
        <section className="mb-10 animate-fade-up-delay-4">
          <h2 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-amber-400">Clients</h2>
          <div className="flex flex-wrap gap-2">
            {P.clients.map((c) => (
              <span key={c} className="rounded-full bg-white/5 px-4 py-2 text-xs text-neutral-300 ring-1 ring-white/10">{c}</span>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="mb-10 animate-fade-up-delay-5">
          <h2 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-amber-400">Contact</h2>
          <div className="space-y-3">
            {P.contacts.map((c) => (
              <div key={c.label} className="flex items-center justify-between rounded-xl bg-white/5 px-5 py-3 ring-1 ring-white/10">
                <span className="text-xs text-neutral-500">{c.label}</span>
                <span className="text-sm font-medium">{c.value}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <a href={`mailto:${P.contacts[0].value}`}
          className="mb-10 block rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 py-4 text-center text-sm font-semibold text-black shadow-lg shadow-amber-600/20 animate-fade-up-delay-5">
          촬영 문의하기
        </a>

        <footer className="text-center">
          <div className="mb-4 h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />
          <p className="text-[10px] tracking-widest text-neutral-700">&copy; 2026 Studio Moment</p>
        </footer>
      </div>
    </main>
  );
}
