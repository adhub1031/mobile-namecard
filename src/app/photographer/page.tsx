"use client";

import { useState } from "react";
import Image from "next/image";
import type { Profile } from "@/types/profile";

const FALLBACK_IMAGE = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='600' fill='%23222'%3E%3Crect width='400' height='600'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='48' fill='%23555'%3E%F0%9F%93%B7%3C/text%3E%3C/svg%3E";

/* ─── 포토그래퍼 — Immersive Full-bleed ─── */
const P: Profile = {
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
    { icon: "✉", label: "Email", value: "sujin@studio-moment.kr" },
    { icon: "☎", label: "Phone", value: "+82-10-5555-7890" },
    { icon: "📷", label: "Instagram", value: "@sujin.moment" },
  ],
};

export default function PhotographerPage() {
  const [imgSrc, setImgSrc] = useState(P.image!);

  return (
    <main className="min-h-screen bg-[#111] text-white">
      {/* ── Full-viewport Hero ── */}
      <section className="relative h-screen w-full">
        <Image
          src={imgSrc}
          alt={P.name}
          fill
          sizes="100vw"
          priority
          className="object-cover object-top"
          onError={() => setImgSrc(FALLBACK_IMAGE)}
        />
        {/* Heavy gradient at bottom for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/40 to-transparent" />

        {/* Name + title pinned to bottom */}
        <div className="absolute bottom-24 left-0 w-full px-6">
          <div className="mx-auto max-w-lg">
            <p className="mb-1 text-xs font-medium uppercase tracking-[0.3em] text-amber-400">
              {P.title}
            </p>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight">
              {P.name}
            </h1>
            <p className="mt-2 text-sm italic text-white/50">
              &ldquo;{P.tagline}&rdquo;
            </p>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="h-6 w-[1px] bg-white/30" />
        </div>
      </section>

      {/* ── Dark Overlay Card ── */}
      <div className="relative z-10 -mt-16 mx-auto max-w-lg rounded-t-3xl bg-[#111] px-6 pb-20 pt-10 shadow-[0_-20px_60px_rgba(0,0,0,0.6)]">
        {/* Stats — horizontal row with vertical dividers */}
        <section className="mb-10 flex items-center justify-center">
          {P.stats.map((s, i) => (
            <div key={s.label} className="flex items-center">
              <div className="px-6 text-center">
                <p className="text-2xl font-bold text-amber-400">{s.value}</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-neutral-500">
                  {s.label}
                </p>
              </div>
              {i < P.stats.length - 1 && (
                <div className="h-8 w-px bg-white/10" />
              )}
            </div>
          ))}
        </section>

        {/* Bio */}
        <section className="mb-10">
          <p className="text-sm leading-[1.8] text-neutral-400">{P.bio}</p>
        </section>

        {/* Specialties — horizontal scrollable pills */}
        <section className="mb-10">
          <h2 className="mb-4 text-[11px] font-bold uppercase tracking-[0.25em] text-amber-400/80">
            Specialties
          </h2>
          <div className="-mx-6 flex gap-3 overflow-x-auto px-6 pb-2 scrollbar-hide">
            {P.specialties!.map((s) => (
              <div
                key={s.title}
                className="flex flex-none flex-col rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5"
              >
                <span className="whitespace-nowrap text-sm font-medium">
                  {s.title}
                </span>
                <span className="whitespace-nowrap text-[10px] text-neutral-500">
                  {s.desc}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Clients — single horizontal line with dot separators */}
        <section className="mb-10">
          <h2 className="mb-4 text-[11px] font-bold uppercase tracking-[0.25em] text-amber-400/80">
            Clients
          </h2>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            {P.clients!.map((c, i) => (
              <span key={c} className="flex items-center gap-3">
                <span className="text-xs text-neutral-400">{c}</span>
                {i < P.clients!.length - 1 && (
                  <span className="text-neutral-700">·</span>
                )}
              </span>
            ))}
          </div>
        </section>

        {/* Contact — minimalist list, icons left-aligned */}
        <section className="mb-10">
          <h2 className="mb-4 text-[11px] font-bold uppercase tracking-[0.25em] text-amber-400/80">
            Contact
          </h2>
          <ul className="space-y-4">
            {P.contacts!.map((c) => (
              <li key={c.label} className="flex items-center gap-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-sm">
                  {c.icon as string}
                </span>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-neutral-600">
                    {c.label}
                  </p>
                  <p className="text-sm text-neutral-300">{c.value}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <a
          href={`mailto:${P.contacts![0].value}`}
          aria-label="촬영 문의 이메일 보내기"
          className="block rounded-full bg-amber-500 py-4 text-center text-sm font-bold uppercase tracking-wider text-black transition-colors hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
        >
          촬영 문의하기
        </a>

        {/* Footer */}
        <footer className="mt-12 text-center">
          <div className="mb-4 h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />
          <p className="text-[10px] tracking-widest text-neutral-700">
            &copy; 2026 Studio Moment
          </p>
        </footer>
      </div>
    </main>
  );
}
