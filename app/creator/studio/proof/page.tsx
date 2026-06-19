"use client";
import { useState } from "react";
import { Image as ImageIcon, Plus, X, Camera, FileText, CheckCircle, Sparkles, Heart, Share2 } from "lucide-react";

type Entry = { id: number; type: "update" | "milestone" | "screenshot"; title: string; body: string; date: string; emoji: string; likes: number; liked: boolean; };

const INIT: Entry[] = [
  { id: 1, type: "milestone", title: "Reached 500 GitHub stars", body: "Never expected this to happen so fast. The community response has been incredible. Building in public really works.", date: "Jun 12, 2026", emoji: "⭐", likes: 34, liked: false },
  { id: 2, type: "update", title: "Shipped dark mode", body: "Took way longer than I expected — CSS variables are a rabbit hole. But I'm really happy with how it turned out. Users immediately started sending screenshots.", date: "Jun 10, 2026", emoji: "🌙", likes: 18, liked: true },
  { id: 3, type: "screenshot", title: "First revenue screenshot", body: "First $100 MRR hit. This is still wild to look at.", date: "Jun 5, 2026", emoji: "💸", likes: 52, liked: false },
  { id: 4, type: "update", title: "Fixed the big onboarding bug", body: "30% of new users were getting stuck on step 3. Found the issue: async state update race condition. Fixed in 2 lines. Shipping tomorrow.", date: "May 28, 2026", emoji: "🐛", likes: 11, liked: false },
  { id: 5, type: "milestone", title: "MVP feature complete", body: "All 6 core features are working. The product is scrappy but real. Time to get it in front of users.", date: "May 15, 2026", emoji: "🚀", likes: 41, liked: false },
];

const TYPE_META = {
  update: { label: "Update", color: "#DBEAFE", tc: "#1D4ED8", bg: "#EFF6FF" },
  milestone: { label: "Milestone", color: "#DCFCE7", tc: "#16A34A", bg: "#F0FDF4" },
  screenshot: { label: "Screenshot", color: "#EDE9FE", tc: "#7C3AED", bg: "#F5F3FF" },
};

export default function ProofWallPage() {
  const [entries, setEntries] = useState(INIT);
  const [showAdd, setShowAdd] = useState(false);
  const [filter, setFilter] = useState<"all" | "update" | "milestone" | "screenshot">("all");
  const [form, setForm] = useState({ type: "update", title: "", body: "", emoji: "✦" });

  function add() {
    if (!form.title.trim()) return;
    setEntries(prev => [{
      id: Date.now(),
      type: form.type as Entry["type"],
      title: form.title,
      body: form.body,
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      emoji: form.emoji,
      likes: 0,
      liked: false,
    }, ...prev]);
    setForm({ type: "update", title: "", body: "", emoji: "✦" });
    setShowAdd(false);
  }

  function toggleLike(id: number) {
    setEntries(prev => prev.map(e => e.id === id ? { ...e, liked: !e.liked, likes: e.liked ? e.likes - 1 : e.likes + 1 } : e));
  }

  const filtered = entries.filter(e => filter === "all" || e.type === filter);

  return (
    <div style={{ padding: "32px 36px", maxWidth: 760 }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 28, flexWrap: "wrap", gap: 16 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
            <div style={{ width: 34, height: 34, background: "#FFE4E6", borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <ImageIcon size={17} color="#E11D48" />
            </div>
            <span style={{ fontSize: 13, fontWeight: 700, color: "#E11D48", fontFamily: "Sora, sans-serif" }}>Proof Wall</span>
          </div>
          <h1 style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 24, color: "#0F172A", letterSpacing: "-0.02em", marginBottom: 4 }}>
            The real story
          </h1>
          <p style={{ fontSize: 14, color: "#64748B" }}>
            Every update, win, and lesson. Your journey, documented.
          </p>
        </div>
        <button onClick={() => setShowAdd(true)} style={{ display: "flex", alignItems: "center", gap: 6, padding: "10px 18px", background: "#E11D48", color: "white", border: "none", borderRadius: 9, fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "Sora, sans-serif", transition: "background 0.15s" }}
          onMouseEnter={e => (e.currentTarget.style.background = "#BE123C")}
          onMouseLeave={e => (e.currentTarget.style.background = "#E11D48")}>
          <Plus size={14} /> Add to wall
        </button>
      </div>

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 24 }}>
        {[
          { label: "Updates", val: entries.filter(e => e.type === "update").length, color: "#EFF6FF", tc: "#2563EB" },
          { label: "Milestones", val: entries.filter(e => e.type === "milestone").length, color: "#F0FDF4", tc: "#16A34A" },
          { label: "Total likes", val: entries.reduce((sum, e) => sum + e.likes, 0), color: "#FFF1F2", tc: "#E11D48" },
        ].map(s => (
          <div key={s.label} style={{ background: s.color, border: "1px solid #E2E8F0", borderRadius: 10, padding: "14px 16px" }}>
            <div style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 26, color: s.tc }}>{s.val}</div>
            <div style={{ fontSize: 12, color: "#64748B", fontWeight: 500, marginTop: 2 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Filter */}
      <div style={{ display: "flex", gap: 6, marginBottom: 24, flexWrap: "wrap" }}>
        {[["all","All"],["update","Updates"],["milestone","Milestones"],["screenshot","Screenshots"]].map(([v,l]) => (
          <button key={v} onClick={() => setFilter(v as typeof filter)} style={{
            padding: "7px 14px", borderRadius: 8, border: "1.5px solid", fontSize: 12, fontWeight: 600, cursor: "pointer", transition: "all 0.15s",
            background: filter === v ? "#E11D48" : "white",
            borderColor: filter === v ? "#E11D48" : "#E2E8F0",
            color: filter === v ? "white" : "#64748B",
          }}>
            {l}
          </button>
        ))}
      </div>

      {/* Timeline */}
      <div style={{ position: "relative" }}>
        {/* Vertical line */}
        <div style={{ position: "absolute", left: 19, top: 0, bottom: 0, width: 2, background: "linear-gradient(180deg, #DBEAFE, #EDE9FE, transparent)", borderRadius: 999 }} />

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {filtered.map(entry => {
            const meta = TYPE_META[entry.type];
            return (
              <div key={entry.id} style={{ display: "flex", gap: 18, alignItems: "flex-start" }}>
                {/* Emoji bubble */}
                <div style={{ width: 40, height: 40, borderRadius: "50%", background: "white", border: `2px solid ${meta.color}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0, zIndex: 1, boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
                  {entry.emoji}
                </div>

                {/* Card */}
                <div style={{ flex: 1, background: "white", border: "1px solid #E2E8F0", borderRadius: 14, padding: "18px 20px", transition: "all 0.2s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 20px rgba(0,0,0,0.07)"; (e.currentTarget as HTMLElement).style.borderColor = "#DBEAFE"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; (e.currentTarget as HTMLElement).style.borderColor = "#E2E8F0"; }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <h3 style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 15, color: "#0F172A" }}>{entry.title}</h3>
                      <span style={{ background: meta.color, color: meta.tc, padding: "2px 8px", borderRadius: 999, fontSize: 11, fontWeight: 700 }}>{meta.label}</span>
                    </div>
                    <span style={{ fontSize: 12, color: "#94A3B8", whiteSpace: "nowrap", marginLeft: 12 }}>{entry.date}</span>
                  </div>
                  <p style={{ fontSize: 13.5, color: "#475569", lineHeight: 1.65, marginBottom: 14 }}>{entry.body}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <button onClick={() => toggleLike(entry.id)} style={{ display: "flex", alignItems: "center", gap: 5, background: "none", border: "none", cursor: "pointer", color: entry.liked ? "#E11D48" : "#94A3B8", fontSize: 13, fontWeight: 600, padding: 0, transition: "all 0.15s" }}>
                      <Heart size={14} fill={entry.liked ? "#E11D48" : "none"} strokeWidth={entry.liked ? 0 : 1.5} />
                      {entry.likes}
                    </button>
                    <button style={{ display: "flex", alignItems: "center", gap: 5, background: "none", border: "none", cursor: "pointer", color: "#94A3B8", fontSize: 13, fontWeight: 600, padding: 0, transition: "color 0.15s" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "#2563EB")}
                      onMouseLeave={e => (e.currentTarget.style.color = "#94A3B8")}>
                      <Share2 size={13} /> Share
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div style={{ textAlign: "center", padding: "60px 24px" }}>
          <div style={{ fontSize: 36, marginBottom: 12 }}>✦</div>
          <p style={{ fontFamily: "Sora, sans-serif", fontWeight: 600, fontSize: 15, color: "#0F172A" }}>Nothing here yet</p>
          <p style={{ fontSize: 13, color: "#94A3B8", marginTop: 4 }}>Start documenting your journey.</p>
        </div>
      )}

      {/* Add modal */}
      {showAdd && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(15,23,42,0.5)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100, backdropFilter: "blur(6px)" }}>
          <div style={{ background: "white", borderRadius: 20, padding: "32px", width: "100%", maxWidth: 460, boxShadow: "0 28px 80px rgba(0,0,0,0.22)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
              <h3 style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 18, color: "#0F172A" }}>Add to wall</h3>
              <button onClick={() => setShowAdd(false)} style={{ background: "none", border: "none", cursor: "pointer", color: "#94A3B8" }}><X size={18} /></button>
            </div>

            {/* Type selector */}
            <div style={{ marginBottom: 16 }}>
              <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 8 }}>Type</label>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
                {Object.entries(TYPE_META).map(([k, v]) => (
                  <button key={k} onClick={() => setForm(p => ({ ...p, type: k }))}
                    style={{ padding: "10px 8px", borderRadius: 9, border: `2px solid ${form.type === k ? v.tc : "#E2E8F0"}`, background: form.type === k ? v.bg : "white", color: form.type === k ? v.tc : "#64748B", fontSize: 13, fontWeight: 700, cursor: "pointer", transition: "all 0.15s" }}>
                    {v.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Emoji picker */}
            <div style={{ marginBottom: 16 }}>
              <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 8 }}>Emoji</label>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {["✦","⭐","🚀","💡","🐛","🎯","💸","🌙","✅","⚡","🔧","🎉"].map(e => (
                  <button key={e} onClick={() => setForm(p => ({ ...p, emoji: e }))}
                    style={{ width: 36, height: 36, borderRadius: 8, border: `2px solid ${form.emoji === e ? "#2563EB" : "#E2E8F0"}`, background: form.emoji === e ? "#EFF6FF" : "white", fontSize: 18, cursor: "pointer", transition: "all 0.15s" }}>
                    {e}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: 14 }}>
              <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 6 }}>Title *</label>
              <input value={form.title} onChange={e => setForm(p => ({ ...p, title: e.target.value }))} placeholder="What happened?"
                style={{ width: "100%", padding: "10px 14px", border: "1.5px solid #E2E8F0", borderRadius: 9, fontSize: 14, outline: "none", boxSizing: "border-box" }}
                onFocus={e => (e.target.style.borderColor = "#E11D48")}
                onBlur={e => (e.target.style.borderColor = "#E2E8F0")} />
            </div>
            <div style={{ marginBottom: 20 }}>
              <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 6 }}>Story</label>
              <textarea value={form.body} onChange={e => setForm(p => ({ ...p, body: e.target.value }))} placeholder="Tell the story. The messy, real version."
                rows={3}
                style={{ width: "100%", padding: "10px 14px", border: "1.5px solid #E2E8F0", borderRadius: 9, fontSize: 14, outline: "none", boxSizing: "border-box", resize: "vertical", fontFamily: "Inter, sans-serif" }}
                onFocus={e => (e.target.style.borderColor = "#E11D48")}
                onBlur={e => (e.target.style.borderColor = "#E2E8F0")} />
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              <button onClick={() => setShowAdd(false)} style={{ flex: 1, padding: "11px", border: "1.5px solid #E2E8F0", borderRadius: 9, background: "white", fontSize: 14, fontWeight: 600, color: "#64748B", cursor: "pointer" }}>Cancel</button>
              <button onClick={add} style={{ flex: 1, padding: "11px", border: "none", borderRadius: 9, background: "#E11D48", color: "white", fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "Sora, sans-serif" }}>Add to wall</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
