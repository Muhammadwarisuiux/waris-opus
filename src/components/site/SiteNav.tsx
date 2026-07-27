import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/design-system", label: "System" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 pointer-events-none">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4">
        <nav
          className={`pointer-events-auto flex items-center justify-between rounded-full pl-5 pr-2 py-2 transition-all duration-300 ${
            scrolled ? "glass-strong shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)]" : "glass"
          }`}
          aria-label="Primary"
        >
          <Link to="/" className="flex items-center gap-2 group">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary via-brand-cyan to-brand-violet text-[13px] font-bold text-white shadow-[0_0_24px_-6px_var(--primary)]">
              <img 
                src="/warish-logo.png" 
                alt="Logo" 
                className="h-8 w-8 rounded-full object-cover"
              />
            </span>
            <span className="font-display text-[15px] font-semibold tracking-tight">MW.</span>
          </Link>

          <ul className="hidden md:flex items-center gap-1 text-sm">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="px-3.5 py-2 rounded-full text-muted-foreground hover:text-foreground transition-colors"
                  activeProps={{ className: "px-3.5 py-2 rounded-full text-foreground bg-white/5" }}
                  activeOptions={{ exact: l.to === "/" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-white text-black px-4 py-2 text-sm font-medium hover:bg-white/90 transition-colors"
            >
              Let's talk
              <span aria-hidden>→</span>
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 hover:bg-white/10"
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              <span className="sr-only">Menu</span>
              <div className="flex flex-col gap-1.5">
                <span className="block h-px w-4 bg-white" />
                <span className="block h-px w-4 bg-white" />
              </div>
            </button>
          </div>
        </nav>

        {open && (
          <div className="md:hidden pointer-events-auto mt-2 glass-strong rounded-2xl p-2">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground rounded-xl hover:bg-white/5"
                activeProps={{ className: "block px-4 py-3 text-sm text-foreground rounded-xl bg-white/5" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
