const PROFILE = {
  name: "Alice",
  title: "Software Engineer",
  bio: "풀스택 개발자. Next.js, React, TypeScript를 주로 사용하며, AI와 자동화에 관심이 많습니다.",
  avatar: null,
  contacts: [
    { label: "Email", value: "alice@example.com", href: "mailto:alice@example.com", icon: "✉️" },
    { label: "Phone", value: "+82-10-0000-0000", href: "tel:+821000000000", icon: "📱" },
    { label: "Location", value: "Seoul, Korea", href: null, icon: "📍" },
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/alice", icon: GithubIcon },
    { label: "LinkedIn", href: "https://linkedin.com/in/alice", icon: LinkedInIcon },
    { label: "Twitter", href: "https://twitter.com/alice", icon: TwitterIcon },
  ],
};

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="rounded-3xl bg-white/5 p-8 shadow-2xl ring-1 ring-white/10 backdrop-blur-sm">
          {/* Avatar */}
          <div className="mb-6 flex justify-center">
            <div className="flex size-24 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 text-4xl font-bold shadow-lg shadow-violet-500/25">
              {PROFILE.name.charAt(0)}
            </div>
          </div>

          {/* Name & Title */}
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-bold tracking-tight">{PROFILE.name}</h1>
            <p className="mt-1 text-sm font-medium text-violet-300">{PROFILE.title}</p>
          </div>

          {/* Bio */}
          <p className="mb-8 text-center text-sm leading-relaxed text-slate-300">
            {PROFILE.bio}
          </p>

          {/* Contacts */}
          <div className="mb-8 space-y-3">
            {PROFILE.contacts.map((c) => (
              <div key={c.label} className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3">
                <span className="text-lg">{c.icon}</span>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-slate-400">{c.label}</p>
                  {c.href ? (
                    <a href={c.href} className="block truncate text-sm font-medium text-white hover:text-violet-300 transition-colors">
                      {c.value}
                    </a>
                  ) : (
                    <p className="truncate text-sm font-medium text-white">{c.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4">
            {PROFILE.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex size-11 items-center justify-center rounded-full bg-white/10 text-slate-300 transition-all hover:bg-violet-500 hover:text-white hover:scale-110"
              >
                <s.icon />
              </a>
            ))}
          </div>
        </div>

        {/* Footer */}
        <p className="mt-6 text-center text-xs text-slate-500">
          &copy; {new Date().getFullYear()} {PROFILE.name}
        </p>
      </div>
    </main>
  );
}
