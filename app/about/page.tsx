"use client";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import { ArrowRight, Heart, Zap, Globe, Users, BookOpen, Star } from "lucide-react";

const TEAM = [
  { name: "Founder", role: "Founder & Builder", color: "#DBEAFE", initials: "W" },
];

const VALUES = [
  { icon: Heart, color: "#FFE4E6", ic: "#E11D48", title: "Built for creators", desc: "Every feature is designed with creators, developers, artists, and founders in mind — not enterprise teams." },
  { icon: Zap, color: "#FEF9C3", ic: "#CA8A04", title: "Execution over perfection", desc: "We believe shipping imperfect work beats hoarding perfect drafts. Progress over polish, always." },
  { icon: Globe, color: "#DCFCE7", ic: "#16A34A", title: "Build in public", desc: "Transparency builds trust. We encourage sharing the journey — the messy middle, not just the highlight reel." },
  { icon: Users, color: "#EDE9FE", ic: "#7C3AED", title: "Community first", desc: "Your followers aren't just numbers. They're people rooting for your project. We help you connect meaningfully." },
];

export default function AboutPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#FFFFFF" }}>
      <Navbar />

      {/* Hero */}
      <section style={{ paddingTop: 120, paddingBottom: 72, background: "linear-gradient(180deg, #F8FAFF 0%, #FFFFFF 100%)" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#EFF6FF", border: "1px solid #BFDBFE", padding: "5px 14px", borderRadius: 999, marginBottom: 24 }}>
            <BookOpen size={13} color="#2563EB" />
            <span style={{ fontSize: 13, fontWeight: 600, color: "#2563EB" }}>Our story</span>
          </div>
          <h1 style={{ fontFamily: "Sora, sans-serif", fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, color: "#0F172A", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 20 }}>
            We believe every project deserves to be seen
          </h1>
          <p style={{ fontSize: 18, color: "#475569", lineHeight: 1.7 }}>
            Wispfolio was born out of frustration — great projects dying in scattered folders, 
            with no way to share the journey. We set out to fix that.
          </p>
        </div>
      </section>

      {/* Origin story */}
      <section style={{ padding: "64px 24px", background: "#FFFFFF" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ background: "#F8FAFF", border: "1px solid #E2E8F0", borderRadius: 20, padding: "40px 36px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <div style={{ width: 40, height: 40, background: "#EFF6FF", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Star size={18} color="#2563EB" />
              </div>
              <span style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 16, color: "#0F172A" }}>Why Wispfolio exists</span>
            </div>
            <p style={{ fontSize: 16, color: "#475569", lineHeight: 1.8, marginBottom: 16 }}>
              Most creators have the same problem: their work lives everywhere at once. Ideas in notes apps, 
              designs in Drive, tasks in Notion, progress updates on Twitter, and the actual files in five 
              different folders. Nothing talks to anything else.
            </p>
            <p style={{ fontSize: 16, color: "#475569", lineHeight: 1.8, marginBottom: 16 }}>
              We wanted something that felt like a creative HQ — one place where you could capture 
              inspiration, track where you are, organize your assets, and share your progress in a way 
              that felt real and human — not polished and corporate.
            </p>
            <p style={{ fontSize: 16, color: "#475569", lineHeight: 1.8 }}>
              The result is the <strong style={{ color: "#0F172A" }}>Project Passport</strong> — a living document 
              of your creative journey. From the first sketch to the public launch, everything in one place.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: "64px 24px", background: "#F8FAFF", borderTop: "1px solid #E2E8F0" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: "clamp(26px, 4vw, 36px)", color: "#0F172A", letterSpacing: "-0.02em", marginBottom: 12 }}>
              What we stand for
            </h2>
            <p style={{ fontSize: 16, color: "#64748B" }}>The values we build Wispfolio around, every single day.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
            {VALUES.map((v) => (
              <div key={v.title} style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 16, padding: "28px 24px" }}>
                <div style={{ width: 46, height: 46, background: v.color, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                  <v.icon size={22} color={v.ic} />
                </div>
                <h3 style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 16, color: "#0F172A", marginBottom: 8 }}>{v.title}</h3>
                <p style={{ fontSize: 14, color: "#64748B", lineHeight: 1.6 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: "64px 24px", background: "#FFFFFF" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 32, textAlign: "center" }}>
            {[
              { val: "2,000+", label: "Creators joined" },
              { val: "1,400+", label: "Projects documented" },
              { val: "18k+", label: "Updates shared" },
              { val: "Beta", label: "Currently in" },
            ].map((s) => (
              <div key={s.label}>
                <div style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 34, color: "#2563EB", letterSpacing: "-0.02em" }}>{s.val}</div>
                <div style={{ fontSize: 14, color: "#94A3B8", fontWeight: 500, marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "64px 24px", background: "#F8FAFF", borderTop: "1px solid #E2E8F0" }}>
        <div style={{ maxWidth: 560, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 30, color: "#0F172A", letterSpacing: "-0.02em", marginBottom: 14 }}>
            Come build with us
          </h2>
          <p style={{ fontSize: 16, color: "#64748B", marginBottom: 28, lineHeight: 1.7 }}>
            Wispfolio is built in public, by a small team that cares deeply about creators.
            We&apos;d love to have you along for the journey.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/auth/signup" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 24px", background: "#2563EB", color: "white", borderRadius: 10, fontSize: 15, fontWeight: 700, textDecoration: "none" }}>
              Get started free <ArrowRight size={15} />
            </Link>
            <Link href="/#features" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 24px", border: "1.5px solid #E2E8F0", color: "#334155", borderRadius: 10, fontSize: 15, fontWeight: 600, textDecoration: "none" }}>
              See features
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "#0F172A", color: "white", padding: "32px 24px", textAlign: "center" }}>
        <p style={{ fontSize: 13, color: "#475569" }}>© 2025 Wispfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}
