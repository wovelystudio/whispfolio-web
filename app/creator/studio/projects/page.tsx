"use client";
import { useState } from "react";
import { Plus, Search, Folder, CheckCircle, Clock } from "lucide-react";
import Link from "next/link";

const PROJECTS = [
  { id: 1, name: "Mobile App MVP", status: "Active", progress: 68, followers: 12, lastUpdated: "2 hours ago", color: "#DBEAFE", tc: "#1D4ED8" },
  { id: 2, name: "Design System", status: "Active", progress: 42, followers: 5, lastUpdated: "Yesterday", color: "#F3E8FF", tc: "#7C3AED" },
  { id: 3, name: "Blog Redesign", status: "Completed", progress: 100, followers: 24, lastUpdated: "1 week ago", color: "#DCFCE7", tc: "#16A34A" },
];

export default function ProjectsPage() {
  const [search, setSearch] = useState("");

  return (
    <div style={{ padding: "32px 36px", maxWidth: 1100 }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
        <div>
          <h1 style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 24, color: "#0F172A", marginBottom: 6 }}>Projects</h1>
          <p style={{ fontSize: 14, color: "#64748B" }}>Manage all your creative endeavors in one place.</p>
        </div>
        <button className="btn-primary" style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Plus size={16} /> New Project
        </button>
      </div>

      {/* Filters & Search */}
      <div style={{ display: "flex", gap: 16, marginBottom: 24 }}>
        <div style={{ position: "relative", flex: 1, maxWidth: 300 }}>
          <Search size={16} color="#94A3B8" style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)" }} />
          <input 
            placeholder="Search projects..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ width: "100%", padding: "10px 14px 10px 36px", border: "1px solid #E2E8F0", borderRadius: 8, fontSize: 14, outline: "none" }}
          />
        </div>
        <select style={{ padding: "10px 14px", border: "1px solid #E2E8F0", borderRadius: 8, fontSize: 14, outline: "none", background: "white", cursor: "pointer", color: "#0F172A" }}>
          <option>All Projects</option>
          <option>Active</option>
          <option>Completed</option>
          <option>Drafts</option>
        </select>
      </div>

      {/* Project Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 20 }}>
        {PROJECTS.map(p => (
          <div key={p.id} style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 16, padding: "20px", display: "flex", flexDirection: "column", transition: "all 0.2s ease" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px var(--purple-glow)";
              (e.currentTarget as HTMLElement).style.borderColor = "var(--purple-soft)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
              (e.currentTarget as HTMLElement).style.borderColor = "#E2E8F0";
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
              <div style={{ width: 48, height: 48, background: p.color, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Folder size={24} color={p.tc} />
              </div>
              <span style={{ padding: "4px 10px", borderRadius: 999, fontSize: 11, fontWeight: 600, background: p.status === "Completed" ? "#DCFCE7" : "#EFF6FF", color: p.status === "Completed" ? "#16A34A" : "#2563EB", display: "flex", alignItems: "center", gap: 4 }}>
                {p.status === "Completed" ? <CheckCircle size={12} /> : <Clock size={12} />}
                {p.status}
              </span>
            </div>
            
            <h3 style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 16, color: "#0F172A", marginBottom: 8 }}>{p.name}</h3>
            
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20, fontSize: 13, color: "#64748B" }}>
              <span>{p.followers} followers</span>
              <span>•</span>
              <span>Updated {p.lastUpdated}</span>
            </div>

            <div style={{ marginTop: "auto" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8, fontSize: 13 }}>
                <span style={{ color: "#475569", fontWeight: 500 }}>Progress</span>
                <span style={{ color: "#0F172A", fontWeight: 600 }}>{p.progress}%</span>
              </div>
              <div style={{ height: 6, background: "#F1F5F9", borderRadius: 999, overflow: "hidden" }}>
                <div style={{ height: "100%", width: `${p.progress}%`, background: p.status === "Completed" ? "#16A34A" : "var(--purple-wisp)", borderRadius: 999 }} />
              </div>
            </div>
          </div>
        ))}

        {/* Create New Card */}
        <div style={{ border: "2px dashed #E2E8F0", borderRadius: 16, padding: "20px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: 200, cursor: "pointer", transition: "all 0.2s ease" }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = "var(--purple-wisp)";
            (e.currentTarget as HTMLElement).style.background = "var(--purple-soft)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = "#E2E8F0";
            (e.currentTarget as HTMLElement).style.background = "transparent";
          }}
        >
          <div style={{ width: 48, height: 48, background: "white", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12, boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}>
            <Plus size={24} color="#64748B" />
          </div>
          <span style={{ fontWeight: 600, color: "#475569" }}>Start a new project</span>
        </div>
      </div>
    </div>
  );
}
