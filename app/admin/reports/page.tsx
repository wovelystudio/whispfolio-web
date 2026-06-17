"use client";
import { useState } from "react";
import { Flag, Check, X, ExternalLink } from "lucide-react";

const REPORTS = [
  { id: 1, reporter: "@mike_dev", target: "Project #142 by @spammy", reason: "Spam / Misleading content", time: "2h ago", status: "Pending" },
  { id: 2, reporter: "@lisaart", target: "Update post by @badactor99", reason: "Inappropriate content", time: "5h ago", status: "Pending" },
  { id: 3, reporter: "@tomstudent", target: "Project #89 by @jamiec", reason: "Copyright violation", time: "Yesterday", status: "Reviewed" },
  { id: 4, reporter: "@annafounder", target: "Profile @newuser22", reason: "Impersonation", time: "2 days ago", status: "Dismissed" },
];

export default function AdminReportsPage() {
  const [reports, setReports] = useState(REPORTS);

  function updateStatus(id: number, status: string) {
    setReports((prev) => prev.map((r) => (r.id === id ? { ...r, status } : r)));
  }

  return (
    <div style={{ padding: "32px 36px" }}>
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 22, color: "#0F172A", letterSpacing: "-0.02em", marginBottom: 4 }}>Reports</h1>
        <p style={{ fontSize: 14, color: "#64748B" }}>{reports.filter((r) => r.status === "Pending").length} pending reports</p>
      </div>

      <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
        {["All", "Pending", "Reviewed", "Dismissed"].map((f) => (
          <button key={f} style={{ padding: "6px 14px", borderRadius: 7, border: "1.5px solid #E2E8F0", background: "white", fontSize: 13, fontWeight: 500, color: "#64748B", cursor: "pointer" }}>{f}</button>
        ))}
      </div>

      <div style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 14, overflow: "hidden" }}>
        <table className="data-table" style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "#F8FAFF" }}>
              <th>Reporter</th>
              <th>Target</th>
              <th>Reason</th>
              <th>Time</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((r) => (
              <tr key={r.id}>
                <td style={{ fontWeight: 600, color: "#2563EB" }}>{r.reporter}</td>
                <td style={{ color: "#334155" }}>{r.target}</td>
                <td>
                  <span style={{ background: "#FEF9C3", color: "#92400E", padding: "3px 10px", borderRadius: 999, fontSize: 11, fontWeight: 600 }}>{r.reason}</span>
                </td>
                <td style={{ color: "#94A3B8" }}>{r.time}</td>
                <td>
                  <span style={{
                    padding: "3px 10px", borderRadius: 999, fontSize: 11, fontWeight: 700,
                    background: r.status === "Pending" ? "#FEF9C3" : r.status === "Reviewed" ? "#DCFCE7" : "#F1F5F9",
                    color: r.status === "Pending" ? "#92400E" : r.status === "Reviewed" ? "#16A34A" : "#64748B",
                  }}>
                    {r.status}
                  </span>
                </td>
                <td>
                  <div style={{ display: "flex", gap: 6 }}>
                    {r.status === "Pending" && (
                      <>
                        <button
                          onClick={() => updateStatus(r.id, "Reviewed")}
                          style={{ display: "flex", alignItems: "center", gap: 4, padding: "5px 10px", border: "1.5px solid #86EFAC", borderRadius: 6, background: "white", color: "#16A34A", fontSize: 12, fontWeight: 600, cursor: "pointer" }}
                        >
                          <Check size={11} /> Resolve
                        </button>
                        <button
                          onClick={() => updateStatus(r.id, "Dismissed")}
                          style={{ display: "flex", alignItems: "center", gap: 4, padding: "5px 10px", border: "1.5px solid #E2E8F0", borderRadius: 6, background: "white", color: "#64748B", fontSize: 12, fontWeight: 600, cursor: "pointer" }}
                        >
                          <X size={11} /> Dismiss
                        </button>
                      </>
                    )}
                    {r.status !== "Pending" && (
                      <span style={{ fontSize: 12, color: "#94A3B8" }}>No action</span>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
