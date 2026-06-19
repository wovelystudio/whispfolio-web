"use client";
import { useState } from "react";
import { Plus, X, Lightbulb, ExternalLink, Bookmark, Search, Grid, List } from "lucide-react";

const INIT = [
  { id: 1, title: "Linear's onboarding design", url: "https://linear.app", tags: ["UX", "Onboarding"], note: "Love how they handle empty states — so intentional.", color: "#DBEAFE", saved: true },
  { id: 2, title: "Stripe's documentation", url: "https://stripe.com/docs", tags: ["Docs", "Design System"], note: "The sidebar nav is perfect. Study this more.", color: "#EDE9FE", saved: false },
  { id: 3, title: "Figma auto-layout deep dive", url: "#", tags: ["Figma", "Layout"], note: "Great techniques for responsive frames", color: "#FEF9C3", saved: true },
  { id: 4, title: "Notion's pricing page", url: "#", tags: ["Pricing", "Copy"], note: "Simple toggle, clear value prop. The annual discount nudge works.", color: "#DCFCE7", saved: false },
  { id: 5, title: "Lottie animations in React", url: "#", tags: ["Animation", "React"], note: "Could use this for onboarding", color: "#FFE4E6", saved: false },
  { id: 6, title: "Typefully's editor UX", url: "#", tags: ["UX", "Writing"], note: "Minimal distraction writing. Apply to our update composer.", color: "#E0F2FE", saved: true },
];

const ALL_TAGS = ["All", "UX", "Design", "Docs", "Copy", "Figma", "Animation", "React"];

export default function InspirationPage() {
  const [items, setItems] = useState(INIT);
  const [showAdd, setShowAdd] = useState(false);
  const [activeTag, setActiveTag] = useState("All");
  const [search, setSearch] = useState("");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [form, setForm] = useState({ title: "", url: "", note: "", tags: "" });

  function add() {
    if (!form.title.trim()) return;
    const COLORS = ["#DBEAFE", "#EDE9FE", "#FEF9C3", "#DCFCE7", "#FFE4E6", "#E0F2FE"];
    setItems(prev => [...prev, {
      id: Date.now(), title: form.title, url: form.url, note: form.note,
      tags: form.tags.split(",").map(t => t.trim()).filter(Boolean),
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      saved: false,
    }]);
    setForm({ title: "", url: "", note: "", tags: "" });
    setShowAdd(false);
  }

  const filtered = items.filter(item =>
    (activeTag === "All" || item.tags.includes(activeTag)) &&
    (item.title.toLowerCase().includes(search.toLowerCase()) || item.note.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div style={{ padding: "32px 36px", maxWidth: 1100 }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 28, flexWrap: "wrap", gap: 16 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
            <div style={{ width: 34, height: 34, background: "#FEF9C3", borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Lightbulb size={17} color="#92400E" />
            </div>
            <span style={{ fontSize: 13, fontWeight: 700, color: "#92400E", fontFamily: "Sora, sans-serif" }}>Inspiration Hub</span>
          </div>
          <h1 style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 24, color: "#0F172A", letterSpacing: "-0.02em", marginBottom: 4 }}>
            Your creative fuel
          </h1>
          <p style={{ fontSize: 14, color: "#64748B" }}>
            {items.length} references collected · {items.filter(i => i.saved).length} saved
          </p>
        </div>
        <button onClick={() => setShowAdd(true)} className="btn-primary btn-sm" style={{ display: "flex", alignItems: "center", gap: 6, padding: "10px 18px", background: "#2563EB", color: "white", border: "none", borderRadius: 9, fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "Sora, sans-serif" }}>
          <Plus size={14} /> Add reference
        </button>
      </div>

      {/* Filters */}
      <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 24, flexWrap: "wrap" }}>
        <div style={{ position: "relative", flex: 1, maxWidth: 280 }}>
          <Search size={13} color="#94A3B8" style={{ position: "absolute", left: 11, top: "50%", transform: "translateY(-50%)" }} />
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search references..." style={{ width: "100%", padding: "8px 12px 8px 32px", border: "1.5px solid #E2E8F0", borderRadius: 8, fontSize: 13, outline: "none", background: "white", boxSizing: "border-box" }} />
        </div>
        <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
          {ALL_TAGS.map(t => (
            <button key={t} onClick={() => setActiveTag(t)} style={{
              padding: "6px 13px", borderRadius: 999, border: "1.5px solid", fontSize: 12, fontWeight: 600, cursor: "pointer", transition: "all 0.15s",
              background: activeTag === t ? "#2563EB" : "white",
              borderColor: activeTag === t ? "#2563EB" : "#E2E8F0",
              color: activeTag === t ? "white" : "#64748B",
            }}>
              {t}
            </button>
          ))}
        </div>
        <div style={{ display: "flex", gap: 4, background: "#F1F5F9", borderRadius: 8, padding: 3, marginLeft: "auto" }}>
          {[["grid", Grid], ["list", List]].map(([v, Icon]) => (
            <button key={v as string} onClick={() => setView(v as "grid" | "list")} style={{ padding: "5px 8px", borderRadius: 6, border: "none", cursor: "pointer", background: view === v ? "white" : "transparent", color: view === v ? "#0F172A" : "#94A3B8", boxShadow: view === v ? "0 1px 4px rgba(0,0,0,0.08)" : "none", transition: "all 0.15s" }}>
              <Icon size={14} />
            </button>
          ))}
        </div>
      </div>

      {/* Grid view */}
      {view === "grid" && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: 14 }}>
          {filtered.map(item => (
            <div key={item.id} style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 14, overflow: "hidden", transition: "all 0.2s", cursor: "default" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 28px rgba(0,0,0,0.08)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.borderColor = "#BFDBFE"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; (e.currentTarget as HTMLElement).style.transform = "none"; (e.currentTarget as HTMLElement).style.borderColor = "#E2E8F0"; }}>
              <div style={{ height: 6, background: item.color }} />
              <div style={{ padding: "14px 16px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
                  <h4 style={{ fontWeight: 600, fontSize: 13.5, color: "#0F172A", lineHeight: 1.4, flex: 1 }}>{item.title}</h4>
                  <button onClick={() => setItems(prev => prev.map(i => i.id === item.id ? { ...i, saved: !i.saved } : i))}
                    style={{ background: "none", border: "none", cursor: "pointer", color: item.saved ? "#2563EB" : "#CBD5E1", flexShrink: 0, marginLeft: 8, padding: 2, transition: "color 0.15s" }}>
                    <Bookmark size={14} fill={item.saved ? "#2563EB" : "none"} />
                  </button>
                </div>
                {item.note && <p style={{ fontSize: 12, color: "#64748B", marginBottom: 10, lineHeight: 1.55, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{item.note}</p>}
                <div style={{ display: "flex", gap: 4, flexWrap: "wrap", marginBottom: item.url ? 10 : 0 }}>
                  {item.tags.map(t => (
                    <span key={t} style={{ background: "#F1F5F9", color: "#64748B", padding: "2px 7px", borderRadius: 999, fontSize: 11, fontWeight: 600 }}>{t}</span>
                  ))}
                </div>
                {item.url && (
                  <a href={item.url} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 11.5, color: "#2563EB", textDecoration: "none", fontWeight: 500 }}>
                    <ExternalLink size={10} /> Open link
                  </a>
                )}
              </div>
            </div>
          ))}

          {/* Add card */}
          <div onClick={() => setShowAdd(true)} style={{ border: "2px dashed #E2E8F0", borderRadius: 14, padding: "32px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8, cursor: "pointer", transition: "all 0.15s", minHeight: 140 }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#93C5FD"; (e.currentTarget as HTMLElement).style.background = "#F8FAFF"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#E2E8F0"; (e.currentTarget as HTMLElement).style.background = "transparent"; }}>
            <Plus size={20} color="#94A3B8" />
            <span style={{ fontSize: 12, color: "#94A3B8", fontWeight: 600 }}>Add inspiration</span>
          </div>
        </div>
      )}

      {/* List view */}
      {view === "list" && (
        <div style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 14, overflow: "hidden" }}>
          {filtered.map((item, i) => (
            <div key={item.id} style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 18px", borderBottom: i < filtered.length - 1 ? "1px solid #F8FAFF" : "none", transition: "background 0.1s" }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "#F8FAFF"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "transparent"}>
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: item.color, border: "2px solid white", boxShadow: "0 0 0 1px #E2E8F0", flexShrink: 0 }} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontWeight: 600, fontSize: 14, color: "#0F172A", marginBottom: 2 }}>{item.title}</div>
                {item.note && <div style={{ fontSize: 12, color: "#94A3B8", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{item.note}</div>}
              </div>
              <div style={{ display: "flex", gap: 4 }}>
                {item.tags.map(t => <span key={t} style={{ background: "#F1F5F9", color: "#64748B", padding: "2px 7px", borderRadius: 999, fontSize: 11, fontWeight: 600 }}>{t}</span>)}
              </div>
              <button onClick={() => setItems(prev => prev.map(i2 => i2.id === item.id ? { ...i2, saved: !i2.saved } : i2))}
                style={{ background: "none", border: "none", cursor: "pointer", color: item.saved ? "#2563EB" : "#CBD5E1", padding: 4, transition: "color 0.15s" }}>
                <Bookmark size={14} fill={item.saved ? "#2563EB" : "none"} />
              </button>
              {item.url && (
                <a href={item.url} target="_blank" rel="noopener noreferrer" style={{ color: "#94A3B8", transition: "color 0.15s" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#2563EB"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#94A3B8"}>
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Empty */}
      {filtered.length === 0 && (
        <div style={{ textAlign: "center", padding: "60px 24px", color: "#94A3B8" }}>
          <div style={{ fontSize: 36, marginBottom: 12 }}>✦</div>
          <p style={{ fontWeight: 600, fontSize: 15 }}>Nothing here yet</p>
          <p style={{ fontSize: 13, marginTop: 4 }}>Add your first reference to get started.</p>
        </div>
      )}

      {/* Add modal */}
      {showAdd && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(15,23,42,0.5)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100, backdropFilter: "blur(6px)" }}>
          <div style={{ background: "white", borderRadius: 20, padding: "32px", width: "100%", maxWidth: 440, boxShadow: "0 28px 80px rgba(0,0,0,0.22)", animation: "fadeUp 0.25s ease" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
              <h3 style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 18, color: "#0F172A" }}>Add reference</h3>
              <button onClick={() => setShowAdd(false)} style={{ background: "none", border: "none", cursor: "pointer", color: "#94A3B8", padding: 4 }}><X size={18} /></button>
            </div>
            {[
              { label: "Title *", key: "title", placeholder: "What did you find?" },
              { label: "URL (optional)", key: "url", placeholder: "https://..." },
              { label: "Your note", key: "note", placeholder: "What caught your eye?" },
              { label: "Tags (comma-separated)", key: "tags", placeholder: "Design, UX, Copy" },
            ].map(f => (
              <div key={f.key} style={{ marginBottom: 14 }}>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 6 }}>{f.label}</label>
                <input value={form[f.key as keyof typeof form]} onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
                  placeholder={f.placeholder}
                  style={{ width: "100%", padding: "10px 14px", border: "1.5px solid #E2E8F0", borderRadius: 9, fontSize: 14, outline: "none", boxSizing: "border-box", transition: "border-color 0.15s" }}
                  onFocus={e => (e.target.style.borderColor = "#2563EB")}
                  onBlur={e => (e.target.style.borderColor = "#E2E8F0")} />
              </div>
            ))}
            <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
              <button onClick={() => setShowAdd(false)} style={{ flex: 1, padding: "11px", border: "1.5px solid #E2E8F0", borderRadius: 9, background: "white", fontSize: 14, fontWeight: 600, color: "#64748B", cursor: "pointer" }}>Cancel</button>
              <button onClick={add} style={{ flex: 1, padding: "11px", border: "none", borderRadius: 9, background: "#2563EB", color: "white", fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "Sora, sans-serif" }}>Save reference</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
