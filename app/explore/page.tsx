"use client";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import { Search, TrendingUp, Sparkles, Star, Heart, Globe, ArrowRight } from "lucide-react";
import { useState } from "react";

const PROJECTS = [
  { id: 1, title: "Indie SaaS Dashboard", creator: "Sarah Chen", handle: "@sarahbuilds", progress: 71, stage: "Building", tags: ["SaaS", "React", "Design"], color: "#DBEAFE", tc: "#1D4ED8", followers: 128, updates: 24, emoji: "⚡" },
  { id: 2, title: "Open Source CLI Tool", creator: "Marcus Dev", handle: "@marcusdev", progress: 55, stage: "Beta", tags: ["OSS", "Rust", "CLI"], color: "#DCFCE7", tc: "#166534", followers: 542, updates: 67, emoji: "🔧" },
  { id: 3, title: "Design System for Startups", creator: "Priya Design", handle: "@priyaux", progress: 88, stage: "Launching", tags: ["Design", "Figma", "Components"], color: "#EDE9FE", tc: "#7C3AED", followers: 389, updates: 41, emoji: "✦" },
  { id: 4, title: "AI Writing Assistant", creator: "Alex Builds", handle: "@alexbuilds", progress: 32, stage: "Ideation", tags: ["AI", "Python", "Product"], color: "#FEF9C3", tc: "#92400E", followers: 78, updates: 12, emoji: "🤖" },
  { id: 5, title: "Mobile Fitness App", creator: "Jamie Code", handle: "@jamiec", progress: 61, stage: "Building", tags: ["Mobile", "Swift", "Health"], color: "#FFE4E6", tc: "#9F1239", followers: 203, updates: 33, emoji: "🏃" },
  { id: 6, title: "Web3 Portfolio Tracker", creator: "Dev Founder", handle: "@devfounder", progress: 45, stage: "Building", tags: ["Web3", "Next.js", "Finance"], color: "#E0F2FE", tc: "#0369A1", followers: 156, updates: 19, emoji: "◈" },
];

const STAGES = ["All", "Ideation", "Building", "Beta", "Launching", "Launched"];

export default function ExplorePage() {
  const [search, setSearch] = useState("");
  const [stage, setStage] = useState("All");
  const [liked, setLiked] = useState<number[]>([]);

  const filtered = PROJECTS.filter(p =>
    (stage === "All" || p.stage === stage) &&
    (p.title.toLowerCase().includes(search.toLowerCase()) || p.tags.some(t => t.toLowerCase().includes(search.toLowerCase())))
  );

  return (
    <div style={{ minHeight: "100vh", background: "#F8FAFF" }}>
      <Navbar />
      <div style={{ paddingTop: 90 }}>
        {/* Header */}
        <div style={{ background: "white", borderBottom: "1px solid #E2E8F0", padding: "40px 24px 32px" }}>
          <div className="container" style={{ padding: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
              <Globe size={16} color="#2563EB" />
              <span style={{ fontSize: 13, fontWeight: 600, color: "#2563EB" }}>Explore</span>
            </div>
            <h1 className="font-display" style={{ fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 800, color: "#0F172A", letterSpacing: "-0.03em", marginBottom: 10 }}>
              Projects being built in public
            </h1>
            <p style={{ fontSize: 15, color: "#64748B", marginBottom: 28 }}>Follow creators on their journey from idea to launch.</p>

            <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
              <div style={{ position: "relative", flex: 1, maxWidth: 360 }}>
                <Search size={14} color="#94A3B8" style={{ position: "absolute", left: 13, top: "50%", transform: "translateY(-50%)" }} />
                <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search projects, tags..." className="input" style={{ paddingLeft: 36 }} />
              </div>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {STAGES.map(s => (
                  <button key={s} onClick={() => setStage(s)} style={{
                    padding: "8px 14px", borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: "pointer", border: "1.5px solid", transition: "all 0.15s",
                    background: stage === s ? "#2563EB" : "white",
                    borderColor: stage === s ? "#2563EB" : "#E2E8F0",
                    color: stage === s ? "white" : "#64748B",
                  }}>
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="container" style={{ padding: "36px 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
            {filtered.map(p => (
              <div key={p.id} className="card" style={{ padding: 0, overflow: "hidden" }}>
                {/* Card top */}
                <div style={{ background: p.color, padding: "20px 20px 16px", borderBottom: "1px solid #E2E8F0" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                    <div style={{ fontSize: 28, lineHeight: 1 }}>{p.emoji}</div>
                    <span style={{ background: "white", color: p.tc, padding: "3px 10px", borderRadius: 999, fontSize: 11, fontWeight: 700, border: `1px solid ${p.color}` }}>{p.stage}</span>
                  </div>
                  <h3 className="font-display" style={{ fontWeight: 700, fontSize: 16, color: "#0F172A", marginBottom: 4 }}>{p.title}</h3>
                  <p style={{ fontSize: 12, color: "#64748B" }}>by {p.creator} · {p.handle}</p>
                </div>

                <div style={{ padding: "16px 20px" }}>
                  {/* Progress */}
                  <div style={{ marginBottom: 14 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                      <span style={{ fontSize: 12, color: "#64748B", fontWeight: 500 }}>Progress</span>
                      <span style={{ fontSize: 12, fontWeight: 700, color: "#2563EB" }}>{p.progress}%</span>
                    </div>
                    <div style={{ height: 4, background: "#E2E8F0", borderRadius: 999, overflow: "hidden" }}>
                      <div style={{ height: "100%", width: `${p.progress}%`, background: `linear-gradient(90deg, #2563EB, #7C3AED)`, borderRadius: 999, transition: "width 0.3s" }} />
                    </div>
                  </div>

                  {/* Tags */}
                  <div style={{ display: "flex", gap: 5, marginBottom: 14, flexWrap: "wrap" }}>
                    {p.tags.map(t => (
                      <span key={t} style={{ background: "#F1F5F9", color: "#64748B", padding: "2px 8px", borderRadius: 999, fontSize: 11, fontWeight: 600 }}>#{t}</span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", gap: 12 }}>
                      <span style={{ fontSize: 12, color: "#94A3B8" }}>{p.followers} followers</span>
                      <span style={{ fontSize: 12, color: "#94A3B8" }}>{p.updates} updates</span>
                    </div>
                    <button onClick={() => setLiked(liked.includes(p.id) ? liked.filter(x => x !== p.id) : [...liked, p.id])}
                      style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 4, color: liked.includes(p.id) ? "#E11D48" : "#94A3B8", fontSize: 12, fontWeight: 600, transition: "color 0.15s" }}>
                      <Heart size={14} fill={liked.includes(p.id) ? "#E11D48" : "none"} />
                      Follow
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: "center", padding: "80px 24px", color: "#94A3B8" }}>
              <div style={{ fontSize: 40, marginBottom: 16 }}>✦</div>
              <p style={{ fontSize: 16, fontWeight: 600 }}>No projects found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
