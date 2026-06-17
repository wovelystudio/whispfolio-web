"use client";
import { Users, Zap, TrendingUp, Flag, Activity, ArrowUpRight, CheckCircle, XCircle } from "lucide-react";

const RECENT_ACTIVITY = [
  { type: "signup", text: "New creator signed up: @sarahbuilds", time: "2m ago", icon: Zap, color: "#DBEAFE", ic: "#2563EB" },
  { type: "signup", text: "New user registered: @mike_dev", time: "8m ago", icon: Users, color: "#DCFCE7", ic: "#16A34A" },
  { type: "report", text: "Content reported on project #142", time: "15m ago", icon: Flag, color: "#FEF9C3", ic: "#CA8A04" },
  { type: "pro", text: "Pro plan assigned to @priyaux", time: "1h ago", icon: TrendingUp, color: "#F3E8FF", ic: "#9333EA" },
  { type: "ban", text: "User @spam123 was banned", time: "2h ago", icon: XCircle, color: "#FFE4E6", ic: "#E11D48" },
];

export default function AdminOverviewPage() {
  return (
    <div style={{ padding: "32px 36px" }}>
      <div style={{ marginBottom: 28 }}>
        <h1 style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 24, color: "#0F172A", letterSpacing: "-0.02em", marginBottom: 4 }}>Admin Overview</h1>
        <p style={{ fontSize: 14, color: "#64748B" }}>Platform health and recent activity — June 2025</p>
      </div>

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16, marginBottom: 32 }}>
        {[
          { label: "Total Users", val: "2,481", delta: "+48 this week", icon: Users, color: "#DBEAFE", ic: "#2563EB" },
          { label: "Total Creators", val: "312", delta: "+12 this week", icon: Zap, color: "#DCFCE7", ic: "#16A34A" },
          { label: "Pro Creators", val: "64", delta: "+5 this week", icon: TrendingUp, color: "#F3E8FF", ic: "#9333EA" },
          { label: "Open Reports", val: "7", delta: "3 pending review", icon: Flag, color: "#FEF9C3", ic: "#CA8A04" },
          { label: "Banned Accounts", val: "18", delta: "2 this week", icon: XCircle, color: "#FFE4E6", ic: "#E11D48" },
        ].map((s) => (
          <div key={s.label} style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 12, padding: "18px 16px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
              <div style={{ width: 32, height: 32, background: s.color, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <s.icon size={15} color={s.ic} />
              </div>
              <ArrowUpRight size={14} color="#94A3B8" />
            </div>
            <div style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 26, color: "#0F172A" }}>{s.val}</div>
            <div style={{ fontSize: 12, fontWeight: 600, color: "#0F172A", marginBottom: 2 }}>{s.label}</div>
            <div style={{ fontSize: 11, color: "#94A3B8" }}>{s.delta}</div>
          </div>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
        {/* Recent activity */}
        <div style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 14, padding: "20px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
            <h3 style={{ fontWeight: 700, fontSize: 15, color: "#0F172A" }}>Recent Activity</h3>
            <span style={{ fontSize: 12, color: "#2563EB", fontWeight: 500 }}>Live</span>
          </div>
          {RECENT_ACTIVITY.map((a, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, paddingBottom: 14, marginBottom: 14, borderBottom: i < RECENT_ACTIVITY.length - 1 ? "1px solid #F1F5F9" : "none" }}>
              <div style={{ width: 30, height: 30, borderRadius: 8, background: a.color, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <a.icon size={13} color={a.ic} />
              </div>
              <div>
                <div style={{ fontSize: 13, color: "#334155", fontWeight: 500 }}>{a.text}</div>
                <div style={{ fontSize: 11, color: "#94A3B8", marginTop: 2 }}>{a.time}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick actions */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 14, padding: "20px" }}>
            <h3 style={{ fontWeight: 700, fontSize: 15, color: "#0F172A", marginBottom: 14 }}>Quick actions</h3>
            {[
              { label: "View all creators", href: "/admin/creators", color: "#DBEAFE", tc: "#1D4ED8" },
              { label: "View all users", href: "/admin/users", color: "#DCFCE7", tc: "#16A34A" },
              { label: "Review reports", href: "/admin/reports", color: "#FEF9C3", tc: "#CA8A04" },
            ].map((a) => (
              <a
                key={a.label}
                href={a.href}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "12px 14px",
                  background: a.color,
                  borderRadius: 9,
                  textDecoration: "none",
                  marginBottom: 8,
                  color: a.tc,
                  fontWeight: 600,
                  fontSize: 14,
                  transition: "opacity 0.15s",
                }}
              >
                {a.label}
                <ArrowUpRight size={14} />
              </a>
            ))}
          </div>

          <div style={{ background: "#0F172A", borderRadius: 14, padding: "20px" }}>
            <h3 style={{ fontWeight: 700, fontSize: 14, color: "white", marginBottom: 6 }}>Beta testing</h3>
            <p style={{ fontSize: 13, color: "#94A3B8", marginBottom: 14, lineHeight: 1.5 }}>
              Manually assign Pro plans to creators during the beta phase.
            </p>
            <a href="/admin/creators" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "8px 16px", background: "#2563EB", color: "white", borderRadius: 8, fontSize: 13, fontWeight: 600, textDecoration: "none" }}>
              <Zap size={13} /> Assign Pro Plans
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
