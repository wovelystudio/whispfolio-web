"use client";
import { useState } from "react";
import { TrendingUp, Plus, X, CheckCircle, Circle, Clock, Flag, ChevronDown, ChevronUp } from "lucide-react";

const MILESTONES_INIT = [
  { id: 1, title: "Define core concept", desc: "Nail down the problem, audience, and unique angle", date: "May 1", done: true, color: "#DCFCE7", tc: "#16A34A" },
  { id: 2, title: "First wireframes", desc: "Low-fi sketches of main flows", date: "May 10", done: true, color: "#DBEAFE", tc: "#2563EB" },
  { id: 3, title: "Build MVP", desc: "Core feature set working end-to-end", date: "Jun 1", done: true, color: "#EDE9FE", tc: "#7C3AED" },
  { id: 4, title: "Beta launch", desc: "Invite first 50 users, gather feedback", date: "Jun 20", done: false, color: "#FEF9C3", tc: "#92400E" },
  { id: 5, title: "Public launch", desc: "Go live, share on socials and communities", date: "Jul 15", done: false, color: "#FFE4E6", tc: "#9F1239" },
];

const UPDATES = [
  { id: 1, text: "Shipped dark mode toggle after 3 days of CSS variable refactoring", date: "Jun 12", emoji: "🌙" },
  { id: 2, text: "Reached 500 GitHub stars — completely unexpected", date: "Jun 8", emoji: "⭐" },
  { id: 3, text: "Fixed the onboarding bug that was blocking 30% of signups", date: "Jun 5", emoji: "🐛" },
  { id: 4, text: "Wrote first technical post — got 2k reads in 24h", date: "May 28", emoji: "✍️" },
];

export default function ProgressPage() {
  const [milestones, setMilestones] = useState(MILESTONES_INIT);
  const [updates, setUpdates] = useState(UPDATES);
  const [showAdd, setShowAdd] = useState(false);
  const [newMs, setNewMs] = useState({ title: "", desc: "", date: "" });
  const [newUpdate, setNewUpdate] = useState("");

  const done = milestones.filter(m => m.done).length;
  const pct = Math.round((done / milestones.length) * 100);

  function toggleMilestone(id: number) {
    setMilestones(prev => prev.map(m => m.id === id ? { ...m, done: !m.done } : m));
  }

  function addMilestone() {
    if (!newMs.title.trim()) return;
    const COLORS = [["#DBEAFE","#2563EB"],["#EDE9FE","#7C3AED"],["#FEF9C3","#92400E"],["#DCFCE7","#16A34A"],["#FFE4E6","#9F1239"]];
    const [color, tc] = COLORS[milestones.length % COLORS.length];
    setMilestones(prev => [...prev, { id: Date.now(), ...newMs, done: false, color, tc }]);
    setNewMs({ title: "", desc: "", date: "" });
    setShowAdd(false);
  }

  function addUpdate() {
    if (!newUpdate.trim()) return;
    const emojis = ["✦","⚡","🔧","🎯","💡","🚀","✅"];
    setUpdates(prev => [{ id: Date.now(), text: newUpdate, date: "Today", emoji: emojis[Math.floor(Math.random()*emojis.length)] }, ...prev]);
    setNewUpdate("");
  }

  return (
    <div style={{ padding: "32px 40px", width: "100%" }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 28, flexWrap: "wrap", gap: 16 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
            <div style={{ width: 34, height: 34, background: "#DBEAFE", borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <TrendingUp size={17} color="#1D4ED8" />
            </div>
            <span style={{ fontSize: 13, fontWeight: 700, color: "#1D4ED8", fontFamily: "Sora, sans-serif" }}>Progress Tracker</span>
          </div>
          <h1 style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 24, color: "#0F172A", letterSpacing: "-0.02em", marginBottom: 4 }}>
            Your journey, visualised
          </h1>
          <p style={{ fontSize: 14, color: "#64748B" }}>{done} of {milestones.length} milestones complete</p>
        </div>
        <button onClick={() => setShowAdd(true)} style={{ display: "flex", alignItems: "center", gap: 6, padding: "10px 18px", background: "#2563EB", color: "white", border: "none", borderRadius: 9, fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "Sora, sans-serif", transition: "background 0.15s" }}
          onMouseEnter={e => (e.currentTarget.style.background = "#1D4ED8")}
          onMouseLeave={e => (e.currentTarget.style.background = "#2563EB")}>
          <Plus size={14} /> Add milestone
        </button>
      </div>

      {/* Overall progress bar */}
      <div style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 16, padding: "24px 28px", marginBottom: 28 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
          <div>
            <div style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 36, color: "#0F172A", letterSpacing: "-0.03em" }}>{pct}%</div>
            <div style={{ fontSize: 13, color: "#64748B", marginTop: 2 }}>Overall completion</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 16, color: "#2563EB" }}>{done}/{milestones.length}</div>
            <div style={{ fontSize: 13, color: "#64748B" }}>milestones done</div>
          </div>
        </div>
        <div style={{ height: 10, background: "#F1F5F9", borderRadius: 999, overflow: "hidden" }}>
          <div style={{ height: "100%", width: `${pct}%`, background: "linear-gradient(90deg, #2563EB, #7C3AED)", borderRadius: 999, transition: "width 0.6s cubic-bezier(0.16,1,0.3,1)" }} />
        </div>

        {/* Stage indicators */}
        <div style={{ display: "flex", marginTop: 16, gap: 0 }}>
          {milestones.map((m, i) => (
            <div key={m.id} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
              <div style={{ width: 18, height: 18, borderRadius: "50%", background: m.done ? m.tc : "#E2E8F0", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.3s" }}>
                {m.done ? <CheckCircle size={11} color="white" strokeWidth={3} /> : <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#CBD5E1" }} />}
              </div>
              <div style={{ fontSize: 9, color: m.done ? "#64748B" : "#94A3B8", textAlign: "center", maxWidth: 60, lineHeight: 1.2, fontWeight: m.done ? 600 : 400 }}>{m.title}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
        {/* Milestones */}
        <div>
          <h2 style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 16, color: "#0F172A", marginBottom: 14 }}>Milestones</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {milestones.map((m, i) => (
              <div key={m.id} style={{ background: "white", border: `1.5px solid ${m.done ? m.color : "#E2E8F0"}`, borderRadius: 12, padding: "14px 16px", display: "flex", alignItems: "flex-start", gap: 12, transition: "all 0.2s", opacity: m.done ? 0.85 : 1 }}>
                <button onClick={() => toggleMilestone(m.id)} style={{ background: "none", border: "none", cursor: "pointer", padding: 0, marginTop: 1, flexShrink: 0, transition: "transform 0.15s" }}
                  onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.15)")}
                  onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}>
                  {m.done
                    ? <CheckCircle size={20} color={m.tc} fill={m.color} strokeWidth={1.5} />
                    : <Circle size={20} color="#CBD5E1" strokeWidth={1.5} />}
                </button>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: m.done ? "#94A3B8" : "#0F172A", textDecoration: m.done ? "line-through" : "none", marginBottom: 3 }}>{m.title}</div>
                  <div style={{ fontSize: 12, color: "#94A3B8", lineHeight: 1.4 }}>{m.desc}</div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 4, flexShrink: 0 }}>
                  <Clock size={11} color="#CBD5E1" />
                  <span style={{ fontSize: 11, color: "#94A3B8", fontWeight: 500 }}>{m.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Activity log */}
        <div>
          <h2 style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 16, color: "#0F172A", marginBottom: 14 }}>Activity log</h2>

          {/* Quick add update */}
          <div style={{ background: "white", border: "1.5px solid #E2E8F0", borderRadius: 12, padding: "14px", marginBottom: 14 }}>
            <textarea value={newUpdate} onChange={e => setNewUpdate(e.target.value)}
              placeholder="What did you do today? What did you ship?"
              rows={2}
              style={{ width: "100%", border: "none", outline: "none", fontSize: 13, color: "#0F172A", resize: "none", fontFamily: "Inter, sans-serif", boxSizing: "border-box", background: "transparent" }} />
            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 8 }}>
              <button onClick={addUpdate} disabled={!newUpdate.trim()}
                style={{ padding: "7px 16px", background: newUpdate.trim() ? "#2563EB" : "#E2E8F0", color: newUpdate.trim() ? "white" : "#94A3B8", border: "none", borderRadius: 7, fontSize: 12, fontWeight: 700, cursor: newUpdate.trim() ? "pointer" : "default", transition: "all 0.15s" }}>
                Log update
              </button>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {updates.map((u, i) => (
              <div key={u.id} style={{ display: "flex", gap: 12, padding: "12px 14px", background: "white", border: "1px solid #F1F5F9", borderRadius: 10, alignItems: "flex-start" }}>
                <div style={{ width: 28, height: 28, borderRadius: 8, background: "#F8FAFF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, flexShrink: 0 }}>{u.emoji}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, color: "#334155", lineHeight: 1.5 }}>{u.text}</div>
                  <div style={{ fontSize: 11, color: "#94A3B8", marginTop: 4 }}>{u.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add milestone modal */}
      {showAdd && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(15,23,42,0.5)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100, backdropFilter: "blur(6px)" }}>
          <div style={{ background: "white", borderRadius: 20, padding: "32px", width: "100%", maxWidth: 420, boxShadow: "0 28px 80px rgba(0,0,0,0.22)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
              <h3 style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 18, color: "#0F172A" }}>Add milestone</h3>
              <button onClick={() => setShowAdd(false)} style={{ background: "none", border: "none", cursor: "pointer", color: "#94A3B8" }}><X size={18} /></button>
            </div>
            {[
              { label: "Milestone title *", key: "title", placeholder: "e.g. Public beta launch" },
              { label: "Description", key: "desc", placeholder: "What does success look like?" },
              { label: "Target date", key: "date", placeholder: "e.g. Jul 15" },
            ].map(f => (
              <div key={f.key} style={{ marginBottom: 14 }}>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 6 }}>{f.label}</label>
                <input value={newMs[f.key as keyof typeof newMs]} onChange={e => setNewMs(p => ({ ...p, [f.key]: e.target.value }))}
                  placeholder={f.placeholder}
                  style={{ width: "100%", padding: "10px 14px", border: "1.5px solid #E2E8F0", borderRadius: 9, fontSize: 14, outline: "none", boxSizing: "border-box" }}
                  onFocus={e => (e.target.style.borderColor = "#2563EB")}
                  onBlur={e => (e.target.style.borderColor = "#E2E8F0")} />
              </div>
            ))}
            <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
              <button onClick={() => setShowAdd(false)} style={{ flex: 1, padding: "11px", border: "1.5px solid #E2E8F0", borderRadius: 9, background: "white", fontSize: 14, fontWeight: 600, color: "#64748B", cursor: "pointer" }}>Cancel</button>
              <button onClick={addMilestone} style={{ flex: 1, padding: "11px", border: "none", borderRadius: 9, background: "#2563EB", color: "white", fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "Sora, sans-serif" }}>Add milestone</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
