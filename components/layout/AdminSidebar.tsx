"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Users, Zap, Shield, Settings, Activity, Flag, FolderOpen, BadgeCheck } from "lucide-react";

const NAV = [
  { icon: LayoutDashboard, label: "Overview", href: "/admin" },
  { icon: Zap, label: "Creators", href: "/admin/creators" },
  { icon: Users, label: "Users", href: "/admin/users" },
  { icon: FolderOpen, label: "Projects", href: "/admin/projects" },
  { icon: BadgeCheck, label: "Verifications", href: "/admin/verifications" },
  { icon: Flag, label: "Reports", href: "/admin/reports" },
  { icon: Settings, label: "Settings", href: "/admin/settings" },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  return (
    <aside style={{ width: 220, minHeight: "100vh", background: "white", borderRight: "1px solid #E2E8F0", display: "flex", flexDirection: "column", flexShrink: 0, position: "sticky", top: 0, height: "100vh" }}>
      <div style={{ padding: "18px 14px", borderBottom: "1px solid #E2E8F0" }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
          <div style={{ width: 28, height: 28, background: "#2563EB", borderRadius: 7, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="14" height="14" viewBox="0 0 18 18" fill="none">
              <path d="M3 9C3 5.686 5.686 3 9 3s6 2.686 6 6-2.686 6-6 6S3 12.314 3 9z" stroke="white" strokeWidth="1.5"/>
              <path d="M9 6v6M6 9h6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <span style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 15, color: "#0F172A" }}>Wispfolio</span>
        </Link>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 5, background: "#EFF6FF", padding: "3px 8px", borderRadius: 6, marginTop: 8 }}>
          <Shield size={11} color="#2563EB" />
          <span style={{ fontSize: 11, color: "#2563EB", fontWeight: 600 }}>Admin Panel</span>
        </div>
      </div>

      <nav style={{ flex: 1, padding: "12px 8px" }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.08em", padding: "8px 6px 4px" }}>Navigation</div>
        {NAV.map((item) => {
          const active = pathname === item.href || (item.href !== "/admin" && pathname?.startsWith(item.href));
          return (
            <Link
              key={item.href}
              href={item.href}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "9px 10px",
                borderRadius: 8,
                fontSize: 13,
                fontWeight: active ? 600 : 500,
                color: active ? "#2563EB" : "#64748B",
                background: active ? "#EFF6FF" : "transparent",
                textDecoration: "none",
                marginBottom: 2,
                transition: "all 0.15s",
              }}
              onMouseEnter={e => { if (!active) (e.currentTarget as HTMLElement).style.background = "#F1F5F9"; }}
              onMouseLeave={e => { if (!active) (e.currentTarget as HTMLElement).style.background = "transparent"; }}
            >
              <item.icon size={15} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div style={{ padding: "14px 14px", borderTop: "1px solid #F1F5F9" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#2563EB", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 12, fontWeight: 700 }}>A</div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 600, color: "#0F172A" }}>Admin</div>
            <div style={{ fontSize: 10, color: "#94A3B8" }}>Super admin</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
