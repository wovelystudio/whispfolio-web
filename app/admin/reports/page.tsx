"use client";
import { useState } from "react";
import { Flag, Check, X, AlertTriangle, Shield } from "lucide-react";

const INIT = [
  { id: 1, reporter: "@mike_dev", target: "Project #142 by @spammy", reason: "Spam / Misleading content", time: "2h ago", status: "Pending" },
  { id: 2, reporter: "@lisaart", target: "Update post by @badactor99", reason: "Inappropriate content", time: "5h ago", status: "Pending" },
  { id: 3, reporter: "@tomstudent", target: "Project #89 by @jamiec", reason: "Copyright violation", time: "Yesterday", status: "Reviewed" },
  { id: 4, reporter: "@annafounder", target: "Profile @newuser22", reason: "Impersonation", time: "2 days ago", status: "Dismissed" },
  { id: 5, reporter: "@devfounder", target: "Project #201 by @random", reason: "Off-topic / Not a project", time: "3 days ago", status: "Reviewed" },
];

export default function AdminReportsPage() {
  const [reports, setReports] = useState(INIT);
  const [filter, setFilter] = useState("All");

  function update(id: number, status: string) {
    setReports(prev => prev.map(r => r.id === id ? { ...r, status } : r));
  }

  const STATUS = { Pending: { bg: "#FEF9C3", tc: "#92400E" }, Reviewed: { bg: "#DCFCE7", tc: "#16A34A" }, Dismissed: { bg: "#334155", tc: "#94A3B8" } };
  const filtered = reports.filter(r => filter === "All" || r.status === filter);

  return (
    <div style={{ padding: "32px 36px" }}>
      <div style={{ marginBottom: 24 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 8 }}>
          <Flag size={14} color="#94A3B8" />
          <span style={{ fontSize: 12, fontWeight: 700, color: "#94A3B8", letterSpacing: "0.06em", textTransform: "uppercase" }}>Moderation</span>
        </div>
        <h1 style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 22, color: "white", letterSpacing: "-0.02em", marginBottom: 4 }}>Reports</h1>
        <p style={{ fontSize: 14, color: "#64748B" }}>{reports.filter(r => r.status === "Pending").length} pending reports need review</p>
      </div>

      <div style={{ display: "flex", gap: 6, marginBottom: 20, flexWrap: "wrap" }}>
        {["All", "Pending", "Reviewed", "Dismissed"].map(f => (
          <button key={f} onClick={() => setFilter(f)} style={{ padding: "7px 16px", borderRadius: 8, border: "1px solid", fontSize: 13, fontWeight: 600, cursor: "pointer", transition: "all 0.15s", background: filter === f ? "#2563EB" : "#1E293B", borderColor: filter === f ? "#2563EB" : "#334155", color: filter === f ? "white" : "#94A3B8" }}>
            {f}
          </button>
        ))}
      </div>

      <div style={{ background: "#1E293B", border: "1px solid #334155", borderRadius: 14, overflow: "hidden" }}>
        <table className="data-table" style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "#0F172A" }}>
              {["Reporter", "Target", "Reason", "Time", "Status", "Actions"].map(h => (
                <th key={h} style={{ padding: "11px 16px", textAlign: "left", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "#475569", borderBottom: "1px solid #334155" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((r, i) => (
              <tr key={r.id} style={{ borderBottom: i < filtered.length - 1 ? "1px solid #0F172A" : "none" }}
                onMouseEnter={e => (e.currentTarget.style.background = "#162032")}
                onMouseLeave={e => (e.currentTarget.style.background = "transparent")}>
                <td style={{ padding: "14px 16px", fontSize: 13.5, color: "#60A5FA", fontWeight: 600 }}>{r.reporter}</td>
                <td style={{ padding: "14px 16px", fontSize: 13.5, color: "#CBD5E1" }}>{r.target}</td>
                <td style={{ padding: "14px 16px" }}>
                  <span style={{ background: "#FEF9C322", color: "#FCD34D", padding: "3px 10px", borderRadius: 999, fontSize: 11.5, fontWeight: 700 }}>{r.reason}</span>
                </td>
                <td style={{ padding: "14px 16px", fontSize: 12.5, color: "#475569" }}>{r.time}</td>
                <td style={{ padding: "14px 16px" }}>
                  <span style={{ padding: "3px 10px", borderRadius: 999, fontSize: 11.5, fontWeight: 700, background: STATUS[r.status as keyof typeof STATUS]?.bg + "22" || "#33415522", color: STATUS[r.status as keyof typeof STATUS]?.tc || "#94A3B8" }}>
                    {r.status}
                  </span>
                </td>
                <td style={{ padding: "14px 16px" }}>
                  {r.status === "Pending" ? (
                    <div style={{ display: "flex", gap: 6 }}>
                      <button onClick={() => update(r.id, "Reviewed")} style={{ display: "flex", alignItems: "center", gap: 4, padding: "5px 10px", border: "1px solid #16A34A44", borderRadius: 6, background: "#16A34A11", color: "#16A34A", fontSize: 12, fontWeight: 700, cursor: "pointer" }}>
                        <Check size={11} /> Resolve
                      </button>
                      <button onClick={() => update(r.id, "Dismissed")} style={{ display: "flex", alignItems: "center", gap: 4, padding: "5px 10px", border: "1px solid #33415566", borderRadius: 6, background: "transparent", color: "#64748B", fontSize: 12, fontWeight: 600, cursor: "pointer" }}>
                        <X size={11} /> Dismiss
                      </button>
                    </div>
                  ) : (
                    <span style={{ fontSize: 12, color: "#334155" }}>—</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && (
          <div style={{ padding: "48px 24px", textAlign: "center" }}>
            <div style={{ fontSize: 28, marginBottom: 10 }}>✦</div>
            <p style={{ fontSize: 14, color: "#475569" }}>No reports in this category</p>
          </div>
        )}
      </div>
    </div>
  );
}
