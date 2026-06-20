"use client";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, CheckCircle2, FolderOpen, Sparkles } from "lucide-react";

export default function SignInPage() {
  const [form, setForm] = useState({ email: "", password: "" });

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(180deg, #F8FAFF 0%, #FFFFFF 100%)", display: "grid", gridTemplateColumns: "1fr 1fr" }}>
      <section style={{ padding: 48, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: "linear-gradient(135deg, #2563EB, #7C3AED)", display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}>
            <Sparkles size={18} />
          </div>
          <span style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 18, color: "#0F172A" }}>Wispfolio</span>
        </Link>

        <div style={{ maxWidth: 410 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "white", border: "1px solid #DBEAFE", borderRadius: 999, padding: "6px 12px", marginBottom: 24 }}>
            <FolderOpen size={13} color="#2563EB" />
            <span style={{ fontSize: 12, fontWeight: 800, color: "#2563EB" }}>Creator workspace</span>
          </div>
          <h1 style={{ fontFamily: "Sora, sans-serif", fontWeight: 900, fontSize: 42, lineHeight: 1.08, letterSpacing: "-0.03em", color: "#0F172A", marginBottom: 16 }}>
            Continue building your project story.
          </h1>
          <p style={{ fontSize: 16, color: "#64748B", lineHeight: 1.7 }}>
            Sign in to manage projects, track progress, collect inspiration, and publish your journey.
          </p>
        </div>

        <p style={{ fontSize: 12, color: "#94A3B8" }}>Beta testing - Wispfolio 2026</p>
      </section>

      <section style={{ padding: 32, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: "100%", maxWidth: 440, background: "white", border: "1px solid #E2E8F0", borderRadius: 20, padding: 34, boxShadow: "0 24px 70px rgba(37,99,235,0.12)" }}>
          <h2 style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 26, color: "#0F172A", marginBottom: 8 }}>Sign in</h2>
          <p style={{ color: "#64748B", fontSize: 14, marginBottom: 28 }}>Welcome back to your project passport.</p>

          <form onSubmit={(e) => e.preventDefault()}>
            <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#334155", marginBottom: 8 }} htmlFor="signin-email">Email</label>
            <input id="signin-email" type="email" className="input" placeholder="you@example.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} style={{ marginBottom: 18 }} />

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
              <label style={{ fontSize: 13, fontWeight: 700, color: "#334155" }} htmlFor="signin-password">Password</label>
              <Link href="#" style={{ fontSize: 12, color: "#7C3AED", fontWeight: 700, textDecoration: "none" }}>Forgot?</Link>
            </div>
            <input id="signin-password" type="password" className="input" placeholder="At least 8 characters" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} style={{ marginBottom: 20 }} />

            <Link href="/feed" className="btn-primary" style={{ width: "100%", justifyContent: "center", textDecoration: "none" }}>
              Sign in <ArrowRight size={16} />
            </Link>
          </form>

          <div style={{ display: "grid", gap: 8, marginTop: 24, padding: 14, background: "#F8FAFF", border: "1px solid #E2E8F0", borderRadius: 12 }}>
            {["One account for creator and follower mode", "Free users can create one active project"].map(item => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12.5, color: "#475569" }}>
                <CheckCircle2 size={14} color="#2563EB" /> {item}
              </div>
            ))}
          </div>

          <p style={{ textAlign: "center", marginTop: 24, fontSize: 14, color: "#64748B" }}>
            New here? <Link href="/auth/signup" style={{ color: "#2563EB", fontWeight: 800, textDecoration: "none" }}>Create an account</Link>
          </p>
        </div>
      </section>
    </div>
  );
}
