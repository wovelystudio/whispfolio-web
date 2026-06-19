import Link from "next/link";
import Navbar from "@/components/layout/Navbar";

const SECTIONS = [
  { title: "Acceptance of terms", body: "By creating an account on Wispfolio, you agree to these Terms of Service. If you do not agree, do not use the platform. These terms apply to all users — Followers and Creators alike." },
  { title: "Your account", body: "You are responsible for maintaining the security of your account credentials. You must not share your login details. You must be at least 13 years old to use Wispfolio. You agree to provide accurate information when creating your account." },
  { title: "Content you create", body: "You own the content you create on Wispfolio — your project descriptions, updates, inspiration references, and assets. By posting content publicly, you grant Wispfolio a limited licence to display that content to other users. You are responsible for ensuring your content does not infringe on third-party rights." },
  { title: "Acceptable use", body: "You may not use Wispfolio to post spam, harass other users, distribute malware, impersonate others, or engage in any illegal activity. We reserve the right to remove content and suspend accounts that violate these terms, at our discretion." },
  { title: "Creator plans", body: "Creator and Creator Pro plans are billed monthly. You may cancel at any time. Cancellation takes effect at the end of the current billing period — you retain access until then. We do not offer refunds for partial months. Prices may change with 30 days' notice." },
  { title: "Beta period", body: "Wispfolio is currently in beta. During this period, features may change, APIs may be unstable, and we may offer free or discounted plans at our discretion. We will provide notice before ending any beta arrangements." },
  { title: "Limitation of liability", body: "Wispfolio is provided 'as is'. We do not guarantee uptime or data preservation, though we make best efforts. To the maximum extent permitted by law, Wispfolio is not liable for indirect, incidental, or consequential damages arising from your use of the platform." },
  { title: "Termination", body: "You may delete your account at any time. We may suspend or terminate your account if you violate these terms. Upon termination, your public content will be removed and your data deleted within 30 days." },
  { title: "Changes to these terms", body: "We may update these terms. We will notify you via email or in-app notice of significant changes with at least 14 days' notice. Continued use after that period constitutes acceptance." },
];

export default function TermsPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#FFFFFF" }}>
      <Navbar />
      <div style={{ paddingTop: 100, paddingBottom: 80 }}>
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ marginBottom: 48 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#EDE9FE", border: "1px solid #C4B5FD", padding: "5px 14px", borderRadius: 999, marginBottom: 20 }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: "#7C3AED" }}>Legal</span>
            </div>
            <h1 style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: "clamp(28px, 4vw, 42px)", color: "#0F172A", letterSpacing: "-0.03em", marginBottom: 12, lineHeight: 1.1 }}>
              Terms of Service
            </h1>
            <p style={{ fontSize: 15, color: "#64748B", lineHeight: 1.7 }}>
              Last updated: June 18, 2026. Plain-language terms for using Wispfolio. We've tried to write these as clearly as possible.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
            {SECTIONS.map((s, i) => (
              <div key={s.title}>
                <h2 style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 18, color: "#0F172A", marginBottom: 10 }}>
                  {i + 1}. {s.title}
                </h2>
                <p style={{ fontSize: 15, color: "#475569", lineHeight: 1.8 }}>{s.body}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 56, padding: "24px 26px", background: "#F8FAFF", border: "1px solid #E2E8F0", borderRadius: 14 }}>
            <div style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 15, color: "#0F172A", marginBottom: 6 }}>Questions about the terms?</div>
            <p style={{ fontSize: 14, color: "#64748B", marginBottom: 12 }}>We're a small team and we read every email.</p>
            <a href="mailto:legal@wispfolio.com" style={{ fontSize: 14, color: "#7C3AED", fontWeight: 600, textDecoration: "none" }}>legal@wispfolio.com</a>
          </div>

          <div style={{ marginTop: 32, display: "flex", gap: 16 }}>
            <Link href="/privacy" style={{ fontSize: 13, color: "#2563EB", textDecoration: "none", fontWeight: 500 }}>Privacy Policy →</Link>
            <Link href="/" style={{ fontSize: 13, color: "#94A3B8", textDecoration: "none" }}>← Back home</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
