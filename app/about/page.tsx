"use client";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import { ArrowRight, Heart, Zap, Globe, Users, BookOpen, Star, Sparkles } from "lucide-react";

const TEAM = [
  { name: "Founder", role: "Founder & Builder", color: "var(--purple-soft)", initials: "W" },
];

const VALUES = [
  { icon: Heart, color: "var(--purple-soft)", ic: "var(--purple-wisp)", title: "Built for creators", desc: "Every feature is designed with creators, developers, artists, and founders in mind — not enterprise teams. Your passion is our priority." },
  { icon: Sparkles, color: "#FEF9C3", ic: "#CA8A04", title: "Embrace the messy middle", desc: "We believe shipping imperfect work beats hoarding perfect drafts. We celebrate the process, not just the polished outcome." },
  { icon: Globe, color: "#E0F2FE", ic: "#0284C7", title: "Build in public", desc: "Transparency builds trust and community. We encourage sharing the journey — the late nights, the bugs, and the breakthroughs." },
  { icon: Users, color: "#DCFCE7", ic: "#16A34A", title: "Community first", desc: "Your followers aren't just numbers. They're people rooting for your project. We help you connect meaningfully with those who care." },
];

export default function AboutPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#FFFFFF" }}>
      <Navbar />

      {/* Hero */}
      <section style={{ paddingTop: 140, paddingBottom: 80, background: "linear-gradient(180deg, #F8FAFF 0%, #FFFFFF 100%)" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "var(--purple-soft)", border: "1px solid rgba(124, 58, 237, 0.2)", padding: "6px 16px", borderRadius: 999, marginBottom: 24 }} className="animate-fadein">
            <BookOpen size={14} color="var(--purple-wisp)" />
            <span style={{ fontSize: 13, fontWeight: 600, color: "var(--purple-wisp)" }}>Our story</span>
          </div>
          <h1 className="animate-fadein delay-100" style={{ fontFamily: "Sora, sans-serif", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 800, color: "#0F172A", letterSpacing: "-0.03em", lineHeight: 1.15, marginBottom: 24 }}>
            We believe every project deserves to be seen.
          </h1>
          <p className="animate-fadein delay-200" style={{ fontSize: 18, color: "#475569", lineHeight: 1.7 }}>
            Wispfolio was born out of frustration — great projects dying in scattered folders, 
            with no way to share the journey. We set out to change that.
          </p>
        </div>
      </section>

      {/* Origin story */}
      <section style={{ padding: "80px 24px", background: "#FFFFFF" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ background: "#F8FAFF", border: "1px solid #E2E8F0", borderRadius: 24, padding: "48px 40px", boxShadow: "0 12px 40px rgba(0,0,0,0.03)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
              <div style={{ width: 44, height: 44, background: "var(--purple-soft)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Star size={20} color="var(--purple-wisp)" />
              </div>
              <span style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 18, color: "#0F172A" }}>Why Wispfolio exists</span>
            </div>
            <p style={{ fontSize: 16, color: "#475569", lineHeight: 1.8, marginBottom: 20 }}>
              Most creators have the same problem: their work lives everywhere at once. Ideas in notes apps, 
              designs in Drive, tasks in Notion, progress updates on social media, and the actual files in five 
              different folders. Nothing speaks to anything else.
            </p>
            <p style={{ fontSize: 16, color: "#475569", lineHeight: 1.8, marginBottom: 20 }}>
              We wanted something that felt like a creative sanctuary — one place where you could capture 
              inspiration, track where you are, organize your assets, and share your progress in a way 
              that felt real and human — not polished and corporate.
            </p>
            <p style={{ fontSize: 16, color: "#475569", lineHeight: 1.8 }}>
              The result is the <strong style={{ color: "#0F172A" }}>Project Passport</strong> — a living document 
              of your creative journey. From the first spark of an idea to the public launch, everything in one glowing place.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: "80px 24px", background: "#F8FAFF", borderTop: "1px solid #E2E8F0" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2 style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: "clamp(28px, 4vw, 40px)", color: "#0F172A", letterSpacing: "-0.02em", marginBottom: 14 }}>
              What guides our light
            </h2>
            <p style={{ fontSize: 17, color: "#64748B" }}>The values we build Wispfolio around, every single day.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
            {VALUES.map((v) => (
              <div key={v.title} style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 20, padding: "32px 28px", transition: "all 0.3s ease", cursor: "default" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 30px var(--purple-glow)";
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--purple-soft)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLElement).style.borderColor = "#E2E8F0";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                <div style={{ width: 52, height: 52, background: v.color, borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                  <v.icon size={24} color={v.ic} />
                </div>
                <h3 style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 18, color: "#0F172A", marginBottom: 10 }}>{v.title}</h3>
                <p style={{ fontSize: 15, color: "#64748B", lineHeight: 1.6 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats - Replaced with Beta messaging */}
      <section style={{ padding: "80px 24px", background: "#FFFFFF" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-flex", flexDirection: "column", gap: 16, alignItems: "center" }}>
            <div style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 40, color: "var(--purple-wisp)", letterSpacing: "-0.02em" }}>
              Currently in Private Beta
            </div>
            <p style={{ fontSize: 18, color: "#64748B", maxWidth: 600, lineHeight: 1.6 }}>
              We are carefully letting early creators in to help shape the platform. 
              Join now to be part of the foundation.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 24px", background: "#F8FAFF", borderTop: "1px solid #E2E8F0" }}>
        <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 34, color: "#0F172A", letterSpacing: "-0.02em", marginBottom: 16 }}>
            Come build with us
          </h2>
          <p style={{ fontSize: 17, color: "#64748B", marginBottom: 32, lineHeight: 1.7 }}>
            Wispfolio is built in public, by a small team that cares deeply about creators.
            We'd love to have you along for the journey.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/auth/signup" className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "14px 28px", fontSize: 16, textDecoration: "none" }}>
              Get started <ArrowRight size={16} />
            </Link>
            <Link href="/#features" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", border: "1.5px solid #E2E8F0", color: "#334155", borderRadius: 8, fontSize: 15, fontWeight: 600, textDecoration: "none", transition: "all 0.2s" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--purple-wisp)";
                (e.currentTarget as HTMLElement).style.color = "var(--purple-wisp)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#E2E8F0";
                (e.currentTarget as HTMLElement).style.color = "#334155";
              }}
            >
              See features
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "#0F172A", color: "white", padding: "40px 24px", textAlign: "center" }}>
        <p style={{ fontSize: 14, color: "#94A3B8" }}>© 2026 Wispfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}
