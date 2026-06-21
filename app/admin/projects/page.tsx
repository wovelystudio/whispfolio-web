"use client";
import { useState } from "react";
import { Search, FolderOpen, Users, Globe, MoreVertical, Filter, Plus } from "lucide-react";
import Link from "next/link";

const PROJECTS = [
  { id: 1, name: "Mobile App MVP", creator: "@sarahbuilds", category: "App", status: "Active", followers: 128, updates: 47, created: "Jan 12, 2026", visibility: "Public" },
  { id: 2, name: "Design System Kit", creator: "@mike_dev", category: "Design", status: "Active", followers: 64, updates: 22, created: "Feb 3, 2026", visibility: "Public" },
  { id: 3, name: "Open Source CLI", creator: "@priyaux", category: "Developer", status: "Active", followers: 312, updates: 89, created: "Dec 5, 2025", visibility: "Public" },
  { id: 4, name: "Indie Game — Lumos", creator: "@anna_f", category: "Game", status: "Archived", followers: 88, updates: 14, created: "Nov 1, 2025", visibility: "Public" },
  { id: 5, name: "Portfolio Redesign", creator: "@sarahbuilds", category: "Design", status: "Active", followers: 34, updates: 8, created: "Mar 1, 2026", visibility: "Private" },
];

export default function AdminProjectsPage() {
  const [search, setSearch] = useState("");

  const filtered = PROJECTS.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.creator.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "32px 36px" }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 28, flexWrap: "wrap", gap: 12 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 8 }}>
            <FolderOpen size={14} color="#94A3B8" />
            <span style={{ fontSize: 12, fontWeight: 700, color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.06em" }}>Admin Panel</span>
          </div>
          <h1 style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 24, color: "#0F172A", letterSpacing: "-0.02em", marginBottom: 4 }}>Projects</h1>
          <p style={{ fontSize: 14, color: "#64748B" }}>All projects on the platform — {PROJECTS.length} total</p>
        </div>
      </div>

      {/* Stats Row */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14, marginBottom: 28 }}>
        {[
          { label: "Total Projects", val: "5", color: "#DBEAFE", ic: "#2563EB" },
          { label: "Active Projects", val: "4", color: "#EDE9FE", ic: "#7C3AED" },
          { label: "Public", val: "4", color: "#E0E7FF", ic: "#4F46E5" },
          { label: "Private", val: "1", color: "#F3E8FF", ic: "#9333EA" },
        ].map(s => (
          <div key={s.label} style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 12, padding: "18px 16px" }}>
            <div style={{ width: 32, height: 32, background: s.color, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
              <FolderOpen size={15} color={s.ic} />
            </div>
            <div style={{ fontFamily: "Sora, sans-serif", fontWeight: 900, fontSize: 26, color: "#0F172A", letterSpacing: "-0.03em", marginBottom: 2 }}>{s.val}</div>
            <div style={{ fontSize: 12, fontWeight: 600, color: "#64748B" }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Search + Filter */}
      <div style={{ display: "flex", gap: 12, marginBottom: 20 }}>
        <div style={{ position: "relative", flex: 1, maxWidth: 360 }}>
          <Search size={15} color="#94A3B8" style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)" }} />
          <input
            className="input"
            placeholder="Search projects or creators..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{ paddingLeft: 36 }}
          />
        </div>
        <button style={{ display: "flex", alignItems: "center", gap: 7, padding: "0 16px", height: 42, border: "1.5px solid #E2E8F0", borderRadius: 9, background: "white", cursor: "pointer", fontSize: 13, fontWeight: 600, color: "#475569" }}>
          <Filter size={14} /> Filter
        </button>
      </div>

      {/* Table */}
      <div style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 14, overflow: "hidden" }}>
        <table className="data-table">
          <thead>
            <tr>
              <th>Project</th>
              <th>Creator</th>
              <th>Category</th>
              <th>Status</th>
              <th>Followers</th>
              <th>Updates</th>
              <th>Created</th>
              <th>Visibility</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(p => (
              <tr key={p.id}>
                <td>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 32, height: 32, borderRadius: 8, background: "#EDE9FE", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <FolderOpen size={15} color="#7C3AED" />
                    </div>
                    <span style={{ fontWeight: 600, color: "#0F172A" }}>{p.name}</span>
                  </div>
                </td>
                <td>
                  <span style={{ color: "#7C3AED", fontWeight: 600 }}>{p.creator}</span>
                </td>
                <td>
                  <span style={{ background: "#EDE9FE", color: "#7C3AED", padding: "3px 10px", borderRadius: 999, fontSize: 12, fontWeight: 600 }}>{p.category}</span>
                </td>
                <td>
                  <span style={{ background: p.status === "Active" ? "#DBEAFE" : "#F1F5F9", color: p.status === "Active" ? "#2563EB" : "#64748B", padding: "3px 10px", borderRadius: 999, fontSize: 12, fontWeight: 600 }}>{p.status}</span>
                </td>
                <td>
                  <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                    <Users size={13} color="#94A3B8" />
                    <span>{p.followers}</span>
                  </div>
                </td>
                <td>{p.updates}</td>
                <td style={{ color: "#64748B" }}>{p.created}</td>
                <td>
                  <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                    {p.visibility === "Public" ? <Globe size={13} color="#2563EB" /> : <span style={{ fontSize: 13 }}>🔒</span>}
                    <span style={{ fontSize: 13, color: p.visibility === "Public" ? "#2563EB" : "#64748B" }}>{p.visibility}</span>
                  </div>
                </td>
                <td>
                  <button style={{ background: "none", border: "none", cursor: "pointer", color: "#94A3B8", padding: 4 }}>
                    <MoreVertical size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
