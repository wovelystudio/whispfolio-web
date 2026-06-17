"use client";
import { Plus, ChevronRight, CheckCircle, Circle, PlayCircle } from "lucide-react";

const MILESTONES = [
  { id: 1, title: "Design System V1", date: "June 1, 2025", status: "completed", desc: "Finalize typography, colors, and core components for the app." },
  { id: 2, title: "Database Schema", date: "June 10, 2025", status: "completed", desc: "Design and implement the Supabase schema and RLS policies." },
  { id: 3, title: "User Authentication", date: "June 15, 2025", status: "in-progress", desc: "Build signup, login, and magic link flows." },
  { id: 4, title: "Beta Launch", date: "July 1, 2025", status: "planned", desc: "Invite first 100 users from the waitlist to test the platform." }
];

export default function ProgressTrackerPage() {
  const completed = MILESTONES.filter(m => m.status === "completed").length;
  const total = MILESTONES.length;
  const percentage = Math.round((completed / total) * 100);

  return (
    <div style={{ padding: "32px 36px", maxWidth: 900, margin: "0 auto" }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 40 }}>
        <div>
          <h1 style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 24, color: "#0F172A", marginBottom: 6 }}>Progress Tracker</h1>
          <p style={{ fontSize: 14, color: "#64748B" }}>Visualize your journey. See how far you've come.</p>
        </div>
        <button className="btn-primary" style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Plus size={16} /> Add Milestone
        </button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 40 }}>
        
        {/* Left: Overall Ring */}
        <div>
          <div style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 20, padding: "32px", textAlign: "center", position: "sticky", top: 32 }}>
            <div style={{ position: "relative", width: 160, height: 160, margin: "0 auto 24px" }}>
              <svg width="160" height="160" viewBox="0 0 160 160">
                <circle cx="80" cy="80" r="70" fill="none" stroke="#F1F5F9" strokeWidth="12" />
                <circle cx="80" cy="80" r="70" fill="none" stroke="var(--purple-wisp)" strokeWidth="12" strokeDasharray="440" strokeDashoffset={440 - (440 * percentage) / 100} strokeLinecap="round" style={{ transform: "rotate(-90deg)", transformOrigin: "center", transition: "stroke-dashoffset 1s ease-in-out" }} />
              </svg>
              <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontFamily: "Sora, sans-serif", fontSize: 36, fontWeight: 800, color: "#0F172A" }}>{percentage}%</span>
              </div>
            </div>
            
            <h3 style={{ fontWeight: 700, fontSize: 16, color: "#0F172A", marginBottom: 8 }}>Project Health</h3>
            <p style={{ fontSize: 13, color: "#64748B", lineHeight: 1.6 }}>You are making steady progress! You have completed {completed} out of {total} major milestones.</p>
          </div>
        </div>

        {/* Right: Timeline */}
        <div>
          <div style={{ display: "flex", flexDirection: "column", gap: 0, position: "relative" }}>
            
            {/* Timeline line */}
            <div style={{ position: "absolute", left: 19, top: 20, bottom: 40, width: 2, background: "#E2E8F0", zIndex: 1 }} />

            {MILESTONES.map((m, i) => (
              <div key={m.id} style={{ display: "flex", gap: 20, position: "relative", zIndex: 2, paddingBottom: i === MILESTONES.length - 1 ? 0 : 32 }}>
                
                {/* Icon */}
                <div style={{ width: 40, height: 40, borderRadius: "50%", background: "white", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, border: `2px solid ${m.status === "completed" ? "#16A34A" : m.status === "in-progress" ? "var(--purple-wisp)" : "#E2E8F0"}`, boxShadow: m.status === "in-progress" ? "0 0 0 4px var(--purple-soft)" : "none" }}>
                  {m.status === "completed" && <CheckCircle size={20} color="#16A34A" />}
                  {m.status === "in-progress" && <PlayCircle size={20} color="var(--purple-wisp)" />}
                  {m.status === "planned" && <Circle size={20} color="#94A3B8" />}
                </div>

                {/* Card */}
                <div style={{ flex: 1, background: "white", border: "1px solid #E2E8F0", borderRadius: 16, padding: "20px", transition: "all 0.2s ease" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(0,0,0,0.04)";
                    (e.currentTarget as HTMLElement).style.borderColor = m.status === "in-progress" ? "var(--purple-soft)" : "#CBD5E1";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    (e.currentTarget as HTMLElement).style.borderColor = "#E2E8F0";
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                    <h3 style={{ fontWeight: 700, fontSize: 16, color: "#0F172A" }}>{m.title}</h3>
                    <span style={{ fontSize: 12, color: "#64748B", fontWeight: 500 }}>{m.date}</span>
                  </div>
                  <p style={{ fontSize: 14, color: "#475569", lineHeight: 1.6, marginBottom: 16 }}>{m.desc}</p>
                  
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ padding: "4px 10px", borderRadius: 6, fontSize: 11, fontWeight: 600, background: m.status === "completed" ? "#DCFCE7" : m.status === "in-progress" ? "var(--purple-soft)" : "#F1F5F9", color: m.status === "completed" ? "#16A34A" : m.status === "in-progress" ? "var(--purple-wisp)" : "#64748B", textTransform: "capitalize" }}>
                      {m.status.replace("-", " ")}
                    </span>
                    <button style={{ background: "none", border: "none", fontSize: 13, color: "var(--purple-wisp)", fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: 4 }}>
                      Edit <ChevronRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
