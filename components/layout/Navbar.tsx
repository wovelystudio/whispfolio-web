"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Explore", href: "#explore" },
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "About", href: "/about" },
  ];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all 0.2s",
        background: scrolled ? "rgba(255,255,255,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #E2E8F0" : "none",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
          <div
            style={{
              width: 32,
              height: 32,
              background: "#2563EB",
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3 9C3 5.686 5.686 3 9 3s6 2.686 6 6-2.686 6-6 6S3 12.314 3 9z" stroke="white" strokeWidth="1.5"/>
              <path d="M9 6v6M6 9h6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <span
            style={{
              fontFamily: "Sora, sans-serif",
              fontWeight: 700,
              fontSize: 18,
              color: "#0F172A",
              letterSpacing: "-0.02em",
            }}
          >
            Wispfolio
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: 4 }} className="hidden-mobile">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              style={{
                padding: "8px 16px",
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 500,
                color: "#475569",
                textDecoration: "none",
                transition: "all 0.15s",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.background = "#F1F5F9";
                (e.target as HTMLElement).style.color = "#0F172A";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.background = "transparent";
                (e.target as HTMLElement).style.color = "#475569";
              }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }} className="hidden-mobile">
          <Link
            href="/auth/signin"
            style={{
              padding: "8px 16px",
              fontSize: 14,
              fontWeight: 600,
              color: "#2563EB",
              textDecoration: "none",
              borderRadius: 8,
              transition: "background 0.15s",
            }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.background = "#EFF6FF")}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.background = "transparent")}
          >
            Sign in
          </Link>
          <Link
            href="/auth/signup"
            style={{
              padding: "9px 20px",
              fontSize: 14,
              fontWeight: 600,
              color: "white",
              background: "#2563EB",
              borderRadius: 8,
              textDecoration: "none",
              transition: "background 0.15s",
            }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.background = "#1D4ED8")}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.background = "#2563EB")}
          >
            Get started
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 4,
            color: "#0F172A",
          }}
          className="show-mobile"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          style={{
            background: "white",
            borderTop: "1px solid #E2E8F0",
            padding: "12px 24px 20px",
          }}
        >
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              style={{
                display: "block",
                padding: "12px 0",
                fontSize: 15,
                fontWeight: 500,
                color: "#334155",
                textDecoration: "none",
                borderBottom: "1px solid #F1F5F9",
              }}
            >
              {l.label}
            </Link>
          ))}
          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 16 }}>
            <Link href="/auth/signin" style={{ textAlign: "center", padding: "10px", fontSize: 14, fontWeight: 600, color: "#2563EB", textDecoration: "none", border: "1.5px solid #2563EB", borderRadius: 8 }}>
              Sign in
            </Link>
            <Link href="/auth/signup" style={{ textAlign: "center", padding: "10px", fontSize: 14, fontWeight: 600, color: "white", background: "#2563EB", textDecoration: "none", borderRadius: 8 }}>
              Get started
            </Link>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
    </header>
  );
}
