"use client";

import { useState } from "react";
import Image from "next/image";
import type { Profile } from "@/types/profile";

const FALLBACK_IMAGE = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='420' fill='%23e8dcc8'%3E%3Crect width='400' height='420'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='48' fill='%238b7355'%3E%E2%98%95%3C/text%3E%3C/svg%3E";

/* ─── 카페 사장님 — Organic Stacked Card Style ─── */
const P: Profile = {
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
  const [imgSrc, setImgSrc] = useState(P.image!);

  return (
    <main className="min-h-screen bg-[#f5f0e8] text-[#3e2c1c]">
      {/* Layered organic texture background */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#f5edd8_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,#ece0c9_0%,transparent_50%)]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC44IiBudW1PY3RhdmVzPSI0IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIGZpbHRlcj0idXJsKCNuKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]" />
      </div>

      <div className="relative mx-auto max-w-lg pb-16">
        {/* ── Hero: Large rounded-rect image with overlaid shop name ── */}
        <section className="relative">
          <div className="relative mx-4 mt-6 h-[420px] overflow-hidden rounded-3xl shadow-[0_8px_40px_rgba(80,50,20,0.15)]">
            <Image
              src={imgSrc}
              alt={P.name}
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover"
              priority
              onError={() => setImgSrc(FALLBACK_IMAGE)}
            />
            {/* Warm gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#2a1a0e]/80 via-[#2a1a0e]/20 to-transparent" />
            {/* Overlaid text */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-xs font-medium tracking-[0.25em] text-amber-200/80 uppercase">
                {P.title}
              </p>
              <h1 className="mt-1 text-3xl font-bold tracking-tight text-white">
                {P.name}
              </h1>
              <p className="mt-2 inline-block rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium text-amber-100 backdrop-blur-sm">
                {P.shop}
              </p>
            </div>
          </div>
        </section>

        {/* ── Tagline card — overlaps hero with negative margin ── */}
        <section className="relative z-10 mx-8 -mt-6 rounded-3xl bg-white/80 px-6 py-5 shadow-[0_4px_24px_rgba(80,50,20,0.1)] backdrop-blur-sm">
          <p className="text-center text-sm italic leading-relaxed text-[#6b4c30]">
            &ldquo;{P.tagline}&rdquo;
          </p>
        </section>

        {/* ── Stats: inline accent numbers ── */}
        <section className="relative z-20 mx-6 -mt-3 rounded-3xl bg-[#e8dcc8] px-6 py-5 shadow-[0_4px_20px_rgba(80,50,20,0.08)]">
          <p className="text-center text-sm leading-relaxed text-[#5a3e28]">
            <span className="text-lg font-bold text-[#8b5e34]">{P.stats[0].value}</span>
            <span className="mx-1 text-[#a07850]">{P.stats[0].label} 바리스타</span>
            <span className="mx-2 text-[#c4a882]">&middot;</span>
            <span className="text-lg font-bold text-[#8b5e34]">{P.stats[1].value}</span>
            <span className="mx-1 text-[#a07850]">{P.stats[1].label}</span>
            <span className="mx-2 text-[#c4a882]">&middot;</span>
            <span className="text-lg font-bold text-[#8b5e34]">{P.stats[2].value}</span>
            <span className="mx-1 text-[#a07850]">{P.stats[2].label}</span>
          </p>
        </section>

        {/* ── About card — overlapping stack continues ── */}
        <section className="relative z-10 mx-5 -mt-2 rounded-3xl bg-white/70 p-6 shadow-[0_4px_24px_rgba(80,50,20,0.08)] backdrop-blur-sm">
          <h2 className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#a07850]">
            About
          </h2>
          <p className="text-sm leading-[1.8] text-[#5a3e28]">{P.bio}</p>
        </section>

        {/* ── Menu: horizontal scroll strip ── */}
        <section className="mt-8 pl-5">
          <h2 className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[#a07850]">
            Menu
          </h2>
          <div className="flex gap-4 overflow-x-auto pb-4 pr-5 scrollbar-hide">
            {P.menu!.map((m, i) => (
              <div
                key={m.title}
                className="flex-none w-44 rounded-3xl p-5 shadow-[0_4px_20px_rgba(80,50,20,0.08)]"
                style={{
                  backgroundColor: i % 2 === 0 ? "#fff9f0" : "#f0e6d6",
                }}
              >
                <span className="mb-3 flex size-10 items-center justify-center rounded-2xl bg-[#8b5e34]/10 text-lg">
                  {i === 0 ? "☕" : i === 1 ? "🥛" : i === 2 ? "🍊" : "🍰"}
                </span>
                <h3 className="mt-3 text-sm font-bold text-[#3e2c1c]">
                  {m.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-[#8b7355]">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Info: physical business card style ── */}
        <section className="mx-5 mt-6">
          <h2 className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[#a07850]">
            Contact
          </h2>
          <div className="relative rounded-3xl bg-white shadow-[0_8px_32px_rgba(80,50,20,0.1)]">
            {/* Card top accent stripe */}
            <div className="h-2 rounded-t-3xl bg-gradient-to-r from-[#8b5e34] via-[#a07850] to-[#c4a882]" />
            <div className="px-6 pb-6 pt-5">
              {/* Card header */}
              <div className="mb-4 flex items-center justify-between border-b border-[#e8dcc8] pb-4">
                <div>
                  <p className="text-lg font-bold text-[#3e2c1c]">{P.shop}</p>
                  <p className="text-xs text-[#a07850]">{P.name} &middot; {P.title}</p>
                </div>
                <div className="flex size-10 items-center justify-center rounded-2xl bg-[#f5f0e8] text-lg">
                  ☕
                </div>
              </div>
              {/* Card details */}
              <div className="space-y-3">
                {P.info!.map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <span className="mt-0.5 w-14 shrink-0 text-[10px] font-semibold uppercase tracking-wider text-[#c4a882]">
                      {item.label}
                    </span>
                    <span className="text-sm text-[#5a3e28]">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA: warm wooden button ── */}
        <section className="mx-5 mt-8">
          <a
            href="tel:0212345678"
            aria-label="예약 전화하기"
            className="block rounded-3xl bg-gradient-to-br from-[#6b4226] via-[#8b5e34] to-[#a07040] py-4 text-center text-sm font-bold tracking-wide text-[#f5edd8] shadow-[0_6px_24px_rgba(107,66,38,0.3)] transition-transform active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#8b5e34]"
          >
            예약 전화하기
          </a>
        </section>

        {/* ── Footer ── */}
        <footer className="mt-12 text-center">
          <div className="mx-12 mb-4 h-px bg-gradient-to-r from-transparent via-[#c4a882]/40 to-transparent" />
          <p className="text-[10px] tracking-widest text-[#b8a080]">
            &copy; 2026 {P.shop}
          </p>
        </footer>
      </div>
    </main>
  );
}
