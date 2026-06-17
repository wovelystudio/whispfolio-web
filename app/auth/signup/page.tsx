"use client";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function SignUpPage() {
  const [role, setRole] = useState("creator");

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#FFFFFF" }}>
      
      {/* Left Branding Panel */}
      <div style={{ flex: 1, background: "linear-gradient(135deg, #0F172A 0%, #1E1B4B 100%)", padding: "60px 40px", display: "flex", flexDirection: "column", justifyContent: "space-between", color: "white", position: "relative", overflow: "hidden" }} className="hidden-mobile">
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 600, height: 600, background: "radial-gradient(circle, var(--purple-wisp) 0%, transparent 70%)", opacity: 0.15, filter: "blur(60px)" }} className="animate-wisp-glow" />
        
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", zIndex: 2 }}>
          <div style={{ width: 32, height: 32, background: "var(--purple-wisp)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3 9C3 5.686 5.686 3 9 3s6 2.686 6 6-2.686 6-6 6S3 12.314 3 9z" stroke="white" strokeWidth="1.5"/>
              <path d="M9 6v6M6 9h6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <span style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 20, color: "white" }}>Wispfolio</span>
        </Link>

        <div style={{ zIndex: 2, maxWidth: 440 }}>
          <div style={{ width: 48, height: 48, background: "rgba(255,255,255,0.1)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24, backdropFilter: "blur(10px)" }}>
            <Sparkles size={24} color="var(--purple-soft)" />
          </div>
          <h1 style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 40, lineHeight: 1.2, marginBottom: 16 }}>Start your journey today.</h1>
          <p style={{ fontSize: 16, color: "#94A3B8", lineHeight: 1.6 }}>Join thousands of creators who are organizing their ideas and building in public.</p>
        </div>

        <div style={{ zIndex: 2 }}>
          <p style={{ fontSize: 13, color: "#64748B" }}>© 2026 Wispfolio. All rights reserved.</p>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .hidden-mobile { display: none !important; }
          }
        `}</style>
      </div>

      {/* Right Form Panel */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "40px", position: "relative" }}>
        
        <Link href="/" className="show-mobile" style={{ display: "none", alignItems: "center", gap: 10, textDecoration: "none", marginBottom: 40 }}>
          <div style={{ width: 32, height: 32, background: "var(--purple-wisp)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3 9C3 5.686 5.686 3 9 3s6 2.686 6 6-2.686 6-6 6S3 12.314 3 9z" stroke="white" strokeWidth="1.5"/>
              <path d="M9 6v6M6 9h6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <span style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 20, color: "#0F172A" }}>Wispfolio</span>
        </Link>

        <div style={{ maxWidth: 440, width: "100%", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 28, color: "#0F172A", marginBottom: 8 }}>Create an account</h2>
          <p style={{ fontSize: 15, color: "#64748B", marginBottom: 32 }}>Let's get you set up to start building.</p>

          <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {["creator", "follower"].map((r) => (
                <div key={r} onClick={() => setRole(r)} style={{ border: role === r ? "2px solid var(--purple-wisp)" : "2px solid #E2E8F0", background: role === r ? "var(--purple-soft)" : "white", padding: "16px", borderRadius: 12, cursor: "pointer", transition: "all 0.2s ease" }}>
                  <div style={{ fontWeight: 600, fontSize: 15, color: "#0F172A", marginBottom: 4, textTransform: "capitalize" }}>{r}</div>
                  <div style={{ fontSize: 13, color: "#64748B" }}>{r === "creator" ? "I want to build projects" : "I want to follow projects"}</div>
                </div>
              ))}
            </div>

            <div>
              <label style={{ display: "block", fontSize: 14, fontWeight: 600, color: "#0F172A", marginBottom: 8 }}>Name</label>
              <input type="text" placeholder="Alex Doe" style={{ width: "100%", padding: "12px 16px", border: "1px solid #E2E8F0", borderRadius: 10, fontSize: 15, outline: "none", transition: "border-color 0.2s" }} onFocus={(e) => e.target.style.borderColor = "var(--purple-wisp)"} onBlur={(e) => e.target.style.borderColor = "#E2E8F0"} />
            </div>

            <div>
              <label style={{ display: "block", fontSize: 14, fontWeight: 600, color: "#0F172A", marginBottom: 8 }}>Email</label>
              <input type="email" placeholder="you@example.com" style={{ width: "100%", padding: "12px 16px", border: "1px solid #E2E8F0", borderRadius: 10, fontSize: 15, outline: "none", transition: "border-color 0.2s" }} onFocus={(e) => e.target.style.borderColor = "var(--purple-wisp)"} onBlur={(e) => e.target.style.borderColor = "#E2E8F0"} />
            </div>

            <div>
              <label style={{ display: "block", fontSize: 14, fontWeight: 600, color: "#0F172A", marginBottom: 8 }}>Password</label>
              <input type="password" placeholder="Create a strong password" style={{ width: "100%", padding: "12px 16px", border: "1px solid #E2E8F0", borderRadius: 10, fontSize: 15, outline: "none", transition: "border-color 0.2s" }} onFocus={(e) => e.target.style.borderColor = "var(--purple-wisp)"} onBlur={(e) => e.target.style.borderColor = "#E2E8F0"} />
            </div>

            <button className="btn-primary" style={{ width: "100%", padding: "14px", fontSize: 15, display: "flex", justifyContent: "center", alignItems: "center", gap: 8, marginTop: 8 }}>
              Create account <ArrowRight size={16} />
            </button>
          </form>

          <div style={{ marginTop: 32, textAlign: "center", fontSize: 14, color: "#64748B" }}>
            Already have an account? <Link href="/auth/signin" style={{ fontWeight: 600, color: "var(--purple-wisp)", textDecoration: "none" }}>Sign in</Link>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .show-mobile { display: flex !important; }
          }
        `}</style>
      </div>

    </div>
  );
}
