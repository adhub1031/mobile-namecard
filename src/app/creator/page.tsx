"use client";

import { useState } from "react";
import Image from "next/image";
import type { Profile } from "@/types/profile";

const FALLBACK_IMAGE = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' fill='%23334155'%3E%3Crect width='200' height='200' rx='100'/%3E%3Ctext x='50%25' y='54%25' dominant-baseline='middle' text-anchor='middle' font-size='64' fill='%2394a3b8'%3E?%3C/text%3E%3C/svg%3E";

/* ─── 유튜브 크리에이터 — 벤토 그리드 네온 바이올렛 ─── */
const P: Profile = {
  name: "하은 HAEUN",
  title: "YouTube Creator",
  subs: "52만 구독자",
  tagline: "일상을 콘텐츠로, 콘텐츠를 브랜드로",
  bio: "뷰티·라이프스타일 유튜버. 52만 구독자와 함께 성장하고 있으며, 브랜드 콜라보와 자체 굿즈 기획까지 크리에이터의 모든 가능성을 탐구합니다.",
  image: "/profiles/creator.png",
  channels: [
    { label: "YouTube", value: "@haeun_official", icon: "▶️", color: "from-red-500 to-rose-600" },
    { label: "Instagram", value: "@haeun.daily", icon: "📸", color: "from-fuchsia-500 to-pink-500" },
    { label: "TikTok", value: "@haeun_tt", icon: "🎵", color: "from-violet-500 to-indigo-500" },
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
  const [imgSrc, setImgSrc] = useState(P.image!);

  return (
    <main className="min-h-screen bg-[#0d0015] text-white">
      {/* BG Glow */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-violet-600/20 blur-[120px]" />
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-fuchsia-600/15 blur-[120px]" />
        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-lg px-4 pb-28 pt-8">
        {/* ━━━ Bento Hero Grid: Profile (2-row span) + Stats ━━━ */}
        <section
          className="mb-4 grid gap-3"
          style={{
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "auto auto",
          }}
        >
          {/* Profile — spans 2 rows on left */}
          <div
            className="relative flex flex-col items-center justify-center rounded-3xl bg-gradient-to-br from-violet-950/80 to-fuchsia-950/60 p-5 ring-1 ring-violet-500/20"
            style={{ gridRow: "1 / 3", gridColumn: "1 / 2" }}
          >
            <div className="relative mb-4 size-28">
              <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-violet-500 via-fuchsia-500 to-pink-400 opacity-60 blur-md" />
              <div className="relative size-28 overflow-hidden rounded-full ring-2 ring-violet-400/50">
                <Image src={imgSrc} alt={P.name} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover" priority onError={() => setImgSrc(FALLBACK_IMAGE)} />
              </div>
            </div>
            <h1 className="text-lg font-extrabold tracking-tight">{P.name}</h1>
            <p className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-fuchsia-400">
              {P.title}
            </p>
          </div>

          {/* Stat cell 1 — top right */}
          <div
            className="flex flex-col items-center justify-center rounded-3xl bg-violet-950/60 p-4 ring-1 ring-violet-500/20"
            style={{ gridRow: "1 / 2", gridColumn: "2 / 3" }}
          >
            <p className="text-2xl font-black text-violet-300">{P.stats[0].value}</p>
            <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.2em] text-violet-500">
              {P.stats[0].label}
            </p>
          </div>

          {/* Stat cells 2 & 3 — bottom right, side by side mini grid */}
          <div
            className="grid grid-cols-2 gap-2"
            style={{ gridRow: "2 / 3", gridColumn: "2 / 3" }}
          >
            {P.stats.slice(1).map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center justify-center rounded-2xl bg-violet-950/50 p-3 ring-1 ring-fuchsia-500/15"
              >
                <p className="text-base font-extrabold text-fuchsia-300">{s.value}</p>
                <p className="mt-0.5 text-[8px] font-bold uppercase tracking-widest text-fuchsia-500/80">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ━━━ Tagline — full width accent strip ━━━ */}
        <div className="mb-4 rounded-2xl bg-gradient-to-r from-violet-600/20 via-fuchsia-600/20 to-violet-600/20 px-5 py-3 text-center ring-1 ring-violet-500/10">
          <p className="text-sm italic text-violet-200/80">&ldquo;{P.tagline}&rdquo;</p>
        </div>

        {/* ━━━ Bio — wide card, full width ━━━ */}
        <section className="mb-4">
          <div className="rounded-3xl bg-gradient-to-br from-violet-950/50 to-purple-950/40 p-5 ring-1 ring-violet-500/15">
            <h2 className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-violet-500">
              About
            </h2>
            <p className="text-sm leading-relaxed text-violet-100/80">{P.bio}</p>
          </div>
        </section>

        {/* ━━━ Channel Links — colorful individual bento cells ━━━ */}
        <section
          className="mb-4 grid gap-3"
          style={{
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "auto auto",
          }}
        >
          {/* First channel — tall cell left */}
          <div
            className={`flex flex-col items-center justify-center gap-2 rounded-3xl bg-gradient-to-br ${P.channels![0].color} p-5 shadow-lg shadow-red-500/10`}
            style={{ gridRow: "1 / 3", gridColumn: "1 / 2" }}
          >
            <span className="text-4xl">{P.channels![0].icon}</span>
            <p className="text-xs font-black uppercase tracking-wider">{P.channels![0].label}</p>
            <p className="text-[11px] font-medium text-white/80">{P.channels![0].value}</p>
          </div>

          {/* Second channel — top right */}
          <div
            className={`flex flex-col items-center justify-center gap-1.5 rounded-3xl bg-gradient-to-br ${P.channels![1].color} p-4 shadow-lg shadow-fuchsia-500/10`}
            style={{ gridRow: "1 / 2", gridColumn: "2 / 3" }}
          >
            <span className="text-2xl">{P.channels![1].icon}</span>
            <p className="text-[10px] font-black uppercase tracking-wider">{P.channels![1].label}</p>
            <p className="text-[10px] font-medium text-white/80">{P.channels![1].value}</p>
          </div>

          {/* Third channel — bottom right */}
          <div
            className={`flex flex-col items-center justify-center gap-1.5 rounded-3xl bg-gradient-to-br ${P.channels![2].color} p-4 shadow-lg shadow-violet-500/10`}
            style={{ gridRow: "2 / 3", gridColumn: "2 / 3" }}
          >
            <span className="text-2xl">{P.channels![2].icon}</span>
            <p className="text-[10px] font-black uppercase tracking-wider">{P.channels![2].label}</p>
            <p className="text-[10px] font-medium text-white/80">{P.channels![2].value}</p>
          </div>
        </section>

        {/* ━━━ Content Expertise — horizontal scroll chips ━━━ */}
        <section className="mb-4">
          <h2 className="mb-3 px-1 text-[10px] font-bold uppercase tracking-[0.25em] text-violet-500">
            Content
          </h2>
          <div className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-2 scrollbar-none">
            {P.expertise!.map((e) => (
              <div
                key={e.title}
                className="flex-none rounded-2xl bg-violet-950/60 px-5 py-4 ring-1 ring-violet-500/15"
                style={{ minWidth: "160px" }}
              >
                <h3 className="text-sm font-bold text-white">{e.title}</h3>
                <p className="mt-1.5 text-[11px] leading-snug text-violet-300/70">{e.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ━━━ Mini Bento: Subs badge + Videos badge ━━━ */}
        <section className="mb-4 grid grid-cols-3 gap-3">
          <div className="col-span-2 flex items-center gap-3 rounded-2xl bg-violet-950/50 px-4 py-3 ring-1 ring-violet-500/15">
            <span className="text-2xl">▶️</span>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-violet-500">{P.subs}</p>
              <p className="text-xs text-violet-300/70">함께 성장하는 크리에이터</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center rounded-2xl bg-fuchsia-950/50 ring-1 ring-fuchsia-500/15">
            <p className="text-lg font-black text-fuchsia-300">200+</p>
            <p className="text-[8px] font-bold uppercase tracking-widest text-fuchsia-500">Videos</p>
          </div>
        </section>

        {/* ━━━ Footer line ━━━ */}
        <div className="mb-6 mt-2">
          <div className="h-px bg-gradient-to-r from-transparent via-violet-800/50 to-transparent" />
          <p className="mt-4 text-center text-[10px] tracking-widest text-violet-800">
            &copy; 2026 {P.name}
          </p>
        </div>
      </div>

      {/* ━━━ Contact — floating bottom sheet style ━━━ */}
      <div className="fixed inset-x-0 bottom-0 z-50">
        <div className="mx-auto max-w-lg px-4 pb-4">
          <a
            href={`mailto:${P.contact!.email}`}
            aria-label="비즈니스 문의 이메일 보내기"
            className="block rounded-3xl bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-500 p-px shadow-xl shadow-fuchsia-600/20 focus:outline-none focus:ring-2 focus:ring-violet-400"
          >
            <div className="flex items-center justify-between rounded-3xl bg-[#0d0015]/95 px-6 py-4 backdrop-blur-xl">
              <div>
                <p className="text-sm font-bold text-white">비즈니스 문의</p>
                <p className="mt-0.5 text-xs text-violet-400">{P.contact!.email}</p>
              </div>
              <div className="flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500">
                <span className="text-lg">✉️</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </main>
  );
}
