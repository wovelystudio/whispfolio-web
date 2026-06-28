"use client";
import { useState } from "react";
import { HardDrive, Cloud, File, Image, FileText, ExternalLink, Search, Grid, List, Upload, ShieldAlert } from "lucide-react";

const ASSETS = [
  { id: 1, name: "Brand kit v3.fig", type: "figma", size: "8.2 MB", folder: "Design", updated: "Today", color: "#EDE9FE", ic: "#7C3AED" },
  { id: 2, name: "Landing hero.png", type: "image", size: "1.4 MB", folder: "Design", updated: "Yesterday", color: "#DBEAFE", ic: "#2563EB" },
  { id: 3, name: "Product spec v2.pdf", type: "pdf", size: "340 KB", folder: "Docs", updated: "Jun 10", color: "#FFE4E6", ic: "#E11D48" },
  { id: 4, name: "User research notes.md", type: "doc", size: "24 KB", folder: "Docs", updated: "Jun 8", color: "#FEF9C3", ic: "#CA8A04" },
  { id: 5, name: "Demo video raw.mp4", type: "video", size: "214 MB", folder: "Media", updated: "Jun 5", color: "#DCFCE7", ic: "#16A34A" },
  { id: 6, name: "App icon set.zip", type: "archive", size: "3.1 MB", folder: "Design", updated: "Jun 3", color: "#E0F2FE", ic: "#0284C7" },
];

const FOLDERS = ["All", "Design", "Docs", "Media"];

const TYPE_ICON: Record<string, typeof File> = { figma: FileText, image: Image, pdf: FileText, doc: FileText, video: FileText, archive: File };

export default function AssetsPage() {
  const [assets, setAssets] = useState(ASSETS);
  const [connected, setConnected] = useState<string[]>([]);
  const [activeFolder, setActiveFolder] = useState("All");
  const [search, setSearch] = useState("");
  const [view, setView] = useState<"grid" | "list">("list");
  const [showConnect, setShowConnect] = useState(false);

  const filtered = assets.filter(a =>
    (activeFolder === "All" || a.folder === activeFolder) &&
    a.name.toLowerCase().includes(search.toLowerCase())
  );

  const isConnected = connected.length > 0;

  return (
    <div className="creator-page" style={{ padding: "32px 40px", width: "100%" }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 28, flexWrap: "wrap", gap: 16 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
            <div style={{ width: 34, height: 34, background: "#F3E8FF", borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <HardDrive size={17} color="#9333EA" />
            </div>
            <span style={{ fontSize: 13, fontWeight: 700, color: "#9333EA", fontFamily: "Sora, sans-serif" }}>Asset Library</span>
          </div>
          <h1 style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 24, color: "#0F172A", letterSpacing: "-0.02em", marginBottom: 4 }}>
            Everything in one place
          </h1>
          <p style={{ fontSize: 14, color: "#64748B" }}>
            {isConnected ? `${filtered.length} files across ${FOLDERS.length - 1} folders` : "Connect your cloud storage to get started"}
          </p>
        </div>
        <button onClick={() => setShowConnect(true)} style={{ display: "flex", alignItems: "center", gap: 6, padding: "10px 18px", background: isConnected ? "white" : "#7C3AED", color: isConnected ? "#7C3AED" : "white", border: isConnected ? "1.5px solid #EDE9FE" : "none", borderRadius: 9, fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "Sora, sans-serif", transition: "all 0.15s" }}>
          <Cloud size={14} /> {isConnected ? "Manage storage" : "Connect storage"}
        </button>
      </div>

      <div style={{ display: "flex", gap: 10, alignItems: "flex-start", background: "#F5F3FF", border: "1px solid #C4B5FD", borderRadius: 12, padding: "12px 14px", marginBottom: 18 }}>
        <ShieldAlert size={16} color="#7C3AED" style={{ flexShrink: 0, marginTop: 1 }} />
        <p style={{ fontSize: 12.5, color: "#6D28D9", lineHeight: 1.55 }}>
          Uploaded files and image licenses remain your responsibility. Wispfolio helps organize assets; it does not verify ownership or clear copyright claims.
        </p>
      </div>

      {/* Connect prompt if not connected */}
      {!isConnected && (
        <div style={{ background: "linear-gradient(135deg, #F8FAFF, #F5F3FF)", border: "1.5px dashed #C4B5FD", borderRadius: 16, padding: "48px 32px", textAlign: "center", marginBottom: 28 }}>
          <div style={{ width: 56, height: 56, background: "#EDE9FE", borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
            <Cloud size={26} color="#7C3AED" />
          </div>
          <h3 style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 18, color: "#0F172A", marginBottom: 8 }}>Connect your cloud storage</h3>
          <p style={{ fontSize: 14, color: "#64748B", lineHeight: 1.6, maxWidth: 380, margin: "0 auto 24px" }}>
            Link Google Drive or OneDrive to browse and organise your project files right here. Your files stay in your storage — we just show them.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <button onClick={() => { setConnected(["Google Drive"]); }} style={{ display: "flex", alignItems: "center", gap: 8, padding: "11px 22px", background: "white", border: "1.5px solid #E2E8F0", borderRadius: 9, fontSize: 14, fontWeight: 600, cursor: "pointer", transition: "all 0.15s", color: "#334155" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#7C3AED"; (e.currentTarget as HTMLElement).style.color = "#7C3AED"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#E2E8F0"; (e.currentTarget as HTMLElement).style.color = "#334155"; }}>
              <span style={{ fontWeight: 800, color: "#EA4335", fontSize: 13 }}>G</span> Google Drive
            </button>
            <button onClick={() => { setConnected(["OneDrive"]); }} style={{ display: "flex", alignItems: "center", gap: 8, padding: "11px 22px", background: "white", border: "1.5px solid #E2E8F0", borderRadius: 9, fontSize: 14, fontWeight: 600, cursor: "pointer", transition: "all 0.15s", color: "#334155" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#7C3AED"; (e.currentTarget as HTMLElement).style.color = "#7C3AED"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#E2E8F0"; (e.currentTarget as HTMLElement).style.color = "#334155"; }}>
              <span style={{ fontWeight: 800, color: "#0078D4", fontSize: 13 }}>OD</span> OneDrive
            </button>
          </div>
        </div>
      )}

      {/* File browser (shown when connected) */}
      {isConnected && (
        <>
          {/* Connected badge */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, background: "#F0FDF4", border: "1px solid #BBF7D0", borderRadius: 10, padding: "10px 14px", marginBottom: 20 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#16A34A" }} />
            <span style={{ fontSize: 13, fontWeight: 600, color: "#16A34A" }}>Connected to {connected.join(" & ")}</span>
            <span style={{ fontSize: 12, color: "#64748B", marginLeft: "auto" }}>Last synced: just now</span>
          </div>

          {/* Toolbar */}
          <div className="creator-toolbar" style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 18, flexWrap: "wrap" }}>
            <div style={{ position: "relative", flex: 1, maxWidth: 280 }}>
              <Search size={13} color="#94A3B8" style={{ position: "absolute", left: 11, top: "50%", transform: "translateY(-50%)" }} />
              <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search files..." style={{ width: "100%", padding: "8px 12px 8px 32px", border: "1.5px solid #E2E8F0", borderRadius: 8, fontSize: 13, outline: "none", boxSizing: "border-box" }} />
            </div>
            <div className="creator-chip-row" style={{ display: "flex", gap: 5 }}>
              {FOLDERS.map(f => (
                <button key={f} onClick={() => setActiveFolder(f)} style={{ padding: "7px 13px", borderRadius: 8, border: "1.5px solid", fontSize: 12, fontWeight: 600, cursor: "pointer", transition: "all 0.15s", background: activeFolder === f ? "#7C3AED" : "white", borderColor: activeFolder === f ? "#7C3AED" : "#E2E8F0", color: activeFolder === f ? "white" : "#64748B" }}>
                  {f}
                </button>
              ))}
            </div>
            <label style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "8px 14px", borderRadius: 8, border: "1.5px dashed #C4B5FD", color: "#7C3AED", background: "white", fontSize: 12, fontWeight: 800, cursor: "pointer" }}>
              <Upload size={13} /> Upload asset
              <input type="file" accept="image/*,.pdf,.zip,.md,.mp4" style={{ display: "none" }} onChange={(e) => {
                const file = e.target.files?.[0];
                if (!file) return;
                setAssets(prev => [{
                  id: Date.now(),
                  name: file.name,
                  type: file.type.startsWith("image/") ? "image" : "doc",
                  size: `${Math.max(1, Math.round(file.size / 1024))} KB`,
                  folder: "Design",
                  updated: "Just now",
                  color: "#EDE9FE",
                  ic: "#7C3AED",
                }, ...prev]);
              }} />
            </label>
            <div className="creator-view-toggle" style={{ display: "flex", gap: 3, background: "#F1F5F9", borderRadius: 8, padding: 3, marginLeft: "auto" }}>
              {[["grid", Grid], ["list", List]].map(([v, Icon]) => (
                <button key={v as string} onClick={() => setView(v as "grid" | "list")} style={{ padding: "5px 8px", borderRadius: 6, border: "none", cursor: "pointer", background: view === v ? "white" : "transparent", color: view === v ? "#0F172A" : "#94A3B8", transition: "all 0.15s" }}>
                  <Icon size={14} />
                </button>
              ))}
            </div>
          </div>

          {/* File list */}
          {view === "list" && (
            <div className="creator-file-list" style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 14, overflow: "hidden" }}>
              <div className="creator-file-list-head" style={{ display: "grid", gridTemplateColumns: "1fr 80px 80px 80px 40px", padding: "10px 16px", background: "#F8FAFF", borderBottom: "1px solid #E2E8F0" }}>
                {["Name", "Folder", "Size", "Updated", ""].map(h => (
                  <div key={h} style={{ fontSize: 11, fontWeight: 700, color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.05em" }}>{h}</div>
                ))}
              </div>
              {filtered.map((a, i) => {
                const IconComp = TYPE_ICON[a.type] || File;
                return (
                  <div className="creator-file-row" key={a.id} style={{ display: "grid", gridTemplateColumns: "1fr 80px 80px 80px 40px", padding: "13px 16px", borderBottom: i < filtered.length - 1 ? "1px solid #F8FAFF" : "none", alignItems: "center", transition: "background 0.1s" }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "#FAFBFF"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "transparent"}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div style={{ width: 30, height: 30, borderRadius: 7, background: a.color, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <IconComp size={14} color={a.ic} />
                      </div>
                      <span style={{ fontSize: 14, fontWeight: 500, color: "#0F172A" }}>{a.name}</span>
                    </div>
                    <span style={{ fontSize: 12, color: "#94A3B8" }}>{a.folder}</span>
                    <span style={{ fontSize: 12, color: "#94A3B8" }}>{a.size}</span>
                    <span style={{ fontSize: 12, color: "#94A3B8" }}>{a.updated}</span>
                    <a href="#" style={{ color: "#94A3B8", transition: "color 0.15s", display: "flex" }}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#2563EB"}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#94A3B8"}>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                );
              })}
            </div>
          )}

          {/* Grid view */}
          {view === "grid" && (
            <div className="creator-card-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 12 }}>
              {filtered.map(a => {
                const IconComp = TYPE_ICON[a.type] || File;
                return (
                  <div key={a.id} style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 12, overflow: "hidden", transition: "all 0.15s", cursor: "pointer" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 16px rgba(0,0,0,0.08)"; (e.currentTarget as HTMLElement).style.borderColor = "#BFDBFE"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; (e.currentTarget as HTMLElement).style.borderColor = "#E2E8F0"; }}>
                    <div style={{ height: 80, background: a.color, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <IconComp size={28} color={a.ic} />
                    </div>
                    <div style={{ padding: "10px 12px" }}>
                      <div style={{ fontSize: 12, fontWeight: 600, color: "#0F172A", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{a.name}</div>
                      <div style={{ fontSize: 11, color: "#94A3B8", marginTop: 2 }}>{a.size}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </>
      )}
    </div>
  );
}
