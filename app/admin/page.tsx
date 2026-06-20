"use client";
import Link from "next/link";
import { Users, Zap, TrendingUp, Flag, Activity, ArrowUpRight, XCircle, CheckCircle, Shield } from "lucide-react";

const ACTIVITY = [
  { type: "creator", text: "New creator joined: @sarahbuilds", time: "2m ago", icon: Zap, color: "#EDE9FE", ic: "#7C3AED" },
  { type: "user", text: "New user registered: @mike_dev", time: "8m ago", icon: Users, color: "#DBEAFE", ic: "#2563EB" },
  { type: "report", text: "Content reported on project #142", time: "15m ago", icon: Flag, color: "#E0E7FF", ic: "#4F46E5" },
  { type: "pro", text: "Pro plan assigned to @priyaux", time: "1h ago", icon: Zap, color: "#F3E8FF", ic: "#9333EA" },
  { type: "ban", text: "Account @spam123 was banned", time: "2h ago", icon: XCircle, color: "#DBEAFE", ic: "#1D4ED8" },
  { type: "user", text: "New user registered: @anna_f", time: "3h ago", icon: Users, color: "#EDE9FE", ic: "#7C3AED" },
];

export default function AdminOverviewPage() {
  return (
    <div style={{ padding: "32px 36px" }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 28, flexWrap: "wrap", gap: 12 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 8 }}>
            <Shield size={14} color="#94A3B8" />
            <span style={{ fontSize: 12, fontWeight: 700, color: "#94A3B8", letterSpacing: "0.06em", textTransform: "uppercase" }}>Admin Panel</span>
          </div>
          <h1 style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 24, color: "#0F172A", letterSpacing: "-0.02em", marginBottom: 4 }}>Overview</h1>
          <p style={{ fontSize: 14, color: "#64748B" }}>Platform health — June 2026</p>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <Link href="/admin/creators" style={{ padding: "9px 18px", background: "white", color: "#64748B", borderRadius: 8, fontSize: 13, fontWeight: 600, textDecoration: "none", border: "1px solid #E2E8F0", transition: "all 0.15s" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#0F172A"; (e.currentTarget as HTMLElement).style.borderColor = "#CBD5E1"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#64748B"; (e.currentTarget as HTMLElement).style.borderColor = "#E2E8F0"; }}>
            Manage creators
          </Link>
          <Link href="/admin/users" style={{ padding: "9px 18px", background: "#2563EB", color: "white", borderRadius: 8, fontSize: 13, fontWeight: 600, textDecoration: "none", transition: "background 0.15s" }}
            onMouseEnter={e => (e.currentTarget.style.background = "#1D4ED8")}
            onMouseLeave={e => (e.currentTarget.style.background = "#2563EB")}>
            Manage users
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 14, marginBottom: 28 }}>
        {[
          { label: "Total Users", val: "2,481", delta: "+48 this week", icon: Users, color: "#DBEAFE", ic: "#2563EB" },
          { label: "Creators", val: "312", delta: "+12 this week", icon: Zap, color: "#EDE9FE", ic: "#7C3AED" },
          { label: "Pro Creators", val: "64", delta: "+5 this week", icon: TrendingUp, color: "#E0E7FF", ic: "#4F46E5" },
          { label: "Open Reports", val: "7", delta: "3 need review", icon: Flag, color: "#DBEAFE", ic: "#1D4ED8" },
          { label: "Banned", val: "18", delta: "2 this week", icon: XCircle, color: "#F3E8FF", ic: "#9333EA" },
        ].map(s => (
          <div key={s.label} style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 12, padding: "18px 16px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
              <div style={{ width: 32, height: 32, background: s.color, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <s.icon size={15} color={s.ic} />
              </div>
              <ArrowUpRight size={13} color="#94A3B8" />
            </div>
            <div style={{ fontFamily: "Sora, sans-serif", fontWeight: 900, fontSize: 26, color: "#0F172A", letterSpacing: "-0.03em", marginBottom: 2 }}>{s.val}</div>
            <div style={{ fontSize: 12, fontWeight: 600, color: "#64748B" }}>{s.label}</div>
            <div style={{ fontSize: 11, color: "#94A3B8", marginTop: 2 }}>{s.delta}</div>
          </div>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        {/* Activity */}
        <div style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 14, padding: "22px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
              <Activity size={14} color="#64748B" />
              <span style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 14, color: "#0F172A" }}>Live activity</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#16A34A" }} />
              <span style={{ fontSize: 11, color: "#16A34A", fontWeight: 600 }}>Live</span>
            </div>
          </div>
          {ACTIVITY.map((a, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 11, paddingBottom: 12, marginBottom: 12, borderBottom: i < ACTIVITY.length - 1 ? "1px solid #F1F5F9" : "none" }}>
              <div style={{ width: 30, height: 30, borderRadius: 8, background: a.color, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <a.icon size={13} color={a.ic} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 12.5, color: "#334155", fontWeight: 500, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{a.text}</div>
                <div style={{ fontSize: 11, color: "#94A3B8", marginTop: 2 }}>{a.time}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick actions */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 14, padding: "22px" }}>
            <h3 style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 14, color: "#0F172A", marginBottom: 16 }}>Quick actions</h3>
            {[
              { label: "Review open reports", href: "/admin/reports", color: "#E0E7FF", tc: "#4F46E5", count: "7 open" },
              { label: "Manage all creators", href: "/admin/creators", color: "#DBEAFE", tc: "#2563EB", count: "312 total" },
              { label: "Manage all users", href: "/admin/users", color: "#EDE9FE", tc: "#7C3AED", count: "2,481 total" },
            ].map(a => (
              <Link key={a.label} href={a.href} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "11px 14px", background: "#F8FAFF", borderRadius: 9, textDecoration: "none", marginBottom: 8, transition: "background 0.15s", border: "1px solid #E2E8F0" }}
                onMouseEnter={e => (e.currentTarget.style.background = "#EFF6FF")}
                onMouseLeave={e => (e.currentTarget.style.background = "#F8FAFF")}>
                <span style={{ fontSize: 13.5, fontWeight: 600, color: "#334155" }}>{a.label}</span>
                <span style={{ background: a.color, color: a.tc, padding: "2px 10px", borderRadius: 999, fontSize: 11, fontWeight: 700 }}>{a.count}</span>
              </Link>
            ))}
          </div>

          {/* Beta tools */}
          <div style={{ background: "linear-gradient(135deg, rgba(37,99,235,0.06), rgba(124,58,237,0.06))", border: "1px solid #E2E8F0", borderRadius: 14, padding: "22px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 10 }}>
              <Zap size={14} color="#7C3AED" />
              <span style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 14, color: "#0F172A" }}>Beta tools</span>
            </div>
            <p style={{ fontSize: 13, color: "#64748B", lineHeight: 1.5, marginBottom: 16 }}>
              Assign Pro plans to selected creators for free during the beta period — no billing required.
            </p>
            <Link href="/admin/creators" style={{ display: "inline-flex", alignItems: "center", gap: 7, padding: "9px 18px", background: "#7C3AED", color: "white", borderRadius: 8, fontSize: 13, fontWeight: 700, textDecoration: "none", transition: "background 0.15s" }}
              onMouseEnter={e => (e.currentTarget.style.background = "#6D28D9")}
              onMouseLeave={e => (e.currentTarget.style.background = "#7C3AED")}>
              <Zap size={13} /> Assign Pro plans
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
