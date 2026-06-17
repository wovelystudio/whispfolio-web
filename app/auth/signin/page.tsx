"use client";
import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff, ArrowRight } from "lucide-react";

export default function SignInPage() {
  const [showPw, setShowPw] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });

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
          No account?{" "}
          <Link href="/auth/signup" style={{ color: "#2563EB", fontWeight: 600, textDecoration: "none" }}>Sign up</Link>
        </span>
      </div>

      {/* Card */}
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }}>
        <div style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 20, padding: "40px 36px", width: "100%", maxWidth: 420, boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
          <h1 style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 26, color: "#0F172A", marginBottom: 6, letterSpacing: "-0.02em" }}>
            Welcome back
          </h1>
          <p style={{ fontSize: 14, color: "#64748B", marginBottom: 28 }}>Sign in to your Wispfolio account</p>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div>
              <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 6 }}>Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                style={{
                  width: "100%",
                  padding: "10px 14px",
                  border: "1.5px solid #E2E8F0",
                  borderRadius: 8,
                  fontSize: 14,
                  color: "#0F172A",
                  outline: "none",
                  transition: "border-color 0.15s",
                  boxSizing: "border-box",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#2563EB")}
                onBlur={(e) => (e.target.style.borderColor = "#E2E8F0")}
              />
            </div>

            <div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                <label style={{ fontSize: 13, fontWeight: 600, color: "#374151" }}>Password</label>
                <Link href="#" style={{ fontSize: 13, color: "#2563EB", textDecoration: "none", fontWeight: 500 }}>Forgot password?</Link>
              </div>
              <div style={{ position: "relative" }}>
                <input
                  type={showPw ? "text" : "password"}
                  placeholder="••••••••"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "10px 40px 10px 14px",
                    border: "1.5px solid #E2E8F0",
                    borderRadius: 8,
                    fontSize: 14,
                    color: "#0F172A",
                    outline: "none",
                    transition: "border-color 0.15s",
                    boxSizing: "border-box",
                  }}
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
            </div>

            <Link
              href="/feed"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                padding: "12px",
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
              Sign in <ArrowRight size={15} />
            </Link>
          </div>

          <div style={{ margin: "24px 0", display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ flex: 1, height: 1, background: "#E2E8F0" }} />
            <span style={{ fontSize: 13, color: "#94A3B8" }}>or continue with</span>
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
                  padding: "11px",
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
        </div>
      </div>
    </div>
  );
}
