"use client";
import { useState } from "react";
import Link from "next/link";
import { Zap, Check, Bell, Shield, User, ArrowRight, Star, Home } from "lucide-react";

const TABS = [
  { key: "profile", label: "Profile", icon: User },
  { key: "notifications", label: "Notifications", icon: Bell },
  { key: "security", label: "Security", icon: Shield },
  { key: "creator", label: "Become a Creator", icon: Zap, highlight: true },
];

export default function UserSettingsPage() {
  const [tab, setTab] = useState("profile");
  const [saved, setSaved] = useState(false);

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "10px 14px", border: "1.5px solid #E2E8F0",
    borderRadius: 9, fontSize: 14, outline: "none", boxSizing: "border-box",
    transition: "border-color 0.15s", fontFamily: "Inter, sans-serif", color: "#0F172A",
  };

  return (
    <div style={{ minHeight: "100vh", background: "#F8FAFF" }}>
      {/* Header */}
      <header style={{ background: "white", borderBottom: "1px solid #E2E8F0", position: "sticky", top: 0, zIndex: 40 }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px", height: 62, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
            <div style={{ width: 30, height: 30, background: "linear-gradient(135deg, #2563EB, #7C3AED)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="14" height="14" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="3.5" fill="white" opacity="0.9"/><circle cx="10" cy="4" r="1.5" fill="white" opacity="0.7"/></svg>
            </div>
            <span style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 16, color: "#0F172A" }}>Wispfolio</span>
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <Link href="/feed" style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "#64748B", textDecoration: "none", fontWeight: 500, transition: "color 0.15s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#2563EB")}
              onMouseLeave={e => (e.currentTarget.style.color = "#64748B")}>
              <Home size={14} /> Feed
            </Link>
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg, #2563EB, #7C3AED)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 13, fontWeight: 800, fontFamily: "Sora, sans-serif" }}>U</div>
          </div>
        </div>
      </header>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "36px 24px", display: "grid", gridTemplateColumns: "200px 1fr", gap: 28 }}>
        {/* Sidebar */}
        <div>
          <h2 style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 13, color: "#0F172A", marginBottom: 12, letterSpacing: "0.02em" }}>Settings</h2>
          <nav style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {TABS.map(t => (
              <button key={t.key} onClick={() => setTab(t.key)}
                style={{ display: "flex", alignItems: "center", gap: 9, padding: "10px 12px", borderRadius: 9, border: "none", cursor: "pointer", textAlign: "left", fontSize: 13.5, fontWeight: tab === t.key ? 700 : 500, color: tab === t.key ? (t.highlight ? "#7C3AED" : "#2563EB") : "#64748B", background: tab === t.key ? (t.highlight ? "#EDE9FE" : "#EFF6FF") : "transparent", transition: "all 0.15s", borderLeft: tab === t.key ? `2.5px solid ${t.highlight ? "#7C3AED" : "#2563EB"}` : "2.5px solid transparent" }}>
                <t.icon size={15} /> {t.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        <div>
          {/* Profile */}
          {tab === "profile" && (
            <div style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 16, padding: "28px" }}>
              <h3 style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 16, color: "#0F172A", marginBottom: 22 }}>Your profile</h3>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
                <div style={{ width: 60, height: 60, borderRadius: "50%", background: "linear-gradient(135deg, #2563EB, #7C3AED)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 800, fontSize: 22, fontFamily: "Sora, sans-serif" }}>U</div>
                <button style={{ padding: "8px 16px", border: "1.5px solid #E2E8F0", borderRadius: 8, background: "white", fontSize: 13, fontWeight: 600, cursor: "pointer", color: "#334155" }}>Change photo</button>
              </div>
              {[{ label: "Display name", placeholder: "Your name" }, { label: "Username", placeholder: "@yourhandle" }, { label: "Email", placeholder: "you@example.com" }].map(f => (
                <div key={f.label} style={{ marginBottom: 14 }}>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 6 }}>{f.label}</label>
                  <input placeholder={f.placeholder} style={inputStyle}
                    onFocus={e => (e.target.style.borderColor = "#2563EB")}
                    onBlur={e => (e.target.style.borderColor = "#E2E8F0")} />
                </div>
              ))}
              <button onClick={() => { setSaved(true); setTimeout(() => setSaved(false), 2000); }}
                style={{ display: "flex", alignItems: "center", gap: 7, padding: "10px 22px", background: saved ? "#16A34A" : "#2563EB", color: "white", border: "none", borderRadius: 9, fontSize: 14, fontWeight: 700, cursor: "pointer", transition: "background 0.2s", fontFamily: "Sora, sans-serif", marginTop: 6 }}>
                {saved ? <><Check size={14} /> Saved!</> : "Save changes"}
              </button>
            </div>
          )}

          {/* Notifications */}
          {tab === "notifications" && (
            <div style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 16, padding: "28px" }}>
              <h3 style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 16, color: "#0F172A", marginBottom: 22 }}>Notification preferences</h3>
              {[
                { label: "New posts from followed creators", sub: "Notified when a creator you follow posts an update" },
                { label: "Project milestones", sub: "When a creator you follow hits a milestone" },
                { label: "Weekly digest", sub: "A roundup of your feed highlights every Monday" },
              ].map((n, i, arr) => (
                <div key={n.label} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 0", borderBottom: i < arr.length - 1 ? "1px solid #F8FAFF" : "none" }}>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "#0F172A" }}>{n.label}</div>
                    <div style={{ fontSize: 12, color: "#94A3B8", marginTop: 2 }}>{n.sub}</div>
                  </div>
                  <div style={{ width: 44, height: 24, borderRadius: 999, background: i % 2 === 0 ? "#2563EB" : "#E2E8F0", cursor: "pointer", position: "relative", transition: "background 0.2s", flexShrink: 0 }}>
                    <div style={{ position: "absolute", top: 3, left: i % 2 === 0 ? 22 : 3, width: 18, height: 18, borderRadius: "50%", background: "white", transition: "left 0.2s", boxShadow: "0 1px 4px rgba(0,0,0,0.12)" }} />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Security */}
          {tab === "security" && (
            <div style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 16, padding: "28px" }}>
              <h3 style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 16, color: "#0F172A", marginBottom: 18 }}>Change password</h3>
              {["Current password", "New password", "Confirm new password"].map(f => (
                <div key={f} style={{ marginBottom: 14 }}>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 6 }}>{f}</label>
                  <input type="password" placeholder="••••••••" style={inputStyle}
                    onFocus={e => (e.target.style.borderColor = "#2563EB")}
                    onBlur={e => (e.target.style.borderColor = "#E2E8F0")} />
                </div>
              ))}
              <button style={{ padding: "10px 22px", background: "#2563EB", color: "white", border: "none", borderRadius: 9, fontSize: 14, fontWeight: 700, cursor: "pointer", marginTop: 6, fontFamily: "Sora, sans-serif" }}>Update password</button>
            </div>
          )}

          {/* Become a Creator */}
          {tab === "creator" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {/* Hero */}
              <div style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 16, padding: "36px 32px", textAlign: "center" }}>
                <div style={{ fontSize: 48, marginBottom: 16, lineHeight: 1 }}>✦</div>
                <h2 style={{ fontFamily: "Sora, sans-serif", fontWeight: 900, fontSize: 26, color: "#0F172A", marginBottom: 10, letterSpacing: "-0.025em" }}>
                  Your project has a story.<br />Start telling it.
                </h2>
                <p style={{ fontSize: 15, color: "#64748B", lineHeight: 1.72, maxWidth: 460, margin: "0 auto 32px" }}>
                  Creator unlocks the full Project Passport — Inspiration Hub, Progress Tracker,
                  Asset Library, Proof Wall, and your own public share page. Build in public.
                  Build your audience.
                </p>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 32, maxWidth: 460, margin: "0 auto 32px", textAlign: "left" }}>
                  {["Project Passport", "Inspiration Hub", "Progress Tracker", "Task Checklist", "Asset Library (cloud)", "Proof Wall", "Public Share Page", "Follower analytics"].map(f => (
                    <div key={f} style={{ display: "flex", alignItems: "center", gap: 9 }}>
                      <div style={{ width: 20, height: 20, borderRadius: "50%", background: "#EDE9FE", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <Check size={11} color="#7C3AED" strokeWidth={3} />
                      </div>
                      <span style={{ fontSize: 13.5, color: "#334155" }}>{f}</span>
                    </div>
                  ))}
                </div>

                <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                  <Link href="/creator/verification"
                    style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 28px", background: "#7C3AED", color: "white", borderRadius: 10, fontSize: 15, fontWeight: 800, textDecoration: "none", fontFamily: "Sora, sans-serif", transition: "background 0.15s" }}
                    onMouseEnter={e => (e.currentTarget.style.background = "#6D28D9")}
                    onMouseLeave={e => (e.currentTarget.style.background = "#7C3AED")}>
                    Become a Creator — Free <ArrowRight size={15} />
                  </Link>
                </div>
                <p style={{ marginTop: 14, fontSize: 12, color: "#94A3B8" }}>Free to start. Upgrade your plan later for more tools.</p>
              </div>

              {/* Compare table */}
              <div style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 14, padding: "24px 28px" }}>
                <h3 style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 15, color: "#0F172A", marginBottom: 18 }}>Free vs Creator</h3>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 80px 80px", gap: 0 }}>
                  {[["", "Free", "Creator"], ["Feed & discovery", "✓", "✓"], ["Follow creators", "✓", "✓"], ["Project Passport", "—", "✓"], ["Inspiration Hub", "—", "✓"], ["Progress Tracker", "—", "✓"], ["Asset Library", "—", "✓"], ["Proof Wall", "—", "✓"], ["Public Share Page", "—", "✓"]].map(([f, free, creator], i) => (
                    <>
                      <div key={`f${i}`} style={{ padding: i === 0 ? "0 0 10px" : "11px 0", borderBottom: i < 8 ? "1px solid #F8FAFF" : "none", fontSize: i === 0 ? 11 : 14, fontWeight: i === 0 ? 700 : 400, color: i === 0 ? "#94A3B8" : "#334155", textTransform: i === 0 ? "uppercase" : "none", letterSpacing: i === 0 ? "0.05em" : "normal" }}>{f}</div>
                      <div key={`free${i}`} style={{ padding: i === 0 ? "0 0 10px" : "11px 0", borderBottom: i < 8 ? "1px solid #F8FAFF" : "none", textAlign: "center", fontSize: i === 0 ? 11 : 14, fontWeight: i === 0 ? 700 : 600, color: i === 0 ? "#94A3B8" : free === "✓" ? "#16A34A" : "#CBD5E1", textTransform: i === 0 ? "uppercase" : "none", letterSpacing: i === 0 ? "0.05em" : "normal" }}>{free}</div>
                      <div key={`creator${i}`} style={{ padding: i === 0 ? "0 0 10px" : "11px 0", borderBottom: i < 8 ? "1px solid #F8FAFF" : "none", textAlign: "center", fontSize: i === 0 ? 11 : 14, fontWeight: i === 0 ? 700 : 600, color: i === 0 ? "#7C3AED" : creator === "✓" ? "#7C3AED" : "#CBD5E1", textTransform: i === 0 ? "uppercase" : "none", letterSpacing: i === 0 ? "0.05em" : "normal" }}>{creator}</div>
                    </>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
