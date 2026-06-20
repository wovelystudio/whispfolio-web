"use client";
import { useState } from "react";
import { Search, Ban, Check, X, UserCheck, Zap } from "lucide-react";

const INITIAL_USERS = [
  { id: 1, name: "Mike Developer", handle: "@mike_dev", email: "mike@example.com", following: 12, joined: "Jun 1, 2025", status: "Active", banned: false },
  { id: 2, name: "Lisa Art", handle: "@lisaart", email: "lisa@example.com", following: 8, joined: "May 28, 2025", status: "Active", banned: false },
  { id: 3, name: "Tom Student", handle: "@tomstudent", email: "tom@example.com", following: 23, joined: "Apr 14, 2025", status: "Active", banned: false },
  { id: 4, name: "Anna Founder", handle: "@annafounder", email: "anna@example.com", following: 41, joined: "Mar 20, 2025", status: "Active", banned: false },
  { id: 5, name: "Bad Actor", handle: "@badactor99", email: "bad@spam.com", following: 0, joined: "Jun 11, 2025", status: "Banned", banned: true },
  { id: 6, name: "Chris Indie", handle: "@chrisindie", email: "chris@example.com", following: 5, joined: "Jun 5, 2025", status: "Active", banned: false },
];

type User = typeof INITIAL_USERS[number];

export default function AdminUsersPage() {
  const [users, setUsers] = useState(INITIAL_USERS);
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState<{ type: "ban" | "unban" | "upgrade"; user: User } | null>(null);

  const filtered = users.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.handle.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
  );

  function toggleBan(id: number) {
    setUsers((prev) =>
      prev.map((u) => (u.id === id ? { ...u, banned: !u.banned, status: u.banned ? "Active" : "Banned" } : u))
    );
    setModal(null);
  }

  return (
    <div style={{ padding: "32px 36px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24, flexWrap: "wrap", gap: 12 }}>
        <div>
          <h1 style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 22, color: "#0F172A", letterSpacing: "-0.02em", marginBottom: 4 }}>Users</h1>
          <p style={{ fontSize: 14, color: "#64748B" }}>{users.filter((u) => !u.banned).length} active users (followers)</p>
        </div>
        <div style={{ position: "relative" }}>
          <Search size={14} color="#94A3B8" style={{ position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)" }} />
          <input
            placeholder="Search users..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ padding: "9px 12px 9px 32px", border: "1.5px solid #E2E8F0", borderRadius: 8, fontSize: 13, outline: "none", width: 220, background: "white" }}
          />
        </div>
      </div>

      <div style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 14, overflow: "hidden", boxShadow: "0 4px 20px rgba(37,99,235,0.05)" }}>
        <table className="data-table" style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "#F8FAFF" }}>
              <th>User</th>
              <th>Following</th>
              <th>Joined</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((user) => (
              <tr key={user.id}>
                <td>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 32, height: 32, borderRadius: "50%", background: user.banned ? "#F1F5F9" : "#DCFCE7", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 12, color: user.banned ? "#94A3B8" : "#16A34A", flexShrink: 0 }}>
                      {user.name.charAt(0)}
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: 14, color: user.banned ? "#94A3B8" : "#0F172A" }}>{user.name}</div>
                      <div style={{ fontSize: 12, color: "#94A3B8" }}>{user.email}</div>
                    </div>
                  </div>
                </td>
                <td style={{ fontWeight: 600, color: "#334155" }}>{user.following} creators</td>
                <td style={{ color: "#64748B" }}>{user.joined}</td>
                <td>
                  <span style={{
                    padding: "3px 10px", borderRadius: 999, fontSize: 11, fontWeight: 700,
                    background: user.status === "Banned" ? "#FEE2E2" : "#DCFCE7",
                    color: user.status === "Banned" ? "#DC2626" : "#16A34A",
                  }}>
                    {user.status}
                  </span>
                </td>
                <td>
                  <div style={{ display: "flex", gap: 6 }}>
                    {/* Upgrade to creator */}
                    {!user.banned && (
                      <button
                        onClick={() => setModal({ type: "upgrade", user })}
                        style={{ display: "flex", alignItems: "center", gap: 4, padding: "5px 10px", border: "1.5px solid #BFDBFE", borderRadius: 6, background: "white", color: "#2563EB", fontSize: 12, fontWeight: 600, cursor: "pointer" }}
                      >
                        <Zap size={11} /> Upgrade
                      </button>
                    )}
                    {!user.banned ? (
                      <button
                        onClick={() => setModal({ type: "ban", user })}
                        style={{ display: "flex", alignItems: "center", gap: 4, padding: "5px 10px", border: "1.5px solid #FCA5A5", borderRadius: 6, background: "white", color: "#DC2626", fontSize: 12, fontWeight: 600, cursor: "pointer" }}
                      >
                        <Ban size={11} /> Ban
                      </button>
                    ) : (
                      <button
                        onClick={() => setModal({ type: "unban", user })}
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
                {modal.type === "ban" && "Ban User"}
                {modal.type === "unban" && "Restore User"}
                {modal.type === "upgrade" && "Upgrade to Creator"}
              </h3>
              <button onClick={() => setModal(null)} style={{ background: "none", border: "none", cursor: "pointer", color: "#94A3B8" }}>
                <X size={18} />
              </button>
            </div>
            <p style={{ fontSize: 14, color: "#64748B", marginBottom: 20, lineHeight: 1.6 }}>
              {modal.type === "ban" && `This will ban ${modal.user.name} (${modal.user.handle}) from the platform. They will not be able to log in or access their account. This action can be reversed.`}
              {modal.type === "unban" && `Restore access for ${modal.user.name} (${modal.user.handle}). They will be able to log in again.`}
              {modal.type === "upgrade" && `Upgrade ${modal.user.name} to a Creator account. They'll get access to Creator Studio, Project Passport, and all creation tools.`}
            </p>
            <div style={{ display: "flex", gap: 10, justifyContent: "flex-end" }}>
              <button onClick={() => setModal(null)} style={{ padding: "9px 18px", border: "1.5px solid #E2E8F0", borderRadius: 8, background: "white", fontSize: 13, fontWeight: 600, color: "#64748B", cursor: "pointer" }}>Cancel</button>
              <button
                onClick={() => toggleBan(modal.user.id)}
                style={{
                  padding: "9px 18px", border: "none", borderRadius: 8,
                  background: modal.type === "ban" ? "#DC2626" : modal.type === "upgrade" ? "#2563EB" : "#16A34A",
                  color: "white", fontSize: 13, fontWeight: 700, cursor: "pointer",
                }}
              >
                {modal.type === "ban" && "Ban User"}
                {modal.type === "unban" && "Restore Access"}
                {modal.type === "upgrade" && "Upgrade to Creator"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
