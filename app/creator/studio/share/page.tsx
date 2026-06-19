"use client";
import { useState } from "react";
import { Globe, Copy, Eye, Settings, Check, ExternalLink, Users, Heart, TrendingUp, Share2, Sparkles } from "lucide-react";

export default function SharePage() {
  const [tab, setTab] = useState<"preview" | "settings">("preview");
  const [copied, setCopied] = useState(false);
  const [settings, setSettings] = useState({
    isPublic: true,
    showProgress: true,
    showChecklist: false,
    showProofWall: true,
    showFollowers: true,
    customSlug: "my-mobile-app",
    tagline: "Building a mobile app for indie creators — one update at a time.",
  });

  function copyLink() {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const shareUrl = `wispfolio.com/p/${settings.customSlug}`;

  return (
    <div style={{ padding: "32px 36px", maxWidth: 960 }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 28, flexWrap: "wrap", gap: 16 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
            <div style={{ width: 34, height: 34, background: "#DCFCE7", borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Globe size={17} color="#166534" />
            </div>
            <span style={{ fontSize: 13, fontWeight: 700, color: "#166534", fontFamily: "Sora, sans-serif" }}>Share Page</span>
          </div>
          <h1 style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 24, color: "#0F172A", letterSpacing: "-0.02em", marginBottom: 4 }}>
            Your public project page
          </h1>
          <p style={{ fontSize: 14, color: "#64748B" }}>Let the world follow your journey.</p>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <button onClick={copyLink} style={{ display: "flex", alignItems: "center", gap: 6, padding: "10px 16px", background: copied ? "#DCFCE7" : "white", color: copied ? "#16A34A" : "#334155", border: "1.5px solid", borderColor: copied ? "#86EFAC" : "#E2E8F0", borderRadius: 9, fontSize: 13, fontWeight: 600, cursor: "pointer", transition: "all 0.2s" }}>
            {copied ? <Check size={13} /> : <Copy size={13} />}
            {copied ? "Copied!" : shareUrl}
          </button>
          <a href="#" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 6, padding: "10px 16px", background: "#2563EB", color: "white", border: "none", borderRadius: 9, fontSize: 13, fontWeight: 700, textDecoration: "none", transition: "background 0.15s" }}
            onMouseEnter={e => (e.currentTarget.style.background = "#1D4ED8")}
            onMouseLeave={e => (e.currentTarget.style.background = "#2563EB")}>
            <ExternalLink size={13} /> Open live
          </a>
        </div>
      </div>

      {/* Stats row */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14, marginBottom: 28 }}>
        {[
          { label: "Followers", val: "128", icon: Users, color: "#EFF6FF", tc: "#2563EB" },
          { label: "Total likes", val: "342", icon: Heart, color: "#FFF1F2", tc: "#E11D48" },
          { label: "Page views", val: "1.4k", icon: Eye, color: "#F0FDF4", tc: "#16A34A" },
          { label: "Updates shared", val: "24", icon: TrendingUp, color: "#F5F3FF", tc: "#7C3AED" },
        ].map(s => (
          <div key={s.label} style={{ background: s.color, border: "1px solid #E2E8F0", borderRadius: 12, padding: "14px 16px", display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 32, height: 32, background: "white", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <s.icon size={15} color={s.tc} />
            </div>
            <div>
              <div style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 20, color: s.tc }}>{s.val}</div>
              <div style={{ fontSize: 11, color: "#94A3B8", fontWeight: 500 }}>{s.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div style={{ display: "flex", gap: 4, marginBottom: 24, background: "#F1F5F9", borderRadius: 10, padding: 4, width: "fit-content" }}>
        {[["preview","Preview"],["settings","Settings"]].map(([v,l]) => (
          <button key={v} onClick={() => setTab(v as typeof tab)} style={{ display: "flex", alignItems: "center", gap: 6, padding: "8px 18px", borderRadius: 7, border: "none", cursor: "pointer", fontSize: 13, fontWeight: 600, transition: "all 0.15s", background: tab === v ? "white" : "transparent", color: tab === v ? "#0F172A" : "#64748B", boxShadow: tab === v ? "0 1px 4px rgba(0,0,0,0.08)" : "none" }}>
            {v === "preview" ? <Eye size={13} /> : <Settings size={13} />} {l}
          </button>
        ))}
      </div>

      {/* Preview tab */}
      {tab === "preview" && (
        <div>
          <div style={{ marginBottom: 12, display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#16A34A" }} />
            <span style={{ fontSize: 12, color: "#64748B", fontWeight: 500 }}>Live preview — this is what visitors see</span>
          </div>

          {/* Simulated public page */}
          <div style={{ border: "1.5px solid #E2E8F0", borderRadius: 18, overflow: "hidden", boxShadow: "0 8px 32px rgba(0,0,0,0.08)" }}>
            {/* Browser bar */}
            <div style={{ background: "#F8FAFF", borderBottom: "1px solid #E2E8F0", padding: "10px 16px", display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ display: "flex", gap: 5 }}>
                {["#FFD700","#FF8C00","#32CD32"].map(c => <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />)}
              </div>
              <div style={{ flex: 1, background: "white", border: "1px solid #E2E8F0", borderRadius: 6, padding: "4px 12px", fontSize: 12, color: "#64748B", display: "flex", alignItems: "center", gap: 6 }}>
                <Globe size={11} color="#94A3B8" />
                {shareUrl}
              </div>
            </div>

            {/* Page content */}
            <div style={{ background: "white", padding: "36px 32px" }}>
              {/* Hero */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: 20, marginBottom: 28, paddingBottom: 28, borderBottom: "1px solid #F1F5F9" }}>
                <div style={{ width: 64, height: 64, borderRadius: 16, background: "linear-gradient(135deg, #2563EB, #7C3AED)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, flexShrink: 0 }}>
                  📱
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                    <h2 style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 22, color: "#0F172A", letterSpacing: "-0.02em" }}>Mobile App MVP</h2>
                    <span style={{ background: "#DCFCE7", color: "#16A34A", padding: "3px 10px", borderRadius: 999, fontSize: 11, fontWeight: 700 }}>Active</span>
                  </div>
                  <p style={{ fontSize: 14, color: "#64748B", lineHeight: 1.6, marginBottom: 12 }}>{settings.tagline}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <span style={{ fontSize: 13, color: "#64748B" }}>by <strong style={{ color: "#0F172A" }}>Your Name</strong> · @yourhandle</span>
                    <button style={{ display: "flex", alignItems: "center", gap: 6, padding: "6px 16px", background: "#2563EB", color: "white", border: "none", borderRadius: 8, fontSize: 13, fontWeight: 700, cursor: "pointer" }}>
                      <Users size={12} /> Follow · 128
                    </button>
                  </div>
                </div>
              </div>

              {/* Progress */}
              {settings.showProgress && (
                <div style={{ marginBottom: 24 }}>
                  <div style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 14, color: "#0F172A", marginBottom: 10 }}>Journey progress</div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                    <span style={{ fontSize: 12, color: "#64748B" }}>68% complete</span>
                    <span style={{ fontSize: 12, color: "#2563EB", fontWeight: 700 }}>Beta launch upcoming</span>
                  </div>
                  <div style={{ height: 8, background: "#F1F5F9", borderRadius: 999, overflow: "hidden" }}>
                    <div style={{ height: "100%", width: "68%", background: "linear-gradient(90deg, #2563EB, #7C3AED)", borderRadius: 999 }} />
                  </div>
                </div>
              )}

              {/* Recent updates preview */}
              {settings.showProofWall && (
                <div>
                  <div style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 14, color: "#0F172A", marginBottom: 12 }}>Recent updates</div>
                  {[
                    { emoji: "🌙", title: "Shipped dark mode", date: "Jun 10" },
                    { emoji: "⭐", title: "Reached 500 GitHub stars", date: "Jun 8" },
                  ].map(u => (
                    <div key={u.title} style={{ display: "flex", gap: 12, alignItems: "center", padding: "10px 0", borderBottom: "1px solid #F8FAFF" }}>
                      <span style={{ fontSize: 18 }}>{u.emoji}</span>
                      <span style={{ fontSize: 13, fontWeight: 500, color: "#334155", flex: 1 }}>{u.title}</span>
                      <span style={{ fontSize: 12, color: "#94A3B8" }}>{u.date}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Settings tab */}
      {tab === "settings" && (
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {/* Visibility */}
          <div style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 14, padding: "22px 24px" }}>
            <h3 style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 15, color: "#0F172A", marginBottom: 16 }}>Visibility & URL</h3>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#0F172A" }}>Public page</div>
                <div style={{ fontSize: 12, color: "#94A3B8" }}>Anyone with the link can view your project</div>
              </div>
              <div onClick={() => setSettings(p => ({ ...p, isPublic: !p.isPublic }))}
                style={{ width: 44, height: 24, borderRadius: 999, background: settings.isPublic ? "#2563EB" : "#E2E8F0", cursor: "pointer", position: "relative", transition: "background 0.2s", flexShrink: 0 }}>
                <div style={{ position: "absolute", top: 3, left: settings.isPublic ? 22 : 3, width: 18, height: 18, borderRadius: "50%", background: "white", transition: "left 0.2s", boxShadow: "0 1px 4px rgba(0,0,0,0.15)" }} />
              </div>
            </div>
            <div>
              <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 6 }}>Custom URL slug</label>
              <div style={{ display: "flex", alignItems: "center", border: "1.5px solid #E2E8F0", borderRadius: 9, overflow: "hidden", transition: "border-color 0.15s" }}>
                <div style={{ padding: "10px 12px", background: "#F8FAFF", borderRight: "1px solid #E2E8F0", fontSize: 13, color: "#94A3B8", whiteSpace: "nowrap" }}>wispfolio.com/p/</div>
                <input value={settings.customSlug} onChange={e => setSettings(p => ({ ...p, customSlug: e.target.value }))}
                  style={{ flex: 1, padding: "10px 12px", border: "none", outline: "none", fontSize: 14, color: "#0F172A" }} />
              </div>
            </div>
          </div>

          {/* Sections */}
          <div style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 14, padding: "22px 24px" }}>
            <h3 style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 15, color: "#0F172A", marginBottom: 16 }}>Page sections</h3>
            {[
              { key: "showProgress", label: "Progress tracker", sub: "Show your project completion bar and milestones" },
              { key: "showProofWall", label: "Proof Wall / Updates", sub: "Show your recent updates and wins" },
              { key: "showChecklist", label: "Public checklist", sub: "Show your tasks (visitors can see what's next)" },
              { key: "showFollowers", label: "Follower count", sub: "Display your follower number publicly" },
            ].map(opt => (
              <div key={opt.key} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 0", borderBottom: "1px solid #F8FAFF" }}>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#0F172A" }}>{opt.label}</div>
                  <div style={{ fontSize: 12, color: "#94A3B8" }}>{opt.sub}</div>
                </div>
                <div onClick={() => setSettings(p => ({ ...p, [opt.key]: !p[opt.key as keyof typeof p] }))}
                  style={{ width: 44, height: 24, borderRadius: 999, background: settings[opt.key as keyof typeof settings] ? "#2563EB" : "#E2E8F0", cursor: "pointer", position: "relative", transition: "background 0.2s", flexShrink: 0 }}>
                  <div style={{ position: "absolute", top: 3, left: settings[opt.key as keyof typeof settings] ? 22 : 3, width: 18, height: 18, borderRadius: "50%", background: "white", transition: "left 0.2s", boxShadow: "0 1px 4px rgba(0,0,0,0.15)" }} />
                </div>
              </div>
            ))}
          </div>

          <button style={{ padding: "12px 24px", background: "#2563EB", color: "white", border: "none", borderRadius: 10, fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "Sora, sans-serif", width: "fit-content", transition: "background 0.15s" }}
            onMouseEnter={e => (e.currentTarget.style.background = "#1D4ED8")}
            onMouseLeave={e => (e.currentTarget.style.background = "#2563EB")}>
            Save settings
          </button>
        </div>
      )}
    </div>
  );
}
