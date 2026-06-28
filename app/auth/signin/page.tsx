"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowRight, CheckCircle2, FolderOpen, Sparkles, AlertCircle, Loader2 } from "lucide-react";

export default function SignInPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") ?? "/feed";

  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      // Redirect based on role
      const { role } = data.user;
      if (role === "admin") {
        router.push("/admin");
      } else if (role === "creator") {
        router.push(redirectTo === "/feed" ? "/creator/studio" : redirectTo);
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

          <div style={{ maxWidth: 410 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "white", border: "1px solid #DBEAFE", borderRadius: 999, padding: "6px 12px", marginBottom: 24 }}>
              <FolderOpen size={13} color="#2563EB" />
              <span style={{ fontSize: 12, fontWeight: 800, color: "#2563EB" }}>Creator workspace</span>
            </div>
            <h2 style={{ fontFamily: "Sora, sans-serif", fontWeight: 900, fontSize: 42, lineHeight: 1.08, letterSpacing: "-0.03em", color: "#0F172A", marginBottom: 16 }}>
              Continue building your project story.
            </h2>
            <p style={{ fontSize: 16, color: "#64748B", lineHeight: 1.7 }}>
              Sign in to manage projects, track progress, collect inspiration, and publish your journey.
            </p>
          </div>

          <p style={{ fontSize: 12, color: "#94A3B8" }}>Beta testing — Wispfolio 2026</p>
        </section>

        {/* ── Right form panel ── */}
        <section className="auth-right-panel" style={{
          padding: 32, display: "flex", alignItems: "center", justifyContent: "center",
          background: "white",
        }}>
          <div style={{ width: "100%", maxWidth: 440, background: "white", border: "1px solid #E2E8F0", borderRadius: 20, padding: 34, boxShadow: "0 24px 70px rgba(37,99,235,0.12)" }}>

            {/* Mobile-only logo */}
            <div className="auth-mobile-logo">
              <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none", marginBottom: 24 }}>
                <div style={{ width: 30, height: 30, borderRadius: 8, background: "linear-gradient(135deg, #2563EB, #7C3AED)", display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}>
                  <Sparkles size={14} />
                </div>
                <span style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 16, color: "#0F172A" }}>Wispfolio</span>
              </Link>
            </div>

            <h1 style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 26, color: "#0F172A", marginBottom: 8 }}>Sign in</h1>
            <p style={{ color: "#64748B", fontSize: 14, marginBottom: 28 }}>Welcome back to your project passport.</p>

            {/* Error message */}
            {error && (
              <div style={{ display: "flex", alignItems: "center", gap: 8, background: "#FFF1F2", border: "1px solid #FECDD3", borderRadius: 10, padding: "10px 14px", marginBottom: 20 }}>
                <AlertCircle size={15} color="#E11D48" />
                <span style={{ fontSize: 13, color: "#BE123C", fontWeight: 500 }}>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#334155", marginBottom: 8 }} htmlFor="signin-email">Email</label>
              <input
                id="signin-email" type="email" className="input"
                placeholder="you@example.com" value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required style={{ marginBottom: 18 }}
              />

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                <label style={{ fontSize: 13, fontWeight: 700, color: "#334155" }} htmlFor="signin-password">Password</label>
                <Link href="#" style={{ fontSize: 12, color: "#7C3AED", fontWeight: 700, textDecoration: "none" }}>Forgot?</Link>
              </div>
              <input
                id="signin-password" type="password" className="input"
                placeholder="At least 8 characters" value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                required style={{ marginBottom: 20 }}
              />

              <button
                type="submit"
                disabled={loading}
                className="btn-primary"
                style={{ width: "100%", justifyContent: "center", display: "flex", border: "none", opacity: loading ? 0.7 : 1, cursor: loading ? "not-allowed" : "pointer" }}
              >
                {loading ? (
                  <><Loader2 size={16} style={{ animation: "spin 1s linear infinite" }} /> Signing in…</>
                ) : (
                  <>Sign in <ArrowRight size={16} /></>
                )}
              </button>
            </form>

            <div style={{ display: "grid", gap: 8, marginTop: 24, padding: 14, background: "#F8FAFF", border: "1px solid #E2E8F0", borderRadius: 12 }}>
              {[
                "One account for creator and follower mode",
                "Free users can create one active project",
              ].map(item => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12.5, color: "#475569" }}>
                  <CheckCircle2 size={14} color="#2563EB" /> {item}
                </div>
              ))}
            </div>

            <p style={{ textAlign: "center", marginTop: 24, fontSize: 14, color: "#64748B" }}>
              New here?{" "}
              <Link href="/auth/signup" style={{ color: "#2563EB", fontWeight: 800, textDecoration: "none" }}>Create an account</Link>
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
