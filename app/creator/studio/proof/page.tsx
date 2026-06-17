"use client";
import { useState } from "react";
import { PenSquare, Image as ImageIcon, Sparkles, Pin } from "lucide-react";

const UPDATES = [
  { 
    id: 1, 
    date: "Today, 10:45 AM", 
    type: "milestone", 
    content: "Just finalized the landing page design. Really happy with how the Wisp personality came through. It feels much more emotional and less like a standard SaaS now.",
    image: null,
    tags: ["design", "milestone"]
  },
  { 
    id: 2, 
    date: "Yesterday, 3:20 PM", 
    type: "update", 
    content: "Spent 4 hours fighting with CSS animations for the hero section. Note to self: always use absolute positioning for particle effects.",
    image: null,
    tags: ["dev", "learning"]
  },
  { 
    id: 3, 
    date: "June 14, 2026", 
    type: "update", 
    content: "First wireframes are complete. Keeping it simple. Six main tools, one dashboard.",
    image: true,
    tags: ["wireframe"]
  }
];

export default function ProofWallPage() {
  const [newUpdate, setNewUpdate] = useState("");

  return (
    <div style={{ padding: "32px 36px", maxWidth: 800, margin: "0 auto" }}>
      {/* Header */}
      <div style={{ marginBottom: 32 }}>
        <h1 style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 24, color: "#0F172A", marginBottom: 6 }}>Proof Wall</h1>
        <p style={{ fontSize: 14, color: "#64748B" }}>Document the messy middle. Your journey log.</p>
      </div>

      {/* Input Form */}
      <div style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 16, padding: "20px", marginBottom: 40, boxShadow: "0 12px 30px rgba(0,0,0,0.02)" }}>
        <textarea 
          placeholder="What did you build today? Even the small wins count..." 
          value={newUpdate}
          onChange={(e) => setNewUpdate(e.target.value)}
          style={{ width: "100%", height: 100, border: "none", outline: "none", fontSize: 15, color: "#0F172A", resize: "none", marginBottom: 16, background: "transparent" }}
        />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #F1F5F9", paddingTop: 16 }}>
          <div style={{ display: "flex", gap: 12 }}>
            <button style={{ background: "var(--purple-soft)", border: "none", width: 36, height: 36, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "var(--purple-wisp)" }}>
              <ImageIcon size={18} />
            </button>
            <button style={{ background: "#F1F5F9", border: "none", width: 36, height: 36, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#64748B" }}>
              <Pin size={18} />
            </button>
          </div>
          <button className="btn-primary" style={{ padding: "8px 20px", display: "flex", alignItems: "center", gap: 8 }}>
            <PenSquare size={16} /> Post Update
          </button>
        </div>
      </div>

      {/* Timeline */}
      <div style={{ position: "relative" }}>
        {/* Vertical Line */}
        <div style={{ position: "absolute", left: 24, top: 0, bottom: 0, width: 2, background: "linear-gradient(to bottom, var(--purple-wisp), #E2E8F0 20%)", zIndex: 1 }} />

        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {UPDATES.map((update, i) => (
            <div key={update.id} style={{ display: "flex", gap: 24, position: "relative", zIndex: 2 }}>
              
              {/* Timeline Dot */}
              <div style={{ width: 48, height: 48, borderRadius: "50%", background: update.type === "milestone" ? "var(--purple-soft)" : "white", border: update.type === "milestone" ? "2px solid var(--purple-wisp)" : "2px solid #E2E8F0", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                {update.type === "milestone" ? <Sparkles size={20} color="var(--purple-wisp)" /> : <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#CBD5E1" }} />}
              </div>

              {/* Card */}
              <div style={{ flex: 1, background: "white", border: "1px solid #E2E8F0", borderRadius: 16, padding: "24px", transition: "all 0.2s ease" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px var(--purple-glow)";
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--purple-soft)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLElement).style.borderColor = "#E2E8F0";
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                  <span style={{ fontSize: 13, color: "#64748B", fontWeight: 500 }}>{update.date}</span>
                  {update.type === "milestone" && (
                    <span style={{ padding: "4px 10px", background: "var(--purple-wisp)", color: "white", borderRadius: 6, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>Milestone</span>
                  )}
                </div>
                
                <p style={{ fontSize: 15, color: "#0F172A", lineHeight: 1.7, marginBottom: update.image ? 16 : 20 }}>
                  {update.content}
                </p>

                {update.image && (
                  <div style={{ width: "100%", height: 200, background: "#F1F5F9", borderRadius: 12, border: "1px dashed #CBD5E1", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                    <ImageIcon size={32} color="#94A3B8" />
                  </div>
                )}

                <div style={{ display: "flex", gap: 8 }}>
                  {update.tags.map(tag => (
                    <span key={tag} style={{ padding: "4px 10px", background: "#F8FAFF", border: "1px solid #E2E8F0", color: "#64748B", borderRadius: 6, fontSize: 12, fontWeight: 500 }}>
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
