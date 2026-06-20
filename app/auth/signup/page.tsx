"use client";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Check, Sparkles, Users, Zap } from "lucide-react";

export default function SignUpPage() {
  const [role, setRole] = useState<"creator" | "follower">("creator");
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(180deg, #F8FAFF 0%, #FFFFFF 100%)", display: "grid", gridTemplateColumns: "1fr 1fr" }}>
      <section style={{ padding: 48, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: "linear-gradient(135deg, #2563EB, #7C3AED)", display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}>
            <Sparkles size={18} />
          </div>
          <span style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 18, color: "#0F172A" }}>Wispfolio</span>
        </Link>

        <div style={{ maxWidth: 440 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "white", border: "1px solid #DBEAFE", borderRadius: 999, padding: "6px 12px", marginBottom: 24 }}>
            <Zap size={13} color="#7C3AED" />
            <span style={{ fontSize: 12, fontWeight: 800, color: "#7C3AED" }}>Beta creator access</span>
          </div>
          <h1 style={{ fontFamily: "Sora, sans-serif", fontWeight: 900, fontSize: 42, lineHeight: 1.08, letterSpacing: "-0.03em", color: "#0F172A", marginBottom: 16 }}>
            Start free. Grow into richer tools.
          </h1>
          <p style={{ fontSize: 16, color: "#64748B", lineHeight: 1.7 }}>
            Every account can create and publish a project. Paid plans only unlock more projects and advanced tools.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, maxWidth: 420 }}>
          {["Project Passport", "Public share page", "Progress tracker", "Creator feed"].map(item => (
            <div key={item} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#475569" }}>
              <span style={{ width: 20, height: 20, borderRadius: "50%", background: "#EFF6FF", color: "#2563EB", display: "flex", alignItems: "center", justifyContent: "center" }}><Check size={12} /></span>
              {item}
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: 32, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: "100%", maxWidth: 460, background: "white", border: "1px solid #E2E8F0", borderRadius: 20, padding: 34, boxShadow: "0 24px 70px rgba(37,99,235,0.12)" }}>
          <h2 style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 26, color: "#0F172A", marginBottom: 8 }}>Create your account</h2>
          <p style={{ color: "#64748B", fontSize: 14, marginBottom: 24 }}>Choose how you want to begin. You can switch later.</p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 24 }}>
            {[
              { key: "creator", label: "Creator", sub: "Build and publish", icon: Zap },
              { key: "follower", label: "Follower", sub: "Discover projects", icon: Users },
            ].map(option => (
              <button key={option.key} onClick={() => setRole(option.key as typeof role)} style={{ textAlign: "left", padding: 16, borderRadius: 12, border: `2px solid ${role === option.key ? "#2563EB" : "#E2E8F0"}`, background: role === option.key ? "#EFF6FF" : "white", cursor: "pointer" }}>
                <option.icon size={18} color={role === option.key ? "#2563EB" : "#94A3B8"} />
                <div style={{ fontSize: 14, fontWeight: 800, color: "#0F172A", marginTop: 10 }}>{option.label}</div>
                <div style={{ fontSize: 12, color: "#64748B", marginTop: 3 }}>{option.sub}</div>
              </button>
            ))}
          </div>

          <form onSubmit={(e) => e.preventDefault()}>
            <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#334155", marginBottom: 8 }} htmlFor="signup-name">Name</label>
            <input id="signup-name" type="text" className="input" placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} style={{ marginBottom: 16 }} />

            <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#334155", marginBottom: 8 }} htmlFor="signup-email">Email</label>
            <input id="signup-email" type="email" className="input" placeholder="you@example.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} style={{ marginBottom: 16 }} />

            <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#334155", marginBottom: 8 }} htmlFor="signup-password">Password</label>
            <input id="signup-password" type="password" className="input" placeholder="At least 8 characters" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} style={{ marginBottom: 20 }} />

            <Link href={role === "creator" ? "/creator/studio" : "/feed"} className="btn-primary" style={{ width: "100%", justifyContent: "center", textDecoration: "none" }}>
              Create account <ArrowRight size={16} />
            </Link>
          </form>

          <p style={{ textAlign: "center", marginTop: 24, fontSize: 14, color: "#64748B" }}>
            Already have an account? <Link href="/auth/signin" style={{ color: "#2563EB", fontWeight: 800, textDecoration: "none" }}>Sign in</Link>
          </p>
        </div>
      </section>
    </div>
  );
}
