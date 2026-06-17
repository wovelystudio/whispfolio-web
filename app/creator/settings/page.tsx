"use client";
import { useState } from "react";
import { Cloud, Check, Link2, Bell, Shield, User, Zap, HardDrive, Globe, ArrowRight } from "lucide-react";

const TABS = ["Profile", "Storage", "Notifications", "Security", "Plan"];

export default function CreatorSettingsPage() {
  const [tab, setTab] = useState("Profile");
  const [connectedDrive, setConnectedDrive] = useState(false);
  const [connectedOneDrive, setConnectedOneDrive] = useState(false);

  return (
    <div style={{ padding: "32px 36px", maxWidth: 860 }}>
      <div style={{ marginBottom: 28 }}>
        <h1 style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 24, color: "#0F172A", letterSpacing: "-0.02em", marginBottom: 4 }}>Settings</h1>
        <p style={{ fontSize: 14, color: "#64748B" }}>Manage your Creator Studio preferences and integrations.</p>
      </div>

      {/* Tab bar */}
      <div style={{ display: "flex", gap: 4, borderBottom: "1px solid #E2E8F0", marginBottom: 28 }}>
        {TABS.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            style={{
              padding: "9px 16px",
              background: "none",
              border: "none",
              borderBottom: `2px solid ${tab === t ? "#2563EB" : "transparent"}`,
              color: tab === t ? "#2563EB" : "#64748B",
              fontWeight: tab === t ? 600 : 500,
              fontSize: 14,
              cursor: "pointer",
              marginBottom: -1,
              transition: "all 0.15s",
            }}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Profile */}
      {tab === "Profile" && (
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 14, padding: "24px" }}>
            <h3 style={{ fontWeight: 700, fontSize: 15, color: "#0F172A", marginBottom: 20 }}>Public profile</h3>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
              <div style={{ width: 64, height: 64, borderRadius: "50%", background: "#2563EB", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 800, fontSize: 22, fontFamily: "Sora, sans-serif" }}>Y</div>
              <div>
                <button style={{ padding: "8px 16px", border: "1.5px solid #E2E8F0", borderRadius: 8, background: "white", fontSize: 13, fontWeight: 600, cursor: "pointer", color: "#334155" }}>Change photo</button>
                <p style={{ fontSize: 12, color: "#94A3B8", marginTop: 4 }}>JPG or PNG, max 2MB</p>
              </div>
            </div>
            {[
              { label: "Display name", placeholder: "Your Name", type: "text" },
              { label: "Username", placeholder: "@yourhandle", type: "text" },
              { label: "Email", placeholder: "you@example.com", type: "email" },
              { label: "Bio", placeholder: "Tell people what you build...", type: "textarea" },
            ].map((f) => (
              <div key={f.label} style={{ marginBottom: 16 }}>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 6 }}>{f.label}</label>
                {f.type === "textarea" ? (
                  <textarea placeholder={f.placeholder} rows={3} style={{ width: "100%", padding: "10px 14px", border: "1.5px solid #E2E8F0", borderRadius: 8, fontSize: 14, resize: "vertical", outline: "none", boxSizing: "border-box", color: "#0F172A" }} />
                ) : (
                  <input type={f.type} placeholder={f.placeholder} style={{ width: "100%", padding: "10px 14px", border: "1.5px solid #E2E8F0", borderRadius: 8, fontSize: 14, outline: "none", boxSizing: "border-box", color: "#0F172A" }} />
                )}
              </div>
            ))}
            <button style={{ padding: "10px 24px", background: "#2563EB", color: "white", border: "none", borderRadius: 8, fontSize: 14, fontWeight: 600, cursor: "pointer" }}>Save changes</button>
          </div>
        </div>
      )}

      {/* Storage */}
      {tab === "Storage" && (
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ background: "#F0F9FF", border: "1px solid #BAE6FD", borderRadius: 12, padding: "16px 18px", display: "flex", gap: 12 }}>
            <Cloud size={18} color="#0284C7" style={{ flexShrink: 0, marginTop: 1 }} />
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, color: "#0369A1" }}>Connect your cloud storage</div>
              <div style={{ fontSize: 13, color: "#7DD3FC", marginTop: 2 }}>Your files stay in your own storage. Wispfolio just links to them — we never store your data.</div>
            </div>
          </div>

          {[
            { name: "Google Drive", sub: "Connect your Google Drive folders", logo: "G", connected: connectedDrive, toggle: () => setConnectedDrive(!connectedDrive), color: "#EA4335" },
            { name: "Microsoft OneDrive", sub: "Connect your OneDrive workspace", logo: "OD", connected: connectedOneDrive, toggle: () => setConnectedOneDrive(!connectedOneDrive), color: "#0078D4" },
          ].map((s) => (
            <div key={s.name} style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 14, padding: "20px 22px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{ width: 42, height: 42, borderRadius: 10, background: `${s.color}18`, border: `1px solid ${s.color}30`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 800, color: s.color }}>
                  {s.logo}
                </div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 600, color: "#0F172A" }}>{s.name}</div>
                  <div style={{ fontSize: 13, color: s.connected ? "#16A34A" : "#94A3B8" }}>{s.connected ? "✓ Connected" : s.sub}</div>
                </div>
              </div>
              <button
                onClick={s.toggle}
                style={{
                  padding: "9px 20px",
                  border: s.connected ? "1.5px solid #E2E8F0" : "none",
                  borderRadius: 8,
                  background: s.connected ? "white" : "#2563EB",
                  color: s.connected ? "#64748B" : "white",
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.15s",
                }}
              >
                {s.connected ? "Disconnect" : "Connect"}
              </button>
            </div>
          ))}

          <div style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 14, padding: "20px 22px" }}>
            <h3 style={{ fontWeight: 700, fontSize: 14, color: "#0F172A", marginBottom: 4 }}>Storage usage</h3>
            <p style={{ fontSize: 13, color: "#64748B", marginBottom: 14 }}>Wispfolio metadata (not your files)</p>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
              <span style={{ fontSize: 13, color: "#64748B" }}>Used</span>
              <span style={{ fontSize: 13, fontWeight: 600, color: "#0F172A" }}>1.2 GB / 5 GB</span>
            </div>
            <div style={{ height: 6, background: "#E2E8F0", borderRadius: 999, overflow: "hidden" }}>
              <div style={{ height: "100%", width: "24%", background: "#2563EB", borderRadius: 999 }} />
            </div>
          </div>
        </div>
      )}

      {/* Notifications */}
      {tab === "Notifications" && (
        <div style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 14, padding: "24px" }}>
          <h3 style={{ fontWeight: 700, fontSize: 15, color: "#0F172A", marginBottom: 20 }}>Notification preferences</h3>
          {[
            { label: "New follower", sub: "When someone follows your project" },
            { label: "Project comments", sub: "When someone comments on your updates" },
            { label: "Milestone reached", sub: "When a project reaches a milestone" },
            { label: "Weekly digest", sub: "A weekly summary of your activity" },
          ].map((n, i) => (
            <div key={n.label} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 0", borderBottom: i < 3 ? "1px solid #F1F5F9" : "none" }}>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#0F172A" }}>{n.label}</div>
                <div style={{ fontSize: 12, color: "#94A3B8" }}>{n.sub}</div>
              </div>
              <div style={{ width: 40, height: 22, borderRadius: 999, background: i % 2 === 0 ? "#2563EB" : "#E2E8F0", cursor: "pointer", position: "relative", transition: "background 0.15s", flexShrink: 0 }}>
                <div style={{ position: "absolute", top: 3, left: i % 2 === 0 ? 20 : 3, width: 16, height: 16, borderRadius: "50%", background: "white", transition: "left 0.15s" }} />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Security */}
      {tab === "Security" && (
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 14, padding: "24px" }}>
            <h3 style={{ fontWeight: 700, fontSize: 15, color: "#0F172A", marginBottom: 16 }}>Change password</h3>
            {["Current password", "New password", "Confirm new password"].map((f) => (
              <div key={f} style={{ marginBottom: 14 }}>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 6 }}>{f}</label>
                <input type="password" placeholder="••••••••" style={{ width: "100%", padding: "10px 14px", border: "1.5px solid #E2E8F0", borderRadius: 8, fontSize: 14, outline: "none", boxSizing: "border-box" }} />
              </div>
            ))}
            <button style={{ padding: "10px 20px", background: "#2563EB", color: "white", border: "none", borderRadius: 8, fontSize: 14, fontWeight: 600, cursor: "pointer" }}>Update password</button>
          </div>
          <div style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 14, padding: "24px" }}>
            <h3 style={{ fontWeight: 700, fontSize: 15, color: "#0F172A", marginBottom: 4 }}>Two-factor authentication</h3>
            <p style={{ fontSize: 13, color: "#64748B", marginBottom: 14 }}>Add an extra layer of security to your account.</p>
            <button style={{ padding: "10px 20px", border: "1.5px solid #E2E8F0", background: "white", borderRadius: 8, fontSize: 14, fontWeight: 600, color: "#334155", cursor: "pointer" }}>Enable 2FA</button>
          </div>
        </div>
      )}

      {/* Plan */}
      {tab === "Plan" && (
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ background: "#EFF6FF", border: "1px solid #BFDBFE", borderRadius: 14, padding: "20px 22px", display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ width: 42, height: 42, background: "#DBEAFE", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Zap size={20} color="#2563EB" />
            </div>
            <div>
              <div style={{ fontSize: 16, fontWeight: 700, color: "#1D4ED8" }}>Creator Plan</div>
              <div style={{ fontSize: 13, color: "#3B82F6" }}>$9/month · Renews on July 15, 2025</div>
            </div>
          </div>
          <div style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 14, padding: "24px" }}>
            <h3 style={{ fontWeight: 700, fontSize: 15, color: "#0F172A", marginBottom: 16 }}>Upgrade to Creator Pro</h3>
            {["Unlimited projects", "Connect multiple cloud storages", "Custom domain for share page", "Advanced analytics", "Priority support", "Pro badge"].map((f) => (
              <div key={f} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                <Check size={14} color="#2563EB" strokeWidth={2.5} />
                <span style={{ fontSize: 14, color: "#334155" }}>{f}</span>
              </div>
            ))}
            <button style={{ marginTop: 12, padding: "10px 24px", background: "#2563EB", color: "white", border: "none", borderRadius: 8, fontSize: 14, fontWeight: 600, cursor: "pointer" }}>Upgrade to Pro — $24/mo</button>
          </div>
        </div>
      )}
    </div>
  );
}
