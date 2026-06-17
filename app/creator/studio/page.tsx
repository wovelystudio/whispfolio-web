"use client";
import { Plus, TrendingUp, CheckSquare, Image, Lightbulb, HardDrive, Globe, ArrowRight, Zap, Cloud } from "lucide-react";
import Link from "next/link";

const TOOLS = [
  { icon: Lightbulb, label: "Inspiration Hub", href: "/creator/studio/inspiration", color: "#FEF9C3", ic: "#CA8A04", desc: "Save references & ideas" },
  { icon: TrendingUp, label: "Progress Tracker", href: "/creator/studio/progress", color: "#DCFCE7", ic: "#16A34A", desc: "Visualize growth" },
  { icon: CheckSquare, label: "Checklist", href: "/creator/studio/checklist", color: "#DBEAFE", ic: "#2563EB", desc: "Tasks & milestones" },
  { icon: HardDrive, label: "Asset Library", href: "/creator/studio/assets", color: "#F3E8FF", ic: "#9333EA", desc: "Connect cloud storage" },
  { icon: Image, label: "Proof Wall", href: "/creator/studio/proof", color: "#FFE4E6", ic: "#E11D48", desc: "Document updates" },
  { icon: Globe, label: "Share Page", href: "/creator/studio/share", color: "#E0F2FE", ic: "#0284C7", desc: "Public project page" },
];

const RECENT = [
  { name: "Mobile App MVP", progress: 68, status: "Active", color: "#DCFCE7", sc: "#16A34A" },
  { name: "Design System", progress: 42, status: "Active", color: "#DBEAFE", sc: "#2563EB" },
  { name: "Blog Redesign", progress: 90, status: "Review", color: "#FEF9C3", sc: "#CA8A04" },
];

export default function CreatorStudioPage() {
  return (
    <div style={{ padding: "32px 36px", maxWidth: 1100 }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 32, flexWrap: "wrap", gap: 16 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
            <Zap size={16} color="#2563EB" />
            <span style={{ fontSize: 13, fontWeight: 600, color: "#2563EB" }}>Creator Studio</span>
          </div>
          <h1 style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 26, color: "#0F172A", letterSpacing: "-0.02em", marginBottom: 4 }}>
            Good morning 👋
          </h1>
          <p style={{ fontSize: 14, color: "#64748B" }}>You have 3 active projects and 5 tasks due this week.</p>
        </div>
        <Link href="/creator/studio/projects" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", background: "#2563EB", color: "white", borderRadius: 9, fontSize: 14, fontWeight: 600, textDecoration: "none", transition: "background 0.15s" }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#1D4ED8")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#2563EB")}>
          <Plus size={15} /> New project
        </Link>
      </div>

      {/* Stats row */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 16, marginBottom: 32 }}>
        {[
          { label: "Projects", val: "3", sub: "2 active", color: "#EFF6FF", tc: "#2563EB" },
          { label: "Tasks done", val: "24", sub: "this month", color: "#DCFCE7", tc: "#16A34A" },
          { label: "Followers", val: "128", sub: "+12 this week", color: "#F3E8FF", tc: "#9333EA" },
          { label: "Assets", val: "47", sub: "across projects", color: "#FEF9C3", tc: "#CA8A04" },
        ].map((s) => (
          <div key={s.label} style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 12, padding: "18px 16px" }}>
            <div style={{ fontSize: 24, fontFamily: "Sora, sans-serif", fontWeight: 800, color: s.tc, marginBottom: 2 }}>{s.val}</div>
            <div style={{ fontSize: 13, fontWeight: 600, color: "#0F172A" }}>{s.label}</div>
            <div style={{ fontSize: 12, color: "#94A3B8", marginTop: 2 }}>{s.sub}</div>
          </div>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 32 }}>
        {/* Tools grid */}
        <div>
          <h2 style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 16, color: "#0F172A", marginBottom: 14 }}>Studio Tools</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            {TOOLS.map((t) => (
              <Link
                key={t.label}
                href={t.href}
                style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 12, padding: "16px 14px", textDecoration: "none", transition: "all 0.15s", display: "block" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#2563EB";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(37,99,235,0.1)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#E2E8F0";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                <div style={{ width: 34, height: 34, background: t.color, borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 10 }}>
                  <t.icon size={16} color={t.ic} />
                </div>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#0F172A", marginBottom: 3 }}>{t.label}</div>
                <div style={{ fontSize: 11, color: "#94A3B8" }}>{t.desc}</div>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent projects */}
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
            <h2 style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 16, color: "#0F172A" }}>Recent Projects</h2>
            <Link href="/creator/studio/projects" style={{ fontSize: 13, color: "#2563EB", textDecoration: "none", fontWeight: 500 }}>See all →</Link>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {RECENT.map((p) => (
              <div key={p.name} style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 12, padding: "16px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                  <span style={{ fontSize: 14, fontWeight: 600, color: "#0F172A" }}>{p.name}</span>
                  <span style={{ background: p.color, color: p.sc, padding: "3px 10px", borderRadius: 999, fontSize: 11, fontWeight: 600 }}>{p.status}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                  <span style={{ fontSize: 12, color: "#64748B" }}>Progress</span>
                  <span style={{ fontSize: 12, color: "#2563EB", fontWeight: 700 }}>{p.progress}%</span>
                </div>
                <div style={{ height: 5, background: "#E2E8F0", borderRadius: 999, overflow: "hidden" }}>
                  <div style={{ height: "100%", width: `${p.progress}%`, background: "#2563EB", borderRadius: 999 }} />
                </div>
              </div>
            ))}
          </div>

          {/* Cloud connect CTA */}
          <div style={{ marginTop: 12, background: "#F0F9FF", border: "1px solid #BAE6FD", borderRadius: 12, padding: "14px 16px", display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 32, height: 32, background: "#E0F2FE", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <Cloud size={16} color="#0284C7" />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#0369A1" }}>Connect cloud storage</div>
              <div style={{ fontSize: 11, color: "#7DD3FC" }}>Link Google Drive or OneDrive</div>
            </div>
            <Link href="/creator/settings" style={{ fontSize: 12, color: "#0284C7", fontWeight: 600, textDecoration: "none", whiteSpace: "nowrap" }}>
              Set up →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
