"use client";
import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff, ArrowRight, Check, Lightbulb, TrendingUp, Globe, Zap } from "lucide-react";

export default function SignUpPage() {
  const [showPw, setShowPw] = useState(false);
  const [role, setRole] = useState<"user" | "creator">("user");
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const inputStyle = {
    width: "100%",
    padding: "10px 14px",
    border: "1.5px solid #E2E8F0",
    borderRadius: 8,
    fontSize: 14,
    color: "#0F172A",
    outline: "none",
    boxSizing: "border-box" as const,
    transition: "border-color 0.15s",
    background: "white",
  };

  return (
    <div style={{ minHeight: "100vh", background: "#F8FAFF", display: "flex", flexDirection: "column" }}>
      {/* Top bar */}
      <div style={{ padding: "20px 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
          <div style={{ width: 30, height: 30, background: "#2563EB", borderRadius: 7, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
              <path d="M3 9C3 5.686 5.686 3 9 3s6 2.686 6 6-2.686 6-6 6S3 12.314 3 9z" stroke="white" strokeWidth="1.5"/>
              <path d="M9 6v6M6 9h6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <span style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 17, color: "#0F172A" }}>Wispfolio</span>
        </Link>
        <span style={{ fontSize: 14, color: "#64748B" }}>
          Have an account?{" "}
          <Link href="/auth/signin" style={{ color: "#2563EB", fontWeight: 600, textDecoration: "none" }}>Sign in</Link>
        </span>
      </div>

      <div style={{ flex: 1, display: "flex", alignItems: "flex-start", justifyContent: "center", padding: "24px", paddingBottom: 60 }}>
        <div style={{ width: "100%", maxWidth: 480 }}>

          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: 28 }}>
            <h1 style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 28, color: "#0F172A", letterSpacing: "-0.02em", marginBottom: 6 }}>
              Create your account
            </h1>
            <p style={{ fontSize: 14, color: "#64748B" }}>Join thousands of creators building in public</p>
          </div>

          {/* Card */}
          <div style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 20, padding: "32px 28px", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>

            {/* Role toggle */}
            <div style={{ marginBottom: 24 }}>
              <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 10 }}>I want to join as</label>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                {[
                  { val: "user", label: "Follower", sub: "Discover & follow creators", icon: Globe },
                  { val: "creator", label: "Creator", sub: "Build & share projects", icon: Zap },
                ].map((opt) => (
                  <div
                    key={opt.val}
                    onClick={() => setRole(opt.val as "user" | "creator")}
                    style={{
                      padding: "14px 12px",
                      borderRadius: 10,
                      border: `2px solid ${role === opt.val ? "#2563EB" : "#E2E8F0"}`,
                      background: role === opt.val ? "#EFF6FF" : "white",
                      cursor: "pointer",
                      transition: "all 0.15s",
                      textAlign: "center",
                    }}
                  >
                    <div style={{ width: 32, height: 32, background: role === opt.val ? "#DBEAFE" : "#F1F5F9", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 8px" }}>
                      <opt.icon size={16} color={role === opt.val ? "#2563EB" : "#64748B"} />
                    </div>
                    <div style={{ fontWeight: 700, fontSize: 13, color: role === opt.val ? "#1D4ED8" : "#0F172A" }}>{opt.label}</div>
                    <div style={{ fontSize: 11, color: "#94A3B8", marginTop: 2 }}>{opt.sub}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Creator highlight */}
            {role === "creator" && (
              <div style={{ background: "#F0F9FF", border: "1px solid #BAE6FD", borderRadius: 12, padding: "14px 16px", marginBottom: 20 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                  <Zap size={14} color="#0284C7" />
                  <span style={{ fontSize: 13, fontWeight: 700, color: "#0284C7" }}>Creator Studio access included</span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
                  {["Inspiration Hub", "Progress Tracker", "Asset Library", "Proof Wall", "Public Share Page", "Task Checklist"].map((f) => (
                    <div key={f} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <Check size={11} color="#0284C7" strokeWidth={3} />
                      <span style={{ fontSize: 12, color: "#0369A1" }}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Form */}
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 6 }}>Full name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = "#2563EB")}
                  onBlur={(e) => (e.target.style.borderColor = "#E2E8F0")}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 6 }}>Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = "#2563EB")}
                  onBlur={(e) => (e.target.style.borderColor = "#E2E8F0")}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 6 }}>Password</label>
                <div style={{ position: "relative" }}>
                  <input
                    type={showPw ? "text" : "password"}
                    placeholder="At least 8 characters"
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    style={{ ...inputStyle, paddingRight: 40 }}
                    onFocus={(e) => (e.target.style.borderColor = "#2563EB")}
                    onBlur={(e) => (e.target.style.borderColor = "#E2E8F0")}
                  />
                  <button
                    onClick={() => setShowPw(!showPw)}
                    style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "#94A3B8", padding: 0 }}
                  >
                    {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
                <div style={{ marginTop: 6, display: "flex", gap: 4 }}>
                  {[1,2,3,4].map((i) => (
                    <div key={i} style={{ flex: 1, height: 3, borderRadius: 999, background: form.password.length >= i * 2 ? (i <= 2 ? "#F59E0B" : "#16A34A") : "#E2E8F0" }} />
                  ))}
                </div>
              </div>

              <Link
                href={role === "creator" ? "/creator/studio" : "/feed"}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  padding: "13px",
                  background: "#2563EB",
                  color: "white",
                  borderRadius: 9,
                  fontSize: 15,
                  fontWeight: 700,
                  textDecoration: "none",
                  marginTop: 4,
                  transition: "background 0.15s",
                  fontFamily: "Sora, sans-serif",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#1D4ED8")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#2563EB")}
              >
                Create account <ArrowRight size={15} />
              </Link>
            </div>

            <div style={{ margin: "20px 0", display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ flex: 1, height: 1, background: "#E2E8F0" }} />
              <span style={{ fontSize: 13, color: "#94A3B8" }}>or</span>
              <div style={{ flex: 1, height: 1, background: "#E2E8F0" }} />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { label: "Continue with Google", logo: "G" },
                { label: "Continue with GitHub", logo: "GH" },
              ].map((opt) => (
                <button
                  key={opt.label}
                  style={{
                    width: "100%",
                    padding: "10px",
                    border: "1.5px solid #E2E8F0",
                    borderRadius: 8,
                    background: "white",
                    fontSize: 14,
                    fontWeight: 600,
                    color: "#334155",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                    transition: "all 0.15s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#2563EB";
                    (e.currentTarget as HTMLElement).style.background = "#F8FAFF";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#E2E8F0";
                    (e.currentTarget as HTMLElement).style.background = "white";
                  }}
                >
                  <span style={{ width: 20, height: 20, background: "#E2E8F0", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700 }}>{opt.logo}</span>
                  {opt.label}
                </button>
              ))}
            </div>

            <p style={{ marginTop: 20, fontSize: 12, color: "#94A3B8", textAlign: "center", lineHeight: 1.5 }}>
              By creating an account you agree to our{" "}
              <Link href="#" style={{ color: "#2563EB", textDecoration: "none" }}>Terms</Link>{" "}
              and{" "}
              <Link href="#" style={{ color: "#2563EB", textDecoration: "none" }}>Privacy Policy</Link>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
