"use client";
import { useState } from "react";
import { Search, Plus, Filter, ExternalLink, Image as ImageIcon, Heart } from "lucide-react";

const INSPIRATION = [
  { id: 1, title: "Stripe Landing Page", category: "Design", type: "Website", tags: ["gradients", "clean"], color: "#DBEAFE" },
  { id: 2, title: "Vercel Dashboard UI", category: "Code", type: "Component", tags: ["dashboard", "react"], color: "#000000" },
  { id: 3, title: "Arc Browser Onboarding", category: "UX", type: "Flow", tags: ["onboarding", "animations"], color: "#FCE7F3" },
  { id: 4, title: "Notion Marketing Site", category: "Marketing", type: "Copywriting", tags: ["clear", "product"], color: "#FEF3C7" },
  { id: 5, title: "Linear App Interface", category: "Design", type: "App", tags: ["dark mode", "productivity"], color: "#581C87" },
  { id: 6, title: "Framer Motion Docs", category: "Code", type: "Library", tags: ["animations", "docs"], color: "#E0E7FF" }
];

export default function InspirationHubPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Design", "Code", "Marketing", "UX", "Similar Projects"];

  return (
    <div style={{ padding: "32px 36px", maxWidth: 1200 }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
        <div>
          <h1 style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 24, color: "#0F172A", marginBottom: 6 }}>Inspiration Hub</h1>
          <p style={{ fontSize: 14, color: "#64748B" }}>Gather your spark. Save references and ideas for your project.</p>
        </div>
        <button className="btn-primary" style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Plus size={16} /> Add Inspiration
        </button>
      </div>

      {/* Main Content Area */}
      <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 32 }}>
        
        {/* Sidebar Categories */}
        <div>
          <h3 style={{ fontSize: 12, fontWeight: 700, color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 12 }}>Categories</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {categories.map(c => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                style={{
                  textAlign: "left",
                  padding: "8px 12px",
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: activeCategory === c ? 600 : 500,
                  color: activeCategory === c ? "var(--purple-wisp)" : "#475569",
                  background: activeCategory === c ? "var(--purple-soft)" : "transparent",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.2s ease"
                }}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div>
          {/* Top Bar */}
          <div style={{ display: "flex", gap: 16, marginBottom: 24 }}>
            <div style={{ position: "relative", flex: 1 }}>
              <Search size={16} color="#94A3B8" style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)" }} />
              <input 
                placeholder="Search your saved inspiration..." 
                style={{ width: "100%", padding: "10px 14px 10px 36px", border: "1px solid #E2E8F0", borderRadius: 8, fontSize: 14, outline: "none" }}
              />
            </div>
            <button style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 16px", border: "1px solid #E2E8F0", borderRadius: 8, background: "white", cursor: "pointer", color: "#475569", fontSize: 14, fontWeight: 500 }}>
              <Filter size={16} /> Filter
            </button>
          </div>

          {/* Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 24 }}>
            {INSPIRATION.filter(i => activeCategory === "All" || i.category === activeCategory).map(item => (
              <div key={item.id} style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 16, overflow: "hidden", transition: "all 0.2s ease", cursor: "pointer" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 30px var(--purple-glow)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                {/* Image Placeholder */}
                <div style={{ height: 160, background: item.color, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                  <ImageIcon size={32} color="rgba(255,255,255,0.5)" />
                  <div style={{ position: "absolute", top: 12, right: 12, background: "rgba(0,0,0,0.3)", backdropFilter: "blur(4px)", padding: "4px 10px", borderRadius: 999, display: "flex", alignItems: "center", gap: 6 }}>
                    <ExternalLink size={12} color="white" />
                  </div>
                </div>

                <div style={{ padding: "16px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                    <h3 style={{ fontWeight: 600, fontSize: 15, color: "#0F172A", lineHeight: 1.4 }}>{item.title}</h3>
                    <button style={{ background: "none", border: "none", cursor: "pointer", color: "#94A3B8" }}><Heart size={16} /></button>
                  </div>
                  
                  <div style={{ fontSize: 13, color: "#64748B", marginBottom: 12 }}>
                    {item.type}
                  </div>

                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    <span style={{ padding: "2px 8px", background: "#F1F5F9", color: "#475569", borderRadius: 6, fontSize: 11, fontWeight: 500 }}>
                      {item.category}
                    </span>
                    {item.tags.map(tag => (
                      <span key={tag} style={{ padding: "2px 8px", background: "var(--purple-soft)", color: "var(--purple-wisp)", borderRadius: 6, fontSize: 11, fontWeight: 500 }}>
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
    </div>
  );
}
