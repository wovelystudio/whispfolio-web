"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";

const LINKS = [
  { label: "Explore Projects", href: "/explore" },
  { label: "Features", href: "/#features" },
  { label: "Pricing", href: "/#pricing" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      transition: "all 0.25s cubic-bezier(0.16,1,0.3,1)",
      background: mobileOpen
        ? "white"
        : scrolled ? "rgba(255,255,255,0.94)" : "transparent",
      backdropFilter: scrolled && !mobileOpen ? "blur(16px)" : "none",
      borderBottom: (scrolled || mobileOpen) ? "1px solid #E2E8F0" : "none",
    }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 20px", height: 66, display: "flex", alignItems: "center", justifyContent: "space-between" }}>

        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 9, textDecoration: "none", flexShrink: 0 }}>
          <div style={{ width: 34, height: 34, background: "linear-gradient(135deg, #2563EB, #7C3AED)", borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 8px rgba(37,99,235,0.3)" }}>
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="3.5" fill="white" opacity="0.9"/>
              <circle cx="10" cy="10" r="6" stroke="white" strokeWidth="1.2" strokeDasharray="2 2" opacity="0.5"/>
              <circle cx="10" cy="4" r="1.5" fill="white" opacity="0.7"/>
              <circle cx="16" cy="13" r="1" fill="white" opacity="0.5"/>
              <circle cx="4" cy="13" r="1.2" fill="white" opacity="0.6"/>
            </svg>
          </div>
          <span style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 18, color: "#0F172A", letterSpacing: "-0.03em" }}>
            Wispfolio
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: 2 }}>
          {LINKS.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className={`nav-link ${pathname === l.href ? "active" : ""}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Link href="/auth/signin" style={{ padding: "8px 16px", fontSize: 14, fontWeight: 600, color: "#334155", textDecoration: "none", borderRadius: 8, transition: "color 0.15s" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#2563EB")}
            onMouseLeave={e => (e.currentTarget.style.color = "#334155")}>
            Sign in
          </Link>
          <Link href="/auth/signup" className="btn-primary btn-sm" style={{ gap: 6 }}>
            Get started <ArrowRight size={14} />
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="nav-mobile-toggle"
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
          style={{
            background: "none", border: "none", cursor: "pointer",
            padding: "8px", color: "#0F172A", borderRadius: 8,
            display: "none", alignItems: "center", justifyContent: "center",
            transition: "background 0.15s",
          }}>
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div style={{
        background: "white",
        maxHeight: mobileOpen ? "600px" : "0px",
        overflow: "hidden",
        transition: "max-height 0.35s cubic-bezier(0.16,1,0.3,1)",
        borderTop: mobileOpen ? "1px solid #F1F5F9" : "none",
      }}>
        <div style={{ padding: "8px 20px 24px" }}>
          {LINKS.map((l, i) => (
            <Link key={l.label} href={l.href} onClick={() => setMobileOpen(false)}
              style={{
                display: "flex", alignItems: "center", padding: "14px 4px",
                fontSize: 16, fontWeight: 600, color: pathname === l.href ? "#2563EB" : "#0F172A",
                textDecoration: "none",
                borderBottom: i < LINKS.length - 1 ? "1px solid #F8FAFF" : "none",
                gap: 8,
                transition: "color 0.15s",
              }}>
              {l.label}
            </Link>
          ))}
          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 20 }}>
            <Link href="/auth/signin" onClick={() => setMobileOpen(false)}
              style={{ textAlign: "center", padding: "13px", fontSize: 15, fontWeight: 600, color: "#2563EB", border: "1.5px solid #BFDBFE", borderRadius: 10, textDecoration: "none" }}>
              Sign in
            </Link>
            <Link href="/auth/signup" onClick={() => setMobileOpen(false)}
              style={{ textAlign: "center", padding: "13px", fontSize: 15, fontWeight: 700, color: "white", background: "linear-gradient(135deg, #2563EB, #7C3AED)", borderRadius: 10, textDecoration: "none" }}>
              Get started free
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-toggle { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
