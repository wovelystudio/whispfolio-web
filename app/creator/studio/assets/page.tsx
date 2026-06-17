"use client";
import { Cloud, Search, Filter, MoreVertical, FileText, Image as ImageIcon, Video, Folder, UploadCloud } from "lucide-react";

const ASSETS = [
  { id: 1, name: "Brand Guidelines.pdf", type: "pdf", size: "2.4 MB", date: "May 12", icon: FileText, color: "#EF4444" },
  { id: 2, name: "Hero Mockup v2.png", type: "image", size: "4.1 MB", date: "May 14", icon: ImageIcon, color: "#3B82F6" },
  { id: 3, name: "Logo Assets", type: "folder", size: "--", date: "May 10", icon: Folder, color: "#F59E0B" },
  { id: 4, name: "Promo Video Draft.mp4", type: "video", size: "42.8 MB", date: "June 1", icon: Video, color: "#8B5CF6" },
  { id: 5, name: "Copywriting Notes.docx", type: "doc", size: "124 KB", date: "June 2", icon: FileText, color: "#2563EB" },
  { id: 6, name: "Social Banners", type: "folder", size: "--", date: "Yesterday", icon: Folder, color: "#F59E0B" },
];

export default function AssetLibraryPage() {
  return (
    <div style={{ padding: "32px 36px", maxWidth: 1200 }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
        <div>
          <h1 style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 24, color: "#0F172A", marginBottom: 6 }}>Asset Library</h1>
          <p style={{ fontSize: 14, color: "#64748B" }}>Your files, magically synced from your cloud storage.</p>
        </div>
        <button className="btn-primary" style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <UploadCloud size={16} /> Upload Asset
        </button>
      </div>

      {/* Cloud Connection Alert */}
      <div style={{ background: "var(--purple-soft)", border: "1px solid rgba(124, 58, 237, 0.2)", borderRadius: 12, padding: "16px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 32 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 40, height: 40, background: "white", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Cloud size={20} color="var(--purple-wisp)" />
          </div>
          <div>
            <h3 style={{ fontWeight: 600, fontSize: 14, color: "#0F172A" }}>Google Drive Connected</h3>
            <p style={{ fontSize: 13, color: "var(--purple-wisp)" }}>Syncing 'Wispfolio Project' folder</p>
          </div>
        </div>
        <button style={{ padding: "8px 16px", border: "1.5px solid var(--purple-wisp)", borderRadius: 8, background: "transparent", color: "var(--purple-wisp)", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>Manage Connection</button>
      </div>

      {/* Toolbar */}
      <div style={{ display: "flex", gap: 16, marginBottom: 24 }}>
        <div style={{ position: "relative", flex: 1, maxWidth: 400 }}>
          <Search size={16} color="#94A3B8" style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)" }} />
          <input 
            placeholder="Search files and folders..." 
            style={{ width: "100%", padding: "10px 14px 10px 36px", border: "1px solid #E2E8F0", borderRadius: 8, fontSize: 14, outline: "none", background: "white" }}
          />
        </div>
        <button style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 16px", border: "1px solid #E2E8F0", borderRadius: 8, background: "white", cursor: "pointer", color: "#475569", fontSize: 14, fontWeight: 500 }}>
          <Filter size={16} /> Filter
        </button>
      </div>

      {/* Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 20 }}>
        {ASSETS.map(asset => (
          <div key={asset.id} style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 16, padding: "20px", transition: "all 0.2s ease", cursor: "pointer" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(0,0,0,0.04)";
              (e.currentTarget as HTMLElement).style.borderColor = "var(--purple-soft)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
              (e.currentTarget as HTMLElement).style.borderColor = "#E2E8F0";
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
              <div style={{ width: 48, height: 48, background: `${asset.color}15`, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <asset.icon size={24} color={asset.color} />
              </div>
              <button style={{ background: "none", border: "none", color: "#94A3B8", cursor: "pointer", padding: 4 }}>
                <MoreVertical size={16} />
              </button>
            </div>
            
            <h3 style={{ fontWeight: 600, fontSize: 14, color: "#0F172A", marginBottom: 8, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{asset.name}</h3>
            
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 12, color: "#64748B" }}>
              <span>{asset.date}</span>
              <span>{asset.size}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
