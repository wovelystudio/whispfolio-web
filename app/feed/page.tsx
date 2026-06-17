"use client";
import Link from "next/link";
import { useState } from "react";
import { Settings, Bell, Search, TrendingUp, Heart, MessageCircle, Bookmark, MoreHorizontal, Compass, CheckCircle } from "lucide-react";

const POSTS = [
  {
    id: 1,
    creator: "Sarah Chen",
    handle: "@sarahbuilds",
    avatar: "SC",
    avatarBg: "#DBEAFE",
    avatarTc: "#1D4ED8",
    project: "Indie SaaS Dashboard",
    time: "2h ago",
    update: "Just shipped the dark mode toggle! It took way longer than expected because of the CSS variables setup, but honestly super happy with how it turned out. Next up: user onboarding flow.",
    image: null,
    progress: 71,
    tags: ["shipped", "UI"],
    likes: 24,
    comments: 7,
    milestone: false,
  },
  {
    id: 2,
    creator: "Marcus Dev",
    handle: "@marcusdev",
    avatar: "MD",
    avatarBg: "#DCFCE7",
    avatarTc: "#16A34A",
    project: "Open Source CLI Tool",
    time: "5h ago",
    update: "Hit 500 GitHub stars today 🎉 Never expected this project to get this kind of traction. Working on v2.0 with plugin support — would love feedback on the RFC I posted.",
    image: null,
    progress: 55,
    tags: ["milestone", "open source"],
    likes: 89,
    comments: 23,
    milestone: true,
  },
  {
    id: 3,
    creator: "Priya Design",
    handle: "@priyaux",
    avatar: "PD",
    avatarBg: "#F3E8FF",
    avatarTc: "#9333EA",
    project: "Design System for Startups",
    time: "Yesterday",
    update: "Finished the component library documentation. All 40 components are now documented with usage guidelines and accessibility notes. The public share page is live!",
    image: null,
    progress: 88,
    tags: ["docs", "components"],
    likes: 52,
    comments: 11,
    milestone: false,
  },
];

const SUGGESTED = [
  { name: "Alex builds", handle: "@alexbuilds", avatar: "AB", bg: "#FEF9C3", tc: "#92400E", project: "Mobile App" },
  { name: "Jamie code", handle: "@jamiec", avatar: "JC", bg: "#FFE4E6", tc: "#9F1239", project: "AI Tool" },
  { name: "Dev founder", handle: "@devfounder", avatar: "DF", bg: "#E0F2FE", tc: "#0369A1", project: "SaaS Startup" },
];

export default function FeedPage() {
  const [liked, setLiked] = useState<number[]>([]);
  const [saved, setSaved] = useState<number[]>([]);

  return (
    <div style={{ minHeight: "100vh", background: "#F8FAFF" }}>
      {/* Top nav */}
      <header style={{ background: "white", borderBottom: "1px solid #E2E8F0", position: "sticky", top: 0, zIndex: 20 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
            <div style={{ width: 28, height: 28, background: "#2563EB", borderRadius: 7, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="14" height="14" viewBox="0 0 18 18" fill="none">
                <path d="M3 9C3 5.686 5.686 3 9 3s6 2.686 6 6-2.686 6-6 6S3 12.314 3 9z" stroke="white" strokeWidth="1.5"/>
                <path d="M9 6v6M6 9h6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <span style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 16, color: "#0F172A" }}>Wispfolio</span>
          </Link>

          <div style={{ flex: 1, maxWidth: 340, margin: "0 24px" }}>
            <div style={{ position: "relative" }}>
              <Search size={14} color="#94A3B8" style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)" }} />
              <input placeholder="Search creators or projects..." style={{ width: "100%", padding: "8px 12px 8px 34px", border: "1.5px solid #E2E8F0", borderRadius: 8, fontSize: 13, outline: "none", background: "#F8FAFF", boxSizing: "border-box", color: "#0F172A" }} />
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <button style={{ width: 36, height: 36, border: "1.5px solid #E2E8F0", borderRadius: 8, background: "white", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#64748B" }}>
              <Bell size={16} />
            </button>
            <Link href="/settings" style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 36, height: 36, border: "1.5px solid #E2E8F0", borderRadius: 8, background: "white", color: "#64748B" }}>
              <Settings size={16} />
            </Link>
            <div style={{ width: 34, height: 34, borderRadius: "50%", background: "#2563EB", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 13, fontWeight: 700 }}>U</div>
          </div>
        </div>
      </header>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "28px 24px", display: "grid", gridTemplateColumns: "1fr 300px", gap: 28 }}>
        {/* Feed */}
        <div>
          {/* Filter tabs */}
          <div style={{ display: "flex", gap: 6, marginBottom: 20 }}>
            {["Following", "Discover", "Trending"].map((t, i) => (
              <button key={t} style={{ padding: "7px 16px", borderRadius: 8, fontSize: 13, fontWeight: 600, border: i === 0 ? "none" : "1.5px solid #E2E8F0", background: i === 0 ? "#2563EB" : "white", color: i === 0 ? "white" : "#64748B", cursor: "pointer" }}>{t}</button>
            ))}
          </div>

          {/* Posts */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {POSTS.map((post) => (
              <div key={post.id} style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 16, padding: "20px" }}>
                {/* Creator row */}
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                  <div style={{ width: 40, height: 40, borderRadius: "50%", background: post.avatarBg, color: post.avatarTc, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 14 }}>
                    {post.avatar}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <span style={{ fontWeight: 700, fontSize: 14, color: "#0F172A" }}>{post.creator}</span>
                      <span style={{ fontSize: 13, color: "#94A3B8" }}>{post.handle}</span>
                    </div>
                    <div style={{ fontSize: 12, color: "#64748B" }}>
                      <span style={{ color: "#2563EB", fontWeight: 500 }}>{post.project}</span> · {post.time}
                    </div>
                  </div>
                  {post.milestone && (
                    <div style={{ display: "flex", alignItems: "center", gap: 5, background: "#DCFCE7", padding: "4px 10px", borderRadius: 999 }}>
                      <CheckCircle size={12} color="#16A34A" />
                      <span style={{ fontSize: 11, color: "#16A34A", fontWeight: 600 }}>Milestone</span>
                    </div>
                  )}
                  <button style={{ background: "none", border: "none", cursor: "pointer", color: "#94A3B8", padding: 4 }}>
                    <MoreHorizontal size={16} />
                  </button>
                </div>

                {/* Update text */}
                <p style={{ fontSize: 14, color: "#334155", lineHeight: 1.7, marginBottom: 14 }}>{post.update}</p>

                {/* Progress */}
                <div style={{ background: "#F8FAFF", border: "1px solid #F1F5F9", borderRadius: 10, padding: "10px 14px", marginBottom: 14 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                    <span style={{ fontSize: 12, color: "#64748B", fontWeight: 500 }}>Project progress</span>
                    <span style={{ fontSize: 12, fontWeight: 700, color: "#2563EB" }}>{post.progress}%</span>
                  </div>
                  <div style={{ height: 4, background: "#E2E8F0", borderRadius: 999, overflow: "hidden" }}>
                    <div style={{ height: "100%", width: `${post.progress}%`, background: "#2563EB", borderRadius: 999 }} />
                  </div>
                </div>

                {/* Tags */}
                <div style={{ display: "flex", gap: 6, marginBottom: 14 }}>
                  {post.tags.map((tag) => (
                    <span key={tag} style={{ background: "#EFF6FF", color: "#2563EB", padding: "3px 10px", borderRadius: 999, fontSize: 11, fontWeight: 600 }}>#{tag}</span>
                  ))}
                </div>

                {/* Actions */}
                <div style={{ display: "flex", alignItems: "center", gap: 16, paddingTop: 12, borderTop: "1px solid #F1F5F9" }}>
                  <button
                    onClick={() => setLiked(liked.includes(post.id) ? liked.filter((x) => x !== post.id) : [...liked, post.id])}
                    style={{ display: "flex", alignItems: "center", gap: 5, background: "none", border: "none", cursor: "pointer", color: liked.includes(post.id) ? "#E11D48" : "#64748B", fontSize: 13, fontWeight: 500 }}
                  >
                    <Heart size={15} fill={liked.includes(post.id) ? "#E11D48" : "none"} />
                    {post.likes + (liked.includes(post.id) ? 1 : 0)}
                  </button>
                  <button style={{ display: "flex", alignItems: "center", gap: 5, background: "none", border: "none", cursor: "pointer", color: "#64748B", fontSize: 13, fontWeight: 500 }}>
                    <MessageCircle size={15} />
                    {post.comments}
                  </button>
                  <button
                    onClick={() => setSaved(saved.includes(post.id) ? saved.filter((x) => x !== post.id) : [...saved, post.id])}
                    style={{ display: "flex", alignItems: "center", gap: 5, background: "none", border: "none", cursor: "pointer", color: saved.includes(post.id) ? "#2563EB" : "#64748B", fontSize: 13, fontWeight: 500, marginLeft: "auto" }}
                  >
                    <Bookmark size={15} fill={saved.includes(post.id) ? "#2563EB" : "none"} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {/* Suggested creators */}
          <div style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 16, padding: "18px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 14 }}>
              <Compass size={14} color="#2563EB" />
              <span style={{ fontWeight: 700, fontSize: 14, color: "#0F172A" }}>Suggested creators</span>
            </div>
            {SUGGESTED.map((c) => (
              <div key={c.name} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: c.bg, color: c.tc, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 13, flexShrink: 0 }}>{c.avatar}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "#0F172A" }}>{c.name}</div>
                  <div style={{ fontSize: 11, color: "#94A3B8" }}>{c.project}</div>
                </div>
                <button style={{ padding: "5px 12px", border: "1.5px solid #2563EB", borderRadius: 7, background: "white", color: "#2563EB", fontSize: 12, fontWeight: 600, cursor: "pointer" }}>Follow</button>
              </div>
            ))}
          </div>

          {/* Become a creator CTA */}
          <div style={{ background: "#EFF6FF", border: "1px solid #BFDBFE", borderRadius: 16, padding: "18px" }}>
            <div style={{ fontWeight: 700, fontSize: 14, color: "#1D4ED8", marginBottom: 6 }}>Ready to build in public?</div>
            <p style={{ fontSize: 13, color: "#3B82F6", lineHeight: 1.5, marginBottom: 14 }}>Upgrade to Creator and start documenting your journey.</p>
            <Link href="/settings" style={{ display: "block", textAlign: "center", padding: "9px", background: "#2563EB", color: "white", borderRadius: 8, fontSize: 13, fontWeight: 600, textDecoration: "none" }}>
              Become a creator
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
