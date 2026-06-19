"use client";
import { useState } from "react";
import { Search, Zap, Ban, Check, ChevronDown, MoreHorizontal, X } from "lucide-react";

const INITIAL_CREATORS = [
  { id: 1, name: "Sarah Chen", handle: "@sarahbuilds", email: "sarah@example.com", plan: "Creator", projects: 4, followers: 128, joined: "May 12, 2025", status: "Active", banned: false },
  { id: 2, name: "Marcus Dev", handle: "@marcusdev", email: "marcus@example.com", plan: "Pro", projects: 7, followers: 542, joined: "Apr 3, 2025", status: "Active", banned: false },
  { id: 3, name: "Priya Design", handle: "@priyaux", email: "priya@example.com", plan: "Creator", projects: 3, followers: 89, joined: "Jun 1, 2025", status: "Active", banned: false },
  { id: 4, name: "Alex Builds", handle: "@alexbuilds", email: "alex@example.com", plan: "Pro", projects: 12, followers: 1200, joined: "Mar 15, 2025", status: "Active", banned: false },
  { id: 5, name: "Jamie Code", handle: "@jamiec", email: "jamie@example.com", plan: "Creator", projects: 2, followers: 34, joined: "Jun 8, 2025", status: "Active", banned: false },
  { id: 6, name: "Spam User", handle: "@spammy", email: "spam@bad.com", plan: "Creator", projects: 0, followers: 0, joined: "Jun 10, 2025", status: "Banned", banned: true },
];

type Creator = typeof INITIAL_CREATORS[number];

export default function AdminCreatorsPage() {
  const [creators, setCreators] = useState(INITIAL_CREATORS);
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState<{ type: "ban" | "pro" | "unban"; creator: Creator } | null>(null);

  const filtered = creators.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.handle.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase())
  );

  function assignPro(id: number) {
    setCreators((prev) => prev.map((c) => (c.id === id ? { ...c, plan: "Pro" } : c)));
    setModal(null);
  }

  function toggleBan(id: number) {
    setCreators((prev) =>
      prev.map((c) =>
        c.id === id
          ? { ...c, banned: !c.banned, status: c.banned ? "Active" : "Banned" }
          : c
      )
    );
    setModal(null);
  }

  return (
    <div style={{ padding: "32px 36px", color: "white" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24, flexWrap: "wrap", gap: 12 }}>
        <div>
          <h1 style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 22, color: "#0F172A", letterSpacing: "-0.02em", marginBottom: 4 }}>Creators</h1>
          <p style={{ fontSize: 14, color: "#64748B" }}>{creators.filter((c) => !c.banned).length} active creators</p>
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <div style={{ position: "relative" }}>
            <Search size={14} color="#94A3B8" style={{ position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)" }} />
            <input
              placeholder="Search creators..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ padding: "9px 12px 9px 32px", border: "1.5px solid #E2E8F0", borderRadius: 8, fontSize: 13, outline: "none", width: 220, background: "white" }}
            />
          </div>
        </div>
      </div>

      <div style={{ background: "#1E293B", border: "1px solid #334155", borderRadius: 14, overflow: "hidden" }}>
        <table className="data-table" style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "#F8FAFF" }}>
              <th>Creator</th>
              <th>Plan</th>
              <th>Projects</th>
              <th>Followers</th>
              <th>Joined</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((creator) => (
              <tr key={creator.id}>
                <td>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 32, height: 32, borderRadius: "50%", background: creator.banned ? "#F1F5F9" : "#DBEAFE", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 12, color: creator.banned ? "#94A3B8" : "#1D4ED8", flexShrink: 0 }}>
                      {creator.name.charAt(0)}
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: 14, color: creator.banned ? "#94A3B8" : "#0F172A" }}>{creator.name}</div>
                      <div style={{ fontSize: 12, color: "#94A3B8" }}>{creator.email}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <span style={{
                    display: "inline-flex", alignItems: "center", gap: 4,
                    padding: "3px 10px", borderRadius: 999, fontSize: 11, fontWeight: 700,
                    background: creator.plan === "Pro" ? "#EDE9FE" : "#EFF6FF",
                    color: creator.plan === "Pro" ? "#7C3AED" : "#2563EB",
                  }}>
                    {creator.plan === "Pro" && <Zap size={10} />}
                    {creator.plan}
                  </span>
                </td>
                <td style={{ fontWeight: 600 }}>{creator.projects}</td>
                <td style={{ fontWeight: 600 }}>{creator.followers.toLocaleString()}</td>
                <td style={{ color: "#64748B" }}>{creator.joined}</td>
                <td>
                  <span style={{
                    padding: "3px 10px", borderRadius: 999, fontSize: 11, fontWeight: 700,
                    background: creator.status === "Banned" ? "#FEE2E2" : "#DCFCE7",
                    color: creator.status === "Banned" ? "#DC2626" : "#16A34A",
                  }}>
                    {creator.status}
                  </span>
                </td>
                <td>
                  <div style={{ display: "flex", gap: 6 }}>
                    {creator.plan !== "Pro" && !creator.banned && (
                      <button
                        onClick={() => setModal({ type: "pro", creator })}
                        style={{ display: "flex", alignItems: "center", gap: 4, padding: "5px 10px", border: "1.5px solid #7C3AED", borderRadius: 6, background: "white", color: "#7C3AED", fontSize: 12, fontWeight: 600, cursor: "pointer" }}
                      >
                        <Zap size={11} /> Pro
                      </button>
                    )}
                    {!creator.banned ? (
                      <button
                        onClick={() => setModal({ type: "ban", creator })}
                        style={{ display: "flex", alignItems: "center", gap: 4, padding: "5px 10px", border: "1.5px solid #FCA5A5", borderRadius: 6, background: "white", color: "#DC2626", fontSize: 12, fontWeight: 600, cursor: "pointer" }}
                      >
                        <Ban size={11} /> Ban
                      </button>
                    ) : (
                      <button
                        onClick={() => setModal({ type: "unban", creator })}
                        style={{ display: "flex", alignItems: "center", gap: 4, padding: "5px 10px", border: "1.5px solid #86EFAC", borderRadius: 6, background: "white", color: "#16A34A", fontSize: 12, fontWeight: 600, cursor: "pointer" }}
                      >
                        <Check size={11} /> Unban
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {modal && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100 }}>
          <div style={{ background: "white", borderRadius: 16, padding: "28px", maxWidth: 400, width: "90%", boxShadow: "0 20px 60px rgba(0,0,0,0.2)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
              <h3 style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 17, color: "#0F172A" }}>
                {modal.type === "pro" && "Assign Pro Plan"}
                {modal.type === "ban" && "Ban Creator"}
                {modal.type === "unban" && "Unban Creator"}
              </h3>
              <button onClick={() => setModal(null)} style={{ background: "none", border: "none", cursor: "pointer", color: "#94A3B8" }}>
                <X size={18} />
              </button>
            </div>

            <p style={{ fontSize: 14, color: "#64748B", marginBottom: 20, lineHeight: 1.6 }}>
              {modal.type === "pro" && `Assign the Pro plan to ${modal.creator.name} (${modal.creator.handle}) for free as part of beta testing. They will get full Pro access immediately.`}
              {modal.type === "ban" && `This will ban ${modal.creator.name} (${modal.creator.handle}) and prevent them from accessing the platform. This action can be reversed.`}
              {modal.type === "unban" && `This will restore access for ${modal.creator.name} (${modal.creator.handle}). They will be able to log in again immediately.`}
            </p>

            <div style={{ display: "flex", gap: 10, justifyContent: "flex-end" }}>
              <button onClick={() => setModal(null)} style={{ padding: "9px 18px", border: "1.5px solid #E2E8F0", borderRadius: 8, background: "white", fontSize: 13, fontWeight: 600, color: "#64748B", cursor: "pointer" }}>
                Cancel
              </button>
              <button
                onClick={() => {
                  if (modal.type === "pro") assignPro(modal.creator.id);
                  else toggleBan(modal.creator.id);
                }}
                style={{
                  padding: "9px 18px",
                  border: "none",
                  borderRadius: 8,
                  background: modal.type === "ban" ? "#DC2626" : modal.type === "unban" ? "#16A34A" : "#7C3AED",
                  color: "white",
                  fontSize: 13,
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                {modal.type === "pro" && "Assign Pro"}
                {modal.type === "ban" && "Ban Creator"}
                {modal.type === "unban" && "Restore Access"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
