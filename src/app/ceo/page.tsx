"use client";

import { useState } from "react";
import Image from "next/image";
import type { Profile } from "@/types/profile";

const FALLBACK_IMAGE = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' fill='%23e2e8f0'%3E%3Crect width='200' height='200'/%3E%3Ctext x='50%25' y='54%25' dominant-baseline='middle' text-anchor='middle' font-size='64' fill='%2394a3b8'%3E?%3C/text%3E%3C/svg%3E";

/* ─── 스타트업 대표 — Magazine Editorial ─── */
const P: Profile = {
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

const serif = "'Playfair Display', serif";

export default function CeoPage() {
  const [imgSrc, setImgSrc] = useState(P.image!);

  return (
    <main className="min-h-screen bg-[#fafafa] text-slate-900">
      <div className="mx-auto max-w-lg px-5 pb-20 pt-14">

        {/* ── Hero: Large serif name ── */}
        <header className="mb-12">
          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-slate-400">
            {P.company} &mdash; {P.title}
          </p>
          <h1
            className="mt-3 text-5xl font-bold leading-[1.1] text-slate-900"
            style={{ fontFamily: serif }}
          >
            {P.name}
          </h1>
          <p
            className="mt-1 text-lg font-semibold text-slate-400"
            style={{ fontFamily: serif }}
          >
            {P.nameEn}
          </p>
          <p className="mt-5 text-sm leading-relaxed text-slate-500 max-w-sm">
            {P.tagline}
          </p>

          {/* Profile image — editorial offset */}
          <div className="mt-8 flex items-start gap-5">
            <div className="relative size-20 shrink-0 overflow-hidden rounded-sm grayscale">
              <Image src={imgSrc} alt={P.name} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover" priority onError={() => setImgSrc(FALLBACK_IMAGE)} />
            </div>
            <p className="text-sm leading-relaxed text-slate-600 pt-1">
              {P.bio}
            </p>
          </div>
        </header>

        {/* ── Divider ── */}
        <div className="h-px bg-slate-300" />

        {/* ── Stats: Inline horizontal ── */}
        <section className="flex items-baseline justify-between py-6">
          {P.stats.map((s, i) => (
            <div key={s.label} className="flex items-baseline gap-2">
              <span
                className="text-2xl font-bold text-slate-900"
                style={{ fontFamily: serif }}
              >
                {s.value}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-slate-400">
                {s.label}
              </span>
              {i < P.stats.length - 1 && (
                <span className="ml-4 text-slate-300 select-none">/</span>
              )}
            </div>
          ))}
        </section>

        {/* ── Divider ── */}
        <div className="h-px bg-slate-300" />

        {/* ── Milestones: Left-aligned timeline with large year numbers ── */}
        <section className="py-10">
          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-slate-400 mb-8">
            Milestones
          </p>
          <div className="space-y-8">
            {P.milestones!.map((m) => (
              <div key={m.year} className="flex gap-6">
                <span
                  className="shrink-0 text-3xl font-bold text-slate-200 w-16 text-right"
                  style={{ fontFamily: serif }}
                >
                  {m.year}
                </span>
                <div className="pt-2">
                  <div className="h-px w-8 bg-slate-900 mb-3" />
                  <p className="text-sm leading-relaxed text-slate-700">{m.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Divider ── */}
        <div className="h-px bg-slate-300" />

        {/* ── Expertise: Numbered list ── */}
        <section className="py-10">
          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-slate-400 mb-8">
            Expertise
          </p>
          <div className="space-y-6">
            {P.values!.map((v, i) => (
              <div key={v.title} className="flex gap-5">
                <span
                  className="shrink-0 text-3xl font-bold text-slate-200 w-10 text-right leading-none"
                  style={{ fontFamily: serif }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="border-l border-slate-200 pl-5 pt-0.5">
                  <h3 className="text-sm font-semibold text-slate-900">{v.title}</h3>
                  <p className="mt-1 text-xs text-slate-500">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Divider ── */}
        <div className="h-px bg-slate-300" />

        {/* ── Contact: Horizontal layout ── */}
        <section className="py-10">
          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-slate-400 mb-6">
            Contact
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {P.contacts!.map((c) => (
              <div key={c.label}>
                <p className="text-[10px] uppercase tracking-widest text-slate-400">{c.label}</p>
                <p className="mt-0.5 text-sm font-medium text-slate-900">{c.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA: Full-width contrasting banner ── */}
        <a
          href={`mailto:${P.contacts![0].value}`}
          aria-label="미팅 요청 이메일 보내기"
          className="block bg-slate-900 -mx-5 px-5 py-8 text-center transition-colors hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-500"
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500 mb-2">
            Let&apos;s Connect
          </p>
          <p
            className="text-2xl font-bold text-white"
            style={{ fontFamily: serif }}
          >
            미팅 요청하기
          </p>
        </a>

        {/* ── Footer ── */}
        <footer className="pt-10 text-center">
          <p className="text-[10px] tracking-widest text-slate-400">
            &copy; 2026 {P.company}
          </p>
        </footer>
      </div>
    </main>
  );
}
