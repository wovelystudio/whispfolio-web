"use client";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import {
  Lightbulb, TrendingUp, Share2, BookOpen, CheckSquare,
  HardDrive, Image, Globe, Star, Zap, Users, ArrowRight, Check
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const ORBIT_TAGS = [
  { label: "Inspiration", color: "#DBEAFE", text: "#1D4ED8", cls: "orbit-1" },
  { label: "Progress", color: "#DCFCE7", text: "#16A34A", cls: "orbit-2" },
  { label: "Assets", color: "#FEF9C3", text: "#CA8A04", cls: "orbit-3" },
  { label: "Milestones", color: "#F3E8FF", text: "#9333EA", cls: "orbit-4" },
  { label: "Proof Wall", color: "#FFE4E6", text: "#E11D48", cls: "orbit-5" },
];

function PassportCard() {
  return (
    <div
      style={{
        background: "white",
        border: "1px solid #E2E8F0",
        borderRadius: 20,
        padding: "28px 24px",
        width: 280,
        boxShadow: "0 20px 60px rgba(37,99,235,0.12), 0 4px 16px rgba(0,0,0,0.06)",
        position: "relative",
        zIndex: 2,
      }}
      className="animate-float"
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
        <div style={{ width: 36, height: 36, background: "#EFF6FF", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <BookOpen size={18} color="#2563EB" />
        </div>
        <div>
          <div style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 13, color: "#0F172A" }}>Project Passport</div>
          <div style={{ fontSize: 11, color: "#94A3B8" }}>My Mobile App · Active</div>
        </div>
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 4, background: "#DCFCE7", padding: "3px 8px", borderRadius: 999 }}>
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#16A34A" }} />
          <span style={{ fontSize: 11, color: "#16A34A", fontWeight: 600 }}>Live</span>
        </div>
      </div>

      <div style={{ marginBottom: 16 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
          <span style={{ fontSize: 12, color: "#64748B", fontWeight: 500 }}>Progress</span>
          <span style={{ fontSize: 12, color: "#2563EB", fontWeight: 700 }}>68%</span>
        </div>
        <div style={{ height: 6, background: "#E2E8F0", borderRadius: 999, overflow: "hidden" }}>
          <div style={{ height: "100%", width: "68%", background: "#2563EB", borderRadius: 999 }} />
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {[
          { label: "Design mockups", done: true },
          { label: "MVP build", done: true },
          { label: "Beta launch", done: false },
        ].map((t) => (
          <div key={t.label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{
              width: 16, height: 16, borderRadius: 4, border: t.done ? "none" : "1.5px solid #CBD5E1",
              background: t.done ? "#2563EB" : "transparent",
              display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
            }}>
              {t.done && <Check size={10} color="white" strokeWidth={3} />}
            </div>
            <span style={{ fontSize: 12, color: t.done ? "#94A3B8" : "#334155", textDecoration: t.done ? "line-through" : "none" }}>
              {t.label}
            </span>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 14, paddingTop: 14, borderTop: "1px solid #F1F5F9", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", gap: -4 }}>
          {["#2563EB", "#16A34A", "#F59E0B"].map((c, i) => (
            <div key={i} style={{ width: 22, height: 22, borderRadius: "50%", background: c, border: "2px solid white", marginLeft: i > 0 ? -6 : 0 }} />
          ))}
        </div>
        <span style={{ fontSize: 11, color: "#64748B" }}>12 followers</span>
      </div>
    </div>
  );
}

function HeroOrbit() {
  return (
    <div style={{ position: "relative", width: 400, height: 400, display: "flex", alignItems: "center", justifyContent: "center" }}>
      {/* Orbit rings */}
      <div style={{ position: "absolute", width: 300, height: 300, borderRadius: "50%", border: "1px dashed #BFDBFE", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
      <div style={{ position: "absolute", width: 360, height: 360, borderRadius: "50%", border: "1px dashed #E2E8F0", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />

      {/* Center card */}
      <div style={{ position: "relative", zIndex: 3 }}>
        <PassportCard />
      </div>

      {/* Orbiting tags */}
      {ORBIT_TAGS.map((tag) => (
        <div
          key={tag.label}
          style={{ position: "absolute", top: "50%", left: "50%", transformOrigin: "0 0" }}
          className={tag.cls}
        >
          <div style={{
            background: tag.color,
            color: tag.text,
            padding: "5px 12px",
            borderRadius: 999,
            fontSize: 12,
            fontWeight: 600,
            whiteSpace: "nowrap",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            transform: "translate(-50%,-50%)",
          }}>
            {tag.label}
          </div>
        </div>
      ))}
    </div>
  );
}

const FEATURES = [
  {
    icon: Lightbulb,
    color: "#FEF9C3",
    iconColor: "#CA8A04",
    title: "Inspiration Hub",
    desc: "Discover and save references, ideas, designs, and similar projects from across the web — all in one place.",
  },
  {
    icon: TrendingUp,
    color: "#DCFCE7",
    iconColor: "#16A34A",
    title: "Progress Tracker",
    desc: "Visualize how your project grows over time with milestones, timelines, and completion tracking.",
  },
  {
    icon: CheckSquare,
    color: "#DBEAFE",
    iconColor: "#2563EB",
    title: "Task Checklist",
    desc: "Manage tasks and milestones. Break down big goals into actionable steps you can actually ship.",
  },
  {
    icon: HardDrive,
    color: "#F3E8FF",
    iconColor: "#9333EA",
    title: "Asset Library",
    desc: "Connect Google Drive or OneDrive to organize all your files, designs, and documents in one view.",
  },
  {
    icon: Image,
    color: "#FFE4E6",
    iconColor: "#E11D48",
    title: "Proof Wall",
    desc: "Document your journey with screenshots, updates, and achievements. Your development history, preserved.",
  },
  {
    icon: Globe,
    color: "#E0F2FE",
    iconColor: "#0284C7",
    title: "Public Share Page",
    desc: "Let the world follow your project. Share your journey publicly and build an audience as you build.",
  },
];

const PRICING = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    desc: "Follow creators and stay updated.",
    features: ["Follow up to 20 creators", "Personalized feed", "Like & comment on updates", "Basic profile"],
    cta: "Get started free",
    href: "/auth/signup",
    highlight: false,
  },
  {
    name: "Creator",
    price: "$9",
    period: "/month",
    desc: "Everything you need to build in public.",
    features: ["All Free features", "Project Passport (up to 5 projects)", "Inspiration Hub", "Progress Tracker + Checklist", "Asset Library (connect 1 cloud)", "Proof Wall", "Public Share Page", "Basic analytics"],
    cta: "Start creating",
    href: "/auth/signup?role=creator",
    highlight: true,
  },
  {
    name: "Creator Pro",
    price: "$24",
    period: "/month",
    desc: "For serious builders and indie founders.",
    features: ["All Creator features", "Unlimited projects", "Connect multiple cloud storages", "Advanced analytics", "Custom domain for share page", "Priority support", "Early access to new tools", "Pro badge"],
    cta: "Go Pro",
    href: "/auth/signup?role=creator",
    highlight: false,
  },
];

export default function LandingPage() {
  const [activeFeature, setActiveFeature] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveFeature((p) => (p + 1) % FEATURES.length);
    }, 2800);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: "#FFFFFF" }}>
      <Navbar />

      {/* ─── HERO ─── */}
      <section
        style={{
          paddingTop: 120,
          paddingBottom: 80,
          background: "linear-gradient(180deg, #F8FAFF 0%, #FFFFFF 100%)",
          overflow: "hidden",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", gap: 60, flexWrap: "wrap" }}>
          {/* Left text */}
          <div style={{ flex: 1, minWidth: 300 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "#EFF6FF",
                border: "1px solid #BFDBFE",
                padding: "6px 14px",
                borderRadius: 999,
                marginBottom: 24,
              }}
              className="animate-fadein"
            >
              <Zap size={13} color="#2563EB" />
              <span style={{ fontSize: 13, fontWeight: 600, color: "#2563EB" }}>Your project journey starts here</span>
            </div>

            <h1
              className="animate-fadein delay-100"
              style={{
                fontFamily: "Sora, sans-serif",
                fontSize: "clamp(36px, 5vw, 58px)",
                fontWeight: 800,
                lineHeight: 1.1,
                color: "#0F172A",
                letterSpacing: "-0.03em",
                marginBottom: 20,
              }}
            >
              From idea to launch,{" "}
              <span style={{ color: "#2563EB" }}>built in public.</span>
            </h1>

            <p
              className="animate-fadein delay-200"
              style={{ fontSize: 18, color: "#475569", lineHeight: 1.7, marginBottom: 36, maxWidth: 480 }}
            >
              Wispfolio brings your scattered ideas, assets, and progress into one
              Project Passport — then helps you share the journey with the world.
            </p>

            <div className="animate-fadein delay-300" style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
              <Link
                href="/auth/signup"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "13px 28px",
                  background: "#2563EB",
                  color: "white",
                  borderRadius: 10,
                  fontSize: 15,
                  fontWeight: 700,
                  textDecoration: "none",
                  transition: "background 0.15s",
                  fontFamily: "Sora, sans-serif",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#1D4ED8")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#2563EB")}
              >
                Start your project
                <ArrowRight size={16} />
              </Link>
              <Link
                href="#explore"
                style={{
                  padding: "13px 24px",
                  border: "1.5px solid #E2E8F0",
                  borderRadius: 10,
                  fontSize: 15,
                  fontWeight: 600,
                  color: "#334155",
                  textDecoration: "none",
                  transition: "all 0.15s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#2563EB";
                  (e.currentTarget as HTMLElement).style.color = "#2563EB";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#E2E8F0";
                  (e.currentTarget as HTMLElement).style.color = "#334155";
                }}
              >
                See how it works
              </Link>
            </div>

            <div className="animate-fadein delay-400" style={{ display: "flex", alignItems: "center", gap: 20, marginTop: 32, paddingTop: 24, borderTop: "1px solid #F1F5F9" }}>
              {[["2k+", "Creators"], ["1.4k", "Projects live"], ["98%", "Love it"]].map(([val, lbl]) => (
                <div key={lbl}>
                  <div style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 22, color: "#0F172A" }}>{val}</div>
                  <div style={{ fontSize: 12, color: "#94A3B8", fontWeight: 500 }}>{lbl}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right orbit animation */}
          <div className="animate-scalein delay-200" style={{ flex: 1, minWidth: 340, display: "flex", justifyContent: "center" }}>
            <HeroOrbit />
          </div>
        </div>
      </section>

      {/* ─── EXPLORE ─── */}
      <section id="explore" style={{ padding: "80px 24px", background: "#FFFFFF" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#EFF6FF", padding: "5px 14px", borderRadius: 999, marginBottom: 16 }}>
              <Star size={13} color="#2563EB" />
              <span style={{ fontSize: 13, fontWeight: 600, color: "#2563EB" }}>Three stages of creation</span>
            </div>
            <h2 style={{ fontFamily: "Sora, sans-serif", fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800, color: "#0F172A", letterSpacing: "-0.02em", marginBottom: 14 }}>
              Inspiration → Growth → Sharing
            </h2>
            <p style={{ fontSize: 17, color: "#64748B", maxWidth: 540, margin: "0 auto" }}>
              Every great project moves through these stages. Wispfolio gives you the tools for each one.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {[
              { icon: Lightbulb, title: "Inspiration", color: "#FEF9C3", ic: "#CA8A04", desc: "Discover ideas, save references, and build your creative vision. Curate what excites you before you build." },
              { icon: TrendingUp, title: "Growth", color: "#DCFCE7", ic: "#16A34A", desc: "Organize your work, track progress, manage tasks, and store assets. Keep everything moving forward." },
              { icon: Share2, title: "Sharing", color: "#DBEAFE", ic: "#2563EB", desc: "Showcase your journey publicly, gain followers, and launch with an audience already watching." },
            ].map((s) => (
              <div key={s.title} style={{ background: "#F8FAFF", border: "1px solid #E2E8F0", borderRadius: 16, padding: "28px 24px", textAlign: "center" }}>
                <div style={{ width: 56, height: 56, background: s.color, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                  <s.icon size={26} color={s.ic} />
                </div>
                <h3 style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 20, color: "#0F172A", marginBottom: 10 }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: "#64748B", lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURES ─── */}
      <section id="features" style={{ padding: "80px 24px", background: "#F8FAFF" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2 style={{ fontFamily: "Sora, sans-serif", fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800, color: "#0F172A", letterSpacing: "-0.02em", marginBottom: 12 }}>
              Everything inside your Project Passport
            </h2>
            <p style={{ fontSize: 17, color: "#64748B" }}>Six powerful tools. One unified workspace.</p>
          </div>

          <div style={{ display: "flex", gap: 40, alignItems: "flex-start", flexWrap: "wrap" }}>
            {/* Feature list */}
            <div style={{ flex: 1, minWidth: 280, display: "flex", flexDirection: "column", gap: 4 }}>
              {FEATURES.map((f, i) => (
                <div
                  key={f.title}
                  onClick={() => setActiveFeature(i)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    padding: "14px 16px",
                    borderRadius: 12,
                    cursor: "pointer",
                    background: activeFeature === i ? "white" : "transparent",
                    border: activeFeature === i ? "1px solid #E2E8F0" : "1px solid transparent",
                    transition: "all 0.2s",
                    boxShadow: activeFeature === i ? "0 2px 8px rgba(0,0,0,0.06)" : "none",
                  }}
                >
                  <div style={{ width: 38, height: 38, background: f.color, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <f.icon size={18} color={f.iconColor} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 14, color: activeFeature === i ? "#0F172A" : "#334155" }}>{f.title}</div>
                    <div style={{ fontSize: 12, color: "#94A3B8", display: activeFeature === i ? "block" : "none" }}>{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Feature preview */}
            <div style={{ flex: 2, minWidth: 320, background: "white", border: "1px solid #E2E8F0", borderRadius: 20, padding: 32, boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
              {(() => {
                const f = FEATURES[activeFeature];
                return (
                  <div key={activeFeature} className="animate-fadein">
                    <div style={{ width: 52, height: 52, background: f.color, borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                      <f.icon size={24} color={f.iconColor} />
                    </div>
                    <h3 style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 24, color: "#0F172A", marginBottom: 12 }}>{f.title}</h3>
                    <p style={{ fontSize: 16, color: "#64748B", lineHeight: 1.7, marginBottom: 24 }}>{f.desc}</p>
                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                      {["Creator feature", "Project Passport", "Build in public"].map((tag) => (
                        <span key={tag} style={{ background: "#EFF6FF", color: "#2563EB", padding: "4px 12px", borderRadius: 999, fontSize: 12, fontWeight: 600 }}>{tag}</span>
                      ))}
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRICING ─── */}
      <section id="pricing" style={{ padding: "80px 24px", background: "#FFFFFF" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <h2 style={{ fontFamily: "Sora, sans-serif", fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800, color: "#0F172A", letterSpacing: "-0.02em", marginBottom: 12 }}>
              Simple, honest pricing
            </h2>
            <p style={{ fontSize: 17, color: "#64748B" }}>Follow for free. Create when you&apos;re ready.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {PRICING.map((plan) => (
              <div
                key={plan.name}
                style={{
                  background: plan.highlight ? "#2563EB" : "white",
                  border: `1px solid ${plan.highlight ? "#2563EB" : "#E2E8F0"}`,
                  borderRadius: 16,
                  padding: "32px 28px",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  boxShadow: plan.highlight ? "0 12px 40px rgba(37,99,235,0.25)" : "0 2px 8px rgba(0,0,0,0.04)",
                }}
              >
                {plan.highlight && (
                  <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", background: "#0F172A", color: "white", padding: "4px 14px", borderRadius: 999, fontSize: 12, fontWeight: 700, whiteSpace: "nowrap" }}>
                    Most popular
                  </div>
                )}
                <div style={{ marginBottom: 24 }}>
                  <div style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 18, color: plan.highlight ? "white" : "#0F172A", marginBottom: 4 }}>{plan.name}</div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 8 }}>
                    <span style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 38, color: plan.highlight ? "white" : "#0F172A" }}>{plan.price}</span>
                    <span style={{ fontSize: 14, color: plan.highlight ? "rgba(255,255,255,0.7)" : "#94A3B8" }}>{plan.period}</span>
                  </div>
                  <p style={{ fontSize: 14, color: plan.highlight ? "rgba(255,255,255,0.8)" : "#64748B" }}>{plan.desc}</p>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28, flex: 1 }}>
                  {plan.features.map((feat) => (
                    <div key={feat} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                      <div style={{ width: 18, height: 18, borderRadius: "50%", background: plan.highlight ? "rgba(255,255,255,0.2)" : "#EFF6FF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                        <Check size={10} color={plan.highlight ? "white" : "#2563EB"} strokeWidth={3} />
                      </div>
                      <span style={{ fontSize: 14, color: plan.highlight ? "rgba(255,255,255,0.9)" : "#475569" }}>{feat}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href={plan.href}
                  style={{
                    display: "block",
                    textAlign: "center",
                    padding: "12px 24px",
                    borderRadius: 10,
                    fontSize: 14,
                    fontWeight: 700,
                    background: plan.highlight ? "white" : "#2563EB",
                    color: plan.highlight ? "#2563EB" : "white",
                    textDecoration: "none",
                    transition: "all 0.15s",
                    border: plan.highlight ? "none" : "none",
                  }}
                  onMouseEnter={(e) => {
                    if (plan.highlight) {
                      (e.currentTarget as HTMLElement).style.background = "#EFF6FF";
                    } else {
                      (e.currentTarget as HTMLElement).style.background = "#1D4ED8";
                    }
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = plan.highlight ? "white" : "#2563EB";
                  }}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section style={{ padding: "60px 24px", background: "#F8FAFF", borderTop: "1px solid #E2E8F0" }}>
        <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
          <div style={{ width: 56, height: 56, background: "#EFF6FF", borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
            <Users size={26} color="#2563EB" />
          </div>
          <h2 style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 34, color: "#0F172A", letterSpacing: "-0.02em", marginBottom: 14 }}>
            Ready to build in public?
          </h2>
          <p style={{ fontSize: 17, color: "#64748B", marginBottom: 32, lineHeight: 1.7 }}>
            Join thousands of creators sharing their journey from idea to launch.
            Your Project Passport is waiting.
          </p>
          <Link
            href="/auth/signup"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "14px 32px",
              background: "#2563EB",
              color: "white",
              borderRadius: 10,
              fontSize: 16,
              fontWeight: 700,
              textDecoration: "none",
              fontFamily: "Sora, sans-serif",
              transition: "background 0.15s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#1D4ED8")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#2563EB")}
          >
            Create your account
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer style={{ background: "#0F172A", color: "white", padding: "40px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 28, height: 28, background: "#2563EB", borderRadius: 7, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                <path d="M3 9C3 5.686 5.686 3 9 3s6 2.686 6 6-2.686 6-6 6S3 12.314 3 9z" stroke="white" strokeWidth="1.5"/>
                <path d="M9 6v6M6 9h6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <span style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 16 }}>Wispfolio</span>
          </div>
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            {["Explore", "Features", "Pricing", "About"].map((l) => (
              <Link key={l} href={l === "About" ? "/about" : `#${l.toLowerCase()}`} style={{ fontSize: 13, color: "#94A3B8", textDecoration: "none" }}>{l}</Link>
            ))}
          </div>
          <p style={{ fontSize: 13, color: "#475569" }}>© 2025 Wispfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
