"use client";
import Link from "next/link";
import { Plus, TrendingUp, CheckSquare, Image as ImageIcon, Lightbulb, HardDrive, Globe, Zap, Cloud, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

const TOOLS = [
  { icon: Lightbulb, label: "Inspiration Hub", href: "/creator/studio/inspiration", color: "#FEF9C3", ic: "#92400E", desc: "Collect references & ideas", count: "6 saved" },
  { icon: TrendingUp, label: "Progress Tracker", href: "/creator/studio/progress", color: "#DBEAFE", ic: "#1D4ED8", desc: "Milestones & activity", count: "68% done" },
  { icon: CheckSquare, label: "Checklist", href: "/creator/studio/checklist", color: "#EDE9FE", ic: "#7C3AED", desc: "Tasks & milestones", count: "5 open" },
  { icon: HardDrive, label: "Asset Library", href: "/creator/studio/assets", color: "#F3E8FF", ic: "#9333EA", desc: "Files & cloud storage", count: "6 files" },
  { icon: ImageIcon, label: "Proof Wall", href: "/creator/studio/proof", color: "#FFE4E6", ic: "#E11D48", desc: "Updates & screenshots", count: "5 entries" },
  { icon: Globe, label: "Share Page", href: "/creator/studio/share", color: "#DCFCE7", ic: "#166534", desc: "Your public project page", count: "128 followers" },
];

const RECENT_UPDATES = [
  { emoji: "🌙", text: "Shipped dark mode", time: "2h ago" },
  { emoji: "⭐", text: "Reached 500 stars", time: "Yesterday" },
  { emoji: "🐛", text: "Fixed onboarding bug", time: "Jun 5" },
];

export default function CreatorStudioPage() {
  return (
    <div style={{ padding: "32px 36px", maxWidth: 1060 }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 32, flexWrap: "wrap", gap: 16 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
            <Sparkles size={14} color="#7C3AED" />
            <span style={{ fontSize: 13, fontWeight: 700, color: "#7C3AED", fontFamily: "Sora, sans-serif" }}>Creator Studio</span>
          </div>
          <h1 style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 26, color: "#0F172A", letterSpacing: "-0.025em", marginBottom: 4 }}>
            Good to see you ✦
          </h1>
          <p style={{ fontSize: 14, color: "#64748B" }}>Your projects are alive. Keep building.</p>
        </div>
        <Link href="/creator/studio/projects"
          style={{ display: "inline-flex", alignItems: "center", gap: 7, padding: "10px 20px", background: "#2563EB", color: "white", borderRadius: 9, fontSize: 14, fontWeight: 700, textDecoration: "none", transition: "background 0.15s", fontFamily: "Sora, sans-serif" }}
          onMouseEnter={e => (e.currentTarget.style.background = "#1D4ED8")}
          onMouseLeave={e => (e.currentTarget.style.background = "#2563EB")}>
          <Plus size={14} /> New project
        </Link>
      </div>

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14, marginBottom: 32 }}>
        {[
          { label: "Projects", val: "3", sub: "2 active", color: "#EFF6FF", tc: "#2563EB" },
          { label: "Tasks done", val: "24", sub: "this month", color: "#EDE9FE", tc: "#7C3AED" },
          { label: "Followers", val: "128", sub: "across projects", color: "#DCFCE7", tc: "#16A34A" },
          { label: "Updates", val: "47", sub: "total entries", color: "#FFF1F2", tc: "#E11D48" },
        ].map(s => (
          <div key={s.label} style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 12, padding: "18px 16px", transition: "box-shadow 0.15s" }}
            onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.06)")}
            onMouseLeave={e => (e.currentTarget.style.boxShadow = "none")}>
            <div style={{ fontFamily: "Sora, sans-serif", fontWeight: 900, fontSize: 28, color: s.tc, letterSpacing: "-0.03em", marginBottom: 2 }}>{s.val}</div>
            <div style={{ fontSize: 13, fontWeight: 600, color: "#0F172A" }}>{s.label}</div>
            <div style={{ fontSize: 12, color: "#94A3B8", marginTop: 2 }}>{s.sub}</div>
          </div>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 24 }}>
        {/* Tools grid */}
        <div>
          <h2 style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 15, color: "#0F172A", marginBottom: 14 }}>Studio tools</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {TOOLS.map(t => (
              <Link key={t.label} href={t.href}
                style={{ background: "white", border: "1.5px solid #E2E8F0", borderRadius: 14, padding: "18px 16px", textDecoration: "none", display: "block", transition: "all 0.2s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#93C5FD"; (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 20px rgba(37,99,235,0.09)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#E2E8F0"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; (e.currentTarget as HTMLElement).style.transform = "none"; }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                  <div style={{ width: 36, height: 36, background: t.color, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <t.icon size={17} color={t.ic} />
                  </div>
                  <span style={{ fontSize: 11, fontWeight: 600, color: "#94A3B8", background: "#F8FAFF", padding: "2px 8px", borderRadius: 999 }}>{t.count}</span>
                </div>
                <div style={{ fontSize: 13.5, fontWeight: 700, color: "#0F172A", marginBottom: 3 }}>{t.label}</div>
                <div style={{ fontSize: 12, color: "#94A3B8" }}>{t.desc}</div>
              </Link>
            ))}
          </div>

          {/* Cloud connect prompt */}
          <div style={{ marginTop: 14, background: "linear-gradient(135deg, #F0F9FF, #F5F3FF)", border: "1.5px solid #C4B5FD", borderRadius: 12, padding: "14px 16px", display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 34, height: 34, background: "white", borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }}>
              <Cloud size={16} color="#7C3AED" />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#6D28D9" }}>Connect cloud storage</div>
              <div style={{ fontSize: 11.5, color: "#A78BFA" }}>Link Google Drive or OneDrive to Asset Library</div>
            </div>
            <Link href="/creator/settings" style={{ fontSize: 12, color: "#7C3AED", fontWeight: 700, textDecoration: "none", whiteSpace: "nowrap", display: "flex", alignItems: "center", gap: 4 }}>
              Set up <ArrowRight size={12} />
            </Link>
          </div>
        </div>

        {/* Right sidebar */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {/* Active project card */}
          <div style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 14, padding: "18px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
              <span style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 13, color: "#0F172A" }}>Active project</span>
              <span style={{ background: "#DCFCE7", color: "#16A34A", padding: "2px 8px", borderRadius: 999, fontSize: 10, fontWeight: 700 }}>LIVE</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <div style={{ width: 38, height: 38, borderRadius: 10, background: "linear-gradient(135deg, #2563EB, #7C3AED)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>📱</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 13.5, color: "#0F172A" }}>Mobile App MVP</div>
                <div style={{ fontSize: 12, color: "#94A3B8" }}>128 followers · 24 updates</div>
              </div>
            </div>
            <div style={{ marginBottom: 6, display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontSize: 12, color: "#64748B" }}>Progress</span>
              <span style={{ fontSize: 12, fontWeight: 700, color: "#2563EB" }}>68%</span>
            </div>
            <div style={{ height: 6, background: "#F1F5F9", borderRadius: 999, overflow: "hidden", marginBottom: 14 }}>
              <div style={{ height: "100%", width: "68%", background: "linear-gradient(90deg, #2563EB, #7C3AED)", borderRadius: 999 }} />
            </div>
            <Link href="/creator/studio/progress" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, padding: "8px", background: "#F8FAFF", border: "1px solid #E2E8F0", borderRadius: 8, fontSize: 12, fontWeight: 600, color: "#2563EB", textDecoration: "none", transition: "all 0.15s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#EFF6FF"; (e.currentTarget as HTMLElement).style.borderColor = "#BFDBFE"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#F8FAFF"; (e.currentTarget as HTMLElement).style.borderColor = "#E2E8F0"; }}>
              View full tracker <ArrowRight size={12} />
            </Link>
          </div>

          {/* Recent updates */}
          <div style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 14, padding: "18px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
              <span style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 13, color: "#0F172A" }}>Recent updates</span>
              <Link href="/creator/studio/proof" style={{ fontSize: 12, color: "#2563EB", textDecoration: "none", fontWeight: 500 }}>See all →</Link>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {RECENT_UPDATES.map(u => (
                <div key={u.text} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 28, height: 28, borderRadius: 7, background: "#F8FAFF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, flexShrink: 0 }}>{u.emoji}</div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 12.5, fontWeight: 500, color: "#334155", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{u.text}</div>
                    <div style={{ fontSize: 11, color: "#94A3B8" }}>{u.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Share page quick link */}
          <div style={{ background: "linear-gradient(135deg, #0F172A, #1E3A8A)", borderRadius: 14, padding: "18px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
              <Globe size={14} color="#93C5FD" />
              <span style={{ fontSize: 12, fontWeight: 700, color: "#93C5FD" }}>Your share page</span>
            </div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", marginBottom: 14 }}>wispfolio.com/p/my-mobile-app</div>
            <Link href="/creator/studio/share" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, padding: "8px", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 8, fontSize: 12, fontWeight: 600, color: "white", textDecoration: "none", transition: "background 0.15s" }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.18)")}
              onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}>
              Manage page <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
