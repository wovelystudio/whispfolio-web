"use client";
import { useState } from "react";
import { Shield, CheckCircle, XCircle, Clock, Search, ExternalLink } from "lucide-react";

const APPLICATIONS = [
  { id: 1, name: "Sarah Kim", username: "@sarahbuilds", type: "Designer", submitted: "2 days ago", website: "sarahkim.design", status: "Pending", desc: "UI/UX designer building design systems in public. 3 years of experience." },
  { id: 2, name: "Alan Torres", username: "@alant", type: "Developer", submitted: "3 days ago", website: "github.com/alant", status: "Pending", desc: "Open source developer and indie hacker. Building CLI tools." },
  { id: 3, name: "Mira Osei", username: "@miraosei", type: "Artist", submitted: "3 days ago", website: "instagram.com/miraosei", status: "Pending", desc: "Digital artist and illustrator. Sharing my creative process publicly." },
  { id: 4, name: "Jake Chen", username: "@jakebuilds", type: "Entrepreneur", submitted: "5 days ago", website: "jakechen.co", status: "Approved", desc: "Founder building micro SaaS products. First to market on Wispfolio." },
  { id: 5, name: "Priya Singh", username: "@priyaux", type: "Designer", submitted: "1 week ago", website: "priya.design", status: "Rejected", desc: "Product designer at a startup. Building my first indie product." },
];

export default function AdminVerificationsPage() {
  const [filter, setFilter] = useState("Pending");
  const [search, setSearch] = useState("");
  const [apps, setApps] = useState(APPLICATIONS);

  const updateStatus = (id: number, status: string) => {
    setApps(prev => prev.map(a => a.id === id ? { ...a, status } : a));
  };

  const filtered = apps
    .filter(a => filter === "All" || a.status === filter)
    .filter(a => a.name.toLowerCase().includes(search.toLowerCase()) || a.username.includes(search.toLowerCase()));

  const counts = { Pending: apps.filter(a => a.status === "Pending").length, Approved: apps.filter(a => a.status === "Approved").length, Rejected: apps.filter(a => a.status === "Rejected").length };

  return (
    <div style={{ padding: "32px 36px" }}>
      {/* Header */}
      <div style={{ marginBottom: 28 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 8 }}>
          <Shield size={14} color="#94A3B8" />
          <span style={{ fontSize: 12, fontWeight: 700, color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.06em" }}>Admin Panel</span>
        </div>
        <h1 style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 24, color: "#0F172A", letterSpacing: "-0.02em", marginBottom: 4 }}>Verification Requests</h1>
        <p style={{ fontSize: 14, color: "#64748B" }}>Review and manage creator verification applications</p>
      </div>

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14, marginBottom: 28, maxWidth: 600 }}>
        {[
          { label: "Pending", val: counts.Pending, color: "#EDE9FE", ic: "#7C3AED", icon: Clock },
          { label: "Approved", val: counts.Approved, color: "#DBEAFE", ic: "#2563EB", icon: CheckCircle },
          { label: "Rejected", val: counts.Rejected, color: "#F3E8FF", ic: "#9333EA", icon: XCircle },
        ].map(s => (
          <div key={s.label} style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 12, padding: "18px 16px", display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 40, height: 40, background: s.color, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <s.icon size={18} color={s.ic} />
            </div>
            <div>
              <div style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 22, color: "#0F172A" }}>{s.val}</div>
              <div style={{ fontSize: 12, fontWeight: 600, color: "#64748B" }}>{s.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Filter + Search */}
      <div style={{ display: "flex", gap: 12, marginBottom: 20, flexWrap: "wrap" }}>
        <div style={{ display: "flex", gap: 6 }}>
          {["All", "Pending", "Approved", "Rejected"].map(f => (
            <button key={f} onClick={() => setFilter(f)} style={{ padding: "7px 14px", borderRadius: 8, fontSize: 13, fontWeight: 600, border: "1.5px solid", borderColor: filter === f ? "#7C3AED" : "#E2E8F0", background: filter === f ? "#EDE9FE" : "white", color: filter === f ? "#7C3AED" : "#64748B", cursor: "pointer", transition: "all 0.15s" }}>
              {f}
            </button>
          ))}
        </div>
        <div style={{ position: "relative" }}>
          <Search size={14} color="#94A3B8" style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)" }} />
          <input className="input" placeholder="Search applicants..." value={search} onChange={e => setSearch(e.target.value)} style={{ paddingLeft: 34, height: 40 }} />
        </div>
      </div>

      {/* Applications */}
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {filtered.map(app => (
          <div key={app.id} style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 14, padding: "20px 24px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 16 }}>
              <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                {/* Avatar */}
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: "linear-gradient(135deg, #2563EB, #7C3AED)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 700, fontSize: 16, flexShrink: 0 }}>
                  {app.name[0]}
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
                    <span style={{ fontWeight: 700, fontSize: 15, color: "#0F172A" }}>{app.name}</span>
                    <span style={{ fontSize: 13, color: "#7C3AED", fontWeight: 600 }}>{app.username}</span>
                    <span style={{ background: "#EDE9FE", color: "#7C3AED", fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 999 }}>{app.type}</span>
                  </div>
                  <p style={{ fontSize: 14, color: "#475569", lineHeight: 1.5, marginBottom: 8, maxWidth: 480 }}>{app.desc}</p>
                  <a href={`https://${app.website}`} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 12, color: "#64748B", textDecoration: "none" }}>
                    <ExternalLink size={12} /> {app.website}
                  </a>
                </div>
              </div>

              {/* Status + Actions */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 10, flexShrink: 0 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ fontSize: 12, color: "#94A3B8" }}>{app.submitted}</span>
                  <span style={{
                    padding: "3px 10px", borderRadius: 999, fontSize: 11, fontWeight: 700,
                    background: app.status === "Pending" ? "#EDE9FE" : app.status === "Approved" ? "#DBEAFE" : "#F3E8FF",
                    color: app.status === "Pending" ? "#7C3AED" : app.status === "Approved" ? "#2563EB" : "#9333EA",
                  }}>{app.status}</span>
                </div>
                {app.status === "Pending" && (
                  <div style={{ display: "flex", gap: 8 }}>
                    <button onClick={() => updateStatus(app.id, "Rejected")}
                      style={{ padding: "7px 16px", background: "white", border: "1.5px solid #E2E8F0", borderRadius: 8, fontSize: 13, fontWeight: 600, color: "#64748B", cursor: "pointer", transition: "all 0.15s" }}
                      onMouseEnter={e => { (e.currentTarget).style.borderColor = "#F3E8FF"; (e.currentTarget).style.color = "#9333EA"; }}
                      onMouseLeave={e => { (e.currentTarget).style.borderColor = "#E2E8F0"; (e.currentTarget).style.color = "#64748B"; }}
                    >
                      <XCircle size={13} style={{ marginRight: 4, display: "inline" }} />Reject
                    </button>
                    <button onClick={() => updateStatus(app.id, "Approved")}
                      style={{ padding: "7px 16px", background: "#7C3AED", border: "none", borderRadius: 8, fontSize: 13, fontWeight: 700, color: "white", cursor: "pointer", transition: "background 0.15s" }}
                      onMouseEnter={e => (e.currentTarget.style.background = "#6D28D9")}
                      onMouseLeave={e => (e.currentTarget.style.background = "#7C3AED")}
                    >
                      <CheckCircle size={13} style={{ marginRight: 4, display: "inline" }} />Approve
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "60px 24px", color: "#94A3B8", fontSize: 15 }}>
            No {filter.toLowerCase()} applications found.
          </div>
        )}
      </div>
    </div>
  );
}
