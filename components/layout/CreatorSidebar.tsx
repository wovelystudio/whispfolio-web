"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard, Lightbulb, TrendingUp, CheckSquare,
  HardDrive, Image, Globe, Settings, ChevronLeft, ChevronRight,
  Sparkles, FolderOpen, Plus,
} from "lucide-react";
import { useState } from "react";

const NAV = [
  { icon: LayoutDashboard, label: "Overview", href: "/creator/studio" },
  { icon: FolderOpen, label: "Projects", href: "/creator/studio/projects" },
  { icon: Lightbulb, label: "Inspiration Hub", href: "/creator/studio/inspiration" },
  { icon: TrendingUp, label: "Progress Tracker", href: "/creator/studio/progress" },
  { icon: CheckSquare, label: "Checklist", href: "/creator/studio/checklist" },
  { icon: HardDrive, label: "Asset Library", href: "/creator/studio/assets" },
  { icon: Image, label: "Proof Wall", href: "/creator/studio/proof" },
  { icon: Globe, label: "Share Page", href: "/creator/studio/share" },
];

export default function CreatorSidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const [project, setProject] = useState("Mobile App MVP");

  return (
    <aside
      style={{
        width: collapsed ? 60 : 220,
        minHeight: "100vh",
        background: "white",
        borderRight: "1px solid #E2E8F0",
        display: "flex",
        flexDirection: "column",
        transition: "width 0.2s",
        flexShrink: 0,
        position: "sticky",
        top: 0,
        height: "100vh",
        overflowY: "auto",
      }}
    >
      {/* Logo */}
      <div style={{ padding: "16px 12px", borderBottom: "1px solid #F1F5F9", display: "flex", alignItems: "center", gap: 8, justifyContent: collapsed ? "center" : "space-between" }}>
        {!collapsed && (
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
            <div style={{ width: 28, height: 28, background: "#2563EB", borderRadius: 7, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <svg width="14" height="14" viewBox="0 0 18 18" fill="none">
                <path d="M3 9C3 5.686 5.686 3 9 3s6 2.686 6 6-2.686 6-6 6S3 12.314 3 9z" stroke="white" strokeWidth="1.5"/>
                <path d="M9 6v6M6 9h6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <span style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 15, color: "#0F172A" }}>Wispfolio</span>
          </Link>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          style={{ background: "#F1F5F9", border: "none", borderRadius: 6, cursor: "pointer", padding: "4px 5px", color: "#64748B", display: "flex", alignItems: "center", flexShrink: 0 }}
        >
          {collapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
        </button>
      </div>

      {/* Project selector */}
      {!collapsed && (
        <div style={{ margin: "12px 10px 8px", background: "linear-gradient(135deg, #EFF6FF, #F5F3FF)", border: "1px solid #DBEAFE", borderRadius: 10, padding: 10 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 8 }}>
            <Sparkles size={13} color="#2563EB" />
            <span style={{ fontSize: 11, fontWeight: 800, color: "#2563EB", letterSpacing: "0.04em", textTransform: "uppercase" }}>Active project</span>
          </div>
          <select
            value={project}
            onChange={(e) => setProject(e.target.value)}
            style={{ width: "100%", border: "1px solid #BFDBFE", background: "white", color: "#0F172A", borderRadius: 8, padding: "8px 9px", fontSize: 12.5, fontWeight: 700, outline: "none" }}
          >
            <option>Mobile App MVP</option>
            <option>Design System Kit</option>
            <option>Open Source CLI</option>
          </select>
          <Link href="/creator/studio/projects" style={{ display: "flex", alignItems: "center", gap: 5, marginTop: 8, color: "#7C3AED", fontSize: 12, fontWeight: 700, textDecoration: "none" }}>
            <Plus size={12} /> New project
          </Link>
        </div>
      )}

      {/* Nav */}
      <nav style={{ flex: 1, padding: "8px 8px" }}>
        {!collapsed && (
          <div style={{ fontSize: 11, fontWeight: 600, color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.06em", padding: "8px 4px 4px" }}>
            Workspace
          </div>
        )}
        {NAV.map((item) => {
          const active = pathname === item.href || (item.href !== "/creator/studio" && pathname?.startsWith(item.href));
          return (
            <Link
              key={item.href}
              href={item.href}
              className="sidebar-link"
              style={{
                display: "flex",
                alignItems: "center",
                gap: collapsed ? 0 : 10,
                padding: collapsed ? "9px" : "9px 10px",
                borderRadius: 8,
                fontSize: 13,
                fontWeight: 500,
                color: active ? "#2563EB" : "#475569",
                background: active ? "#EFF6FF" : "transparent",
                textDecoration: "none",
                marginBottom: 2,
                transition: "all 0.15s",
                justifyContent: collapsed ? "center" : "flex-start",
              }}
              title={collapsed ? item.label : undefined}
            >
              <item.icon size={16} style={{ flexShrink: 0 }} />
              {!collapsed && item.label}
            </Link>
          );
        })}
      </nav>

      {/* Bottom settings */}
      <div style={{ padding: "12px 8px", borderTop: "1px solid #F1F5F9" }}>
        <Link
          href="/creator/settings"
          style={{
            display: "flex",
            alignItems: "center",
            gap: collapsed ? 0 : 10,
            padding: collapsed ? "9px" : "9px 10px",
            borderRadius: 8,
            fontSize: 13,
            fontWeight: 500,
            color: pathname === "/creator/settings" ? "#2563EB" : "#475569",
            background: pathname === "/creator/settings" ? "#EFF6FF" : "transparent",
            textDecoration: "none",
            justifyContent: collapsed ? "center" : "flex-start",
            transition: "all 0.15s",
          }}
          title={collapsed ? "Settings" : undefined}
        >
          <Settings size={16} />
          {!collapsed && "Settings"}
        </Link>

        {/* User pill */}
        {!collapsed && (
          <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 10px 4px", marginTop: 4 }}>
            <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#2563EB", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 12, fontWeight: 700, flexShrink: 0 }}>
              U
            </div>
            <div style={{ overflow: "hidden" }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#0F172A", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>Your Name</div>
              <div style={{ fontSize: 11, color: "#94A3B8" }}>Creator</div>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
