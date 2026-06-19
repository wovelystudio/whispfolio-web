import Link from "next/link";
import Navbar from "@/components/layout/Navbar";

const SECTIONS = [
  {
    title: "What we collect",
    body: "We collect the information you provide when creating an account (name, email, password), the content you create within Wispfolio (project details, updates, inspiration references, assets), and standard usage data (pages visited, features used, browser type). We do not collect or store your actual cloud storage files — we only read metadata when you connect Google Drive or OneDrive.",
  },
  {
    title: "How we use it",
    body: "We use your data to operate Wispfolio, personalise your experience, send you important account updates, and improve the product. We never sell your personal data. We do not run advertising. If you are a Creator with a public share page, information you choose to make public (project name, updates, progress) will be visible to anyone with the link.",
  },
  {
    title: "Cloud storage",
    body: "When you connect Google Drive or OneDrive, Wispfolio requests read-access to display your files within the Asset Library. We do not store your files on our servers. Your files remain entirely in your own cloud storage. You can disconnect at any time from the Creator Settings page.",
  },
  {
    title: "Cookies",
    body: "We use essential cookies to keep you signed in and maintain your session. We use analytics cookies (privacy-respecting, no third-party ad tracking) to understand how the product is used so we can improve it. You can opt out of analytics cookies at any time.",
  },
  {
    title: "Data retention",
    body: "We retain your data for as long as your account is active. If you delete your account, we permanently delete all your data within 30 days. Some anonymised, aggregated data may be retained for product analytics.",
  },
  {
    title: "Your rights",
    body: "You have the right to access, correct, or delete your personal data at any time. You can export your data from Settings → Account → Export data. To permanently delete your account and all associated data, go to Settings → Account → Delete account. For any privacy requests, contact us at privacy@wispfolio.com.",
  },
  {
    title: "Security",
    body: "We use industry-standard encryption (TLS in transit, AES-256 at rest) and conduct regular security audits. Passwords are hashed using bcrypt. We never store raw passwords. If we become aware of a security breach affecting your data, we will notify you within 72 hours.",
  },
  {
    title: "Changes to this policy",
    body: "We may update this Privacy Policy from time to time. We will notify you of significant changes via email or an in-app notice. Continued use of Wispfolio after changes constitutes acceptance of the updated policy.",
  },
];

export default function PrivacyPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#FFFFFF" }}>
      <Navbar />
      <div style={{ paddingTop: 100, paddingBottom: 80 }}>
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 24px" }}>
          {/* Header */}
          <div style={{ marginBottom: 48 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#EFF6FF", border: "1px solid #BFDBFE", padding: "5px 14px", borderRadius: 999, marginBottom: 20 }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: "#2563EB" }}>Legal</span>
            </div>
            <h1 style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: "clamp(28px, 4vw, 42px)", color: "#0F172A", letterSpacing: "-0.03em", marginBottom: 12, lineHeight: 1.1 }}>
              Privacy Policy
            </h1>
            <p style={{ fontSize: 15, color: "#64748B", lineHeight: 1.7 }}>
              Last updated: June 18, 2026. We believe privacy is a right, not a feature. Here is exactly what we collect, why, and what you can do about it.
            </p>
          </div>

          {/* TL;DR box */}
          <div style={{ background: "#F0F9FF", border: "1px solid #BAE6FD", borderRadius: 14, padding: "20px 22px", marginBottom: 40 }}>
            <div style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 14, color: "#0369A1", marginBottom: 10 }}>TL;DR</div>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              {["We don't sell your data. Ever.", "No ads. No tracking for advertisers.", "Your cloud files stay in your storage — we never copy them.", "You can delete everything at any time.", "We use privacy-respecting analytics only."].map(item => (
                <li key={item} style={{ display: "flex", gap: 8, fontSize: 13.5, color: "#0369A1" }}>
                  <span style={{ fontWeight: 700 }}>✓</span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Sections */}
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

          {/* Contact */}
          <div style={{ marginTop: 56, padding: "24px 26px", background: "#F8FAFF", border: "1px solid #E2E8F0", borderRadius: 14 }}>
            <div style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 15, color: "#0F172A", marginBottom: 6 }}>Questions?</div>
            <p style={{ fontSize: 14, color: "#64748B", marginBottom: 12 }}>We're human and we respond. Reach out at any time.</p>
            <a href="mailto:privacy@wispfolio.com" style={{ fontSize: 14, color: "#2563EB", fontWeight: 600, textDecoration: "none" }}>privacy@wispfolio.com</a>
          </div>

          <div style={{ marginTop: 32, display: "flex", gap: 16 }}>
            <Link href="/terms" style={{ fontSize: 13, color: "#2563EB", textDecoration: "none", fontWeight: 500 }}>Terms of Service →</Link>
            <Link href="/" style={{ fontSize: 13, color: "#94A3B8", textDecoration: "none" }}>← Back home</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
