"use client";
import { useState } from "react";
import { Shield, CheckCircle, ArrowRight, ChevronDown } from "lucide-react";

const CREATOR_TYPES = [
  "Artist", "Developer", "Designer", "Writer", "Musician",
  "Filmmaker", "Game Developer", "Entrepreneur", "Student", "Other",
];

export default function VerificationPage() {
  const [submitted, setSubmitted] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [form, setForm] = useState({
    fullName: "", email: "", creatorType: "", website: "",
    social: "", description: "",
  });

  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));

  if (submitted) {
    return (
      <div className="creator-page" style={{ padding: "80px 36px", maxWidth: 560, margin: "0 auto", textAlign: "center" }}>
        <div style={{ width: 80, height: 80, background: "#EDE9FE", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 28px" }}>
          <CheckCircle size={38} color="#7C3AED" />
        </div>
        <h1 style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 28, color: "#0F172A", marginBottom: 12, letterSpacing: "-0.02em" }}>
          Application Submitted!
        </h1>
        <p style={{ fontSize: 16, color: "#64748B", lineHeight: 1.7, marginBottom: 32 }}>
          We'll review your application and respond within <strong style={{ color: "#0F172A" }}>3–5 business days</strong>.
          Once approved, your verified badge will appear on your profile and all your projects.
        </p>
        <div style={{ background: "#F8FAFF", border: "1px solid #E2E8F0", borderRadius: 14, padding: "20px 24px", textAlign: "left", marginBottom: 28 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 12 }}>What happens next</div>
          {["Admin reviews your application", "You get a notification via email", "Verified badge appears on your profile"].map((s, i) => (
            <div key={s} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: i < 2 ? 10 : 0 }}>
              <div style={{ width: 24, height: 24, background: "#EDE9FE", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 12, fontWeight: 700, color: "#7C3AED" }}>{i + 1}</div>
              <span style={{ fontSize: 14, color: "#475569" }}>{s}</span>
            </div>
          ))}
        </div>
        <button onClick={() => setSubmitted(false)} style={{ fontSize: 14, color: "#7C3AED", fontWeight: 600, background: "none", border: "none", cursor: "pointer" }}>
          Submit another application
        </button>
      </div>
    );
  }

  return (
    <div className="creator-page" style={{ padding: "32px 36px", maxWidth: 680 }}>
      {/* Header */}
      <div style={{ marginBottom: 36 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
          <Shield size={14} color="#7C3AED" />
          <span style={{ fontSize: 13, fontWeight: 700, color: "#7C3AED", textTransform: "uppercase", letterSpacing: "0.06em" }}>Creator Verification</span>
        </div>
        <h1 style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 26, color: "#0F172A", letterSpacing: "-0.025em", marginBottom: 8 }}>
          Apply for Verified Badge ✓
        </h1>
        <p style={{ fontSize: 15, color: "#64748B", lineHeight: 1.6, maxWidth: 540 }}>
          Verification adds trust to your profile. Anyone can become a creator instantly — this badge shows
          the community you're a committed builder.
        </p>
      </div>

      {/* What you get */}
      <div className="creator-benefit-row" style={{ background: "linear-gradient(135deg, rgba(37,99,235,0.04), rgba(124,58,237,0.04))", border: "1px solid rgba(124,58,237,0.15)", borderRadius: 14, padding: "20px 24px", marginBottom: 32, display: "flex", gap: 24, flexWrap: "wrap" }}>
        {[
          { icon: "✓", title: "Verified badge", desc: "On your profile and all projects" },
          { icon: "✦", title: "Higher trust", desc: "Builds community confidence" },
          { icon: "◈", title: "Priority discovery", desc: "Featured in explore pages" },
        ].map(b => (
          <div key={b.title} style={{ display: "flex", gap: 12, alignItems: "flex-start", flex: 1, minWidth: 160 }}>
            <div style={{ width: 32, height: 32, background: "#EDE9FE", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, color: "#7C3AED", fontWeight: 700, flexShrink: 0 }}>{b.icon}</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 14, color: "#0F172A" }}>{b.title}</div>
              <div style={{ fontSize: 13, color: "#64748B" }}>{b.desc}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Form */}
      <div style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 18, padding: "32px 28px" }}>
        <h2 style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 18, color: "#0F172A", marginBottom: 28 }}>Your Application</h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          {/* Full Name + Email */}
          <div className="creator-form-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div>
              <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#334155", marginBottom: 8 }}>Full Name *</label>
              <input className="input" placeholder="Alex Doe" value={form.fullName} onChange={e => set("fullName", e.target.value)} />
            </div>
            <div>
              <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#334155", marginBottom: 8 }}>Email Address *</label>
              <input className="input" type="email" placeholder="you@example.com" value={form.email} onChange={e => set("email", e.target.value)} />
            </div>
          </div>

          {/* Creator Type */}
          <div>
            <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#334155", marginBottom: 8 }}>Creator Type *</label>
            <div style={{ position: "relative" }}>
              <select
                className="input"
                value={form.creatorType}
                onChange={e => set("creatorType", e.target.value)}
                style={{ appearance: "none", paddingRight: 40 }}
              >
                <option value="">Select your creator type...</option>
                {CREATOR_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
              <ChevronDown size={16} color="#94A3B8" style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }} />
            </div>
          </div>

          {/* Website + Social */}
          <div className="creator-form-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div>
              <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#334155", marginBottom: 8 }}>Website / Portfolio</label>
              <input className="input" placeholder="https://yoursite.com" value={form.website} onChange={e => set("website", e.target.value)} />
            </div>
            <div>
              <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#334155", marginBottom: 8 }}>Social Profile Link</label>
              <input className="input" placeholder="twitter.com/you" value={form.social} onChange={e => set("social", e.target.value)} />
            </div>
          </div>

          {/* Description */}
          <div>
            <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#334155", marginBottom: 8 }}>
              Tell us about yourself as a creator *
            </label>
            <textarea
              className="input"
              placeholder="What do you build? What are your projects about? Why do you want to be verified?"
              value={form.description}
              onChange={e => set("description", e.target.value)}
              style={{ minHeight: 120, resize: "vertical" }}
            />
            <div style={{ fontSize: 12, color: "#94A3B8", marginTop: 6 }}>{form.description.length} / 500 characters recommended</div>
          </div>

          {/* Agreement */}
          <div style={{ background: "#F8FAFF", border: "1px solid #E2E8F0", borderRadius: 10, padding: "16px 18px" }}>
            <label style={{ display: "flex", alignItems: "flex-start", gap: 12, cursor: "pointer" }}>
              <div
                onClick={() => setAgreed(!agreed)}
                style={{
                  width: 20, height: 20, borderRadius: 5, border: `2px solid ${agreed ? "#7C3AED" : "#CBD5E1"}`,
                  background: agreed ? "#7C3AED" : "white", display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0, marginTop: 2, cursor: "pointer", transition: "all 0.15s",
                }}
              >
                {agreed && <svg width="11" height="8" viewBox="0 0 11 8" fill="none"><path d="M1 4l3 3L10 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>}
              </div>
              <span style={{ fontSize: 14, color: "#475569", lineHeight: 1.6 }}>
                I agree to the Wispfolio{" "}
                <a href="/terms" style={{ color: "#7C3AED", fontWeight: 600, textDecoration: "none" }}>Community Guidelines</a>
                {" "}and confirm that all information provided is accurate. I understand that false information may result in rejection or removal of the badge.
              </span>
            </label>
          </div>

          <button
            className="btn-primary"
            onClick={() => { if (form.fullName && form.email && form.creatorType && form.description && agreed) setSubmitted(true); }}
            style={{ alignSelf: "flex-start", padding: "13px 28px", fontSize: 15, opacity: (form.fullName && form.email && form.creatorType && form.description && agreed) ? 1 : 0.5, cursor: (form.fullName && form.email && form.creatorType && form.description && agreed) ? "pointer" : "not-allowed" }}
          >
            Submit Application <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
