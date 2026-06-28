"use client";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import {
  Lightbulb, TrendingUp, CheckSquare, HardDrive, Image, Globe,
  ArrowRight, Check, Sparkles, Layers, BookOpen, Star, Users, Zap,
  Play, X, Clock
} from "lucide-react";
import { useEffect, useRef, useState, useCallback } from "react";

/* ─── Mouse-parallax Wisp scene ─── */
function WispScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const handleMouse = useCallback((e: MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMouse({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener("mousemove", handleMouse);
    return () => el.removeEventListener("mousemove", handleMouse);
  }, [handleMouse]);

  const dx = (mouse.x - 0.5) * 40;
  const dy = (mouse.y - 0.5) * 30;

  const STAGES = [
    { label: "Inspiration Hub", icon: "01", color: "#DBEAFE", tc: "#1D4ED8", bc: "#2563EB", y: 0 },
    { label: "Progress Tracker", icon: "02", color: "#EDE9FE", tc: "#6D28D9", bc: "#7C3AED", y: 1 },
    { label: "Asset Library", icon: "03", color: "#E0E7FF", tc: "#4F46E5", bc: "#4F46E5", y: 2 },
    { label: "Proof Wall", icon: "04", color: "#F3E8FF", tc: "#9333EA", bc: "#9333EA", y: 3 },
    { label: "Public Launch", icon: "05", color: "#EFF6FF", tc: "#1D4ED8", bc: "#2563EB", y: 4 },
  ];

  return (
    <div ref={containerRef} style={{ position: "relative", width: "100%", height: 560, display: "flex", alignItems: "center", justifyContent: "center", cursor: "none", borderRadius: 28, background: "linear-gradient(180deg, rgba(255,255,255,0.75), rgba(239,246,255,0.72))", border: "1px solid #E2E8F0", boxShadow: "0 28px 80px rgba(37,99,235,0.12)", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(#DBEAFE 1px, transparent 1px), linear-gradient(90deg, #DBEAFE 1px, transparent 1px)", backgroundSize: "44px 44px", opacity: 0.32 }} />
      <div style={{ position: "absolute", top: 20, left: 24, right: 24, display: "flex", alignItems: "center", justifyContent: "space-between", zIndex: 5 }}>
        <span style={{ fontSize: 12, fontWeight: 800, color: "#2563EB", background: "white", border: "1px solid #DBEAFE", borderRadius: 999, padding: "6px 12px" }}>Project Passport</span>
        <span style={{ fontSize: 12, fontWeight: 700, color: "#7C3AED", background: "#F5F3FF", border: "1px solid #DDD6FE", borderRadius: 999, padding: "6px 12px" }}>Live journey</span>
      </div>
      {/* Wisp glows — parallax */}
      {mounted && <>
        <div className="wisp-orb animate-wisp" style={{
          width: 320, height: 320, background: "#2563EB2A",
          top: `calc(50% - 160px + ${dy * 0.4}px)`,
          left: `calc(50% - 160px + ${dx * 0.4}px)`,
          zIndex: 0,
        }} />
        <div className="wisp-orb animate-wisp2" style={{
          width: 200, height: 200, background: "#7C3AED18",
          top: `calc(30% + ${dy * 0.7}px)`,
          right: `calc(15% - ${dx * 0.6}px)`,
          zIndex: 0,
        }} />
        <div className="wisp-orb" style={{
          width: 120, height: 120, background: "#DBEAFE60",
          bottom: "15%",
          left: `calc(10% + ${dx * 0.3}px)`,
          zIndex: 0,
          animation: "wispGlow 4s ease-in-out infinite",
        }} />
      </>}

      {/* Vertical journey line */}
      <div style={{ position: "absolute", left: "50%", top: 40, bottom: 40, width: 2, background: "linear-gradient(180deg, transparent, #BFDBFE 20%, #C4B5FD 80%, transparent)", transform: "translateX(-50%)", zIndex: 1 }} />
      {/* Glowing overlay line */}
      <div style={{ position: "absolute", left: "50%", top: 40, bottom: 40, width: 6, background: "linear-gradient(180deg, transparent, rgba(37,99,235,0.25) 20%, rgba(124,58,237,0.25) 80%, transparent)", transform: "translateX(-50%)", zIndex: 1, borderRadius: 3, filter: "blur(2px)", animation: "wispGlow 3s ease-in-out infinite" }} />

      {/* Floating particles along journey line */}
      {mounted && <>
        <div style={{ position: "absolute", left: "calc(50% - 2px)", top: "15%", width: 4, height: 4, borderRadius: "50%", background: "rgba(37,99,235,0.35)", zIndex: 2, animation: "floatY 5s ease-in-out infinite", animationDelay: "0s" }} />
        <div style={{ position: "absolute", left: "calc(50% + 3px)", top: "30%", width: 4, height: 4, borderRadius: "50%", background: "rgba(124,58,237,0.3)", zIndex: 2, animation: "floatY 5s ease-in-out infinite", animationDelay: "1s" }} />
        <div style={{ position: "absolute", left: "calc(50% - 4px)", top: "50%", width: 4, height: 4, borderRadius: "50%", background: "rgba(37,99,235,0.3)", zIndex: 2, animation: "floatY 5s ease-in-out infinite", animationDelay: "2s" }} />
        <div style={{ position: "absolute", left: "calc(50% + 1px)", top: "68%", width: 4, height: 4, borderRadius: "50%", background: "rgba(124,58,237,0.35)", zIndex: 2, animation: "floatY 5s ease-in-out infinite", animationDelay: "3s" }} />
        <div style={{ position: "absolute", left: "calc(50% - 3px)", top: "82%", width: 4, height: 4, borderRadius: "50%", background: "rgba(79,70,229,0.3)", zIndex: 2, animation: "floatY 5s ease-in-out infinite", animationDelay: "4s" }} />
      </>}

      {/* Journey nodes */}
      <div style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", gap: 0, width: "100%", maxWidth: 380 }}>
        {STAGES.map((s, i) => {
          const isLeft = i % 2 === 0;
          const parallaxX = mounted ? (isLeft ? -dx * 0.15 : dx * 0.15) : 0;
          const parallaxY = mounted ? -dy * 0.05 * (i + 1) : 0;
          return (
            <div key={s.label} style={{
              display: "flex",
              alignItems: "center",
              justifyContent: isLeft ? "flex-start" : "flex-end",
              padding: "6px 0",
              transform: `translate(${parallaxX}px, ${parallaxY}px)`,
              transition: "transform 0.1s ease-out",
            }}>
              {/* Card left side */}
              {isLeft && (
                <div style={{
                  background: "white",
                  border: "1.5px solid #E2E8F0",
                  borderRadius: 12,
                  padding: "10px 14px",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  maxWidth: 160,
                  transition: "all 0.15s",
                  animation: `fadeUp 0.6s ${i * 0.1 + 0.2}s both`,
                }}>
                  <div style={{ width: 30, height: 30, borderRadius: 8, background: s.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, flexShrink: 0 }}>{s.icon}</div>
                  <span style={{ fontSize: 12, fontWeight: 600, color: "#0F172A" }}>{s.label}</span>
                </div>
              )}

              {/* Center dot */}
              <div style={{ flex: 1, display: "flex", justifyContent: "center", position: "relative" }}>
                <div style={{ width: 14, height: 14, borderRadius: "50%", background: s.bc, border: "3px solid white", boxShadow: `0 0 0 3px ${s.color}, 0 2px 8px ${s.bc}44`, zIndex: 3, position: "relative" }}>
                  <div style={{ position: "absolute", inset: -10, borderRadius: "50%", border: `1.5px solid ${s.bc}33`, animation: "pulseRing 2.5s ease-out infinite", animationDelay: `${i * 0.5}s` }} />
                </div>
              </div>

              {/* Card right side */}
              {!isLeft && (
                <div style={{
                  background: "white",
                  border: "1.5px solid #E2E8F0",
                  borderRadius: 12,
                  padding: "10px 14px",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  maxWidth: 160,
                  animation: `fadeUp 0.6s ${i * 0.1 + 0.2}s both`,
                }}>
                  <div style={{ width: 30, height: 30, borderRadius: 8, background: s.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, flexShrink: 0 }}>{s.icon}</div>
                  <span style={{ fontSize: 12, fontWeight: 600, color: "#0F172A" }}>{s.label}</span>
                </div>
              )}
            </div>
          );
        })}

        {/* Launch badge at bottom with shimmer */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: 8 }}>
          <div style={{
            background: "linear-gradient(135deg, #2563EB, #7C3AED)",
            color: "white",
            padding: "8px 20px",
            borderRadius: 999,
            fontSize: 13,
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            gap: 6,
            boxShadow: "0 4px 20px rgba(37,99,235,0.35)",
            animation: "fadeUp 0.6s 0.7s both",
            position: "relative",
            overflow: "hidden",
          }}>
            <div style={{
              position: "absolute",
              top: 0,
              left: "-100%",
              width: "100%",
              height: "100%",
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)",
              animation: "shimmer 3s ease-in-out infinite",
            }} />
            <Sparkles size={13} /> Your story, live
          </div>
        </div>
      </div>

      {/* Floating mini-cards (parallax) — continuous float after entrance */}
      {mounted && (<>
        <div style={{ position: "absolute", top: 60, right: "5%", transform: `translate(${-dx * 0.2}px, ${-dy * 0.2}px)`, transition: "transform 0.12s ease-out", zIndex: 4, animation: "fadeIn 0.8s 0.9s both" }}>
          <div style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 10, padding: "8px 12px", boxShadow: "0 4px 14px rgba(0,0,0,0.08)", display: "flex", alignItems: "center", gap: 8, animation: "floatY 4s ease-in-out 1.7s infinite" }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#2563EB" }} />
            <span style={{ fontSize: 12, fontWeight: 600, color: "#0F172A" }}>12 new followers</span>
          </div>
        </div>
        <div style={{ position: "absolute", bottom: 70, left: "4%", transform: `translate(${dx * 0.25}px, ${dy * 0.15}px)`, transition: "transform 0.12s ease-out", zIndex: 4, animation: "fadeIn 0.8s 1.1s both" }}>
          <div style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 10, padding: "8px 12px", boxShadow: "0 4px 14px rgba(0,0,0,0.08)", display: "flex", alignItems: "center", gap: 8, animation: "floatY 4.5s ease-in-out 1.9s infinite" }}>
            <Star size={12} color="#7C3AED" fill="#7C3AED" />
            <span style={{ fontSize: 12, fontWeight: 600, color: "#0F172A" }}>MVP shipped ✦</span>
          </div>
        </div>
      </>)}
    </div>
  );
}

/* ─── Features ─── */
const FEATURES = [
  { icon: Lightbulb, label: "Inspiration Hub", color: "#DBEAFE", ic: "#1D4ED8", desc: "Collect references, ideas, links, and mood boards from anywhere on the web. Your creative vision, curated." },
  { icon: TrendingUp, label: "Progress Tracker", color: "#EDE9FE", ic: "#7C3AED", desc: "Watch your project grow. Timelines, milestones, and visual progress — the whole arc of your journey." },
  { icon: CheckSquare, label: "Checklist", color: "#E0E7FF", ic: "#4F46E5", desc: "Break the work into tasks you can actually ship. Stay focused without losing the creative thread." },
  { icon: HardDrive, label: "Asset Library", color: "#F3E8FF", ic: "#9333EA", desc: "Connect Google Drive or OneDrive. All your files, designs, and docs — one place, not five folders." },
  { icon: Image, label: "Proof Wall", color: "#EFF6FF", ic: "#2563EB", desc: "Screenshots, updates, breakthroughs. Document the messy, real, beautiful process of building." },
  { icon: Globe, label: "Public Share Page", color: "#DBEAFE", ic: "#1D4ED8", desc: "Your project's public face. Let the world follow your journey from idea to launch — and root for you." },
];

const PRICING = [
  {
    name: "Free", price: "$0", period: "/month",
    desc: "Get started and share your first project.",
    includes: ["1 Active Project", "Progress Tracker", "Checklist", "Basic Proof Wall", "Public Share Page", "Google Drive Connection"],
    notIncluded: ["Inspiration Hub", "Asset Library", "Analytics", "Custom Branding"],
    comingLater: [] as string[],
    cta: "Start for free", href: "/auth/signup", highlight: false,
  },
  {
    name: "Creator", price: "$5", period: "/month",
    desc: "For creators building multiple projects.",
    includes: ["Everything in Free", "Up to 10 Active Projects", "Inspiration Hub", "Asset Library", "Unlimited Proof Wall Updates", "Custom Project Banner", "Project Analytics"],
    notIncluded: [] as string[],
    comingLater: ["Inspiration Collections", "Project Templates", "Launch Countdown", "Milestone Celebrations"],
    cta: "Start creating", href: "/auth/signup", highlight: true,
  },
  {
    name: "Studio", price: "$12", period: "/month",
    desc: "For serious creators and startups.",
    includes: ["Everything in Creator", "Unlimited Projects", "Advanced Analytics", "Private Projects", "Custom Domain", "Remove Wispfolio Branding", "Early Access Features"],
    notIncluded: [] as string[],
    comingLater: ["Team Members", "Team Roles & Permissions", "Shared Asset Libraries", "Collaboration Workspace"],
    cta: "Go Studio", href: "/auth/signup", highlight: false,
  },
];

/* ─── Landing Page ─── */
export default function LandingPage() {
  const [activeFeature, setActiveFeature] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => setActiveFeature(p => (p + 1) % FEATURES.length), 3200);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: "#FFF" }}>
      <Navbar />

      {/* ══════════════════════════════════
          HERO
      ══════════════════════════════════ */}
      <section style={{ paddingTop: 100, paddingBottom: 0, background: "linear-gradient(180deg, #F8FAFF 0%, #FFFFFF 60%)", overflow: "hidden", position: "relative" }}>
        <div style={{ position: "absolute", top: -60, right: "10%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, #DBEAFE55, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: 80, left: "5%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, #EDE9FE44, transparent 70%)", pointerEvents: "none" }} />

        <div className="container hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "center", padding: "0 24px" }}>
          <div className="hero-left" style={{ paddingTop: 40, paddingBottom: 60 }}>
            <div className="animate-fadeup" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "white", border: "1px solid #E2E8F0", borderRadius: 999, padding: "6px 14px 6px 8px", marginBottom: 32, boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
              <span style={{ background: "linear-gradient(135deg, #2563EB, #7C3AED)", color: "white", fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 999 }}>BETA</span>
              <span style={{ fontSize: 13, color: "#64748B", fontWeight: 500 }}>Everyone can create free</span>
            </div>

            <h1 className="animate-fadeup delay-100 font-display" style={{ fontSize: "clamp(38px, 5vw, 62px)", fontWeight: 800, lineHeight: 1.08, color: "#0F172A", letterSpacing: "-0.035em", marginBottom: 22 }}>
              Every project<br />
              has a story.<br />
              <span style={{ background: "linear-gradient(135deg, #2563EB, #7C3AED)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Make yours visible.
              </span>
            </h1>

            <p className="animate-fadeup delay-200" style={{ fontSize: 18, color: "#475569", lineHeight: 1.75, marginBottom: 36, maxWidth: 460 }}>
              Wispfolio is the creative home for your projects — where ideas become journeys,
              journeys become stories, and stories build your audience.
            </p>

            <div className="animate-fadeup delay-300" style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 44 }}>
              <Link href="/auth/signup" className="btn-primary" style={{ fontSize: 16, padding: "14px 28px" }}>
                Start your journey <ArrowRight size={16} />
              </Link>
              <Link href="/explore" className="btn-ghost" style={{ fontSize: 15, padding: "14px 24px" }}>
                <Play size={14} fill="currentColor" /> See creator stories
              </Link>
            </div>

            <div className="animate-fadeup delay-400" style={{ display: "flex", alignItems: "center", gap: 24, paddingTop: 28, borderTop: "1px solid #F1F5F9", flexWrap: "wrap" }}>
              <div style={{ display: "flex", gap: -6 }}>
                {["#2563EB","#7C3AED","#4F46E5","#6D28D9","#1D4ED8"].map((c, i) => (
                  <div key={i} style={{ width: 28, height: 28, borderRadius: "50%", background: c, border: "2px solid white", marginLeft: i > 0 ? -8 : 0, boxShadow: "0 1px 4px rgba(0,0,0,0.15)" }} />
                ))}
              </div>
              <p style={{ fontSize: 13, color: "#64748B" }}>
                <strong style={{ color: "#0F172A" }}>Joined by creators</strong> who build in public
              </p>
            </div>
          </div>

          <div className="hero-wisp-scene animate-scalein delay-200">
            <WispScene />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          WHAT IS WISPFOLIO
      ══════════════════════════════════ */}
      <section id="explore" className="section" style={{ background: "#FFF" }}>
        <div className="container-sm" style={{ textAlign: "center", padding: "0 24px" }}>
          <div className="reveal" style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#EFF6FF", border: "1px solid #BFDBFE", padding: "5px 14px", borderRadius: 999, marginBottom: 20 }}>
            <Sparkles size={13} color="#2563EB" />
            <span style={{ fontSize: 13, fontWeight: 600, color: "#2563EB" }}>What&apos;s a Wispfolio?</span>
          </div>
          <h2 className="font-display" style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: "#0F172A", letterSpacing: "-0.03em", marginBottom: 20, lineHeight: 1.1 }}>
            Your project,<br />fully alive.
          </h2>
          <p style={{ fontSize: 17, color: "#475569", lineHeight: 1.8, marginBottom: 56 }}>
            Most projects die scattered — ideas in one app, files in another, progress nowhere.
            Wispfolio brings it all into one <strong style={{ color: "#0F172A" }}>Project Passport</strong>:
            a living document of your creative journey that you can share with the world.
          </p>

          <div className="grid-mobile-1" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {[
              { icon: "✦", label: "Inspiration", color: "#DBEAFE", tc: "#1D4ED8", desc: "Collect what moves you. References, ideas, links — your creative fuel in one place.", dir: "reveal-left" },
              { icon: "◈", label: "Growth", color: "#EDE9FE", tc: "#7C3AED", desc: "Track progress, manage tasks, organise assets. The engine room of your project.", dir: "reveal" },
              { icon: "◎", label: "Sharing", color: "#E0E7FF", tc: "#4F46E5", desc: "Publish your journey. Build an audience before you launch. Let people root for you.", dir: "reveal-right" },
            ].map((s) => (
              <div key={s.label} className={`card ${s.dir}`} style={{ textAlign: "left", padding: "28px 24px" }}>
                <div style={{ fontSize: 28, marginBottom: 14 }}>{s.icon}</div>
                <h3 className="font-display" style={{ fontWeight: 700, fontSize: 18, color: "#0F172A", marginBottom: 8 }}>{s.label}</h3>
                <p style={{ fontSize: 14, color: "#64748B", lineHeight: 1.65 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          FEATURES
      ══════════════════════════════════ */}
      <section id="features" className="section" style={{ background: "#F8FAFF" }}>
        <div className="container" style={{ padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div className="reveal" style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "white", border: "1px solid #E2E8F0", padding: "5px 14px", borderRadius: 999, marginBottom: 20, boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
              <Layers size={13} color="#7C3AED" />
              <span style={{ fontSize: 13, fontWeight: 600, color: "#7C3AED" }}>Inside the Project Passport</span>
            </div>
            <h2 className="font-display" style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800, color: "#0F172A", letterSpacing: "-0.03em", marginBottom: 14 }}>
              Six tools. One story.
            </h2>
            <p style={{ fontSize: 17, color: "#64748B", maxWidth: 480, margin: "0 auto" }}>
              Everything a creator needs — from the first spark to the public launch.
            </p>
          </div>

          <div className="features-grid" style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 24, alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
              {FEATURES.map((f, i) => (
                <button key={f.label} onClick={() => { setActiveFeature(i); if (intervalRef.current) clearInterval(intervalRef.current); }}
                  style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 14px", borderRadius: 11, border: "none", cursor: "pointer", textAlign: "left", transition: "all 0.2s",
                    background: activeFeature === i ? "white" : "transparent",
                    boxShadow: activeFeature === i ? "0 2px 12px rgba(0,0,0,0.06)" : "none",
                  }}>
                  <div style={{ width: 36, height: 36, background: f.color, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <f.icon size={17} color={f.ic} />
                  </div>
                  <span style={{ fontSize: 14, fontWeight: activeFeature === i ? 700 : 500, color: activeFeature === i ? "#0F172A" : "#64748B" }}>{f.label}</span>
                  {activeFeature === i && <div style={{ marginLeft: "auto", width: 6, height: 6, borderRadius: "50%", background: "#2563EB", flexShrink: 0 }} />}
                </button>
              ))}
            </div>

            <div key={activeFeature} className="animate-fadein" style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 20, padding: "40px 36px", boxShadow: "0 4px 24px rgba(0,0,0,0.05)", minHeight: 320 }}>
              <div style={{ width: 56, height: 56, background: FEATURES[activeFeature].color, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24 }}>
                {(() => { const F = FEATURES[activeFeature].icon; return <F size={26} color={FEATURES[activeFeature].ic} />; })()}
              </div>
              <h3 className="font-display" style={{ fontWeight: 800, fontSize: 26, color: "#0F172A", marginBottom: 14, letterSpacing: "-0.02em" }}>
                {FEATURES[activeFeature].label}
              </h3>
              <p style={{ fontSize: 16, color: "#64748B", lineHeight: 1.75, marginBottom: 28, maxWidth: 520 }}>
                {FEATURES[activeFeature].desc}
              </p>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {["Creator Studio", "Project Passport", "Build in public"].map(tag => (
                  <span key={tag} style={{ background: "#F8FAFF", border: "1px solid #E2E8F0", color: "#64748B", padding: "4px 12px", borderRadius: 999, fontSize: 12, fontWeight: 600 }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          CREATOR CALL-OUT
      ══════════════════════════════════ */}

      <section className="section" style={{ background: "#FFF" }}>
        <div className="container-md" style={{ padding: "0 24px" }}>
          <div style={{ background: "linear-gradient(135deg, #0F172A 0%, #1E3A8A 60%, #312E81 100%)", borderRadius: 24, padding: "56px 48px", position: "relative", overflow: "hidden" }}>
            {/* Wisp glow bg */}
            <div style={{ position: "absolute", top: -40, right: -40, width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,0.25), transparent 70%)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", bottom: -60, left: 0, width: 250, height: 250, borderRadius: "50%", background: "radial-gradient(circle, rgba(37,99,235,0.2), transparent 70%)", pointerEvents: "none" }} />

            <div className="grid-mobile-1" style={{ position: "relative", display: "grid", gridTemplateColumns: "1fr auto", gap: 40, alignItems: "center" }}>
              <div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)", padding: "5px 14px", borderRadius: 999, marginBottom: 20 }}>
                  <Zap size={13} color="#A78BFA" />
                  <span style={{ fontSize: 13, fontWeight: 600, color: "#A78BFA" }}>Build for free</span>
                </div>
                <h2 className="font-display" style={{ fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 800, color: "white", letterSpacing: "-0.03em", marginBottom: 14, lineHeight: 1.15 }}>
                  Everyone can create.<br />Start today for free.
                </h2>
                <p style={{ fontSize: 16, color: "rgba(255,255,255,0.65)", lineHeight: 1.7, maxWidth: 480 }}>
                  Jump in and launch your first project without any cost. When your creative
                  needs grow, upgrade to Creator or Studio to access our professional toolkit.
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, flexShrink: 0 }}>
                <Link href="/auth/signup" className="btn-primary" style={{ fontSize: 15, padding: "13px 28px", background: "white", color: "#0F172A" }}>
                  Start for free <ArrowRight size={15} />
                </Link>
                <Link href="/explore" style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", textDecoration: "none", textAlign: "center", transition: "color 0.15s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "white")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}>
                  See creator stories →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          PRICING
      ══════════════════════════════════ */}
      <section id="pricing" className="section" style={{ background: "#F8FAFF" }}>
        <div className="container-md" style={{ padding: "0 24px" }}>
          <div className="reveal" style={{ textAlign: "center", marginBottom: 52 }}>
            <h2 className="font-display" style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800, color: "#0F172A", letterSpacing: "-0.03em", marginBottom: 12 }}>
              Flexible pricing for<br />every creator.
            </h2>
            <p style={{ fontSize: 17, color: "#64748B" }}>Built to help you grow from first idea to scale.</p>
          </div>

          <div className="pricing-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {PRICING.map(plan => (
              <div key={plan.name} style={{
                background: plan.highlight ? "linear-gradient(135deg, #1E3A8A, #312E81)" : "white",
                border: `1.5px solid ${plan.highlight ? "transparent" : "#E2E8F0"}`,
                borderRadius: 18,
                padding: "32px 26px",
                display: "flex", flexDirection: "column",
                position: "relative",
                boxShadow: plan.highlight ? "0 16px 48px rgba(37,99,235,0.25)" : "0 2px 8px rgba(0,0,0,0.04)",
              }}>
                {plan.highlight && (
                  <div style={{ position: "absolute", top: -13, left: "50%", transform: "translateX(-50%)", background: "linear-gradient(135deg, #2563EB, #7C3AED)", color: "white", padding: "4px 16px", borderRadius: 999, fontSize: 11, fontWeight: 800, whiteSpace: "nowrap", letterSpacing: "0.05em" }}>
                    MOST POPULAR
                  </div>
                )}
                <div style={{ marginBottom: 24 }}>
                  <div className="font-display" style={{ fontWeight: 800, fontSize: 16, color: plan.highlight ? "rgba(255,255,255,0.7)" : "#64748B", marginBottom: 6 }}>{plan.name}</div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 3, marginBottom: 8 }}>
                    <span className="font-display" style={{ fontWeight: 900, fontSize: 42, color: plan.highlight ? "white" : "#0F172A", letterSpacing: "-0.04em" }}>{plan.price}</span>
                    <span style={{ fontSize: 14, color: plan.highlight ? "rgba(255,255,255,0.5)" : "#94A3B8" }}>{plan.period}</span>
                  </div>
                  <p style={{ fontSize: 13, color: plan.highlight ? "rgba(255,255,255,0.65)" : "#64748B", lineHeight: 1.5 }}>{plan.desc}</p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28, flex: 1 }}>
                  {/* Included items */}
                  {plan.includes.map(f => (
                    <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                      <div style={{ width: 18, height: 18, borderRadius: "50%", background: plan.highlight ? "rgba(255,255,255,0.15)" : "#EFF6FF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                        <Check size={10} color={plan.highlight ? "white" : "#2563EB"} strokeWidth={3} />
                      </div>
                      <span style={{ fontSize: 13.5, color: plan.highlight ? "rgba(255,255,255,0.85)" : "#475569" }}>{f}</span>
                    </div>
                  ))}
                  {/* Not Included items */}
                  {plan.notIncluded.map(f => (
                    <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: 10, opacity: 0.5 }}>
                      <div style={{ width: 18, height: 18, borderRadius: "50%", background: plan.highlight ? "rgba(255,255,255,0.08)" : "#F1F5F9", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                        <X size={10} color={plan.highlight ? "rgba(255,255,255,0.4)" : "#94A3B8"} strokeWidth={3} />
                      </div>
                      <span style={{ fontSize: 13.5, color: plan.highlight ? "rgba(255,255,255,0.4)" : "#94A3B8", textDecoration: "line-through" }}>{f}</span>
                    </div>
                  ))}
                  {/* Coming Later items */}
                  {plan.comingLater.map(f => (
                    <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: 10, opacity: 0.7 }}>
                      <div style={{ width: 18, height: 18, borderRadius: "50%", background: plan.highlight ? "rgba(255,255,255,0.1)" : "#F3E8FF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                        <Clock size={10} color={plan.highlight ? "rgba(255,255,255,0.6)" : "#7C3AED"} strokeWidth={2.5} />
                      </div>
                      <span style={{ fontSize: 13.5, color: plan.highlight ? "rgba(255,255,255,0.55)" : "#7C3AED", fontStyle: "italic" }}>{f}</span>
                    </div>
                  ))}
                </div>
                <Link href={plan.href} className={plan.highlight ? "" : "btn-primary"} style={{
                  display: "block", textAlign: "center", padding: "12px 24px", borderRadius: 10,
                  fontSize: 14, fontWeight: 700, textDecoration: "none", transition: "all 0.15s",
                  background: plan.highlight ? "white" : "#2563EB",
                  color: plan.highlight ? "#1E3A8A" : "white",
                }}>
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          FINAL CTA
      ══════════════════════════════════ */}
      <section className="section" style={{ background: "#FFF", textAlign: "center" }}>
        <div className="container-sm" style={{ padding: "0 24px" }}>
          <div style={{ fontSize: 48, marginBottom: 20, lineHeight: 1 }}>✦</div>
          <h2 className="font-display" style={{ fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 800, color: "#0F172A", letterSpacing: "-0.035em", marginBottom: 16, lineHeight: 1.1 }}>
            Your project is waiting<br />to be seen.
          </h2>
          <p style={{ fontSize: 17, color: "#64748B", lineHeight: 1.75, marginBottom: 36, maxWidth: 480, margin: "0 auto 36px" }}>
            Creators who share their journey build audiences, stay motivated, and ship more.
            Start yours today — it only takes a minute.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/auth/signup" className="btn-primary" style={{ fontSize: 16, padding: "14px 32px" }}>
              Create your free account <ArrowRight size={16} />
            </Link>
            <Link href="/explore" className="btn-ghost" style={{ fontSize: 15, padding: "14px 24px" }}>
              Explore projects
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          FOOTER
      ══════════════════════════════════ */}
      <footer style={{ background: "#0F172A", color: "white", paddingTop: 64, paddingBottom: 40 }}>
        <div className="container" style={{ padding: "0 24px" }}>
          {/* Top */}
          <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr", gap: 40, marginBottom: 56, paddingBottom: 48, borderBottom: "1px solid #1E293B" }}>
            {/* Brand */}
            <div>
              <Link href="/" style={{ display: "flex", alignItems: "center", gap: 9, textDecoration: "none", marginBottom: 16 }}>
                <div style={{ width: 32, height: 32, background: "linear-gradient(135deg, #2563EB, #7C3AED)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="3.5" fill="white" opacity="0.9"/><circle cx="10" cy="10" r="6" stroke="white" strokeWidth="1.2" strokeDasharray="2 2" opacity="0.5"/><circle cx="10" cy="4" r="1.5" fill="white" opacity="0.7"/></svg>
                </div>
                <span className="font-display" style={{ fontWeight: 800, fontSize: 17, color: "white" }}>Wispfolio</span>
              </Link>
              <p style={{ fontSize: 13.5, color: "#64748B", lineHeight: 1.7, maxWidth: 240 }}>
                The creative home for your projects. From idea to launch — share the journey.
              </p>
              <p style={{ fontSize: 12, color: "#475569", marginTop: 20 }}>© 2026 Wispfolio. All rights reserved.</p>
            </div>

            {/* Links */}
            {[
              { title: "Product", links: [["Explore Projects", "/explore"], ["Features", "/#features"], ["Pricing", "/#pricing"], ["Creator Studio", "/creator/studio"]] },
              { title: "Company", links: [["About", "/about"], ["Blog", "/blog"], ["Careers", "/careers"], ["Press", "/press"]] },
              { title: "Support", links: [["Help Center", "/help"], ["Status", "/status"], ["Contact", "/contact"]] },
              { title: "Legal", links: [["Privacy Policy", "/privacy"], ["Terms of Service", "/terms"], ["Cookie Policy", "/cookies"]] },
            ].map(col => (
              <div key={col.title}>
                <div className="font-display" style={{ fontWeight: 700, fontSize: 13, color: "white", marginBottom: 14, letterSpacing: "0.02em" }}>{col.title}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {col.links.map(([label, href]) => (
                    <Link key={label} href={href} style={{ fontSize: 13.5, color: "#64748B", textDecoration: "none", transition: "color 0.15s" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "white")}
                      onMouseLeave={e => (e.currentTarget.style.color = "#64748B")}>
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
            <p style={{ fontSize: 12, color: "#334155" }}>
              Built for creators, by creators. ✦ 2026
            </p>
            <div style={{ display: "flex", gap: 16 }}>
              {[["Privacy Policy", "/privacy"], ["Terms", "/terms"], ["Cookies", "/cookies"]].map(([l, h]) => (
                <Link key={l} href={h} style={{ fontSize: 12, color: "#475569", textDecoration: "none" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#94A3B8")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#475569")}>
                  {l}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
