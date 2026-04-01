import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-gold-500/8 blur-[120px]" />
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-violet-600/8 blur-[120px]" />
      </div>

      <div className="relative">
        <p
          className="text-8xl font-bold text-gold-500/20"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          404
        </p>
        <h1
          className="mt-4 text-2xl font-bold tracking-tight text-white"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Page Not Found
        </h1>
        <p className="mt-3 text-sm text-slate-400">
          요청하신 페이지를 찾을 수 없습니다.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-full bg-gold-500/15 px-6 py-2.5 text-sm font-semibold text-gold-400 transition-all hover:bg-gold-500/25 focus:outline-none focus:ring-2 focus:ring-gold-500/50"
        >
          홈으로 돌아가기
        </Link>
      </div>
    </main>
  );
}
