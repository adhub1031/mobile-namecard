import Image from "next/image";

/* ─── 피트니스 트레이너 — 다이나믹 블랙 + 레드 ─── */
const P = {
  name: "강태현",
  nameEn: "TAEHYUN KANG",
  title: "Personal Trainer",
  gym: "IRON FACTORY",
  tagline: "변화는 선택이 아니라 습관입니다",
  bio: "체육학 전공 후 10년간 퍼스널 트레이닝을 해왔습니다. 다이어트, 체형교정, 근력강화 등 목표에 맞는 맞춤 프로그램을 설계하고, 끝까지 함께 합니다.",
  image: "/profiles/trainer.png",
  stats: [
    { value: "10년", label: "경력" },
    { value: "1,000+", label: "회원" },
    { value: "NSCA", label: "자격" },
  ],
  programs: [
    { title: "다이어트", desc: "체지방 감량 + 식단 관리", icon: "🔥" },
    { title: "근력 강화", desc: "웨이트 트레이닝 + 벌크업", icon: "💪" },
    { title: "체형 교정", desc: "자세 분석 + 재활 운동", icon: "🦴" },
    { title: "선수 트레이닝", desc: "스포츠 퍼포먼스 향상", icon: "🏆" },
  ],
  certs: ["NSCA-CPT", "ACSM 건강체력관리사", "체육학 석사", "스포츠 영양사"],
  contacts: [
    { label: "카카오톡", value: "taehyun_pt" },
    { label: "전화", value: "+82-10-8888-1234" },
    { label: "Instagram", value: "@taehyun.iron" },
    { label: "위치", value: "서울시 강남구 역삼동" },
  ],
};

export default function TrainerPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-red-600/10 blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-red-900/8 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-lg px-5 pb-20 pt-10">
        {/* Hero — Bold */}
        <section className="mb-10 animate-fade-up">
          <div className="relative mx-auto mb-6 aspect-[4/5] w-64 overflow-hidden rounded-2xl shadow-2xl shadow-red-900/20">
            <Image src={P.image} alt={P.name} fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-red-400">{P.gym}</p>
              <h1 className="text-2xl font-extrabold tracking-tight">{P.name}</h1>
              <p className="text-xs text-neutral-400">{P.nameEn} · {P.title}</p>
            </div>
          </div>
          <p className="mt-4 text-center text-sm font-medium italic text-red-300/60">&ldquo;{P.tagline}&rdquo;</p>
        </section>

        {/* Stats */}
        <section className="mb-10 grid grid-cols-3 gap-3 animate-fade-up-delay-1">
          {P.stats.map((s) => (
            <div key={s.label} className="rounded-xl bg-red-950/30 p-4 text-center ring-1 ring-red-500/15">
              <p className="text-xl font-extrabold text-red-400">{s.value}</p>
              <p className="mt-1 text-[10px] uppercase tracking-widest text-red-800">{s.label}</p>
            </div>
          ))}
        </section>

        {/* About */}
        <section className="mb-10 animate-fade-up-delay-2">
          <h2 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-red-500">About</h2>
          <div className="rounded-xl bg-white/5 p-5 ring-1 ring-white/10">
            <p className="text-sm leading-relaxed text-neutral-300">{P.bio}</p>
          </div>
        </section>

        {/* Programs */}
        <section className="mb-10 animate-fade-up-delay-3">
          <h2 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-red-500">Programs</h2>
          <div className="grid grid-cols-2 gap-3">
            {P.programs.map((p) => (
              <div key={p.title} className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                <span className="mb-2 block text-2xl">{p.icon}</span>
                <h3 className="text-sm font-bold">{p.title}</h3>
                <p className="mt-1 text-xs text-neutral-500">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-10 animate-fade-up-delay-4">
          <h2 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-red-500">Certifications</h2>
          <div className="flex flex-wrap gap-2">
            {P.certs.map((c) => (
              <span key={c} className="rounded-full bg-red-950/40 px-4 py-2 text-xs font-medium text-red-200 ring-1 ring-red-500/20">{c}</span>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="mb-10 animate-fade-up-delay-5">
          <h2 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-red-500">Contact</h2>
          <div className="space-y-3">
            {P.contacts.map((c) => (
              <div key={c.label} className="flex items-center justify-between rounded-xl bg-white/5 px-5 py-3 ring-1 ring-white/10">
                <span className="text-xs text-neutral-600">{c.label}</span>
                <span className="text-sm font-medium">{c.value}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <a href="tel:+821088881234"
          className="mb-10 block rounded-xl bg-gradient-to-r from-red-600 to-red-500 py-4 text-center text-sm font-bold text-white shadow-lg shadow-red-600/25 transition-transform hover:scale-[1.02] animate-fade-up-delay-5">
          PT 상담 신청
        </a>

        <footer className="text-center">
          <div className="mb-4 h-px bg-gradient-to-r from-transparent via-red-900/40 to-transparent" />
          <p className="text-[10px] tracking-widest text-neutral-700">&copy; 2026 {P.gym}</p>
        </footer>
      </div>
    </main>
  );
}
