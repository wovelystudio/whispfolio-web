"use client";
import Link from "next/link";
import {
  Plus, FolderOpen, Users, TrendingUp, Settings,
  Globe, MoreHorizontal, Sparkles, CheckSquare, Eye
} from "lucide-react";

const PROJECTS = [
  {
    id: 1, name: "Mobile App MVP", category: "App", stage: "Beta",
    progress: 68, followers: 128, updates: 47, tasks: { done: 18, total: 24 },
    accent: "#2563EB", accentLight: "#DBEAFE", active: true,
    lastUpdate: "2 hours ago", visibility: "public",
  },
  {
    id: 2, name: "Design System Kit", category: "Design", stage: "Building",
    progress: 42, followers: 61, updates: 22, tasks: { done: 9, total: 18 },
    accent: "#7C3AED", accentLight: "#EDE9FE", active: true,
    lastUpdate: "Yesterday", visibility: "public",
  },
  {
    id: 3, name: "Open Source CLI", category: "Developer Tool", stage: "Ideation",
    progress: 18, followers: 24, updates: 8, tasks: { done: 3, total: 12 },
    accent: "#4F46E5", accentLight: "#E0E7FF", active: false,
    lastUpdate: "Jun 10", visibility: "private",
  },
];

export default function ProjectsListPage() {
  return (
    <div style={{ padding: "36px 40px", width: "100%" }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 36, flexWrap: "wrap", gap: 16 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
            <FolderOpen size={14} color="#2563EB" />
            <span style={{ fontSize: 13, fontWeight: 700, color: "#2563EB", fontFamily: "Sora, sans-serif" }}>My Projects</span>
          </div>
          <h1 style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 26, color: "#0F172A", letterSpacing: "-0.025em", marginBottom: 4 }}>
            All Projects
          </h1>
          <p style={{ fontSize: 14, color: "#64748B" }}>{PROJECTS.length} projects — keep building.</p>
        </div>
        <Link href="/creator/studio/projects/new"
          style={{ display: "inline-flex", alignItems: "center", gap: 7, padding: "11px 22px", background: "#2563EB", color: "white", borderRadius: 10, fontSize: 14, fontWeight: 700, textDecoration: "none", fontFamily: "Sora, sans-serif", transition: "background 0.15s" }}
          onMouseEnter={e => (e.currentTarget.style.background = "#1D4ED8")}
          onMouseLeave={e => (e.currentTarget.style.background = "#2563EB")}>
          <Plus size={15} /> New Project
        </Link>
      </div>

      {/* Project Cards */}
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {PROJECTS.map((p) => (
          <div key={p.id} style={{
            background: "white",
            border: p.active ? `1.5px solid ${p.accentLight}` : "1.5px solid #E2E8F0",
            borderRadius: 18,
            padding: "24px 28px",
            boxShadow: p.active ? `0 4px 20px ${p.accent}12` : "0 2px 8px rgba(0,0,0,0.04)",
            transition: "box-shadow 0.2s",
          }}
            onMouseEnter={e => (e.currentTarget.style.boxShadow = `0 8px 32px ${p.accent}18`)}
            onMouseLeave={e => (e.currentTarget.style.boxShadow = p.active ? `0 4px 20px ${p.accent}12` : "0 2px 8px rgba(0,0,0,0.04)")}>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 16 }}>
              {/* Left: info */}
              <div style={{ display: "flex", gap: 16, alignItems: "flex-start", flex: 1 }}>
                <div style={{ width: 52, height: 52, borderRadius: 14, background: `linear-gradient(135deg, ${p.accent}, ${p.accent}99)`, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 900, fontSize: 20, flexShrink: 0, fontFamily: "Sora, sans-serif" }}>
                  {p.name[0]}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 5, flexWrap: "wrap" }}>
                    <span style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 17, color: "#0F172A" }}>{p.name}</span>
                    <span style={{ background: p.accentLight, color: p.accent, fontSize: 11, fontWeight: 700, padding: "3px 9px", borderRadius: 999 }}>{p.stage}</span>
                    <span style={{ background: "#F1F5F9", color: "#64748B", fontSize: 11, fontWeight: 600, padding: "3px 9px", borderRadius: 999 }}>{p.category}</span>
                    {p.visibility === "private" && (
                      <span style={{ background: "#FEF9C3", color: "#A16207", fontSize: 11, fontWeight: 700, padding: "3px 9px", borderRadius: 999 }}>Private</span>
                    )}
                  </div>
                  <p style={{ fontSize: 13, color: "#94A3B8" }}>Last updated {p.lastUpdate}</p>
                </div>
              </div>

              {/* Right: Actions */}
              <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
                <Link href={`/p/${p.name.toLowerCase().replace(/\s+/g, "-")}`}
                  style={{ display: "flex", alignItems: "center", gap: 6, padding: "8px 14px", border: "1.5px solid #E2E8F0", borderRadius: 9, fontSize: 13, fontWeight: 600, color: "#64748B", textDecoration: "none", transition: "all 0.15s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "#2563EB"; (e.currentTarget as HTMLAnchorElement).style.color = "#2563EB"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "#E2E8F0"; (e.currentTarget as HTMLAnchorElement).style.color = "#64748B"; }}>
                  <Eye size={13} /> View public page
                </Link>
                <Link href="/creator/studio/projects/settings"
                  style={{ display: "flex", alignItems: "center", gap: 6, padding: "8px 14px", border: "1.5px solid #E2E8F0", borderRadius: 9, fontSize: 13, fontWeight: 600, color: "#64748B", textDecoration: "none", transition: "all 0.15s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "#7C3AED"; (e.currentTarget as HTMLAnchorElement).style.color = "#7C3AED"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "#E2E8F0"; (e.currentTarget as HTMLAnchorElement).style.color = "#64748B"; }}>
                  <Settings size={13} /> Settings
                </Link>
              </div>
            </div>

            {/* Stats row */}
            <div style={{ display: "flex", gap: 0, marginTop: 20, paddingTop: 20, borderTop: "1px solid #F1F5F9", flexWrap: "wrap" }}>
              {[
                { icon: <Users size={13} color={p.accent} />, label: "Followers", val: p.followers },
                { icon: <Sparkles size={13} color={p.accent} />, label: "Updates", val: p.updates },
                { icon: <CheckSquare size={13} color={p.accent} />, label: "Tasks done", val: `${p.tasks.done}/${p.tasks.total}` },
                { icon: <Globe size={13} color={p.accent} />, label: "Visibility", val: p.visibility === "public" ? "Public" : "Private" },
              ].map((s, i) => (
                <div key={s.label} style={{ flex: "1 1 100px", paddingLeft: i > 0 ? 20 : 0, borderLeft: i > 0 ? "1px solid #F1F5F9" : "none", display: "flex", flexDirection: "column", gap: 4 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                    {s.icon}
                    <span style={{ fontSize: 11, fontWeight: 600, color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.label}</span>
                  </div>
                  <span style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 18, color: "#0F172A" }}>{s.val}</span>
                </div>
              ))}

              {/* Progress bar */}
              <div style={{ flex: "2 1 200px", paddingLeft: 20, borderLeft: "1px solid #F1F5F9", display: "flex", flexDirection: "column", justifyContent: "center", gap: 8 }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontSize: 11, fontWeight: 600, color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    <TrendingUp size={11} style={{ display: "inline", marginRight: 4 }} />Progress
                  </span>
                  <span style={{ fontWeight: 800, fontSize: 13, color: p.accent }}>{p.progress}%</span>
                </div>
                <div style={{ height: 8, background: "#F1F5F9", borderRadius: 999 }}>
                  <div style={{ height: "100%", width: `${p.progress}%`, background: `linear-gradient(90deg, ${p.accent}, #7C3AED)`, borderRadius: 999, transition: "width 0.6s ease" }} />
                </div>
              </div>
            </div>

            {/* Quick actions for active project */}
            {p.active && (
              <div style={{ display: "flex", gap: 8, marginTop: 14, flexWrap: "wrap" }}>
                {[
                  { label: "Inspiration Hub", href: "/creator/studio/inspiration" },
                  { label: "Progress Tracker", href: "/creator/studio/progress" },
                  { label: "Checklist", href: "/creator/studio/checklist" },
                  { label: "Proof Wall", href: "/creator/studio/proof" },
                  { label: "Share Page", href: "/creator/studio/share" },
                ].map(tool => (
                  <Link key={tool.label} href={tool.href}
                    style={{ padding: "6px 12px", border: "1px solid #E2E8F0", borderRadius: 8, fontSize: 12, fontWeight: 600, color: "#64748B", textDecoration: "none", background: "#F8FAFF", transition: "all 0.15s" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = p.accent; (e.currentTarget as HTMLAnchorElement).style.color = p.accent; (e.currentTarget as HTMLAnchorElement).style.background = "white"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "#E2E8F0"; (e.currentTarget as HTMLAnchorElement).style.color = "#64748B"; (e.currentTarget as HTMLAnchorElement).style.background = "#F8FAFF"; }}>
                    {tool.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Empty state new project nudge */}
      <div style={{ marginTop: 24, border: "1.5px dashed #E2E8F0", borderRadius: 16, padding: "28px", textAlign: "center" }}>
        <div style={{ width: 48, height: 48, borderRadius: 14, background: "#EFF6FF", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px" }}>
          <Plus size={22} color="#2563EB" />
        </div>
        <div style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 15, color: "#0F172A", marginBottom: 6 }}>Start a new project</div>
        <p style={{ fontSize: 13, color: "#94A3B8", marginBottom: 16 }}>Every big thing started somewhere. Launch your next idea.</p>
        <Link href="/creator/studio/projects/new"
          style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 20px", background: "#2563EB", color: "white", borderRadius: 9, fontSize: 13, fontWeight: 700, textDecoration: "none" }}>
          <Plus size={14} /> New project
        </Link>
      </div>
    </div>
  );
}
