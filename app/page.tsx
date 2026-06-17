"use client";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import {
  Lightbulb, TrendingUp, Share2, BookOpen, CheckSquare,
  HardDrive, Image as ImageIcon, Globe, Star, Zap, Users, ArrowRight, Check, Sparkles
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

function WispOrb() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  return (
    <div 
      style={{ position: "relative", width: 400, height: 400, display: "flex", alignItems: "center", justifyContent: "center" }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({
          x: (e.clientX - rect.left - 200) / 25,
          y: (e.clientY - rect.top - 200) / 25
        });
      }}
      onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
    >
      {/* Background glow */}
      <div style={{ position: "absolute", width: 280, height: 280, borderRadius: "50%", background: "radial-gradient(circle, var(--purple-wisp) 0%, transparent 70%)", opacity: 0.15, filter: "blur(40px)", transform: `translate(${mousePos.x * 2}px, ${mousePos.y * 2}px)`, transition: "transform 0.2s ease-out" }} className="animate-wisp-glow" />
      
      {/* Center Orb */}
      <div style={{ position: "relative", zIndex: 3, width: 120, height: 120, borderRadius: "50%", background: "linear-gradient(135deg, #DBEAFE 0%, var(--purple-soft) 100%)", boxShadow: "0 0 40px var(--purple-glow), inset 0 0 20px white", display: "flex", alignItems: "center", justifyContent: "center", transform: `translate(${mousePos.x}px, ${mousePos.y}px)`, transition: "transform 0.1s ease-out" }} className="animate-float">
        <Sparkles size={40} color="var(--purple-wisp)" strokeWidth={1.5} />
      </div>

      {/* Orbit trails */}
      {[
        { label: "Find Your Spark", color: "rgba(254, 249, 195, 0.4)", tc: "#CA8A04", delay: "0s", top: "15%", left: "15%", rot: -10 },
        { label: "Shape the Journey", color: "rgba(220, 252, 231, 0.4)", tc: "#16A34A", delay: "2s", top: "70%", left: "10%", rot: 5 },
        { label: "Let the World Watch", color: "rgba(219, 234, 254, 0.4)", tc: "#2563EB", delay: "4s", top: "40%", left: "75%", rot: 15 },
      ].map((t, i) => (
        <div key={t.label} className="animate-trail" style={{ position: "absolute", top: t.top, left: t.left, animationDelay: t.delay, transform: `translate(${mousePos.x * (i % 2 === 0 ? -1.5 : 2)}px, ${mousePos.y * (i % 2 === 0 ? -1.5 : 2)}px) rotate(${t.rot}deg)`, transition: "transform 0.3s ease-out", zIndex: 4 }}>
          <div style={{ background: "rgba(255,255,255,0.9)", backdropFilter: "blur(8px)", border: "1px solid #E2E8F0", padding: "10px 16px", borderRadius: 12, boxShadow: `0 8px 24px rgba(0,0,0,0.06), 0 0 20px ${t.color}`, display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: t.tc, boxShadow: `0 0 8px ${t.tc}` }} />
            <span style={{ fontSize: 13, fontWeight: 600, color: "#0F172A", whiteSpace: "nowrap" }}>{t.label}</span>
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
    title: "Find Your Spark",
    desc: "Every great project starts with a flicker of inspiration. Save your references, designs, and ideas in a dedicated hub.",
  },
  {
    icon: TrendingUp,
    color: "#DCFCE7",
    iconColor: "#16A34A",
    title: "Shape the Journey",
    desc: "Watch your idea take form. Visualize your growth, track milestones, and keep your momentum alive.",
  },
  {
    icon: CheckSquare,
    color: "#DBEAFE",
    iconColor: "#2563EB",
    title: "Break It Down",
    desc: "Big dreams need actionable steps. Turn your inspiration into a clear, manageable checklist.",
  },
  {
    icon: HardDrive,
    color: "#F3E8FF",
    iconColor: "#9333EA",
    title: "Your Creative Vault",
    desc: "All your assets, beautifully organized. Connect your favorite cloud storage to keep files where you need them.",
  },
  {
    icon: ImageIcon,
    color: "#FFE4E6",
    iconColor: "#E11D48",
    title: "The Proof Wall",
    desc: "Document the messy middle. Save screenshots, code snippets, and tiny wins to look back on how far you've come.",
  },
  {
    icon: Globe,
    color: "#E0F2FE",
    iconColor: "#0284C7",
    title: "Let the World Watch",
    desc: "Your journey deserves an audience. Share your progress publicly and build a community around your passion.",
  },
];

const PRICING = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    desc: "Join the community and find inspiration.",
    features: ["Follow up to 20 creators", "Personalized feed", "Like & comment on updates", "Basic profile"],
    cta: "Get started free",
    href: "/auth/signup",
    highlight: false,
  },
  {
    name: "Creator",
    price: "$9",
    period: "/month",
    desc: "Everything you need to bring your idea to life.",
    features: ["All Free features", "Project Passport (up to 5 projects)", "Inspiration Hub", "Progress Tracker + Checklist", "Asset Library (connect 1 cloud)", "Proof Wall", "Public Share Page"],
    cta: "Start creating",
    href: "/auth/signup?role=creator",
    highlight: true,
  },
  {
    name: "Creator Pro",
    price: "$24",
    period: "/month",
    desc: "For those who never stop building.",
    features: ["All Creator features", "Unlimited projects", "Connect multiple cloud storages", "Advanced analytics", "Custom domain for share page", "Priority support", "Pro badge"],
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
    }, 3500);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: "#FFFFFF" }}>
      <Navbar />

      {/* ─── HERO ─── */}
      <section
        style={{
          paddingTop: 140,
          paddingBottom: 100,
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
                background: "var(--purple-soft)",
                border: "1px solid rgba(124, 58, 237, 0.2)",
                padding: "6px 14px",
                borderRadius: 999,
                marginBottom: 24,
              }}
              className="animate-fadein"
            >
              <Sparkles size={13} color="var(--purple-wisp)" />
              <span style={{ fontSize: 13, fontWeight: 600, color: "var(--purple-wisp)" }}>Currently in Beta — Join early</span>
            </div>

            <h1
              className="animate-fadein delay-100"
              style={{
                fontFamily: "Sora, sans-serif",
                fontSize: "clamp(40px, 5vw, 64px)",
                fontWeight: 800,
                lineHeight: 1.15,
                color: "#0F172A",
                letterSpacing: "-0.03em",
                marginBottom: 24,
              }}
            >
              Every project has a story.<br/>
              <span style={{ color: "#2563EB" }}>Make yours visible.</span>
            </h1>

            <p
              className="animate-fadein delay-200"
              style={{ fontSize: 18, color: "#475569", lineHeight: 1.7, marginBottom: 40, maxWidth: 480 }}
            >
              Wispfolio brings your scattered ideas, assets, and progress into one living Project Passport. Because your creative journey shouldn't be hidden in folders.
            </p>

            <div className="animate-fadein delay-300" style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
              <Link
                href="/auth/signup"
                className="btn-primary"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "14px 30px",
                  fontSize: 16,
                  textDecoration: "none",
                  fontFamily: "Sora, sans-serif",
                }}
              >
                Start your journey
                <ArrowRight size={18} />
              </Link>
              <Link
                href="#explore"
                style={{
                  padding: "14px 28px",
                  border: "1.5px solid #E2E8F0",
                  borderRadius: 8,
                  fontSize: 15,
                  fontWeight: 600,
                  color: "#334155",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--purple-wisp)";
                  (e.currentTarget as HTMLElement).style.color = "var(--purple-wisp)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#E2E8F0";
                  (e.currentTarget as HTMLElement).style.color = "#334155";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                See how it works
              </Link>
            </div>
          </div>

          {/* Right wisp animation */}
          <div className="animate-scalein delay-200" style={{ flex: 1, minWidth: 340, display: "flex", justifyContent: "center" }}>
            <WispOrb />
          </div>
        </div>
      </section>

      {/* ─── EXPLORE ─── */}
      <section id="explore" style={{ padding: "100px 24px", background: "#FFFFFF" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "var(--purple-soft)", padding: "6px 16px", borderRadius: 999, marginBottom: 18 }}>
              <Star size={14} color="var(--purple-wisp)" />
              <span style={{ fontSize: 13, fontWeight: 600, color: "var(--purple-wisp)" }}>Three stages of creation</span>
            </div>
            <h2 style={{ fontFamily: "Sora, sans-serif", fontSize: "clamp(32px, 4vw, 46px)", fontWeight: 800, color: "#0F172A", letterSpacing: "-0.02em", marginBottom: 16 }}>
              Inspiration → Growth → Sharing
            </h2>
            <p style={{ fontSize: 18, color: "#64748B", maxWidth: 580, margin: "0 auto", lineHeight: 1.6 }}>
              Every masterpiece goes through these stages. Wispfolio is designed to guide you through each one softly and seamlessly.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 32 }}>
            {[
              { icon: Lightbulb, title: "Find Your Spark", color: "#FEF9C3", ic: "#CA8A04", desc: "Gather your references and let your ideas simmer. Curate what excites you before you even write a line of code or draw a sketch." },
              { icon: TrendingUp, title: "Shape the Journey", color: "#DCFCE7", ic: "#16A34A", desc: "Turn chaos into momentum. Organize your work, track your milestones, and keep your creative flow uninterrupted." },
              { icon: Share2, title: "Let the World Watch", color: "#DBEAFE", ic: "#2563EB", desc: "Build an audience as you build your product. Showcase your authentic journey and launch to a community that already cares." },
            ].map((s) => (
              <div key={s.title} style={{ background: "#F8FAFF", border: "1px solid #E2E8F0", borderRadius: 20, padding: "36px 28px", textAlign: "center", transition: "all 0.3s ease", cursor: "default" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px var(--purple-glow)";
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--purple-soft)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLElement).style.borderColor = "#E2E8F0";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                <div style={{ width: 64, height: 64, background: s.color, borderRadius: 18, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                  <s.icon size={28} color={s.ic} />
                </div>
                <h3 style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 22, color: "#0F172A", marginBottom: 12 }}>{s.title}</h3>
                <p style={{ fontSize: 15, color: "#64748B", lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURES ─── */}
      <section id="features" style={{ padding: "100px 24px", background: "#F8FAFF" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <h2 style={{ fontFamily: "Sora, sans-serif", fontSize: "clamp(32px, 4vw, 46px)", fontWeight: 800, color: "#0F172A", letterSpacing: "-0.02em", marginBottom: 16 }}>
              Your entire Project Passport
            </h2>
            <p style={{ fontSize: 18, color: "#64748B" }}>Six gentle tools. One unified creative space.</p>
          </div>

          <div style={{ display: "flex", gap: 48, alignItems: "center", flexWrap: "wrap" }}>
            {/* Feature list */}
            <div style={{ flex: 1, minWidth: 300, display: "flex", flexDirection: "column", gap: 8 }}>
              {FEATURES.map((f, i) => (
                <div
                  key={f.title}
                  onClick={() => setActiveFeature(i)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    padding: "16px 20px",
                    borderRadius: 14,
                    cursor: "pointer",
                    background: activeFeature === i ? "white" : "transparent",
                    border: activeFeature === i ? "1px solid var(--purple-soft)" : "1px solid transparent",
                    transition: "all 0.3s ease",
                    boxShadow: activeFeature === i ? "0 4px 20px var(--purple-glow)" : "none",
                  }}
                >
                  <div style={{ width: 44, height: 44, background: f.color, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <f.icon size={20} color={f.iconColor} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 16, color: activeFeature === i ? "#0F172A" : "#475569", transition: "color 0.2s ease" }}>{f.title}</div>
                    <div style={{ fontSize: 13, color: "#64748B", marginTop: 4, display: activeFeature === i ? "block" : "none", lineHeight: 1.5 }} className="animate-fadein">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Feature preview */}
            <div style={{ flex: 1.2, minWidth: 340, background: "white", border: "1px solid #E2E8F0", borderRadius: 24, padding: 48, boxShadow: "0 20px 60px rgba(0,0,0,0.04)" }}>
              {(() => {
                const f = FEATURES[activeFeature];
                return (
                  <div key={activeFeature} className="animate-fadein">
                    <div style={{ width: 64, height: 64, background: f.color, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24 }}>
                      <f.icon size={30} color={f.iconColor} />
                    </div>
                    <h3 style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 32, color: "#0F172A", marginBottom: 16 }}>{f.title}</h3>
                    <p style={{ fontSize: 17, color: "#475569", lineHeight: 1.8, marginBottom: 32 }}>{f.desc}</p>
                    <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                      {["Creator feature", "Project Passport", "Built for you"].map((tag) => (
                        <span key={tag} style={{ background: "var(--purple-soft)", color: "var(--purple-wisp)", padding: "6px 14px", borderRadius: 999, fontSize: 13, fontWeight: 600 }}>{tag}</span>
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
      <section id="pricing" style={{ padding: "100px 24px", background: "#FFFFFF" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <h2 style={{ fontFamily: "Sora, sans-serif", fontSize: "clamp(32px, 4vw, 46px)", fontWeight: 800, color: "#0F172A", letterSpacing: "-0.02em", marginBottom: 16 }}>
              Simple, honest pricing
            </h2>
            <p style={{ fontSize: 18, color: "#64748B" }}>Join as a follower for free. Step into the studio when you're ready.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 32 }}>
            {PRICING.map((plan) => (
              <div
                key={plan.name}
                style={{
                  background: plan.highlight ? "#0F172A" : "white",
                  border: `1px solid ${plan.highlight ? "#0F172A" : "#E2E8F0"}`,
                  borderRadius: 24,
                  padding: "40px 32px",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  boxShadow: plan.highlight ? "0 24px 60px rgba(15,23,42,0.15)" : "0 4px 12px rgba(0,0,0,0.03)",
                  transform: plan.highlight ? "translateY(-8px)" : "none",
                }}
              >
                {plan.highlight && (
                  <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", background: "var(--purple-wisp)", color: "white", padding: "6px 16px", borderRadius: 999, fontSize: 13, fontWeight: 700, whiteSpace: "nowrap", boxShadow: "0 4px 12px var(--purple-glow)" }}>
                    Most popular
                  </div>
                )}
                <div style={{ marginBottom: 32 }}>
                  <div style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 22, color: plan.highlight ? "white" : "#0F172A", marginBottom: 8 }}>{plan.name}</div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 12 }}>
                    <span style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 46, color: plan.highlight ? "white" : "#0F172A" }}>{plan.price}</span>
                    <span style={{ fontSize: 15, color: plan.highlight ? "#94A3B8" : "#64748B" }}>{plan.period}</span>
                  </div>
                  <p style={{ fontSize: 15, color: plan.highlight ? "#94A3B8" : "#475569", lineHeight: 1.6 }}>{plan.desc}</p>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 40, flex: 1 }}>
                  {plan.features.map((feat) => (
                    <div key={feat} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                      <div style={{ width: 20, height: 20, borderRadius: "50%", background: plan.highlight ? "rgba(255,255,255,0.1)" : "#EFF6FF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                        <Check size={12} color={plan.highlight ? "white" : "#2563EB"} strokeWidth={3} />
                      </div>
                      <span style={{ fontSize: 15, color: plan.highlight ? "#F8FAFF" : "#334155" }}>{feat}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href={plan.href}
                  className={plan.highlight ? "" : "btn-outline"}
                  style={plan.highlight ? {
                    display: "block",
                    textAlign: "center",
                    padding: "14px 24px",
                    borderRadius: 12,
                    fontSize: 15,
                    fontWeight: 700,
                    background: "var(--purple-wisp)",
                    color: "white",
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                  } : { display: "block", textAlign: "center", borderRadius: 12 }}
                  onMouseEnter={(e) => {
                    if (plan.highlight) {
                      (e.currentTarget as HTMLElement).style.background = "#6D28D9";
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 16px var(--purple-glow)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (plan.highlight) {
                      (e.currentTarget as HTMLElement).style.background = "var(--purple-wisp)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    }
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
      <section style={{ padding: "100px 24px", background: "linear-gradient(180deg, #FFFFFF 0%, #F8FAFF 100%)", borderTop: "1px solid #E2E8F0" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
          <div style={{ width: 72, height: 72, background: "var(--purple-soft)", borderRadius: 20, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
            <Sparkles size={34} color="var(--purple-wisp)" />
          </div>
          <h2 style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: "clamp(32px, 4vw, 42px)", color: "#0F172A", letterSpacing: "-0.02em", marginBottom: 20 }}>
            Let your project shine.
          </h2>
          <p style={{ fontSize: 18, color: "#475569", marginBottom: 40, lineHeight: 1.7 }}>
            Join other creators who are moving from scattered notes to a beautifully documented journey. Your Project Passport awaits.
          </p>
          <Link
            href="/auth/signup"
            className="btn-primary"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "16px 36px",
              fontSize: 16,
              textDecoration: "none",
              fontFamily: "Sora, sans-serif",
            }}
          >
            Create your account
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer style={{ background: "#0F172A", color: "white", padding: "80px 24px 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 48, marginBottom: 64 }}>
            
            <div style={{ flex: 2, minWidth: 280 }}>
              <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", marginBottom: 20 }}>
                <div style={{ width: 32, height: 32, background: "var(--purple-wisp)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M3 9C3 5.686 5.686 3 9 3s6 2.686 6 6-2.686 6-6 6S3 12.314 3 9z" stroke="white" strokeWidth="1.5"/>
                    <path d="M9 6v6M6 9h6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <span style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 20, color: "white" }}>Wispfolio</span>
              </Link>
              <p style={{ fontSize: 15, color: "#94A3B8", lineHeight: 1.7, maxWidth: 320 }}>
                A platform that helps creators, artists, and founders grow their projects from idea to launch. Built with ❤️ for creators.
              </p>
            </div>

            <div>
              <h4 style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 16, color: "white", marginBottom: 20 }}>Product</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <Link href="#features" style={{ fontSize: 14, color: "#94A3B8", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={(e)=>(e.currentTarget.style.color="white")} onMouseLeave={(e)=>(e.currentTarget.style.color="#94A3B8")}>Features</Link>
                <Link href="#pricing" style={{ fontSize: 14, color: "#94A3B8", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={(e)=>(e.currentTarget.style.color="white")} onMouseLeave={(e)=>(e.currentTarget.style.color="#94A3B8")}>Pricing</Link>
                <Link href="/feed" style={{ fontSize: 14, color: "#94A3B8", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={(e)=>(e.currentTarget.style.color="white")} onMouseLeave={(e)=>(e.currentTarget.style.color="#94A3B8")}>Explore Projects</Link>
              </div>
            </div>

            <div>
              <h4 style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 16, color: "white", marginBottom: 20 }}>Company</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <Link href="/about" style={{ fontSize: 14, color: "#94A3B8", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={(e)=>(e.currentTarget.style.color="white")} onMouseLeave={(e)=>(e.currentTarget.style.color="#94A3B8")}>Our Story</Link>
                <a href="#" style={{ fontSize: 14, color: "#94A3B8", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={(e)=>(e.currentTarget.style.color="white")} onMouseLeave={(e)=>(e.currentTarget.style.color="#94A3B8")}>Blog</a>
                <a href="#" style={{ fontSize: 14, color: "#94A3B8", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={(e)=>(e.currentTarget.style.color="white")} onMouseLeave={(e)=>(e.currentTarget.style.color="#94A3B8")}>Contact</a>
              </div>
            </div>

            <div>
              <h4 style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 16, color: "white", marginBottom: 20 }}>Legal</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <Link href="/privacy" style={{ fontSize: 14, color: "#94A3B8", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={(e)=>(e.currentTarget.style.color="white")} onMouseLeave={(e)=>(e.currentTarget.style.color="#94A3B8")}>Privacy Policy</Link>
                <Link href="/terms" style={{ fontSize: 14, color: "#94A3B8", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={(e)=>(e.currentTarget.style.color="white")} onMouseLeave={(e)=>(e.currentTarget.style.color="#94A3B8")}>Terms of Service</Link>
              </div>
            </div>

          </div>

          <div style={{ borderTop: "1px solid #1E293B", paddingTop: 32, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
            <p style={{ fontSize: 14, color: "#64748B" }}>© 2026 Wispfolio. All rights reserved.</p>
            <div style={{ display: "flex", gap: 16 }}>
              {["Twitter", "GitHub", "Discord"].map((social) => (
                <a key={social} href="#" style={{ fontSize: 14, color: "#64748B", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={(e)=>(e.currentTarget.style.color="white")} onMouseLeave={(e)=>(e.currentTarget.style.color="#64748B")}>
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
