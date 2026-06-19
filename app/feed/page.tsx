"use client";
import Link from "next/link";
import { useState } from "react";
import { Settings, Bell, Search, TrendingUp, Heart, MessageCircle, Bookmark, MoreHorizontal, Compass, CheckCircle, Sparkles, Zap, ArrowRight } from "lucide-react";

const POSTS = [
  { id: 1, creator: "Sarah Chen", handle: "@sarahbuilds", avatarGrad: ["#2563EB","#7C3AED"], project: "Indie SaaS Dashboard", time: "2h ago", update: "Just shipped the dark mode toggle! It took way longer than expected because of the CSS variables setup, but honestly super happy with how it turned out. Building in public really keeps me accountable.", progress: 71, tags: ["shipped", "UI"], likes: 24, comments: 7, milestone: false, emoji: "🌙" },
  { id: 2, creator: "Marcus Dev", handle: "@marcusdev", avatarGrad: ["#16A34A","#059669"], project: "Open Source CLI Tool", time: "5h ago", update: "Hit 500 GitHub stars today 🎉 Never expected this project to get this kind of traction. Working on v2.0 with plugin support — would love feedback on the RFC I just posted.", progress: 55, tags: ["milestone", "OSS"], likes: 89, comments: 23, milestone: true, emoji: "⭐" },
  { id: 3, creator: "Priya Design", handle: "@priyaux", avatarGrad: ["#9333EA","#7C3AED"], project: "Design System for Startups", time: "Yesterday", update: "Finished the component library documentation. All 40 components documented with usage guidelines and accessibility notes. The public share page is now live — go check it out.", progress: 88, tags: ["docs", "design"], likes: 52, comments: 11, milestone: false, emoji: "✦" },
];

const SUGGESTED = [
  { name: "Alex builds", handle: "@alexbuilds", project: "AI Writing Tool", gradA: "#F59E0B", gradB: "#EF4444" },
  { name: "Jamie code", handle: "@jamiec", project: "Mobile Fitness App", gradA: "#E11D48", gradB: "#9333EA" },
  { name: "Dev founder", handle: "@devfounder", project: "SaaS Startup", gradA: "#0284C7", gradB: "#2563EB" },
];

export default function FeedPage() {
  const [liked, setLiked] = useState<number[]>([]);
  const [saved, setSaved] = useState<number[]>([]);
  const [activeTab, setActiveTab] = useState("Following");

  return (
    <div style={{ minHeight: "100vh", background: "#F8FAFF" }}>
      {/* Top nav */}
      <header style={{ background: "white", borderBottom: "1px solid #E2E8F0", position: "sticky", top: 0, zIndex: 40 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", height: 62, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none", flexShrink: 0 }}>
            <div style={{ width: 30, height: 30, background: "linear-gradient(135deg, #2563EB, #7C3AED)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="14" height="14" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="3.5" fill="white" opacity="0.9"/><circle cx="10" cy="10" r="6" stroke="white" strokeWidth="1.2" strokeDasharray="2 2" opacity="0.5"/><circle cx="10" cy="4" r="1.5" fill="white" opacity="0.7"/></svg>
            </div>
            <span style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 16, color: "#0F172A" }}>Wispfolio</span>
          </Link>

          <div style={{ flex: 1, maxWidth: 340 }}>
            <div style={{ position: "relative" }}>
              <Search size={13} color="#94A3B8" style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)" }} />
              <input placeholder="Search creators or projects…" style={{ width: "100%", padding: "8px 12px 8px 34px", border: "1.5px solid #E2E8F0", borderRadius: 9, fontSize: 13, outline: "none", background: "#F8FAFF", boxSizing: "border-box", color: "#0F172A", transition: "border-color 0.15s" }}
                onFocus={e => (e.target.style.borderColor = "#2563EB")}
                onBlur={e => (e.target.style.borderColor = "#E2E8F0")} />
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
            <button style={{ width: 36, height: 36, border: "1.5px solid #E2E8F0", borderRadius: 9, background: "white", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#64748B", transition: "all 0.15s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#2563EB"; (e.currentTarget as HTMLElement).style.color = "#2563EB"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#E2E8F0"; (e.currentTarget as HTMLElement).style.color = "#64748B"; }}>
              <Bell size={15} />
            </button>
            <Link href="/settings" style={{ width: 36, height: 36, border: "1.5px solid #E2E8F0", borderRadius: 9, background: "white", display: "flex", alignItems: "center", justifyContent: "center", color: "#64748B", transition: "all 0.15s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#2563EB"; (e.currentTarget as HTMLElement).style.color = "#2563EB"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#E2E8F0"; (e.currentTarget as HTMLElement).style.color = "#64748B"; }}>
              <Settings size={15} />
            </Link>
            <div style={{ width: 34, height: 34, borderRadius: "50%", background: "linear-gradient(135deg, #2563EB, #7C3AED)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 13, fontWeight: 800, fontFamily: "Sora, sans-serif", cursor: "pointer" }}>U</div>
          </div>
        </div>
      </header>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "28px 24px", display: "grid", gridTemplateColumns: "1fr 292px", gap: 24 }}>
        {/* Feed */}
        <div>
          {/* Tabs */}
          <div style={{ display: "flex", gap: 4, marginBottom: 20, background: "white", borderRadius: 12, padding: 5, border: "1px solid #E2E8F0", width: "fit-content" }}>
            {["Following", "Discover", "Trending"].map(t => (
              <button key={t} onClick={() => setActiveTab(t)} style={{ padding: "7px 18px", borderRadius: 8, fontSize: 13, fontWeight: 600, border: "none", cursor: "pointer", transition: "all 0.15s", background: activeTab === t ? "#2563EB" : "transparent", color: activeTab === t ? "white" : "#64748B" }}>
                {t}
              </button>
            ))}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {POSTS.map(post => (
              <div key={post.id} style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 16, padding: "20px", transition: "box-shadow 0.15s" }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.06)")}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = "none")}>
                {/* Creator row */}
                <div style={{ display: "flex", alignItems: "center", gap: 11, marginBottom: 14 }}>
                  <div style={{ width: 40, height: 40, borderRadius: "50%", background: `linear-gradient(135deg, ${post.avatarGrad[0]}, ${post.avatarGrad[1]})`, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 800, fontSize: 14, fontFamily: "Sora, sans-serif", flexShrink: 0 }}>
                    {post.creator.charAt(0)}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 1 }}>
                      <span style={{ fontWeight: 700, fontSize: 14, color: "#0F172A" }}>{post.creator}</span>
                      <span style={{ fontSize: 12.5, color: "#94A3B8" }}>{post.handle}</span>
                    </div>
                    <div style={{ fontSize: 12, color: "#64748B" }}>
                      <span style={{ color: "#2563EB", fontWeight: 600 }}>{post.project}</span>
                      <span style={{ color: "#CBD5E1" }}> · </span>
                      <span>{post.time}</span>
                    </div>
                  </div>
                  {post.milestone && (
                    <div style={{ display: "flex", alignItems: "center", gap: 5, background: "#DCFCE7", border: "1px solid #86EFAC", padding: "3px 10px", borderRadius: 999 }}>
                      <CheckCircle size={11} color="#16A34A" />
                      <span style={{ fontSize: 11, color: "#16A34A", fontWeight: 700 }}>Milestone</span>
                    </div>
                  )}
                  <div style={{ fontSize: 18 }}>{post.emoji}</div>
                  <button style={{ background: "none", border: "none", cursor: "pointer", color: "#CBD5E1", padding: 4, borderRadius: 6, transition: "all 0.15s" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#F1F5F9"; (e.currentTarget as HTMLElement).style.color = "#94A3B8"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "none"; (e.currentTarget as HTMLElement).style.color = "#CBD5E1"; }}>
                    <MoreHorizontal size={16} />
                  </button>
                </div>

                {/* Update text */}
                <p style={{ fontSize: 14, color: "#334155", lineHeight: 1.72, marginBottom: 14 }}>{post.update}</p>

                {/* Progress */}
                <div style={{ background: "#F8FAFF", border: "1px solid #F1F5F9", borderRadius: 10, padding: "10px 14px", marginBottom: 12 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                    <span style={{ fontSize: 11.5, color: "#64748B", fontWeight: 500 }}>Project progress</span>
                    <span style={{ fontSize: 11.5, fontWeight: 700, color: "#2563EB" }}>{post.progress}%</span>
                  </div>
                  <div style={{ height: 5, background: "#E2E8F0", borderRadius: 999, overflow: "hidden" }}>
                    <div style={{ height: "100%", width: `${post.progress}%`, background: "linear-gradient(90deg, #2563EB, #7C3AED)", borderRadius: 999 }} />
                  </div>
                </div>

                {/* Tags */}
                <div style={{ display: "flex", gap: 5, marginBottom: 14, flexWrap: "wrap" }}>
                  {post.tags.map(tag => (
                    <span key={tag} style={{ background: "#EFF6FF", color: "#2563EB", padding: "3px 10px", borderRadius: 999, fontSize: 11.5, fontWeight: 700 }}>#{tag}</span>
                  ))}
                </div>

                {/* Actions */}
                <div style={{ display: "flex", alignItems: "center", gap: 14, paddingTop: 12, borderTop: "1px solid #F8FAFF" }}>
                  <button onClick={() => setLiked(liked.includes(post.id) ? liked.filter(x => x !== post.id) : [...liked, post.id])}
                    style={{ display: "flex", alignItems: "center", gap: 5, background: "none", border: "none", cursor: "pointer", color: liked.includes(post.id) ? "#E11D48" : "#94A3B8", fontSize: 13, fontWeight: 600, padding: "4px 8px", borderRadius: 7, transition: "all 0.15s" }}
                    onMouseEnter={e => (e.currentTarget.style.background = "#FFF1F2")}
                    onMouseLeave={e => (e.currentTarget.style.background = "none")}>
                    <Heart size={15} fill={liked.includes(post.id) ? "#E11D48" : "none"} strokeWidth={liked.includes(post.id) ? 0 : 1.5} />
                    {post.likes + (liked.includes(post.id) ? 1 : 0)}
                  </button>
                  <button style={{ display: "flex", alignItems: "center", gap: 5, background: "none", border: "none", cursor: "pointer", color: "#94A3B8", fontSize: 13, fontWeight: 600, padding: "4px 8px", borderRadius: 7, transition: "all 0.15s" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#F1F5F9"; (e.currentTarget as HTMLElement).style.color = "#334155"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "none"; (e.currentTarget as HTMLElement).style.color = "#94A3B8"; }}>
                    <MessageCircle size={15} strokeWidth={1.5} /> {post.comments}
                  </button>
                  <button onClick={() => setSaved(saved.includes(post.id) ? saved.filter(x => x !== post.id) : [...saved, post.id])}
                    style={{ display: "flex", alignItems: "center", gap: 5, background: "none", border: "none", cursor: "pointer", color: saved.includes(post.id) ? "#2563EB" : "#94A3B8", fontSize: 13, fontWeight: 600, marginLeft: "auto", padding: "4px 8px", borderRadius: 7, transition: "all 0.15s" }}
                    onMouseEnter={e => (e.currentTarget.style.background = "#EFF6FF")}
                    onMouseLeave={e => (e.currentTarget.style.background = "none")}>
                    <Bookmark size={14} fill={saved.includes(post.id) ? "#2563EB" : "none"} strokeWidth={saved.includes(post.id) ? 0 : 1.5} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right sidebar */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {/* Suggested */}
          <div style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 16, padding: "18px 20px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 16 }}>
              <Compass size={14} color="#2563EB" />
              <span style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 13.5, color: "#0F172A" }}>Suggested creators</span>
            </div>
            {SUGGESTED.map((c, i) => (
              <div key={c.name} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: i < SUGGESTED.length - 1 ? 14 : 0 }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: `linear-gradient(135deg, ${c.gradA}, ${c.gradB})`, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 800, fontSize: 13, fontFamily: "Sora, sans-serif", flexShrink: 0 }}>
                  {c.name.charAt(0)}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#0F172A" }}>{c.name}</div>
                  <div style={{ fontSize: 11.5, color: "#94A3B8", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{c.project}</div>
                </div>
                <button style={{ padding: "5px 12px", border: "1.5px solid #BFDBFE", borderRadius: 8, background: "white", color: "#2563EB", fontSize: 12, fontWeight: 700, cursor: "pointer", transition: "all 0.15s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#EFF6FF"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "white"; }}>
                  Follow
                </button>
              </div>
            ))}
          </div>

          {/* Become a creator CTA */}
          <div style={{ background: "linear-gradient(135deg, #0F172A, #1E3A8A)", borderRadius: 16, padding: "20px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 10 }}>
              <Zap size={14} color="#A78BFA" />
              <span style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 13, color: "#A78BFA" }}>Ready to build?</span>
            </div>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.65)", lineHeight: 1.55, marginBottom: 16 }}>
              Share your journey. Get a Project Passport and build in public.
            </p>
            <Link href="/settings" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, padding: "10px", background: "white", color: "#1E3A8A", borderRadius: 9, fontSize: 13, fontWeight: 800, textDecoration: "none", transition: "background 0.15s", fontFamily: "Sora, sans-serif" }}
              onMouseEnter={e => (e.currentTarget.style.background = "#EFF6FF")}
              onMouseLeave={e => (e.currentTarget.style.background = "white")}>
              Become a creator <ArrowRight size={13} />
            </Link>
          </div>

          {/* Explore link */}
          <Link href="/explore" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 7, padding: "12px", background: "white", border: "1px solid #E2E8F0", borderRadius: 12, fontSize: 13, fontWeight: 600, color: "#64748B", textDecoration: "none", transition: "all 0.15s" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#2563EB"; (e.currentTarget as HTMLElement).style.color = "#2563EB"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#E2E8F0"; (e.currentTarget as HTMLElement).style.color = "#64748B"; }}>
            <Compass size={14} /> Explore all projects
          </Link>
        </div>
      </div>
    </div>
  );
}
