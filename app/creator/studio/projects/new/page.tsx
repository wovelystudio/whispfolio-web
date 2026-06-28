"use client";
import { useState } from "react";
import { ArrowRight, ArrowLeft, Check, Upload, Globe, Lock, Sparkles, ChevronDown, X } from "lucide-react";
import Link from "next/link";

const CATEGORIES = ["App", "Game", "Design", "Art", "Writing", "Music", "Developer Tool", "Startup", "Other"];

const STEPS = [
  { n: 1, label: "Basic Details" },
  { n: 2, label: "Branding" },
  { n: 3, label: "Links" },
  { n: 4, label: "Visibility" },
  { n: 5, label: "Create" },
];

export default function NewProjectPage() {
  const [step, setStep] = useState(1);
  const [created, setCreated] = useState(false);
  const [form, setForm] = useState({
    name: "", category: "", description: "",
    pfpPreview: "", bannerPreview: "",
    website: "", github: "", twitter: "", other: "",
    visibility: "public",
  });

  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));
  const next = () => setStep(s => Math.min(5, s + 1));
  const back = () => setStep(s => Math.max(1, s - 1));

  const canNext = () => {
    if (step === 1) return form.name.trim() && form.category && form.description.trim();
    return true;
  };

  if (created) {
    return (
      <div className="creator-page" style={{ padding: "80px 36px", maxWidth: 560, margin: "0 auto", textAlign: "center" }}>
        <div style={{ fontSize: 64, marginBottom: 24 }}>✦</div>
        <h1 style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 30, color: "#0F172A", letterSpacing: "-0.025em", marginBottom: 12 }}>
          {form.name} is live!
        </h1>
        <p style={{ fontSize: 16, color: "#64748B", lineHeight: 1.7, marginBottom: 36 }}>
          Your project passport has been created. Start adding updates, tracking progress, and building your audience.
        </p>
        <div className="creator-button-row" style={{ display: "flex", gap: 12, justifyContent: "center" }}>
          <Link href="/creator/studio" className="btn-primary" style={{ gap: 8 }}>
            Open Studio <ArrowRight size={16} />
          </Link>
          <button onClick={() => { setCreated(false); setStep(1); setForm({ name: "", category: "", description: "", pfpPreview: "", bannerPreview: "", website: "", github: "", twitter: "", other: "", visibility: "public" }); }}
            className="btn-ghost">
            Create another
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="creator-page" style={{ padding: "32px 40px", width: "100%" }}>
      {/* Header */}
      <div style={{ marginBottom: 36 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
          <Sparkles size={14} color="#7C3AED" />
          <span style={{ fontSize: 13, fontWeight: 700, color: "#7C3AED", textTransform: "uppercase", letterSpacing: "0.06em" }}>New Project</span>
        </div>
        <h1 style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 26, color: "#0F172A", letterSpacing: "-0.025em" }}>
          Create your Project Passport
        </h1>
      </div>

      {/* Step Indicator */}
      <div className="creator-stepper" style={{ display: "flex", alignItems: "center", marginBottom: 40 }}>
        {STEPS.map((s, i) => (
          <div key={s.n} style={{ display: "flex", alignItems: "center", flex: i < STEPS.length - 1 ? 1 : "unset" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{
                width: 36, height: 36, borderRadius: "50%",
                background: step > s.n ? "#7C3AED" : step === s.n ? "#EDE9FE" : "#F1F5F9",
                border: `2px solid ${step > s.n ? "#7C3AED" : step === s.n ? "#7C3AED" : "#E2E8F0"}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "all 0.2s",
              }}>
                {step > s.n
                  ? <Check size={16} color="white" />
                  : <span style={{ fontSize: 13, fontWeight: 700, color: step === s.n ? "#7C3AED" : "#94A3B8" }}>{s.n}</span>
                }
              </div>
              <span style={{ fontSize: 11, fontWeight: 600, color: step === s.n ? "#7C3AED" : "#94A3B8", marginTop: 5, whiteSpace: "nowrap" }}>{s.label}</span>
            </div>
            {i < STEPS.length - 1 && (
              <div style={{ flex: 1, height: 2, background: step > s.n ? "#7C3AED" : "#E2E8F0", margin: "0 4px", marginBottom: 20, transition: "background 0.2s" }} />
            )}
          </div>
        ))}
      </div>

      {/* Step Content */}
      <div style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 20, padding: "36px 32px", marginBottom: 24 }}>

        {/* Step 1: Basic Details */}
        {step === 1 && (
          <div className="creator-form-stack" style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div>
              <h2 style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 20, color: "#0F172A", marginBottom: 6 }}>Basic Details</h2>
              <p style={{ fontSize: 14, color: "#64748B" }}>Give your project a name and help people understand what it's about.</p>
            </div>
            <div>
              <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#334155", marginBottom: 8 }}>Project Name *</label>
              <input className="input" placeholder="My Amazing Project" value={form.name} onChange={e => set("name", e.target.value)} style={{ fontSize: 16 }} />
            </div>
            <div>
              <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#334155", marginBottom: 8 }}>Category *</label>
              <div style={{ position: "relative" }}>
                <select className="input" value={form.category} onChange={e => set("category", e.target.value)} style={{ appearance: "none", paddingRight: 40 }}>
                  <option value="">Select a category...</option>
                  {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
                <ChevronDown size={16} color="#94A3B8" style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }} />
              </div>
            </div>
            <div>
              <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#334155", marginBottom: 8 }}>Short Description *</label>
              <textarea className="input" placeholder="What is this project about? What problem does it solve? (2–3 sentences)" value={form.description} onChange={e => set("description", e.target.value)} style={{ minHeight: 100, resize: "vertical" }} />
              <div style={{ fontSize: 12, color: "#94A3B8", marginTop: 6 }}>{form.description.length} / 200 characters</div>
            </div>
          </div>
        )}

        {/* Step 2: Branding */}
        {step === 2 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            <div>
              <h2 style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 20, color: "#0F172A", marginBottom: 6 }}>Branding</h2>
              <p style={{ fontSize: 14, color: "#64748B" }}>Add a profile picture and banner to make your project stand out.</p>
            </div>

            {/* Banner */}
            <div>
              <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#334155", marginBottom: 10 }}>Project Banner</label>
              <div style={{ width: "100%", height: 140, border: "2px dashed #E2E8F0", borderRadius: 14, background: form.bannerPreview ? `url(${form.bannerPreview}) center/cover` : "#F8FAFF", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", cursor: "pointer", gap: 8, transition: "border-color 0.15s", position: "relative" }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "#7C3AED")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "#E2E8F0")}
              >
                {!form.bannerPreview && <>
                  <Upload size={24} color="#94A3B8" />
                  <span style={{ fontSize: 14, fontWeight: 600, color: "#64748B" }}>Upload Banner</span>
                  <span style={{ fontSize: 12, color: "#94A3B8" }}>Recommended: 1200×400px · PNG, JPG</span>
                </>}
              </div>
            </div>

            {/* PFP */}
            <div>
              <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#334155", marginBottom: 10 }}>Project Profile Picture</label>
              <div className="creator-brand-row" style={{ display: "flex", alignItems: "center", gap: 20 }}>
                <div style={{ width: 84, height: 84, borderRadius: 20, border: "2px dashed #E2E8F0", background: "#F8FAFF", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "border-color 0.15s", gap: 4 }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = "#7C3AED")}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = "#E2E8F0")}
                >
                  <Upload size={20} color="#94A3B8" />
                  <span style={{ fontSize: 11, color: "#94A3B8" }}>Upload</span>
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#0F172A", marginBottom: 4 }}>Project Icon</div>
                  <div style={{ fontSize: 13, color: "#64748B" }}>Square image, at least 200×200px</div>
                  <div style={{ fontSize: 12, color: "#94A3B8", marginTop: 2 }}>PNG, JPG, WEBP up to 2MB</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Links */}
        {step === 3 && (
            <div className="creator-form-stack" style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div>
              <h2 style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 20, color: "#0F172A", marginBottom: 6 }}>Links <span style={{ fontSize: 14, fontWeight: 500, color: "#94A3B8" }}>(Optional)</span></h2>
              <p style={{ fontSize: 14, color: "#64748B" }}>Add relevant links so your audience can follow the project across the web.</p>
            </div>
            {[
              { key: "website", label: "Website", placeholder: "https://yourproject.com" },
              { key: "github", label: "GitHub / Source", placeholder: "https://github.com/you/project" },
              { key: "twitter", label: "Twitter / X", placeholder: "https://twitter.com/yourproject" },
              { key: "other", label: "Other Link", placeholder: "Any other relevant URL" },
            ].map(l => (
              <div key={l.key}>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#334155", marginBottom: 8 }}>{l.label}</label>
                <input className="input" placeholder={l.placeholder} value={(form as Record<string, string>)[l.key]} onChange={e => set(l.key, e.target.value)} />
              </div>
            ))}
          </div>
        )}

        {/* Step 4: Visibility */}
        {step === 4 && (
        <div className="creator-form-stack" style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div>
              <h2 style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 20, color: "#0F172A", marginBottom: 6 }}>Visibility</h2>
              <p style={{ fontSize: 14, color: "#64748B" }}>Choose who can see your project.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { val: "public", icon: Globe, title: "Public", desc: "Anyone can discover and follow your project. Recommended for building in public.", badge: null },
                { val: "private", icon: Lock, title: "Private", desc: "Only you can see this project. Upgrade to Studio plan to use private projects.", badge: "Studio plan" },
              ].map(v => (
                <div key={v.val} onClick={() => v.val === "public" && set("visibility", v.val)}
                  style={{ border: `2px solid ${form.visibility === v.val ? "#7C3AED" : "#E2E8F0"}`, background: form.visibility === v.val ? "#FAF5FF" : "white", borderRadius: 14, padding: "20px 20px", cursor: v.val === "public" ? "pointer" : "not-allowed", opacity: v.val === "private" ? 0.6 : 1, transition: "all 0.15s" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 40, height: 40, background: form.visibility === v.val ? "#EDE9FE" : "#F1F5F9", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <v.icon size={18} color={form.visibility === v.val ? "#7C3AED" : "#64748B"} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <span style={{ fontWeight: 700, fontSize: 15, color: "#0F172A" }}>{v.title}</span>
                        {v.badge && <span style={{ background: "#EDE9FE", color: "#7C3AED", fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 999 }}>{v.badge}</span>}
                      </div>
                      <p style={{ fontSize: 13, color: "#64748B", marginTop: 3 }}>{v.desc}</p>
                    </div>
                    <div style={{ width: 20, height: 20, borderRadius: "50%", border: `2px solid ${form.visibility === v.val ? "#7C3AED" : "#CBD5E1"}`, background: form.visibility === v.val ? "#7C3AED" : "transparent", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      {form.visibility === v.val && <div style={{ width: 8, height: 8, borderRadius: "50%", background: "white" }} />}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 5: Confirm */}
        {step === 5 && (
          <div>
            <div style={{ marginBottom: 28 }}>
              <h2 style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 20, color: "#0F172A", marginBottom: 6 }}>Ready to launch ✦</h2>
              <p style={{ fontSize: 14, color: "#64748B" }}>Review your project details before creating.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                { label: "Project Name", val: form.name || "—" },
                { label: "Category", val: form.category || "—" },
                { label: "Description", val: form.description || "—" },
                { label: "Visibility", val: form.visibility === "public" ? "Public" : "Private" },
                { label: "Website", val: form.website || "Not added" },
                { label: "GitHub", val: form.github || "Not added" },
              ].map(r => (
                <div key={r.label} style={{ display: "flex", gap: 16, paddingBottom: 14, borderBottom: "1px solid #F1F5F9" }}>
                  <span style={{ fontSize: 13, fontWeight: 600, color: "#94A3B8", minWidth: 120 }}>{r.label}</span>
                  <span style={{ fontSize: 14, color: "#0F172A", flex: 1, wordBreak: "break-word" }}>{r.val}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="creator-button-row" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <button onClick={back} disabled={step === 1}
          className="btn-ghost" style={{ opacity: step === 1 ? 0 : 1, pointerEvents: step === 1 ? "none" : "auto" }}>
          <ArrowLeft size={16} /> Back
        </button>
        <div style={{ fontSize: 13, color: "#94A3B8" }}>Step {step} of 5</div>
        {step < 5
          ? <button onClick={next} className="btn-primary" disabled={!canNext()} style={{ opacity: canNext() ? 1 : 0.5, cursor: canNext() ? "pointer" : "not-allowed" }}>
              Next <ArrowRight size={16} />
            </button>
          : <button onClick={() => setCreated(true)} className="btn-primary" style={{ background: "#7C3AED" }}
              onMouseEnter={e => (e.currentTarget.style.background = "#6D28D9")}
              onMouseLeave={e => (e.currentTarget.style.background = "#7C3AED")}>
              <Sparkles size={16} /> Create Project
            </button>
        }
      </div>
    </div>
  );
}
