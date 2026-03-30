"use client";

import Image from "next/image";
import { QRCodeSVG } from "qrcode.react";

/* ─── 김현곤 대표 — 다이나믹 블랙 + 레드 (트레이너 테마) ─── */
const P = {
  name: "김현곤",
  nameEn: "HYUNGON KIM",
  title: "CEO",
  company: "스퀘어컴퍼니",
  tagline: "도전은 항상 열정이다",
  bio: "스퀘어컴퍼니 대표 김현곤입니다. 끊임없는 도전과 열정으로 고객에게 최고의 가치를 전달하고, 신뢰를 바탕으로 함께 성장하는 기업을 만들어 갑니다.",
  image: "/profiles/ceo.png",
  stats: [
    { value: "CEO", label: "대표이사" },
    { value: "군산", label: "소재지" },
    { value: "∞", label: "열정" },
  ],
  values: [
    { icon: "🎯", title: "비전", desc: "도전과 혁신으로 성장" },
    { icon: "🤝", title: "신뢰", desc: "고객과의 약속을 지키는 기업" },
    { icon: "💡", title: "창의", desc: "새로운 가치를 만드는 도전" },
    { icon: "🚀", title: "열정", desc: "한계 없는 성장을 추구" },
  ],
  keywords: ["도전정신", "열정경영", "고객신뢰", "혁신성장"],
  contacts: [
    { label: "Email", value: "gusrhssl@gmail.com", href: "mailto:gusrhssl@gmail.com" },
    { label: "Phone", value: "010-3000-4781", href: "tel:010-3000-4781" },
    { label: "Address", value: "전북 군산시 공단대로 131", href: "https://map.naver.com/v5/search/전북 군산시 공단대로 131" },
    { label: "Website", value: "www.휴대폰광장.com", href: "http://www.휴대폰광장.com" },
  ],
};

export default function KimPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* ── 배경 글로우 ── */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-red-600/10 blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-red-900/8 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-lg px-5 pb-20 pt-10">

        {/* ══════ Hero — Bold 이미지 카드 ══════ */}
        <section className="mb-10 animate-fade-up">
          <div className="relative mx-auto mb-6 aspect-[4/5] w-64 overflow-hidden rounded-2xl shadow-2xl shadow-red-900/20">
            <Image src={P.image} alt={P.name} fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-red-400">{P.company}</p>
              <h1 className="text-2xl font-extrabold tracking-tight">{P.name}</h1>
              <p className="text-xs text-neutral-400">{P.nameEn} · {P.title}</p>
            </div>
          </div>
          <p className="mt-4 text-center text-sm font-medium italic text-red-300/60">
            &ldquo;{P.tagline}&rdquo;
          </p>
        </section>

        {/* ══════ Stats ══════ */}
        <section className="mb-10 grid grid-cols-3 gap-3 animate-fade-up-delay-1">
          {P.stats.map((s) => (
            <div key={s.label} className="rounded-xl bg-red-950/30 p-4 text-center ring-1 ring-red-500/15">
              <p className="text-xl font-extrabold text-red-400">{s.value}</p>
              <p className="mt-1 text-[10px] uppercase tracking-widest text-red-800">{s.label}</p>
            </div>
          ))}
        </section>

        {/* ══════ About ══════ */}
        <section className="mb-10 animate-fade-up-delay-2">
          <h2 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-red-500">About</h2>
          <div className="rounded-xl bg-white/5 p-5 ring-1 ring-white/10">
            <p className="text-sm leading-relaxed text-neutral-300">{P.bio}</p>
          </div>
        </section>

        {/* ══════ Core Values ══════ */}
        <section className="mb-10 animate-fade-up-delay-3">
          <h2 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-red-500">Core Values</h2>
          <div className="grid grid-cols-2 gap-3">
            {P.values.map((v) => (
              <div key={v.title} className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                <span className="mb-2 block text-2xl">{v.icon}</span>
                <h3 className="text-sm font-bold">{v.title}</h3>
                <p className="mt-1 text-xs text-neutral-500">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ══════ Keywords ══════ */}
        <section className="mb-10 animate-fade-up-delay-4">
          <h2 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-red-500">Keywords</h2>
          <div className="flex flex-wrap gap-2">
            {P.keywords.map((k) => (
              <span key={k} className="rounded-full bg-red-950/40 px-4 py-2 text-xs font-medium text-red-200 ring-1 ring-red-500/20">{k}</span>
            ))}
          </div>
        </section>

        {/* ══════ Contact ══════ */}
        <section className="mb-10 animate-fade-up-delay-5">
          <h2 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-red-500">Contact</h2>
          <div className="space-y-3">
            {P.contacts.map((c) => (
              <a key={c.label} href={c.href}
                className="flex items-center justify-between rounded-xl bg-white/5 px-5 py-3 ring-1 ring-white/10 transition-all hover:bg-white/10 hover:ring-red-500/30">
                <span className="text-xs text-neutral-600">{c.label}</span>
                <span className="text-sm font-medium">{c.value}</span>
              </a>
            ))}
          </div>
        </section>

        {/* ══════ QR Code ══════ */}
        <section className="mb-10 animate-fade-up-delay-5">
          <h2 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-red-500">QR Code</h2>
          <div className="flex flex-col items-center rounded-xl bg-white/5 p-8 ring-1 ring-white/10">
            <div className="rounded-xl bg-white p-4 shadow-lg shadow-red-600/10">
              <QRCodeSVG
                value="http://192.168.0.19:3000/kim"
                size={180}
                level="H"
                fgColor="#0a0a0a"
                bgColor="#ffffff"
              />
            </div>
            <p className="mt-4 text-sm font-medium text-neutral-400">내 온라인 명함 바로가기</p>
            <p className="mt-1 text-xs text-red-400/60">같은 Wi-Fi에서 스캔하세요</p>
          </div>
        </section>

        {/* ══════ CTA ══════ */}
        <a href="tel:010-3000-4781"
          className="mb-10 block rounded-xl bg-gradient-to-r from-red-600 to-red-500 py-4 text-center text-sm font-bold text-white shadow-lg shadow-red-600/25 transition-transform hover:scale-[1.02] animate-fade-up-delay-5">
          전화 연결하기
        </a>

        <footer className="text-center">
          <div className="mb-4 h-px bg-gradient-to-r from-transparent via-red-900/40 to-transparent" />
          <p className="text-[10px] tracking-widest text-neutral-700">&copy; 2026 {P.company}</p>
        </footer>
      </div>
    </main>
  );
}
