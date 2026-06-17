"use client";
import { Globe, Copy, ExternalLink, Users, Eye, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function SharePage() {
  return (
    <div style={{ padding: "32px 36px", maxWidth: 1000, margin: "0 auto" }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 40 }}>
        <div>
          <h1 style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 24, color: "#0F172A", marginBottom: 6 }}>Public Share Page</h1>
          <p style={{ fontSize: 14, color: "#64748B" }}>Let the world watch your journey. Your project passport is live.</p>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, background: "#DCFCE7", color: "#16A34A", padding: "6px 14px", borderRadius: 999, fontSize: 13, fontWeight: 600 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#16A34A" }} /> Live
          </div>
          <button className="btn-primary" style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Globe size={16} /> View Public Page
          </button>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 32 }}>
        
        {/* Left: Preview */}
        <div>
          <h3 style={{ fontWeight: 700, fontSize: 15, color: "#0F172A", marginBottom: 16 }}>Page Preview</h3>
          <div style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 24, overflow: "hidden", boxShadow: "0 20px 40px rgba(0,0,0,0.04)" }}>
            {/* Browser Header Fake */}
            <div style={{ background: "#F8FAFF", borderBottom: "1px solid #E2E8F0", padding: "12px 16px", display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ display: "flex", gap: 6 }}>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#E2E8F0" }} />
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#E2E8F0" }} />
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#E2E8F0" }} />
              </div>
              <div style={{ flex: 1, background: "white", border: "1px solid #E2E8F0", borderRadius: 6, padding: "4px 12px", fontSize: 11, color: "#94A3B8", textAlign: "center" }}>
                wispfolio.com/p/wispfolio
              </div>
            </div>

            {/* Content Preview */}
            <div style={{ padding: "40px", textAlign: "center" }}>
              <div style={{ width: 80, height: 80, background: "var(--purple-soft)", borderRadius: 20, margin: "0 auto 24px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: 32 }}>✨</span>
              </div>
              <h2 style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 28, color: "#0F172A", marginBottom: 12 }}>Wispfolio</h2>
              <p style={{ fontSize: 15, color: "#64748B", maxWidth: 400, margin: "0 auto 32px", lineHeight: 1.6 }}>
                A platform that helps creators grow their projects from idea to launch while sharing the journey.
              </p>
              
              <div style={{ display: "flex", gap: 24, justifyContent: "center", marginBottom: 40, borderTop: "1px solid #F1F5F9", borderBottom: "1px solid #F1F5F9", padding: "16px 0" }}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 24, fontWeight: 800, color: "#0F172A" }}>42%</div>
                  <div style={{ fontSize: 12, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 600 }}>Progress</div>
                </div>
                <div style={{ width: 1, background: "#F1F5F9" }} />
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 24, fontWeight: 800, color: "#0F172A" }}>12</div>
                  <div style={{ fontSize: 12, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 600 }}>Updates</div>
                </div>
              </div>

              <div style={{ textAlign: "left", background: "#F8FAFF", padding: "20px", borderRadius: 16, border: "1px solid #E2E8F0" }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: "var(--purple-wisp)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 8, display: "block" }}>Latest Update</span>
                <p style={{ fontSize: 14, color: "#0F172A", lineHeight: 1.6 }}>Just finalized the landing page design. Really happy with how the Wisp personality came through...</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Controls */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          
          {/* Share Link Card */}
          <div style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 16, padding: "20px" }}>
            <h3 style={{ fontWeight: 700, fontSize: 15, color: "#0F172A", marginBottom: 12 }}>Share Link</h3>
            <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
              <input 
                readOnly 
                value="https://wispfolio.com/p/wispfolio" 
                style={{ flex: 1, padding: "10px 14px", background: "#F8FAFF", border: "1px solid #E2E8F0", borderRadius: 8, fontSize: 13, color: "#475569" }}
              />
              <button style={{ padding: "0 14px", background: "white", border: "1px solid #E2E8F0", borderRadius: 8, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#0F172A", transition: "all 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#F8FAFF")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "white")}
              >
                <Copy size={16} />
              </button>
            </div>
            <div style={{ fontSize: 13, color: "#64748B", display: "flex", alignItems: "center", gap: 6 }}>
              <ExternalLink size={14} /> Anyone with the link can view
            </div>
          </div>

          {/* Stats Card */}
          <div style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 16, padding: "20px" }}>
            <h3 style={{ fontWeight: 700, fontSize: 15, color: "#0F172A", marginBottom: 20 }}>Page Stats</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 32, height: 32, background: "var(--purple-soft)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Eye size={16} color="var(--purple-wisp)" />
                  </div>
                  <span style={{ fontSize: 14, color: "#475569", fontWeight: 500 }}>Total Views</span>
                </div>
                <span style={{ fontSize: 16, fontWeight: 700, color: "#0F172A" }}>1,248</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 32, height: 32, background: "#EFF6FF", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Users size={16} color="#2563EB" />
                  </div>
                  <span style={{ fontSize: 14, color: "#475569", fontWeight: 500 }}>Followers</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontSize: 12, color: "#16A34A", display: "flex", alignItems: "center" }}><ArrowUpRight size={12} /> +12</span>
                  <span style={{ fontSize: 16, fontWeight: 700, color: "#0F172A" }}>342</span>
                </div>
              </div>
            </div>
          </div>

          {/* Settings Nav */}
          <div style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 16, padding: "8px" }}>
            <Link href="/creator/settings" style={{ display: "block", padding: "12px", fontSize: 14, fontWeight: 600, color: "#0F172A", textDecoration: "none", borderRadius: 8, transition: "background 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#F8FAFF")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            >
              Customize Page Appearance
            </Link>
            <Link href="/creator/settings" style={{ display: "block", padding: "12px", fontSize: 14, fontWeight: 600, color: "#0F172A", textDecoration: "none", borderRadius: 8, transition: "background 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#F8FAFF")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            >
              Setup Custom Domain
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
