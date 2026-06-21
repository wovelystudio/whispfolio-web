"use client";
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Link from "next/link";
import {
  Heart, MessageCircle, Share2, Users, CheckCircle,
  TrendingUp, Globe, ExternalLink, Send, Sparkles,
  ArrowRight, Star, Lock, Zap
} from "lucide-react";

/* ─── Mock data ─── */
const PROJECT = {
  name: "Mobile App MVP",
  tagline: "A mobile habit tracker built to help creators ship projects faster, one day at a time.",
  category: "App",
  stage: "Beta",
  progress: 62,
  followers: 128,
  totalUpdates: 47,
  since: "January 2026",
  visibility: "public",
  website: "https://myapp.com",
  github: "https://github.com/me/myapp",
  twitter: "https://twitter.com/myapp",
};

const CREATOR = {
  name: "Sarah Kim",
  handle: "@sarahbuilds",
  bio: "UI/UX designer. Building in public. Ship fast, learn faster.",
  projects: 3,
  followers: 234,
};

const UPDATES = [
  {
    id: 1, time: "Today at 10:45 AM", milestone: true,
    title: "Shipped the onboarding flow 🎉",
    content: "It took 3 iterations to get right but it finally feels smooth. The animated progress bar was the hardest part — ended up using a custom spring animation. Super happy with where it landed.",
    image: true, likes: 24, comments: 5, tag: "Milestone",
  },
  {
    id: 2, time: "Yesterday at 3:20 PM", milestone: false,
    title: "Fixed the Safari auth bug",
    content: "Spent the day tracking down an authentication bug that only appeared on mobile Safari. Turns out it was a cookie expiry issue. Fixed now with proper error states throughout the app.",
    image: false, likes: 18, comments: 3, tag: "Bug fix",
  },
  {
    id: 3, time: "Jun 14, 2026", milestone: false,
    title: "First wireframes complete",
    content: "Keeping it simple for MVP — dashboard, project list, onboarding. The simpler the better. Shared on Twitter and got amazing feedback. The community is so supportive 💙",
    image: true, likes: 47, comments: 12, tag: "Design",
  },
];

const MILESTONES = [
  { label: "Planning", done: true, date: "Jan 2026" },
  { label: "Design", done: true, date: "Feb 2026" },
  { label: "Prototype", done: true, date: "Mar 2026" },
  { label: "Beta", done: false, date: "In progress" },
  { label: "Launch", done: false, date: "Est. Aug 2026" },
];

const COMMENTS = [
  { id: 1, name: "Alex Rivera", handle: "@alex_r", time: "2h ago", text: "This is such a cool project! Love how you're building it in public. The transparency is so refreshing 🔥", likes: 4 },
  { id: 2, name: "Priya Nair", handle: "@priya_n", time: "5h ago", text: "The onboarding flow looks really clean. How did you handle the animation performance on lower-end devices?", likes: 2 },
  { id: 3, name: "Tom Wei", handle: "@tomwei", time: "Yesterday", text: "Been following since the wireframe stage. The progress is insane. Rooting for you! 🚀", likes: 6 },
];

const TAG_COLORS: Record<string, { bg: string; color: string }> = {
  "Milestone": { bg: "#EDE9FE", color: "#7C3AED" },
  "Bug fix": { bg: "#DBEAFE", color: "#2563EB" },
  "Design": { bg: "#E0E7FF", color: "#4F46E5" },
};

export default function PublicProjectPage({ params }: { params: { project: string } }) {
  const [following, setFollowing] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState(COMMENTS);
  const [likedUpdates, setLikedUpdates] = useState<number[]>([]);
  const [likedComments, setLikedComments] = useState<number[]>([]);
  const [shareToast, setShareToast] = useState(false);

  const toggleLike = (id: number) =>
    setLikedUpdates(l => l.includes(id) ? l.filter(x => x !== id) : [...l, id]);

  const toggleCommentLike = (id: number) =>
    setLikedComments(l => l.includes(id) ? l.filter(x => x !== id) : [...l, id]);

  const postComment = () => {
    if (!commentText.trim()) return;
    setComments(c => [
      { id: Date.now(), name: "You", handle: "@you", time: "Just now", text: commentText, likes: 0 },
      ...c
    ]);
    setCommentText("");
  };

  const handleShare = () => {
    setShareToast(true);
    setTimeout(() => setShareToast(false), 2500);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#F8FAFF" }}>
      <Navbar />

      {/* ── Banner ── */}
      <div style={{ height: 260, background: "linear-gradient(135deg, #0F172A 0%, #1E1B4B 50%, #1E3A8A 100%)", position: "relative", marginTop: 66, overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 65% 40%, rgba(124,58,237,0.4), transparent 60%)" }} />
        <div style={{ position: "absolute", top: -80, right: -80, width: 320, height: 320, borderRadius: "50%", background: "radial-gradient(circle, rgba(37,99,235,0.2), transparent 70%)" }} />
        {/* Subtle grid */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        {/* NO bottom fade — hard edge so avatar doesn't merge */}
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 20px" }}>

        {/* ── Project Header (overlaps banner) ── */}
        <div style={{ marginTop: -64, marginBottom: 36 }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>

            {/* Left: avatar + name */}
            <div style={{ display: "flex", alignItems: "flex-end", gap: 20 }}>
              {/* Project icon */}
              <div style={{
                width: 100, height: 100, borderRadius: 24,
                background: "linear-gradient(135deg, #2563EB, #7C3AED)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "white", fontSize: 38, fontWeight: 900, fontFamily: "Sora, sans-serif",
                border: "5px solid #F8FAFF",
                boxShadow: "0 8px 32px rgba(37,99,235,0.25)",
                flexShrink: 0,
              }}>M</div>

              <div style={{ paddingBottom: 8 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 6 }}>
                  <h1 style={{
                    fontFamily: "Sora, sans-serif", fontWeight: 900,
                    fontSize: "clamp(22px, 4vw, 32px)", color: "#0F172A",
                    letterSpacing: "-0.03em", lineHeight: 1.1,
                  }}>
                    {PROJECT.name}
                  </h1>
                  <div style={{ display: "flex", alignItems: "center", gap: 5, background: "#EDE9FE", padding: "4px 10px", borderRadius: 999 }}>
                    <CheckCircle size={12} color="#7C3AED" fill="#7C3AED" />
                    <span style={{ fontSize: 11, fontWeight: 700, color: "#7C3AED" }}>Verified</span>
                  </div>
                  <span style={{ background: "#DBEAFE", color: "#1D4ED8", fontSize: 11, fontWeight: 700, padding: "4px 10px", borderRadius: 999 }}>{PROJECT.category}</span>
                  <span style={{ background: "#F1F5F9", color: "#64748B", fontSize: 11, fontWeight: 700, padding: "4px 10px", borderRadius: 999 }}>{PROJECT.stage}</span>
                </div>
                <Link href="/profile/sarahbuilds" style={{ fontSize: 14, fontWeight: 600, color: "#7C3AED", textDecoration: "none" }}>
                  by {CREATOR.name} · {CREATOR.handle}
                </Link>
              </div>
            </div>

            {/* Right: Actions */}
            <div style={{ display: "flex", gap: 10, paddingBottom: 8 }}>
              <button
                onClick={() => setFollowing(!following)}
                style={{
                  padding: "11px 24px", borderRadius: 10, fontWeight: 700, fontSize: 14,
                  border: `2px solid ${following ? "#7C3AED" : "#E2E8F0"}`,
                  background: following ? "#EDE9FE" : "white",
                  color: following ? "#7C3AED" : "#0F172A",
                  cursor: "pointer", transition: "all 0.2s",
                  display: "flex", alignItems: "center", gap: 7,
                  fontFamily: "Sora, sans-serif",
                }}>
                {following ? <><CheckCircle size={15} /> Following</> : <><Users size={15} /> Follow</>}
              </button>
              <button onClick={handleShare}
                style={{ width: 44, height: 44, border: "1.5px solid #E2E8F0", borderRadius: 10, background: "white", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#64748B", position: "relative", transition: "border-color 0.15s" }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "#7C3AED")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "#E2E8F0")}
                title="Share this project">
                <Share2 size={16} />
                {shareToast && (
                  <div style={{ position: "absolute", top: -38, left: "50%", transform: "translateX(-50%)", background: "#0F172A", color: "white", fontSize: 12, fontWeight: 600, padding: "6px 12px", borderRadius: 8, whiteSpace: "nowrap" }}>
                    Link copied! ✦
                  </div>
                )}
              </button>
            </div>
          </div>

          {/* Tagline */}
          <p style={{ fontSize: 16, color: "#475569", lineHeight: 1.7, marginTop: 16, maxWidth: 600 }}>
            {PROJECT.tagline}
          </p>
        </div>

        {/* ── Stats Row ── */}
        <div style={{ display: "flex", gap: 0, background: "white", border: "1px solid #E2E8F0", borderRadius: 16, padding: "20px 28px", marginBottom: 32, flexWrap: "wrap" }}>
          {[
            { label: "Followers", val: PROJECT.followers, icon: <Users size={16} color="#2563EB" /> },
            { label: "Updates", val: PROJECT.totalUpdates, icon: <Sparkles size={16} color="#7C3AED" /> },
            { label: "Progress", val: `${PROJECT.progress}%`, icon: <TrendingUp size={16} color="#4F46E5" /> },
            { label: "Building since", val: PROJECT.since, icon: <Star size={16} color="#7C3AED" /> },
          ].map((s, i) => (
            <div key={s.label} style={{ flex: "1 1 120px", padding: "0 20px", borderLeft: i > 0 ? "1px solid #F1F5F9" : "none", textAlign: i > 0 ? "center" : "left" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 5, justifyContent: i > 0 ? "center" : "flex-start" }}>
                {s.icon}
                <span style={{ fontSize: 12, fontWeight: 600, color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.06em" }}>{s.label}</span>
              </div>
              <div style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 22, color: "#0F172A" }}>{s.val}</div>
            </div>
          ))}
          {/* Progress bar */}
          <div style={{ flex: "1 1 200px", paddingLeft: 24, borderLeft: "1px solid #F1F5F9", display: "flex", flexDirection: "column", justifyContent: "center", gap: 8 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: 12, fontWeight: 600, color: "#64748B" }}>Overall progress</span>
              <span style={{ fontWeight: 800, fontSize: 14, color: "#2563EB" }}>{PROJECT.progress}%</span>
            </div>
            <div style={{ height: 8, background: "#F1F5F9", borderRadius: 999 }}>
              <div style={{ height: "100%", width: `${PROJECT.progress}%`, background: "linear-gradient(90deg, #2563EB, #7C3AED)", borderRadius: 999, transition: "width 0.6s ease" }} />
            </div>
          </div>
        </div>

        {/* ── Two Column Layout ── */}
        <div className="project-page-layout" style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 28, marginBottom: 80, alignItems: "start" }}>

          {/* ── LEFT: Updates + Comments ── */}
          <div>
            {/* Section label */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
              <h2 style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 18, color: "#0F172A" }}>
                Updates <span style={{ fontSize: 14, fontWeight: 500, color: "#94A3B8" }}>({PROJECT.totalUpdates})</span>
              </h2>
              <div style={{ display: "flex", gap: 6 }}>
                {["All", "Milestones", "Design", "Bug fix"].map(f => (
                  <button key={f} style={{ padding: "5px 12px", border: "1.5px solid #E2E8F0", borderRadius: 999, background: f === "All" ? "#EFF6FF" : "white", color: f === "All" ? "#2563EB" : "#64748B", fontSize: 12, fontWeight: 600, cursor: "pointer", transition: "all 0.15s" }}>
                    {f}
                  </button>
                ))}
              </div>
            </div>

            {/* Update cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 40 }}>
              {UPDATES.map(u => (
                <article key={u.id} style={{ background: "white", border: "1.5px solid #E2E8F0", borderRadius: 20, overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.04)", transition: "box-shadow 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 8px 28px rgba(0,0,0,0.08)")}
                  onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.04)")}>

                  {/* Image placeholder */}
                  {u.image && (
                    <div style={{ width: "100%", height: 200, background: "linear-gradient(135deg, #DBEAFE 0%, #EDE9FE 50%, #E0E7FF 100%)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                      <Sparkles size={40} color="rgba(124,58,237,0.5)" />
                      <div style={{ position: "absolute", top: 14, right: 14, background: "rgba(255,255,255,0.9)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.6)", borderRadius: 8, padding: "4px 10px", fontSize: 11, fontWeight: 700, color: "#7C3AED" }}>
                        Preview
                      </div>
                    </div>
                  )}

                  <div style={{ padding: "20px 24px" }}>
                    {/* Tag + time */}
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                      <span style={{ background: TAG_COLORS[u.tag]?.bg ?? "#F1F5F9", color: TAG_COLORS[u.tag]?.color ?? "#64748B", fontSize: 11, fontWeight: 800, padding: "3px 10px", borderRadius: 999, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                        {u.tag}
                      </span>
                      <span style={{ fontSize: 13, color: "#94A3B8" }}>{u.time}</span>
                    </div>

                    <h3 style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 17, color: "#0F172A", marginBottom: 10, letterSpacing: "-0.01em" }}>
                      {u.title}
                    </h3>
                    <p style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 18 }}>
                      {u.content}
                    </p>

                    {/* Actions */}
                    <div style={{ display: "flex", gap: 4, paddingTop: 16, borderTop: "1px solid #F8FAFF", alignItems: "center" }}>
                      <button
                        onClick={() => toggleLike(u.id)}
                        style={{ display: "flex", alignItems: "center", gap: 6, border: "none", background: likedUpdates.includes(u.id) ? "#FDF4FF" : "none", padding: "7px 14px", borderRadius: 8, cursor: "pointer", color: likedUpdates.includes(u.id) ? "#7C3AED" : "#94A3B8", fontWeight: 600, fontSize: 13, transition: "all 0.15s" }}>
                        <Heart size={15} fill={likedUpdates.includes(u.id) ? "#7C3AED" : "none"} strokeWidth={likedUpdates.includes(u.id) ? 0 : 2} />
                        {u.likes + (likedUpdates.includes(u.id) ? 1 : 0)}
                      </button>
                      <button style={{ display: "flex", alignItems: "center", gap: 6, border: "none", background: "none", padding: "7px 14px", borderRadius: 8, cursor: "pointer", color: "#94A3B8", fontWeight: 600, fontSize: 13 }}>
                        <MessageCircle size={15} /> {u.comments}
                      </button>
                      <button style={{ display: "flex", alignItems: "center", gap: 6, border: "none", background: "none", padding: "7px 14px", borderRadius: 8, cursor: "pointer", color: "#94A3B8", fontWeight: 600, fontSize: 13, marginLeft: "auto" }}
                        onClick={handleShare}>
                        <Share2 size={14} /> Share
                      </button>
                    </div>
                  </div>
                </article>
              ))}

              {/* Load more */}
              <button style={{ padding: "13px", border: "1.5px dashed #E2E8F0", borderRadius: 14, background: "transparent", fontSize: 14, fontWeight: 600, color: "#64748B", cursor: "pointer", transition: "all 0.15s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#7C3AED"; e.currentTarget.style.color = "#7C3AED"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#E2E8F0"; e.currentTarget.style.color = "#64748B"; }}>
                Load more updates
              </button>
            </div>

            {/* ── Comments ── */}
            <div>
              <h2 style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 18, color: "#0F172A", marginBottom: 20 }}>
                Comments <span style={{ fontSize: 14, fontWeight: 500, color: "#94A3B8" }}>({comments.length})</span>
              </h2>

              {/* Write comment */}
              <div style={{ background: "white", border: "1.5px solid #E2E8F0", borderRadius: 16, padding: "18px 20px", marginBottom: 16 }}>
                <div style={{ display: "flex", gap: 12 }}>
                  <div style={{ width: 38, height: 38, borderRadius: "50%", background: "linear-gradient(135deg, #2563EB, #7C3AED)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 800, fontSize: 14, flexShrink: 0, fontFamily: "Sora, sans-serif" }}>Y</div>
                  <div style={{ flex: 1 }}>
                    <textarea
                      placeholder="Share your thoughts or ask a question..."
                      value={commentText}
                      onChange={e => setCommentText(e.target.value)}
                      onKeyDown={e => { if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) postComment(); }}
                      style={{ width: "100%", border: "none", outline: "none", fontSize: 14, color: "#0F172A", resize: "none", minHeight: 64, background: "transparent", lineHeight: 1.6, fontFamily: "Inter, sans-serif" }}
                    />
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #F1F5F9", paddingTop: 12, marginTop: 8 }}>
                      <span style={{ fontSize: 12, color: "#94A3B8" }}>Ctrl+Enter to post</span>
                      <button onClick={postComment} disabled={!commentText.trim()}
                        style={{ display: "flex", alignItems: "center", gap: 6, padding: "9px 18px", background: commentText.trim() ? "#2563EB" : "#F1F5F9", color: commentText.trim() ? "white" : "#94A3B8", border: "none", borderRadius: 9, fontSize: 13, fontWeight: 700, cursor: commentText.trim() ? "pointer" : "not-allowed", transition: "all 0.15s", fontFamily: "Sora, sans-serif" }}>
                        <Send size={13} /> Post
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Comment list */}
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {comments.map(c => (
                  <div key={c.id} style={{ background: "white", border: "1.5px solid #E2E8F0", borderRadius: 14, padding: "16px 18px" }}>
                    <div style={{ display: "flex", gap: 12 }}>
                      <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg, #DBEAFE, #EDE9FE)", display: "flex", alignItems: "center", justifyContent: "center", color: "#2563EB", fontWeight: 800, fontSize: 13, flexShrink: 0, fontFamily: "Sora, sans-serif" }}>
                        {c.name[0]}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 6, flexWrap: "wrap" }}>
                          <span style={{ fontWeight: 700, fontSize: 14, color: "#0F172A" }}>{c.name}</span>
                          <span style={{ fontSize: 12, color: "#7C3AED", fontWeight: 600 }}>{c.handle}</span>
                          <span style={{ fontSize: 12, color: "#94A3B8" }}>· {c.time}</span>
                        </div>
                        <p style={{ fontSize: 14, color: "#475569", lineHeight: 1.65, marginBottom: 10 }}>{c.text}</p>
                        <button onClick={() => toggleCommentLike(c.id)}
                          style={{ display: "flex", alignItems: "center", gap: 5, border: "none", background: "none", cursor: "pointer", fontSize: 12, color: likedComments.includes(c.id) ? "#7C3AED" : "#94A3B8", fontWeight: 600, padding: 0, transition: "color 0.15s" }}>
                          <Heart size={13} fill={likedComments.includes(c.id) ? "#7C3AED" : "none"} strokeWidth={likedComments.includes(c.id) ? 0 : 2} />
                          {c.likes + (likedComments.includes(c.id) ? 1 : 0)}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT: Sticky panel ── */}
          <div className="project-page-sidebar" style={{ display: "flex", flexDirection: "column", gap: 16, position: "sticky", top: 84 }}>

            {/* Follow CTA card */}
            <div style={{ background: "linear-gradient(135deg, #0F172A, #1E1B4B)", borderRadius: 20, padding: "28px 24px", textAlign: "center" }}>
              <div style={{ width: 64, height: 64, borderRadius: 18, background: "linear-gradient(135deg, #2563EB, #7C3AED)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 900, fontSize: 24, margin: "0 auto 14px", fontFamily: "Sora, sans-serif" }}>M</div>
              <div style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 17, color: "white", marginBottom: 4 }}>{PROJECT.name}</div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", marginBottom: 20 }}>by {CREATOR.handle}</div>
              <button
                onClick={() => setFollowing(!following)}
                style={{
                  width: "100%", padding: "13px", borderRadius: 12, fontWeight: 800, fontSize: 15,
                  border: "none", cursor: "pointer", transition: "all 0.2s",
                  background: following ? "rgba(255,255,255,0.15)" : "white",
                  color: following ? "white" : "#0F172A",
                  fontFamily: "Sora, sans-serif",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                }}>
                {following ? <><CheckCircle size={16} /> Following</> : <><Zap size={16} /> Follow this project</>}
              </button>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", marginTop: 12 }}>
                {PROJECT.followers + (following ? 1 : 0)} people following
              </div>
            </div>

            {/* Milestones */}
            <div style={{ background: "white", border: "1.5px solid #E2E8F0", borderRadius: 18, padding: "22px 20px" }}>
              <h3 style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 14, color: "#0F172A", marginBottom: 18, display: "flex", alignItems: "center", gap: 7 }}>
                <TrendingUp size={15} color="#2563EB" /> Journey Milestones
              </h3>
              <div style={{ position: "relative" }}>
                {/* Vertical line */}
                <div style={{ position: "absolute", left: 11, top: 20, bottom: 20, width: 2, background: "linear-gradient(180deg, #2563EB, #7C3AED, #E2E8F0)", borderRadius: 999 }} />
                <div style={{ display: "flex", flexDirection: "column", gap: 16, position: "relative" }}>
                  {MILESTONES.map((m) => (
                    <div key={m.label} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                      <div style={{
                        width: 24, height: 24, borderRadius: "50%",
                        background: m.done ? "#7C3AED" : "white",
                        border: `2px solid ${m.done ? "#7C3AED" : "#E2E8F0"}`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        flexShrink: 0, zIndex: 1,
                        boxShadow: m.done ? "0 0 0 4px rgba(124,58,237,0.12)" : "none",
                      }}>
                        {m.done && <CheckCircle size={13} color="white" fill="white" />}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: m.done ? 700 : 500, fontSize: 14, color: m.done ? "#0F172A" : "#94A3B8" }}>{m.label}</div>
                        <div style={{ fontSize: 11, color: m.done ? "#7C3AED" : "#CBD5E1", fontWeight: 600 }}>{m.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Project info */}
            <div style={{ background: "white", border: "1.5px solid #E2E8F0", borderRadius: 18, padding: "22px 20px" }}>
              <h3 style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 14, color: "#0F172A", marginBottom: 16 }}>About this project</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { label: "Category", val: PROJECT.category },
                  { label: "Stage", val: PROJECT.stage },
                  { label: "Visibility", val: "Public" },
                  { label: "Building since", val: PROJECT.since },
                ].map(r => (
                  <div key={r.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: 12, borderBottom: "1px solid #F8FAFF" }}>
                    <span style={{ fontSize: 13, color: "#94A3B8", fontWeight: 500 }}>{r.label}</span>
                    <span style={{ fontSize: 13, fontWeight: 700, color: "#0F172A" }}>{r.val}</span>
                  </div>
                ))}
              </div>

              {/* Links */}
              {[
                { label: "Website", href: PROJECT.website, icon: <Globe size={13} /> },
                { label: "GitHub", href: PROJECT.github, icon: <ExternalLink size={13} /> },
                { label: "Twitter", href: PROJECT.twitter, icon: <ExternalLink size={13} /> },
              ].map(l => (
                <a key={l.label} href={l.href} target="_blank" rel="noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 0", fontSize: 13, fontWeight: 600, color: "#2563EB", textDecoration: "none", borderBottom: "1px solid #F8FAFF", transition: "color 0.15s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#7C3AED")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#2563EB")}>
                  {l.icon} {l.label}
                </a>
              ))}
            </div>

            {/* Creator card */}
            <div style={{ background: "white", border: "1.5px solid #E2E8F0", borderRadius: 18, padding: "20px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
                <div style={{ width: 48, height: 48, borderRadius: "50%", background: "linear-gradient(135deg, #2563EB, #7C3AED)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 900, fontSize: 18, flexShrink: 0, fontFamily: "Sora, sans-serif" }}>S</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 15, color: "#0F172A" }}>{CREATOR.name}</div>
                  <div style={{ fontSize: 12, color: "#7C3AED", fontWeight: 600 }}>{CREATOR.handle}</div>
                </div>
              </div>
              <p style={{ fontSize: 13, color: "#64748B", lineHeight: 1.6, marginBottom: 14 }}>{CREATOR.bio}</p>
              <div style={{ display: "flex", gap: 16, marginBottom: 14 }}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 16, color: "#0F172A" }}>{CREATOR.projects}</div>
                  <div style={{ fontSize: 11, color: "#94A3B8", fontWeight: 500 }}>Projects</div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 16, color: "#0F172A" }}>{CREATOR.followers}</div>
                  <div style={{ fontSize: 11, color: "#94A3B8", fontWeight: 500 }}>Followers</div>
                </div>
              </div>
              <Link href="/profile/sarahbuilds"
                style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, padding: "9px", border: "1.5px solid #E2E8F0", borderRadius: 10, fontSize: 13, fontWeight: 700, color: "#475569", textDecoration: "none", transition: "all 0.15s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "#7C3AED"; (e.currentTarget as HTMLAnchorElement).style.color = "#7C3AED"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "#E2E8F0"; (e.currentTarget as HTMLAnchorElement).style.color = "#475569"; }}>
                View Profile <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
