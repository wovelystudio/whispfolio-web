"use client";
import { useState } from "react";
import { Settings, Globe, Lock, Trash2, Save, Upload, ExternalLink, AlertTriangle } from "lucide-react";

const CATEGORIES = ["App", "Game", "Design", "Art", "Writing", "Music", "Developer Tool", "Startup", "Other"];

export default function ProjectSettingsPage() {
  const [activeSection, setActiveSection] = useState("general");
  const [saved, setSaved] = useState(false);
  const [form, setForm] = useState({
    name: "Mobile App MVP",
    description: "A mobile app that helps creators track their daily habits and ship projects faster.",
    category: "App",
    website: "https://myapp.com",
    github: "https://github.com/me/myapp",
    twitter: "https://twitter.com/myapp",
    visibility: "public",
    seoTitle: "Mobile App MVP — Wispfolio",
    seoDescription: "Follow the journey of building a mobile habit tracker from scratch.",
  });

  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));

  const handleSave = () => { setSaved(true); setTimeout(() => setSaved(false), 2500); };

  const SECTIONS = [
    { id: "general", label: "General" },
    { id: "branding", label: "Branding" },
    { id: "links", label: "Links" },
    { id: "sharepage", label: "Share Page" },
    { id: "danger", label: "Danger Zone" },
  ];

  return (
    <div className="creator-page creator-project-settings-layout" style={{ padding: "32px 40px", width: "100%", display: "flex", gap: 32 }}>
      {/* Sidebar Nav */}
      <div className="creator-project-settings-sidebar" style={{ width: 200, flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
          <Settings size={14} color="#7C3AED" />
          <span style={{ fontSize: 13, fontWeight: 700, color: "#7C3AED", textTransform: "uppercase", letterSpacing: "0.06em" }}>Project Settings</span>
        </div>
        <nav className="creator-settings-tabs" style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {SECTIONS.map(s => (
            <button key={s.id} onClick={() => setActiveSection(s.id)} style={{
              textAlign: "left", padding: "9px 12px", borderRadius: 8, border: "none", cursor: "pointer",
              background: activeSection === s.id ? "#EFF6FF" : "transparent",
              color: activeSection === s.id ? "#2563EB" : s.id === "danger" ? "#EF4444" : "#64748B",
              fontWeight: activeSection === s.id ? 700 : 500, fontSize: 14, transition: "all 0.15s",
            }}>
              {s.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Content */}
      <div style={{ flex: 1 }}>

        {/* General */}
        {activeSection === "general" && (
          <div>
            <h2 style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 20, color: "#0F172A", marginBottom: 6 }}>General Information</h2>
            <p style={{ fontSize: 14, color: "#64748B", marginBottom: 28 }}>Update your project's basic details.</p>
            <div style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 16, padding: "28px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
                <div>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#334155", marginBottom: 8 }}>Project Name</label>
                  <input className="input" value={form.name} onChange={e => set("name", e.target.value)} />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#334155", marginBottom: 8 }}>Description</label>
                  <textarea className="input" value={form.description} onChange={e => set("description", e.target.value)} style={{ minHeight: 100, resize: "vertical" }} />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#334155", marginBottom: 8 }}>Category</label>
                  <select className="input" value={form.category} onChange={e => set("category", e.target.value)} style={{ appearance: "none" }}>
                    {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#334155", marginBottom: 10 }}>Visibility</label>
                  <div className="creator-form-grid" style={{ display: "flex", gap: 10 }}>
                    {[{ val: "public", icon: Globe, label: "Public" }, { val: "private", icon: Lock, label: "Private" }].map(v => (
                      <div key={v.val} onClick={() => set("visibility", v.val)} style={{ flex: 1, border: `2px solid ${form.visibility === v.val ? "#7C3AED" : "#E2E8F0"}`, background: form.visibility === v.val ? "#FAF5FF" : "white", borderRadius: 10, padding: "12px 16px", cursor: "pointer", display: "flex", alignItems: "center", gap: 10 }}>
                        <v.icon size={16} color={form.visibility === v.val ? "#7C3AED" : "#94A3B8"} />
                        <span style={{ fontWeight: 600, fontSize: 14, color: form.visibility === v.val ? "#7C3AED" : "#64748B" }}>{v.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <button className="btn-primary" onClick={handleSave} style={{ alignSelf: "flex-start", background: saved ? "#7C3AED" : "#2563EB" }}>
                  {saved ? "✓ Saved!" : <><Save size={15} /> Save changes</>}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Branding */}
        {activeSection === "branding" && (
          <div>
            <h2 style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 20, color: "#0F172A", marginBottom: 6 }}>Branding</h2>
            <p style={{ fontSize: 14, color: "#64748B", marginBottom: 28 }}>Update your project's visual identity.</p>
            <div style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 16, padding: "28px", display: "flex", flexDirection: "column", gap: 28 }}>
              <div>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#334155", marginBottom: 12 }}>Banner Image</label>
                <div style={{ width: "100%", height: 160, border: "2px dashed #E2E8F0", borderRadius: 14, background: "linear-gradient(135deg, #EDE9FE, #DBEAFE)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", cursor: "pointer", gap: 8, position: "relative" }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = "#7C3AED")}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = "#E2E8F0")}
                >
                  <Upload size={22} color="#7C3AED" />
                  <span style={{ fontSize: 14, fontWeight: 600, color: "#7C3AED" }}>Replace Banner</span>
                  <span style={{ fontSize: 12, color: "#94A3B8" }}>1200×400px recommended</span>
                </div>
              </div>
              <div className="creator-brand-row" style={{ display: "flex", alignItems: "center", gap: 20 }}>
                <div style={{ width: 80, height: 80, borderRadius: 18, background: "linear-gradient(135deg, #2563EB, #7C3AED)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 28, fontWeight: 700, flexShrink: 0 }}>M</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: 14, color: "#0F172A", marginBottom: 4 }}>Profile Picture</div>
                  <div style={{ fontSize: 13, color: "#64748B", marginBottom: 10 }}>Appears on your project page and in search results</div>
                  <button style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "8px 16px", border: "1.5px solid #E2E8F0", borderRadius: 8, background: "white", fontSize: 13, fontWeight: 600, color: "#475569", cursor: "pointer" }}>
                    <Upload size={13} /> Upload new image
                  </button>
                </div>
              </div>
              <button className="btn-primary" onClick={handleSave} style={{ alignSelf: "flex-start" }}>
                {saved ? "✓ Saved!" : <><Save size={15} /> Save branding</>}
              </button>
            </div>
          </div>
        )}

        {/* Links */}
        {activeSection === "links" && (
          <div>
            <h2 style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 20, color: "#0F172A", marginBottom: 6 }}>Links</h2>
            <p style={{ fontSize: 14, color: "#64748B", marginBottom: 28 }}>Links shown on your public project page.</p>
            <div style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 16, padding: "28px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {[{ key: "website", label: "Website" }, { key: "github", label: "GitHub / Source" }, { key: "twitter", label: "Twitter / X" }].map(l => (
                  <div key={l.key}>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#334155", marginBottom: 8 }}>{l.label}</label>
                    <div className="creator-link-input-row" style={{ display: "flex", gap: 8 }}>
                      <input className="input" value={(form as Record<string, string>)[l.key]} onChange={e => set(l.key, e.target.value)} style={{ flex: 1 }} />
                      {(form as Record<string, string>)[l.key] && <a href={(form as Record<string, string>)[l.key]} target="_blank" rel="noreferrer" style={{ width: 42, border: "1.5px solid #E2E8F0", borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center", color: "#64748B", textDecoration: "none" }}><ExternalLink size={15} /></a>}
                    </div>
                  </div>
                ))}
                <button className="btn-primary" onClick={handleSave} style={{ alignSelf: "flex-start" }}>
                  {saved ? "✓ Saved!" : <><Save size={15} /> Save links</>}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Share Page */}
        {activeSection === "sharepage" && (
          <div>
            <h2 style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 20, color: "#0F172A", marginBottom: 6 }}>Share Page Settings</h2>
            <p style={{ fontSize: 14, color: "#64748B", marginBottom: 28 }}>Control how your public project page looks and ranks.</p>
            <div style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 16, padding: "28px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
                <div>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#334155", marginBottom: 8 }}>SEO Title</label>
                  <input className="input" value={form.seoTitle} onChange={e => set("seoTitle", e.target.value)} />
                  <div style={{ fontSize: 12, color: "#94A3B8", marginTop: 6 }}>{form.seoTitle.length} / 60 characters</div>
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#334155", marginBottom: 8 }}>SEO Description</label>
                  <textarea className="input" value={form.seoDescription} onChange={e => set("seoDescription", e.target.value)} style={{ minHeight: 80, resize: "vertical" }} />
                  <div style={{ fontSize: 12, color: "#94A3B8", marginTop: 6 }}>{form.seoDescription.length} / 160 characters</div>
                </div>
                <div style={{ background: "#F8FAFF", border: "1px solid #E2E8F0", borderRadius: 10, padding: "16px" }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 10 }}>Preview</div>
                  <div style={{ fontSize: 16, fontWeight: 600, color: "#1558D6" }}>{form.seoTitle}</div>
                  <div style={{ fontSize: 13, color: "#2563EB", marginBottom: 4 }}>wispfolio.com/p/mobile-app-mvp</div>
                  <div style={{ fontSize: 13, color: "#64748B" }}>{form.seoDescription}</div>
                </div>
                <button className="btn-primary" onClick={handleSave} style={{ alignSelf: "flex-start" }}>
                  {saved ? "✓ Saved!" : <><Save size={15} /> Save settings</>}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Danger Zone */}
        {activeSection === "danger" && (
          <div>
            <h2 style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 20, color: "#0F172A", marginBottom: 6 }}>Danger Zone</h2>
            <p style={{ fontSize: 14, color: "#64748B", marginBottom: 28 }}>Irreversible actions. Proceed with caution.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div className="creator-setting-row" style={{ background: "white", border: "1.5px solid #FCA5A5", borderRadius: 14, padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 15, color: "#0F172A", marginBottom: 4 }}>Archive Project</div>
                  <div style={{ fontSize: 13, color: "#64748B" }}>Hides the project from public discovery. You can unarchive later.</div>
                </div>
                <button style={{ padding: "9px 18px", border: "1.5px solid #FCA5A5", borderRadius: 9, background: "white", color: "#DC2626", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>
                  Archive
                </button>
              </div>
              <div className="creator-setting-row" style={{ background: "white", border: "1.5px solid #FCA5A5", borderRadius: 14, padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 15, color: "#DC2626", marginBottom: 4, display: "flex", alignItems: "center", gap: 7 }}>
                    <AlertTriangle size={15} /> Delete Project
                  </div>
                  <div style={{ fontSize: 13, color: "#64748B" }}>Permanently deletes all project data, updates, and followers. This cannot be undone.</div>
                </div>
                <button style={{ padding: "9px 18px", border: "none", borderRadius: 9, background: "#DC2626", color: "white", fontSize: 13, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: 6 }}>
                  <Trash2 size={14} /> Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
