"use client";
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import { CheckCircle, Users, Globe, ExternalLink, Share2, Sparkles, Twitter } from "lucide-react";
import Link from "next/link";

const PROJECTS = [
  { id: 1, name: "Mobile App MVP", category: "App", progress: 62, followers: 128, updates: 47, status: "Active" },
  { id: 2, name: "Design System Kit", category: "Design", progress: 85, followers: 64, updates: 22, status: "Active" },
  { id: 3, name: "Open Source CLI", category: "Developer Tool", progress: 40, followers: 312, updates: 89, status: "Active" },
];

const STATS = [
  { label: "Total Followers", val: "234" },
  { label: "Projects", val: "3" },
  { label: "Total Updates", val: "158" },
  { label: "Member since", val: "Jan 2026" },
];

export default function CreatorProfilePage({ params }: { params: { username: string } }) {
  const [following, setFollowing] = useState(false);
  const [shareToast, setShareToast] = useState(false);

  const handleShare = () => {
    setShareToast(true);
    setTimeout(() => setShareToast(false), 2000);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#F8FAFF" }}>
      <Navbar />

      {/* ── Banner ── (no bottom fade — hard edge, avatar overlaps cleanly) */}
      <div style={{
        height: 240,
        background: "linear-gradient(135deg, #0F172A 0%, #1E1B4B 55%, #1E3A8A 100%)",
        marginTop: 66,
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 30% 50%, rgba(37,99,235,0.3), transparent 60%)" }} />
        <div style={{ position: "absolute", top: -60, right: -60, width: 280, height: 280, borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,0.2), transparent 70%)" }} />
        {/* Subtle grid */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      </div>

      <div style={{ maxWidth: 1060, margin: "0 auto", padding: "0 24px" }}>

        {/* ── Profile Header — overlaps banner ── */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginTop: -52, marginBottom: 32, flexWrap: "wrap", gap: 16 }}>

          <div style={{ display: "flex", alignItems: "flex-end", gap: 20 }}>
            {/* Avatar — white border separates it from banner */}
            <div style={{
              width: 100, height: 100, borderRadius: 24,
              background: "linear-gradient(135deg, #2563EB, #7C3AED)",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "white", fontWeight: 900, fontSize: 38,
              border: "5px solid #F8FAFF",      /* matches page bg exactly */
              boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
              flexShrink: 0,
              fontFamily: "Sora, sans-serif",
            }}>S</div>

            <div style={{ paddingBottom: 10 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6, flexWrap: "wrap" }}>
                <h1 style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: "clamp(20px, 4vw, 28px)", color: "#0F172A", letterSpacing: "-0.025em" }}>
                  Sarah Kim
                </h1>
                <div style={{ display: "flex", alignItems: "center", gap: 4, background: "#EDE9FE", padding: "3px 10px", borderRadius: 999 }}>
                  <CheckCircle size={11} color="#7C3AED" fill="#7C3AED" />
                  <span style={{ fontSize: 11, fontWeight: 700, color: "#7C3AED" }}>Verified Creator</span>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
                <span style={{ fontSize: 14, fontWeight: 700, color: "#7C3AED" }}>@sarahbuilds</span>
                <span style={{ fontSize: 13, color: "#64748B", display: "flex", alignItems: "center", gap: 4 }}><Users size={13} /> 234 followers</span>
                <span style={{ fontSize: 13, color: "#64748B", display: "flex", alignItems: "center", gap: 4 }}><Sparkles size={13} color="#2563EB" /> 3 projects</span>
                <span style={{ background: "#DBEAFE", color: "#2563EB", fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 999 }}>Designer</span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div style={{ display: "flex", gap: 10, paddingBottom: 10 }}>
            <button
              onClick={() => setFollowing(!following)}
              style={{
                padding: "10px 22px", borderRadius: 10, fontWeight: 700, fontSize: 14,
                border: `1.5px solid ${following ? "#7C3AED" : "#E2E8F0"}`,
                background: following ? "#EDE9FE" : "white",
                color: following ? "#7C3AED" : "#334155",
                cursor: "pointer", transition: "all 0.15s",
                display: "flex", alignItems: "center", gap: 6,
              }}>
              {following ? <><CheckCircle size={14} /> Following</> : "+ Follow Creator"}
            </button>
            <div style={{ position: "relative" }}>
              <button
                onClick={handleShare}
                style={{ width: 42, height: 42, border: "1.5px solid #E2E8F0", borderRadius: 10, background: "white", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#64748B" }}>
                <Share2 size={16} />
              </button>
              {shareToast && (
                <div style={{ position: "absolute", top: -36, left: "50%", transform: "translateX(-50%)", background: "#0F172A", color: "white", fontSize: 11, fontWeight: 600, padding: "5px 10px", borderRadius: 7, whiteSpace: "nowrap" }}>
                  Link copied!
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ── Main Content ── */}
        <div className="profile-grid" style={{ display: "grid", gridTemplateColumns: "1fr 280px", gap: 28, marginBottom: 64 }}>

          {/* Left column */}
          <div>
            {/* About */}
            <div className="reveal" style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 16, padding: "24px 28px", marginBottom: 24 }}>
              <h2 style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 16, color: "#0F172A", marginBottom: 14 }}>About</h2>
              <p style={{ fontSize: 15, color: "#475569", lineHeight: 1.8 }}>
                UI/UX designer who builds in public. Currently working on a suite of indie products — a mobile habit tracker, a design system, and exploring open source tooling.
                I share every step of the process, from first sketch to final ship.
              </p>
              {/* Links */}
              <div style={{ display: "flex", gap: 14, marginTop: 18, flexWrap: "wrap" }}>
                {[
                  { icon: <Globe size={14} />, label: "sarahbuilds.com" },
                  { icon: <Twitter size={14} />, label: "@sarahbuilds" },
                ].map(l => (
                  <a key={l.label} href="#" style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 600, color: "#2563EB", textDecoration: "none" }}>
                    {l.icon} {l.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Projects */}
            <h2 style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 18, color: "#0F172A", marginBottom: 16 }}>
              Projects <span style={{ fontSize: 14, color: "#94A3B8", fontWeight: 500 }}>({PROJECTS.length})</span>
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {PROJECTS.map((p, idx) => (
                <div key={p.id} className="reveal" style={{ transitionDelay: `${idx * 80}ms` }}>
                  <Link href={`/p/${p.name.toLowerCase().replace(/\s+/g, "-")}`} style={{ textDecoration: "none" }}>
                    <div style={{ background: "white", border: "1.5px solid #E2E8F0", borderRadius: 16, padding: "20px 24px", cursor: "pointer", transition: "all 0.2s" }}
                      onMouseEnter={e => { (e.currentTarget).style.boxShadow = "0 6px 24px rgba(37,99,235,0.1)"; (e.currentTarget).style.borderColor = "#93C5FD"; }}
                      onMouseLeave={e => { (e.currentTarget).style.boxShadow = "none"; (e.currentTarget).style.borderColor = "#E2E8F0"; }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
                        <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
                          <div style={{ width: 44, height: 44, borderRadius: 12, background: "linear-gradient(135deg, #2563EB, #7C3AED)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 800, fontSize: 18, fontFamily: "Sora, sans-serif" }}>
                            {p.name[0]}
                          </div>
                          <div>
                            <div style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 15, color: "#0F172A", marginBottom: 3 }}>{p.name}</div>
                            <div style={{ fontSize: 12, color: "#64748B" }}>{p.category}</div>
                          </div>
                        </div>
                        <span style={{ background: "#DCFCE7", color: "#16A34A", fontSize: 11, fontWeight: 700, padding: "3px 9px", borderRadius: 999 }}>{p.status}</span>
                      </div>
                      <div style={{ display: "flex", gap: 20, fontSize: 13, color: "#64748B", marginBottom: 14 }}>
                        <span><Users size={12} style={{ display: "inline", marginRight: 4 }} />{p.followers} followers</span>
                        <span><Sparkles size={12} style={{ display: "inline", marginRight: 4 }} />{p.updates} updates</span>
                      </div>
                      <div>
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                          <span style={{ fontSize: 12, color: "#94A3B8" }}>Progress</span>
                          <span style={{ fontSize: 12, fontWeight: 700, color: "#2563EB" }}>{p.progress}%</span>
                        </div>
                        <div style={{ height: 6, background: "#F1F5F9", borderRadius: 999 }}>
                          <div style={{ height: "100%", width: `${p.progress}%`, background: "linear-gradient(90deg, #2563EB, #7C3AED)", borderRadius: 999 }} />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — Stats */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {/* Stats card */}
            <div className="reveal" style={{ background: "white", border: "1.5px solid #E2E8F0", borderRadius: 16, padding: "22px 20px" }}>
              <h3 style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 14, color: "#0F172A", marginBottom: 16 }}>Stats</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {STATS.map((s, i) => (
                  <div key={s.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderBottom: i < STATS.length - 1 ? "1px solid #F8FAFF" : "none" }}>
                    <span style={{ fontSize: 13, color: "#64748B" }}>{s.label}</span>
                    <span style={{ fontSize: 13, fontWeight: 700, color: "#0F172A" }}>{s.val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Support card */}
            <div className="reveal" style={{ background: "linear-gradient(135deg, #EFF6FF, #F5F3FF)", border: "1.5px solid #DBEAFE", borderRadius: 16, padding: "22px 20px", textAlign: "center" }}>
              <div style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 15, color: "#0F172A", marginBottom: 8 }}>Follow {PROJECTS.length} projects</div>
              <p style={{ fontSize: 13, color: "#64748B", lineHeight: 1.6, marginBottom: 16 }}>Get updates when Sarah ships new milestones or publishes an update.</p>
              <button
                onClick={() => setFollowing(!following)}
                style={{ width: "100%", padding: "11px", borderRadius: 10, border: "none", background: following ? "#EDE9FE" : "linear-gradient(135deg, #2563EB, #7C3AED)", color: following ? "#7C3AED" : "white", fontWeight: 700, fontSize: 14, cursor: "pointer", fontFamily: "Sora, sans-serif", transition: "all 0.2s" }}>
                {following ? "✓ Following" : "Follow Creator"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
