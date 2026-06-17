"use client";
import { useState } from "react";
import Link from "next/link";
import { Zap, Check, Bell, Shield, User, ArrowRight, Star } from "lucide-react";

const TABS = ["Profile", "Notifications", "Security", "Become a Creator"];

export default function UserSettingsPage() {
  const [tab, setTab] = useState("Profile");

  return (
    <div style={{ minHeight: "100vh", background: "#F8FAFF" }}>
      {/* Header */}
      <header style={{ background: "white", borderBottom: "1px solid #E2E8F0" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/feed" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
            <div style={{ width: 28, height: 28, background: "#2563EB", borderRadius: 7, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="14" height="14" viewBox="0 0 18 18" fill="none">
                <path d="M3 9C3 5.686 5.686 3 9 3s6 2.686 6 6-2.686 6-6 6S3 12.314 3 9z" stroke="white" strokeWidth="1.5"/>
                <path d="M9 6v6M6 9h6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <span style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 16, color: "#0F172A" }}>Wispfolio</span>
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Link href="/feed" style={{ fontSize: 13, color: "#64748B", textDecoration: "none", fontWeight: 500 }}>← Back to feed</Link>
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#2563EB", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 13, fontWeight: 700 }}>U</div>
          </div>
        </div>
      </header>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "32px 24px", display: "grid", gridTemplateColumns: "200px 1fr", gap: 28 }}>
        {/* Sidebar tabs */}
        <div>
          <h2 style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 14, color: "#0F172A", marginBottom: 12 }}>Settings</h2>
          <nav style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {[
              { label: "Profile", icon: User },
              { label: "Notifications", icon: Bell },
              { label: "Security", icon: Shield },
              { label: "Become a Creator", icon: Zap, highlight: true },
            ].map((t) => (
              <button
                key={t.label}
                onClick={() => setTab(t.label)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "9px 12px",
                  borderRadius: 8,
                  background: tab === t.label ? (t.highlight ? "#EFF6FF" : "#F1F5F9") : "transparent",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  fontSize: 13,
                  fontWeight: tab === t.label ? 600 : 500,
                  color: tab === t.label ? (t.highlight ? "#2563EB" : "#0F172A") : "#64748B",
                  transition: "all 0.15s",
                }}
              >
                <t.icon size={15} />
                {t.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        <div>
          {/* Profile */}
          {tab === "Profile" && (
            <div style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 14, padding: "28px" }}>
              <h3 style={{ fontWeight: 700, fontSize: 16, color: "#0F172A", marginBottom: 20 }}>Your profile</h3>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
                <div style={{ width: 60, height: 60, borderRadius: "50%", background: "#2563EB", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 800, fontSize: 20 }}>U</div>
                <button style={{ padding: "8px 16px", border: "1.5px solid #E2E8F0", borderRadius: 8, background: "white", fontSize: 13, fontWeight: 600, cursor: "pointer", color: "#334155" }}>Change photo</button>
              </div>
              {[
                { label: "Display name", placeholder: "Your name" },
                { label: "Username", placeholder: "@yourhandle" },
                { label: "Email", placeholder: "you@example.com" },
              ].map((f) => (
                <div key={f.label} style={{ marginBottom: 16 }}>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 6 }}>{f.label}</label>
                  <input placeholder={f.placeholder} style={{ width: "100%", padding: "10px 14px", border: "1.5px solid #E2E8F0", borderRadius: 8, fontSize: 14, outline: "none", boxSizing: "border-box" }} />
                </div>
              ))}
              <button style={{ padding: "10px 24px", background: "#2563EB", color: "white", border: "none", borderRadius: 8, fontSize: 14, fontWeight: 600, cursor: "pointer" }}>Save changes</button>
            </div>
          )}

          {/* Notifications */}
          {tab === "Notifications" && (
            <div style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 14, padding: "28px" }}>
              <h3 style={{ fontWeight: 700, fontSize: 16, color: "#0F172A", marginBottom: 20 }}>Notification preferences</h3>
              {[
                { label: "New posts from followed creators", sub: "Get notified when a creator you follow posts an update" },
                { label: "Project milestones", sub: "When a creator you follow hits a milestone" },
                { label: "Weekly digest", sub: "A weekly roundup of your feed highlights" },
              ].map((n, i) => (
                <div key={n.label} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 0", borderBottom: i < 2 ? "1px solid #F1F5F9" : "none" }}>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "#0F172A" }}>{n.label}</div>
                    <div style={{ fontSize: 12, color: "#94A3B8" }}>{n.sub}</div>
                  </div>
                  <div style={{ width: 40, height: 22, borderRadius: 999, background: i % 2 === 0 ? "#2563EB" : "#E2E8F0", cursor: "pointer", position: "relative", flexShrink: 0 }}>
                    <div style={{ position: "absolute", top: 3, left: i % 2 === 0 ? 20 : 3, width: 16, height: 16, borderRadius: "50%", background: "white" }} />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Security */}
          {tab === "Security" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 14, padding: "28px" }}>
                <h3 style={{ fontWeight: 700, fontSize: 16, color: "#0F172A", marginBottom: 16 }}>Change password</h3>
                {["Current password", "New password", "Confirm new password"].map((f) => (
                  <div key={f} style={{ marginBottom: 14 }}>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 6 }}>{f}</label>
                    <input type="password" placeholder="••••••••" style={{ width: "100%", padding: "10px 14px", border: "1.5px solid #E2E8F0", borderRadius: 8, fontSize: 14, outline: "none", boxSizing: "border-box" }} />
                  </div>
                ))}
                <button style={{ padding: "10px 20px", background: "#2563EB", color: "white", border: "none", borderRadius: 8, fontSize: 14, fontWeight: 600, cursor: "pointer" }}>Update password</button>
              </div>
            </div>
          )}

          {/* Become a Creator */}
          {tab === "Become a Creator" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {/* Hero card */}
              <div style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 16, padding: "32px 28px", textAlign: "center" }}>
                <div style={{ width: 64, height: 64, background: "#EFF6FF", borderRadius: 18, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                  <Zap size={30} color="#2563EB" />
                </div>
                <h2 style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 22, color: "#0F172A", marginBottom: 10, letterSpacing: "-0.02em" }}>
                  Start building in public
                </h2>
                <p style={{ fontSize: 15, color: "#64748B", lineHeight: 1.7, maxWidth: 440, margin: "0 auto 28px" }}>
                  Upgrade to Creator and get access to the full Project Passport — Inspiration Hub, Progress Tracker, Asset Library, Proof Wall, and your own public share page.
                </p>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 28, textAlign: "left" }}>
                  {[
                    "Project Passport", "Inspiration Hub",
                    "Progress Tracker", "Task Checklist",
                    "Asset Library (cloud)", "Proof Wall",
                    "Public Share Page", "Follower analytics",
                  ].map((f) => (
                    <div key={f} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <div style={{ width: 18, height: 18, borderRadius: "50%", background: "#EFF6FF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <Check size={10} color="#2563EB" strokeWidth={3} />
                      </div>
                      <span style={{ fontSize: 13, color: "#475569" }}>{f}</span>
                    </div>
                  ))}
                </div>

                <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                  <Link
                    href="/auth/signup?role=creator"
                    style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 28px", background: "#2563EB", color: "white", borderRadius: 10, fontSize: 15, fontWeight: 700, textDecoration: "none", fontFamily: "Sora, sans-serif" }}
                  >
                    Become a Creator — $9/mo <ArrowRight size={15} />
                  </Link>
                </div>

                <p style={{ marginTop: 14, fontSize: 12, color: "#94A3B8" }}>Cancel anytime. No hidden fees.</p>
              </div>

              {/* Compare */}
              <div style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 14, padding: "24px 28px" }}>
                <h3 style={{ fontWeight: 700, fontSize: 15, color: "#0F172A", marginBottom: 16 }}>Free vs Creator</h3>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 80px 80px", gap: 8, fontSize: 13 }}>
                  <div style={{ fontWeight: 600, color: "#94A3B8", paddingBottom: 8, borderBottom: "1px solid #F1F5F9" }}>Feature</div>
                  <div style={{ fontWeight: 600, color: "#94A3B8", textAlign: "center", paddingBottom: 8, borderBottom: "1px solid #F1F5F9" }}>Free</div>
                  <div style={{ fontWeight: 700, color: "#2563EB", textAlign: "center", paddingBottom: 8, borderBottom: "1px solid #F1F5F9" }}>Creator</div>
                  {[
                    ["Feed access", true, true],
                    ["Follow creators", true, true],
                    ["Project Passport", false, true],
                    ["Inspiration Hub", false, true],
                    ["Asset Library", false, true],
                    ["Proof Wall", false, true],
                    ["Public Share Page", false, true],
                  ].map(([f, free, creator]) => (
                    <>
                      <div key={String(f)} style={{ padding: "10px 0", borderBottom: "1px solid #F8FAFF", color: "#334155" }}>{f}</div>
                      <div style={{ padding: "10px 0", borderBottom: "1px solid #F8FAFF", textAlign: "center", color: free ? "#16A34A" : "#CBD5E1" }}>{free ? "✓" : "—"}</div>
                      <div style={{ padding: "10px 0", borderBottom: "1px solid #F8FAFF", textAlign: "center", color: creator ? "#16A34A" : "#CBD5E1" }}>{creator ? "✓" : "—"}</div>
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
