"use client";
import { useState } from "react";
import { Cloud, Check, Bell, Shield, User, Zap, ArrowRight, X } from "lucide-react";

const TABS = [
  { key: "profile", label: "Profile", icon: User },
  { key: "storage", label: "Storage", icon: Cloud },
  { key: "notifications", label: "Notifications", icon: Bell },
  { key: "security", label: "Security", icon: Shield },
  { key: "plan", label: "Plan", icon: Zap },
];

export default function CreatorSettingsPage() {
  const [tab, setTab] = useState("profile");
  const [connectedDrive, setConnectedDrive] = useState(false);
  const [connectedOneDrive, setConnectedOneDrive] = useState(false);
  const [notifs, setNotifs] = useState({ follower: true, comments: false, milestone: true, digest: true });
  const [saved, setSaved] = useState(false);

  function handleSave() {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "10px 14px", border: "1.5px solid #E2E8F0",
    borderRadius: 9, fontSize: 14, outline: "none", boxSizing: "border-box",
    transition: "border-color 0.15s", fontFamily: "Inter, sans-serif", color: "#0F172A",
  };

  return (
    <div className="creator-page creator-settings-page" style={{ padding: "32px 36px", maxWidth: 860 }}>
      <div style={{ marginBottom: 28 }}>
        <h1 style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 24, color: "#0F172A", letterSpacing: "-0.02em", marginBottom: 4 }}>Settings</h1>
        <p style={{ fontSize: 14, color: "#64748B" }}>Manage your Creator Studio preferences and integrations.</p>
      </div>

      <div className="creator-settings-layout" style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: 28 }}>
        {/* Sidebar tabs */}
        <nav className="creator-settings-tabs" style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {TABS.map(t => (
            <button key={t.key} onClick={() => setTab(t.key)}
              style={{ display: "flex", alignItems: "center", gap: 9, padding: "10px 12px", borderRadius: 9, border: "none", cursor: "pointer", textAlign: "left", fontSize: 13.5, fontWeight: tab === t.key ? 700 : 500, color: tab === t.key ? "#2563EB" : "#64748B", background: tab === t.key ? "#EFF6FF" : "transparent", transition: "all 0.15s", borderLeft: tab === t.key ? "2.5px solid #2563EB" : "2.5px solid transparent" }}>
              <t.icon size={15} /> {t.label}
            </button>
          ))}
        </nav>

        {/* Content */}
        <div>
          {/* ── PROFILE ── */}
          {tab === "profile" && (
            <div style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 16, padding: "28px" }}>
              <h3 style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 16, color: "#0F172A", marginBottom: 22 }}>Public profile</h3>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 26 }}>
                <div style={{ width: 64, height: 64, borderRadius: "50%", background: "linear-gradient(135deg, #2563EB, #7C3AED)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 800, fontSize: 24, fontFamily: "Sora, sans-serif", flexShrink: 0 }}>Y</div>
                <div>
                  <button style={{ padding: "8px 16px", border: "1.5px solid #E2E8F0", borderRadius: 8, background: "white", fontSize: 13, fontWeight: 600, cursor: "pointer", color: "#334155", transition: "all 0.15s" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#2563EB"; (e.currentTarget as HTMLElement).style.color = "#2563EB"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#E2E8F0"; (e.currentTarget as HTMLElement).style.color = "#334155"; }}>
                    Change photo
                  </button>
                  <p style={{ fontSize: 12, color: "#94A3B8", marginTop: 4 }}>JPG or PNG, max 2MB</p>
                </div>
              </div>
              <div className="creator-form-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
                {[{ label: "Display name", placeholder: "Your Name" }, { label: "Username", placeholder: "@yourhandle" }].map(f => (
                  <div key={f.label}>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 6 }}>{f.label}</label>
                    <input placeholder={f.placeholder} style={inputStyle}
                      onFocus={e => (e.target.style.borderColor = "#2563EB")}
                      onBlur={e => (e.target.style.borderColor = "#E2E8F0")} />
                  </div>
                ))}
              </div>
              <div style={{ marginBottom: 14 }}>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 6 }}>Email</label>
                <input type="email" placeholder="you@example.com" style={inputStyle}
                  onFocus={e => (e.target.style.borderColor = "#2563EB")}
                  onBlur={e => (e.target.style.borderColor = "#E2E8F0")} />
              </div>
              <div style={{ marginBottom: 20 }}>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 6 }}>Bio</label>
                <textarea placeholder="Tell people what you build..." rows={3} style={{ ...inputStyle, resize: "vertical" }}
                  onFocus={e => (e.target.style.borderColor = "#2563EB")}
                  onBlur={e => (e.target.style.borderColor = "#E2E8F0")} />
              </div>
              <button onClick={handleSave} style={{ display: "flex", alignItems: "center", gap: 7, padding: "10px 22px", background: saved ? "#16A34A" : "#2563EB", color: "white", border: "none", borderRadius: 9, fontSize: 14, fontWeight: 700, cursor: "pointer", transition: "background 0.2s", fontFamily: "Sora, sans-serif" }}>
                {saved ? <><Check size={14} /> Saved!</> : "Save changes"}
              </button>
            </div>
          )}

          {/* ── STORAGE ── */}
          {tab === "storage" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div style={{ background: "#F0F9FF", border: "1px solid #BAE6FD", borderRadius: 12, padding: "14px 18px", display: "flex", gap: 12 }}>
                <Cloud size={17} color="#0284C7" style={{ flexShrink: 0, marginTop: 1 }} />
                <div>
                  <div style={{ fontSize: 13.5, fontWeight: 700, color: "#0369A1" }}>Your files, your storage</div>
                  <div style={{ fontSize: 13, color: "#7DD3FC", lineHeight: 1.5, marginTop: 2 }}>Wispfolio only reads metadata to display files. We never copy or store your actual files.</div>
                </div>
              </div>

              {[
                { name: "Google Drive", sub: "Browse and link Drive folders", logo: "G", logoColor: "#EA4335", connected: connectedDrive, toggle: () => setConnectedDrive(!connectedDrive) },
                { name: "Microsoft OneDrive", sub: "Connect your OneDrive workspace", logo: "OD", logoColor: "#0078D4", connected: connectedOneDrive, toggle: () => setConnectedOneDrive(!connectedOneDrive) },
              ].map(s => (
                <div className="creator-setting-row" key={s.name} style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 14, padding: "20px 22px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <div style={{ width: 44, height: 44, borderRadius: 11, background: `${s.logoColor}12`, border: `1px solid ${s.logoColor}25`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 900, color: s.logoColor }}>
                      {s.logo}
                    </div>
                    <div>
                      <div style={{ fontSize: 14.5, fontWeight: 700, color: "#0F172A" }}>{s.name}</div>
                      <div style={{ fontSize: 12.5, color: s.connected ? "#16A34A" : "#94A3B8", fontWeight: s.connected ? 600 : 400 }}>
                        {s.connected ? "✓ Connected and syncing" : s.sub}
                      </div>
                    </div>
                  </div>
                  <button onClick={s.toggle} style={{ padding: "9px 20px", border: s.connected ? "1.5px solid #E2E8F0" : "none", borderRadius: 9, background: s.connected ? "white" : "#2563EB", color: s.connected ? "#64748B" : "white", fontSize: 13, fontWeight: 700, cursor: "pointer", transition: "all 0.15s" }}
                    onMouseEnter={e => { if (s.connected) { (e.currentTarget as HTMLElement).style.borderColor = "#FCA5A5"; (e.currentTarget as HTMLElement).style.color = "#DC2626"; } }}
                    onMouseLeave={e => { if (s.connected) { (e.currentTarget as HTMLElement).style.borderColor = "#E2E8F0"; (e.currentTarget as HTMLElement).style.color = "#64748B"; } }}>
                    {s.connected ? "Disconnect" : "Connect"}
                  </button>
                </div>
              ))}

              <div style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 14, padding: "20px 22px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "#0F172A" }}>Wispfolio storage</div>
                    <div style={{ fontSize: 12, color: "#94A3B8" }}>Metadata, notes, and settings (not your files)</div>
                  </div>
                  <span style={{ fontSize: 13, fontWeight: 700, color: "#2563EB" }}>1.2 / 5 GB</span>
                </div>
                <div style={{ height: 6, background: "#F1F5F9", borderRadius: 999, overflow: "hidden" }}>
                  <div style={{ height: "100%", width: "24%", background: "linear-gradient(90deg, #2563EB, #7C3AED)", borderRadius: 999 }} />
                </div>
              </div>
            </div>
          )}

          {/* ── NOTIFICATIONS ── */}
          {tab === "notifications" && (
            <div style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 16, padding: "28px" }}>
              <h3 style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 16, color: "#0F172A", marginBottom: 22 }}>Notification preferences</h3>
              {[
                { key: "follower", label: "New follower", sub: "Someone followed one of your projects" },
                { key: "comments", label: "Project comments", sub: "Someone commented on your update" },
                { key: "milestone", label: "Milestone reached", sub: "You completed a milestone" },
                { key: "digest", label: "Weekly digest", sub: "Weekly summary of your activity and follower growth" },
              ].map((n, i) => (
                <div key={n.key} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 0", borderBottom: i < 3 ? "1px solid #F8FAFF" : "none" }}>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "#0F172A" }}>{n.label}</div>
                    <div style={{ fontSize: 12, color: "#94A3B8", marginTop: 2 }}>{n.sub}</div>
                  </div>
                  <div onClick={() => setNotifs(p => ({ ...p, [n.key]: !p[n.key as keyof typeof p] }))}
                    style={{ width: 44, height: 24, borderRadius: 999, background: notifs[n.key as keyof typeof notifs] ? "#2563EB" : "#E2E8F0", cursor: "pointer", position: "relative", transition: "background 0.2s", flexShrink: 0 }}>
                    <div style={{ position: "absolute", top: 3, left: notifs[n.key as keyof typeof notifs] ? 22 : 3, width: 18, height: 18, borderRadius: "50%", background: "white", transition: "left 0.2s", boxShadow: "0 1px 4px rgba(0,0,0,0.15)" }} />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ── SECURITY ── */}
          {tab === "security" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 16, padding: "28px" }}>
                <h3 style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 16, color: "#0F172A", marginBottom: 18 }}>Change password</h3>
                {["Current password", "New password", "Confirm new password"].map(f => (
                  <div key={f} style={{ marginBottom: 14 }}>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 6 }}>{f}</label>
                    <input type="password" placeholder="••••••••" style={inputStyle}
                      onFocus={e => (e.target.style.borderColor = "#2563EB")}
                      onBlur={e => (e.target.style.borderColor = "#E2E8F0")} />
                  </div>
                ))}
                <button style={{ padding: "10px 22px", background: "#2563EB", color: "white", border: "none", borderRadius: 9, fontSize: 14, fontWeight: 700, cursor: "pointer", marginTop: 6, fontFamily: "Sora, sans-serif" }}>Update password</button>
              </div>
              <div style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 16, padding: "28px" }}>
                <h3 style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 16, color: "#0F172A", marginBottom: 6 }}>Two-factor authentication</h3>
                <p style={{ fontSize: 13.5, color: "#64748B", marginBottom: 16, lineHeight: 1.5 }}>Add an extra layer of security to your account with an authenticator app.</p>
                <button style={{ padding: "10px 20px", border: "1.5px solid #E2E8F0", background: "white", borderRadius: 9, fontSize: 14, fontWeight: 600, color: "#334155", cursor: "pointer", transition: "all 0.15s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#2563EB"; (e.currentTarget as HTMLElement).style.color = "#2563EB"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#E2E8F0"; (e.currentTarget as HTMLElement).style.color = "#334155"; }}>
                  Enable 2FA
                </button>
              </div>
            </div>
          )}

          {/* ── PLAN ── */}
          {tab === "plan" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ background: "linear-gradient(135deg, #EFF6FF, #EDE9FE)", border: "1px solid #BFDBFE", borderRadius: 14, padding: "20px 22px", display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{ width: 44, height: 44, background: "white", borderRadius: 11, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 8px rgba(37,99,235,0.15)" }}>
                  <Zap size={21} color="#2563EB" />
                </div>
                <div>
                  <div style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 16, color: "#1D4ED8" }}>Creator Plan</div>
                  <div style={{ fontSize: 13, color: "#3B82F6" }}>$9/month · Renews July 15, 2026</div>
                </div>
              </div>

              <div style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 14, padding: "24px" }}>
                <h3 style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 15, color: "#0F172A", marginBottom: 6 }}>Upgrade to Creator Pro</h3>
                <p style={{ fontSize: 13, color: "#64748B", marginBottom: 18 }}>Unlock unlimited projects, multiple cloud storages, a custom domain, and more.</p>
                <div className="creator-form-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 20 }}>
                  {["Unlimited projects", "Multiple cloud storages", "Custom domain", "Advanced analytics", "Priority support", "Pro badge + early access"].map(f => (
                    <div key={f} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <div style={{ width: 18, height: 18, borderRadius: "50%", background: "#EDE9FE", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <Check size={10} color="#7C3AED" strokeWidth={3} />
                      </div>
                      <span style={{ fontSize: 13, color: "#334155" }}>{f}</span>
                    </div>
                  ))}
                </div>
                <button style={{ display: "flex", alignItems: "center", gap: 7, padding: "11px 24px", background: "#7C3AED", color: "white", border: "none", borderRadius: 9, fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "Sora, sans-serif", transition: "background 0.15s" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "#6D28D9")}
                  onMouseLeave={e => (e.currentTarget.style.background = "#7C3AED")}>
                  Upgrade to Pro — $24/mo <ArrowRight size={14} />
                </button>
              </div>

              <div style={{ background: "white", border: "1.5px solid #FEE2E2", borderRadius: 14, padding: "20px 22px" }}>
                <h3 style={{ fontWeight: 700, fontSize: 14, color: "#DC2626", marginBottom: 4 }}>Cancel plan</h3>
                <p style={{ fontSize: 13, color: "#94A3B8", marginBottom: 14 }}>You'll keep access until the end of your billing period. Your projects and data will be preserved.</p>
                <button style={{ padding: "8px 18px", border: "1.5px solid #FCA5A5", background: "white", borderRadius: 8, fontSize: 13, fontWeight: 600, color: "#DC2626", cursor: "pointer" }}>Cancel plan</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
