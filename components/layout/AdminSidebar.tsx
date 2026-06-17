"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Users, Zap, Shield, Settings, Activity, Flag } from "lucide-react";

const NAV = [
  { icon: LayoutDashboard, label: "Overview", href: "/admin" },
  { icon: Zap, label: "Creators", href: "/admin/creators" },
  { icon: Users, label: "Users", href: "/admin/users" },
  { icon: Flag, label: "Reports", href: "/admin/reports" },
  { icon: Activity, label: "Activity", href: "/admin/activity" },
  { icon: Settings, label: "Settings", href: "/admin/settings" },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  return (
    <aside style={{ width: 220, minHeight: "100vh", background: "#0F172A", display: "flex", flexDirection: "column", flexShrink: 0, position: "sticky", top: 0, height: "100vh" }}>
      <div style={{ padding: "18px 14px", borderBottom: "1px solid #1E293B" }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
          <div style={{ width: 28, height: 28, background: "#2563EB", borderRadius: 7, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="14" height="14" viewBox="0 0 18 18" fill="none">
              <path d="M3 9C3 5.686 5.686 3 9 3s6 2.686 6 6-2.686 6-6 6S3 12.314 3 9z" stroke="white" strokeWidth="1.5"/>
              <path d="M9 6v6M6 9h6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <span style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 15, color: "white" }}>Wispfolio</span>
        </Link>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 5, background: "#1E293B", padding: "3px 8px", borderRadius: 6, marginTop: 8 }}>
          <Shield size={11} color="#94A3B8" />
          <span style={{ fontSize: 11, color: "#94A3B8", fontWeight: 600 }}>Admin Panel</span>
        </div>
      </div>

      <nav style={{ flex: 1, padding: "12px 8px" }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: "#475569", textTransform: "uppercase", letterSpacing: "0.08em", padding: "8px 6px 4px" }}>Navigation</div>
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
                fontWeight: 500,
                color: active ? "white" : "#94A3B8",
                background: active ? "#1E3A8A" : "transparent",
                textDecoration: "none",
                marginBottom: 2,
                transition: "all 0.15s",
              }}
            >
              <item.icon size={15} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div style={{ padding: "14px 14px", borderTop: "1px solid #1E293B" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#2563EB", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 12, fontWeight: 700 }}>A</div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 600, color: "white" }}>Admin</div>
            <div style={{ fontSize: 10, color: "#475569" }}>Super admin</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
