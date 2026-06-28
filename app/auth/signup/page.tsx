"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowRight, Check, Sparkles, Users, Zap, AlertCircle, Loader2 } from "lucide-react";

export default function SignUpPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") ?? "/feed";

  const [role, setRole] = useState<"creator" | "follower">("creator");
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, role }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      // Redirect based on role
      if (role === "creator") {
        router.push("/creator/studio");
      } else {
        router.push(redirectTo);
      }
    } catch {
      setError("Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="auth-layout">
        {/* ── Left branding panel (hidden on mobile) ── */}
        <section className="auth-left-panel" style={{
          padding: 48, display: "flex", flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(180deg, #F8FAFF 0%, #EFF6FF 100%)",
        }}>
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
            <h2 style={{ fontFamily: "Sora, sans-serif", fontWeight: 900, fontSize: 42, lineHeight: 1.08, letterSpacing: "-0.03em", color: "#0F172A", marginBottom: 16 }}>
              Start free.<br />Grow into<br />richer tools.
            </h2>
            <p style={{ fontSize: 16, color: "#64748B", lineHeight: 1.7 }}>
              Every account can create and publish a project. Paid plans only unlock more projects and advanced tools.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, maxWidth: 420 }}>
            {["Project Passport", "Public share page", "Progress tracker", "Creator feed"].map(item => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#475569" }}>
                <span style={{ width: 20, height: 20, borderRadius: "50%", background: "#EFF6FF", color: "#2563EB", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><Check size={12} /></span>
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* ── Right form panel ── */}
        <section className="auth-right-panel" style={{
          padding: 32, display: "flex", alignItems: "center", justifyContent: "center",
          background: "white",
        }}>
          <div style={{ width: "100%", maxWidth: 460, background: "white", border: "1px solid #E2E8F0", borderRadius: 20, padding: 34, boxShadow: "0 24px 70px rgba(37,99,235,0.12)" }}>

            {/* Mobile-only logo */}
            <div className="auth-mobile-logo">
              <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none", marginBottom: 24 }}>
                <div style={{ width: 30, height: 30, borderRadius: 8, background: "linear-gradient(135deg, #2563EB, #7C3AED)", display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}>
                  <Sparkles size={14} />
                </div>
                <span style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 16, color: "#0F172A" }}>Wispfolio</span>
              </Link>
            </div>

            <h1 style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 26, color: "#0F172A", marginBottom: 8 }}>Create your account</h1>
            <p style={{ color: "#64748B", fontSize: 14, marginBottom: 24 }}>Choose how you want to begin. You can switch later.</p>

            {/* Role selector */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 24 }}>
              {[
                { key: "creator", label: "Creator", sub: "Build and publish", icon: Zap },
                { key: "follower", label: "Follower", sub: "Discover projects", icon: Users },
              ].map(option => (
                <button key={option.key} onClick={() => setRole(option.key as typeof role)} style={{
                  textAlign: "left", padding: 16, borderRadius: 12,
                  border: `2px solid ${role === option.key ? "#2563EB" : "#E2E8F0"}`,
                  background: role === option.key ? "#EFF6FF" : "white",
                  cursor: "pointer", transition: "all 0.15s",
                }}>
                  <option.icon size={18} color={role === option.key ? "#2563EB" : "#94A3B8"} />
                  <div style={{ fontSize: 14, fontWeight: 800, color: "#0F172A", marginTop: 10 }}>{option.label}</div>
                  <div style={{ fontSize: 12, color: "#64748B", marginTop: 3 }}>{option.sub}</div>
                </button>
              ))}
            </div>

            {/* Error message */}
            {error && (
              <div style={{ display: "flex", alignItems: "center", gap: 8, background: "#FFF1F2", border: "1px solid #FECDD3", borderRadius: 10, padding: "10px 14px", marginBottom: 20 }}>
                <AlertCircle size={15} color="#E11D48" />
                <span style={{ fontSize: 13, color: "#BE123C", fontWeight: 500 }}>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#334155", marginBottom: 8 }} htmlFor="signup-name">Name</label>
              <input
                id="signup-name" type="text" className="input"
                placeholder="Your name" value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required minLength={2} style={{ marginBottom: 16 }}
              />

              <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#334155", marginBottom: 8 }} htmlFor="signup-email">Email</label>
              <input
                id="signup-email" type="email" className="input"
                placeholder="you@example.com" value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required style={{ marginBottom: 16 }}
              />

              <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#334155", marginBottom: 8 }} htmlFor="signup-password">Password</label>
              <input
                id="signup-password" type="password" className="input"
                placeholder="At least 8 characters" value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                required minLength={8} style={{ marginBottom: 20 }}
              />

              <button
                type="submit"
                disabled={loading}
                className="btn-primary"
                style={{ width: "100%", justifyContent: "center", display: "flex", opacity: loading ? 0.7 : 1, cursor: loading ? "not-allowed" : "pointer" }}
              >
                {loading ? (
                  <><Loader2 size={16} style={{ animation: "spin 1s linear infinite" }} /> Creating account…</>
                ) : (
                  <>Create account <ArrowRight size={16} /></>
                )}
              </button>
            </form>

            <p style={{ textAlign: "center", marginTop: 24, fontSize: 14, color: "#64748B" }}>
              Already have an account?{" "}
              <Link href="/auth/signin" style={{ color: "#2563EB", fontWeight: 800, textDecoration: "none" }}>Sign in</Link>
            </p>
          </div>
        </section>
      </div>

      <style>{`
        .auth-layout {
          min-height: 100vh;
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
        .auth-mobile-logo { display: none; }
        @keyframes spin { to { transform: rotate(360deg); } }

        @media (max-width: 768px) {
          .auth-layout { grid-template-columns: 1fr !important; }
          .auth-left-panel { display: none !important; }
          .auth-right-panel { padding: 24px 16px !important; min-height: 100vh; align-items: flex-start !important; }
          .auth-right-panel > div { box-shadow: none !important; border: none !important; padding: 24px 0 !important; }
          .auth-mobile-logo { display: block !important; }
        }
      `}</style>
    </>
  );
}
