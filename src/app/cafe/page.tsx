import Image from "next/image";

/* ─── 카페 사장님 — 따뜻한 우드톤 오가닉 ─── */
const P = {
  name: "박민호",
  title: "Cafe Owner & Barista",
  shop: "로스팅하우스 목련",
  tagline: "한 잔의 커피에 진심을 담습니다",
  bio: "직접 로스팅한 원두로 핸드드립 커피를 내리는 스페셜티 카페를 운영하고 있습니다. SCA 인증 바리스타로서 원두 산지 선별부터 추출까지 모든 과정에 정성을 담습니다.",
  image: "/profiles/cafe.png",
  stats: [
    { value: "SCA", label: "인증" },
    { value: "5년", label: "운영" },
    { value: "4.9", label: "평점" },
  ],
  menu: [
    { title: "시그니처 핸드드립", desc: "오늘의 싱글오리진" },
    { title: "목련 라떼", desc: "자가 로스팅 에스프레소 + 오트밀크" },
    { title: "계절 음료", desc: "제철 과일 에이드 & 티" },
    { title: "디저트", desc: "매일 굽는 수제 스콘 & 파운드케이크" },
  ],
  info: [
    { label: "주소", value: "서울시 마포구 연남로 47, 2층" },
    { label: "영업시간", value: "매일 10:00 — 21:00 (월 휴무)" },
    { label: "전화", value: "02-1234-5678" },
    { label: "Instagram", value: "@mokryun_coffee" },
  ],
};

export default function CafePage() {
  return (
    <main className="min-h-screen bg-[#1a1410] text-[#e8dcc8]">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-amber-800/10 blur-[100px]" />
        <div className="absolute -right-40 bottom-40 h-80 w-80 rounded-full bg-orange-900/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-lg px-5 pb-20 pt-10">
        {/* Hero */}
        <section className="mb-10 text-center animate-fade-up">
          <div className="relative mx-auto mb-6 size-32">
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-br from-amber-700 to-orange-900 opacity-60 blur-sm" />
            <div className="relative size-32 overflow-hidden rounded-full ring-2 ring-amber-700/40">
              <Image src={P.image} alt={P.name} fill className="object-cover" priority />
            </div>
          </div>
          <p className="text-xs tracking-[0.3em] text-amber-600">{P.shop}</p>
          <h1 className="mt-1 text-2xl font-bold tracking-tight">{P.name}</h1>
          <p className="mt-1 text-xs text-amber-700">{P.title}</p>
          <p className="mx-auto mt-4 max-w-xs text-sm italic text-amber-200/50">&ldquo;{P.tagline}&rdquo;</p>
        </section>

        {/* Stats */}
        <section className="mb-10 grid grid-cols-3 gap-3 animate-fade-up-delay-1">
          {P.stats.map((s) => (
            <div key={s.label} className="rounded-2xl bg-amber-900/20 p-4 text-center ring-1 ring-amber-800/30">
              <p className="text-xl font-bold text-amber-400">{s.value}</p>
              <p className="mt-1 text-[10px] uppercase tracking-widest text-amber-700">{s.label}</p>
            </div>
          ))}
        </section>

        {/* About */}
        <section className="mb-10 animate-fade-up-delay-2">
          <h2 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-amber-600">About</h2>
          <div className="rounded-2xl bg-amber-900/15 p-5 ring-1 ring-amber-800/20">
            <p className="text-sm leading-relaxed text-amber-100/70">{P.bio}</p>
          </div>
        </section>

        {/* Menu */}
        <section className="mb-10 animate-fade-up-delay-3">
          <h2 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-amber-600">Menu</h2>
          <div className="space-y-3">
            {P.menu.map((m) => (
              <div key={m.title} className="flex items-center justify-between rounded-2xl bg-amber-900/15 px-5 py-4 ring-1 ring-amber-800/20">
                <div>
                  <h3 className="text-sm font-semibold">{m.title}</h3>
                  <p className="mt-0.5 text-xs text-amber-600/70">{m.desc}</p>
                </div>
                <span className="text-lg">☕</span>
              </div>
            ))}
          </div>
        </section>

        {/* Info */}
        <section className="mb-10 animate-fade-up-delay-4">
          <h2 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-amber-600">Info</h2>
          <div className="space-y-3">
            {P.info.map((item) => (
              <div key={item.label} className="flex items-start gap-4 rounded-2xl bg-amber-900/15 px-5 py-3 ring-1 ring-amber-800/20">
                <span className="mt-0.5 text-[10px] uppercase tracking-wider text-amber-700 shrink-0 w-16">{item.label}</span>
                <span className="text-sm">{item.value}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <a href="tel:0212345678"
          className="mb-10 block rounded-2xl bg-gradient-to-r from-amber-700 to-orange-800 py-4 text-center text-sm font-semibold text-white shadow-lg shadow-amber-900/30 animate-fade-up-delay-5">
          예약 전화하기
        </a>

        <footer className="text-center">
          <div className="mb-4 h-px bg-gradient-to-r from-transparent via-amber-900/40 to-transparent" />
          <p className="text-[10px] tracking-widest text-amber-900">&copy; 2026 {P.shop}</p>
        </footer>
      </div>
    </main>
  );
}
