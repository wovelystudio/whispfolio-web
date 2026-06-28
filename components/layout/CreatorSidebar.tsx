"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard, Lightbulb, TrendingUp, CheckSquare,
  HardDrive, Image, Globe, Settings, ChevronLeft, ChevronRight,
  Sparkles, FolderOpen, Plus, Menu, X,
} from "lucide-react";
import { useState } from "react";

const NAV = [
  { icon: LayoutDashboard, label: "Overview", href: "/creator/studio" },
  { icon: FolderOpen, label: "Projects", href: "/creator/studio/projects" },
  { icon: Lightbulb, label: "Inspiration", href: "/creator/studio/inspiration" },
  { icon: TrendingUp, label: "Progress", href: "/creator/studio/progress" },
  { icon: CheckSquare, label: "Checklist", href: "/creator/studio/checklist" },
  { icon: HardDrive, label: "Assets", href: "/creator/studio/assets" },
  { icon: Image, label: "Proof Wall", href: "/creator/studio/proof" },
  { icon: Globe, label: "Share", href: "/creator/studio/share" },
];

// Bottom tab bar items (most important ones for mobile)
const MOBILE_TABS = [
  { icon: LayoutDashboard, label: "Overview", href: "/creator/studio" },
  { icon: FolderOpen, label: "Projects", href: "/creator/studio/projects" },
  { icon: TrendingUp, label: "Progress", href: "/creator/studio/progress" },
  { icon: Image, label: "Proof Wall", href: "/creator/studio/proof" },
  { icon: Globe, label: "Share", href: "/creator/studio/share" },
];

export default function CreatorSidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const [project, setProject] = useState("Mobile App MVP");
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  return (
    <>
      {/* ─── Desktop Sidebar ─── */}
      <aside
        className="creator-sidebar-desktop"
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
              <div style={{ width: 28, height: 28, background: "linear-gradient(135deg, #2563EB, #7C3AED)", borderRadius: 7, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="3.5" fill="white" opacity="0.9"/>
                  <circle cx="10" cy="10" r="6" stroke="white" strokeWidth="1.2" strokeDasharray="2 2" opacity="0.5"/>
                  <circle cx="10" cy="4" r="1.5" fill="white" opacity="0.7"/>
                  <circle cx="16" cy="13" r="1" fill="white" opacity="0.5"/>
                  <circle cx="4" cy="13" r="1.2" fill="white" opacity="0.6"/>
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
            <Link href="/creator/studio/projects/new" style={{ display: "flex", alignItems: "center", gap: 5, marginTop: 8, color: "#7C3AED", fontSize: 12, fontWeight: 700, textDecoration: "none" }}>
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
                style={{
                  display: "flex", alignItems: "center",
                  gap: collapsed ? 0 : 10,
                  padding: collapsed ? "9px" : "9px 10px",
                  borderRadius: 8, fontSize: 13, fontWeight: 500,
                  color: active ? "#2563EB" : "#475569",
                  background: active ? "#EFF6FF" : "transparent",
                  textDecoration: "none", marginBottom: 2,
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
              display: "flex", alignItems: "center",
              gap: collapsed ? 0 : 10,
              padding: collapsed ? "9px" : "9px 10px",
              borderRadius: 8, fontSize: 13, fontWeight: 500,
              color: pathname === "/creator/settings" ? "#2563EB" : "#475569",
              background: pathname === "/creator/settings" ? "#EFF6FF" : "transparent",
              textDecoration: "none", justifyContent: collapsed ? "center" : "flex-start",
              transition: "all 0.15s",
            }}
            title={collapsed ? "Settings" : undefined}
          >
            <Settings size={16} />
            {!collapsed && "Settings"}
          </Link>
          {!collapsed && (
            <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 10px 4px", marginTop: 4 }}>
              <div style={{ width: 28, height: 28, borderRadius: "50%", background: "linear-gradient(135deg, #2563EB, #7C3AED)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 12, fontWeight: 700, flexShrink: 0 }}>U</div>
              <div style={{ overflow: "hidden" }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#0F172A", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>Your Name</div>
                <div style={{ fontSize: 11, color: "#94A3B8" }}>Creator</div>
              </div>
            </div>
          )}
        </div>
      </aside>

      {/* ─── Mobile: Top bar + Drawer + Bottom Tab Bar ─── */}
      <div className="creator-mobile-ui">
        {/* Mobile top bar */}
        <div style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
          background: "white", borderBottom: "1px solid #E2E8F0",
          height: 56, display: "flex", alignItems: "center",
          justifyContent: "space-between", padding: "0 16px",
        }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
            <div style={{ width: 26, height: 26, background: "linear-gradient(135deg, #2563EB, #7C3AED)", borderRadius: 7, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="13" height="13" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="3.5" fill="white" opacity="0.9"/>
                <circle cx="10" cy="10" r="6" stroke="white" strokeWidth="1.2" strokeDasharray="2 2" opacity="0.5"/>
              </svg>
            </div>
            <span style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 16, color: "#0F172A" }}>Wispfolio</span>
          </Link>

          {/* Active project pill */}
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ background: "#EFF6FF", border: "1px solid #BFDBFE", borderRadius: 8, padding: "5px 10px", fontSize: 12, fontWeight: 700, color: "#2563EB", maxWidth: 140, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              {project}
            </div>
            <button
              onClick={() => setMobileDrawerOpen(!mobileDrawerOpen)}
              style={{ background: mobileDrawerOpen ? "#EFF6FF" : "#F8FAFF", border: "1px solid #E2E8F0", borderRadius: 8, padding: "7px", cursor: "pointer", display: "flex", alignItems: "center", color: "#475569" }}
            >
              {mobileDrawerOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile drawer overlay */}
        {mobileDrawerOpen && (
          <div
            style={{ position: "fixed", inset: 0, zIndex: 190, background: "rgba(15,23,42,0.4)", backdropFilter: "blur(4px)" }}
            onClick={() => setMobileDrawerOpen(false)}
          />
        )}

        {/* Mobile slide-in drawer */}
        <div style={{
          position: "fixed", top: 56, left: 0, bottom: 0, zIndex: 195,
          width: 260, background: "white", borderRight: "1px solid #E2E8F0",
          transform: mobileDrawerOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.28s cubic-bezier(0.22,1,0.36,1)",
          overflowY: "auto", display: "flex", flexDirection: "column",
        }}>
          {/* Project selector */}
          <div style={{ margin: "12px 12px 8px", background: "linear-gradient(135deg, #EFF6FF, #F5F3FF)", border: "1px solid #DBEAFE", borderRadius: 10, padding: 12 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 8 }}>
              <Sparkles size={13} color="#2563EB" />
              <span style={{ fontSize: 11, fontWeight: 800, color: "#2563EB", letterSpacing: "0.04em", textTransform: "uppercase" }}>Active project</span>
            </div>
            <select
              value={project}
              onChange={(e) => setProject(e.target.value)}
              style={{ width: "100%", border: "1px solid #BFDBFE", background: "white", color: "#0F172A", borderRadius: 8, padding: "8px 9px", fontSize: 13, fontWeight: 700, outline: "none" }}
            >
              <option>Mobile App MVP</option>
              <option>Design System Kit</option>
              <option>Open Source CLI</option>
            </select>
            <Link href="/creator/studio/projects/new" onClick={() => setMobileDrawerOpen(false)} style={{ display: "flex", alignItems: "center", gap: 5, marginTop: 10, color: "#7C3AED", fontSize: 13, fontWeight: 700, textDecoration: "none" }}>
              <Plus size={13} /> New project
            </Link>
          </div>

          {/* Full nav */}
          <nav style={{ flex: 1, padding: "8px 10px" }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.06em", padding: "8px 4px 4px" }}>Workspace</div>
            {NAV.map((item) => {
              const active = pathname === item.href || (item.href !== "/creator/studio" && pathname?.startsWith(item.href));
              return (
                <Link key={item.href} href={item.href} onClick={() => setMobileDrawerOpen(false)}
                  style={{
                    display: "flex", alignItems: "center", gap: 12,
                    padding: "11px 12px", borderRadius: 10, fontSize: 14, fontWeight: 500,
                    color: active ? "#2563EB" : "#475569",
                    background: active ? "#EFF6FF" : "transparent",
                    textDecoration: "none", marginBottom: 2, transition: "all 0.15s",
                  }}>
                  <item.icon size={18} style={{ flexShrink: 0 }} />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Bottom */}
          <div style={{ padding: "12px 10px", borderTop: "1px solid #F1F5F9" }}>
            <Link href="/creator/settings" onClick={() => setMobileDrawerOpen(false)}
              style={{ display: "flex", alignItems: "center", gap: 12, padding: "11px 12px", borderRadius: 10, fontSize: 14, fontWeight: 500, color: "#475569", textDecoration: "none" }}>
              <Settings size={18} /> Settings
            </Link>
            <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 12px 4px" }}>
              <div style={{ width: 34, height: 34, borderRadius: "50%", background: "linear-gradient(135deg, #2563EB, #7C3AED)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 14, fontWeight: 700 }}>U</div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#0F172A" }}>Your Name</div>
                <div style={{ fontSize: 12, color: "#94A3B8" }}>Creator</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile bottom tab bar */}
        <div style={{
          position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 200,
          background: "white", borderTop: "1px solid #E2E8F0",
          display: "flex", alignItems: "stretch",
          paddingBottom: "env(safe-area-inset-bottom, 0px)",
        }}>
          {MOBILE_TABS.map((item) => {
            const active = pathname === item.href || (item.href !== "/creator/studio" && pathname?.startsWith(item.href));
            return (
              <Link key={item.href} href={item.href}
                style={{
                  flex: 1, display: "flex", flexDirection: "column",
                  alignItems: "center", justifyContent: "center",
                  padding: "10px 4px 8px", textDecoration: "none",
                  color: active ? "#2563EB" : "#94A3B8",
                  background: active ? "#EFF6FF" : "transparent",
                  transition: "all 0.15s", gap: 4,
                  borderTop: active ? "2px solid #2563EB" : "2px solid transparent",
                }}>
                <item.icon size={20} />
                <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.02em" }}>{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (min-width: 769px) {
          .creator-sidebar-desktop { display: flex !important; }
          .creator-mobile-ui { display: none !important; }
        }
        @media (max-width: 768px) {
          .creator-sidebar-desktop { display: none !important; }
          .creator-mobile-ui { display: block !important; }
        }
      `}</style>
    </>
  );
}
