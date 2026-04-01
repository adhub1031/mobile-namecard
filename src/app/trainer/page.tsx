"use client";

import { useState } from "react";
import Image from "next/image";
import type { Profile } from "@/types/profile";

const FALLBACK_IMAGE = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' fill='%23111'%3E%3Crect width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='48' fill='%23333'%3E%F0%9F%92%AA%3C/text%3E%3C/svg%3E";

/* ─── 피트니스 트레이너 — Sports App Dashboard ─── */
const P: Profile = {
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

const contactIcons: Record<string, string> = {
  카카오톡: "💬",
  전화: "📞",
  Instagram: "📸",
  위치: "📍",
};

export default function TrainerPage() {
  const [imgSrc, setImgSrc] = useState(P.image!);

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <div className="mx-auto max-w-lg">
        {/* ── Banner / Cover Photo ── */}
        <section className="relative h-72 w-full overflow-hidden">
          <Image
            src={imgSrc}
            alt={P.name}
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            className="object-cover object-top"
            priority
            onError={() => setImgSrc(FALLBACK_IMAGE)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/70 to-transparent" />

          {/* Name overlay at bottom-left */}
          <div className="absolute bottom-5 left-5 right-5">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-red-500">
              {P.gym}
            </p>
            <h1 className="mt-1 text-3xl font-black uppercase leading-none tracking-tight">
              {P.name}
            </h1>
            <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-neutral-400">
              {P.nameEn} &middot; {P.title}
            </p>
          </div>
        </section>

        {/* ── Stats Bar — Fitness Tracker Style ── */}
        <section className="flex border-y border-red-500/20 bg-red-950/20">
          {P.stats.map((s, i) => (
            <div
              key={s.label}
              className={`flex flex-1 flex-col items-center py-4 ${
                i < P.stats.length - 1 ? "border-r border-red-500/20" : ""
              }`}
            >
              <p className="text-2xl font-black text-white">{s.value}</p>
              <p className="mt-0.5 text-[9px] font-bold uppercase tracking-[0.25em] text-red-500">
                {s.label}
              </p>
              {/* Progress bar visual */}
              <div className="mt-2 h-1 w-10 overflow-hidden rounded-full bg-neutral-800">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-red-600 to-red-400"
                  style={{ width: i === 0 ? "80%" : i === 1 ? "95%" : "70%" }}
                />
              </div>
            </div>
          ))}
        </section>

        <div className="px-5 pb-20 pt-6">
          {/* ── Programs — Horizontal Swipeable Cards ── */}
          <section className="mb-8">
            <h2 className="mb-4 text-[11px] font-black uppercase tracking-[0.3em] text-red-500">
              PROGRAMS
            </h2>
            <div className="-mx-5 flex gap-3 overflow-x-auto px-5 pb-2 scrollbar-hide">
              {P.programs!.map((p) => (
                <div
                  key={p.title}
                  className="flex min-w-[160px] shrink-0 flex-col items-center rounded-2xl border border-red-500/10 bg-gradient-to-b from-red-950/30 to-[#0a0a0a] p-5 text-center"
                >
                  <span className="mb-3 block text-4xl">{p.icon}</span>
                  <h3 className="text-sm font-black uppercase tracking-wide">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-[11px] leading-snug text-neutral-500">
                    {p.desc}
                  </p>
                  {/* Mini progress accent */}
                  <div className="mt-3 h-0.5 w-8 rounded-full bg-red-500/40" />
                </div>
              ))}
            </div>
          </section>

          {/* ── Certifications — Badge / Shield Row ── */}
          <section className="mb-8">
            <h2 className="mb-4 text-[11px] font-black uppercase tracking-[0.3em] text-red-500">
              CERTIFICATIONS
            </h2>
            <div className="grid grid-cols-2 gap-2">
              {P.certs!.map((c) => (
                <div
                  key={c}
                  className="flex items-center gap-2.5 rounded-xl border border-red-500/10 bg-[#0c0c0c] px-3 py-3"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-500/15">
                    <svg
                      className="h-4 w-4 text-red-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 1l2.39 4.843 5.345.777-3.867 3.77.913 5.323L10 13.347l-4.781 2.366.913-5.323L2.265 6.62l5.345-.777L10 1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-xs font-bold text-neutral-300">
                    {c}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* ── About — Pull Quote Style ── */}
          <section className="mb-8">
            <h2 className="mb-4 text-[11px] font-black uppercase tracking-[0.3em] text-red-500">
              ABOUT
            </h2>
            <div className="relative rounded-2xl border border-white/5 bg-[#0a0a0a] p-5">
              {/* Large quotation mark */}
              <span className="absolute -top-2 left-4 text-5xl font-black leading-none text-red-500/30">
                &ldquo;
              </span>
              <p className="mb-4 mt-4 text-base font-bold italic leading-relaxed text-neutral-200">
                {P.tagline}
              </p>
              <div className="h-px bg-gradient-to-r from-red-500/30 to-transparent" />
              <p className="mt-4 text-sm leading-relaxed text-neutral-500">
                {P.bio}
              </p>
            </div>
          </section>

          {/* ── Contact — Icon + Text Rows ── */}
          <section className="mb-8">
            <h2 className="mb-4 text-[11px] font-black uppercase tracking-[0.3em] text-red-500">
              CONTACT
            </h2>
            <div className="divide-y divide-white/5 overflow-hidden rounded-2xl border border-white/5 bg-[#0a0a0a]">
              {P.contacts!.map((c) => (
                <div key={c.label} className="flex items-center gap-3 px-4 py-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-500/10 text-base">
                    {contactIcons[c.label] ?? "📎"}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-600">
                      {c.label}
                    </p>
                    <p className="truncate text-sm font-semibold text-neutral-200">
                      {c.value}
                    </p>
                  </div>
                  <svg
                    className="h-4 w-4 shrink-0 text-neutral-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              ))}
            </div>
          </section>

          {/* ── CTA — Prominent Red Action Button ── */}
          <a
            href="tel:+821088881234"
            aria-label="트레이닝 시작 전화하기"
            className="flex items-center justify-center gap-2 rounded-2xl bg-red-600 py-4 text-center text-base font-black uppercase tracking-wider text-white shadow-[0_0_40px_rgba(239,68,68,0.3)] transition-all hover:bg-red-500 hover:shadow-[0_0_50px_rgba(239,68,68,0.4)] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            START TRAINING
          </a>

          {/* ── Footer ── */}
          <footer className="mt-10 text-center">
            <div className="mx-auto h-1 w-12 rounded-full bg-red-500/20" />
            <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-700">
              &copy; 2026 {P.gym}
            </p>
          </footer>
        </div>
      </div>
    </main>
  );
}
