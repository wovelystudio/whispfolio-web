"use client";
import Navbar from "@/components/layout/Navbar";

export default function TermsPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#FFFFFF" }}>
      <Navbar />
      <div style={{ paddingTop: 140, paddingBottom: 100, maxWidth: 800, margin: "0 auto", paddingLeft: 24, paddingRight: 24 }}>
        <h1 style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 36, color: "#0F172A", marginBottom: 16 }}>Terms of Service</h1>
        <p style={{ fontSize: 15, color: "#64748B", marginBottom: 40 }}>Last updated: June 2026</p>

        <div style={{ display: "flex", flexDirection: "column", gap: 32, color: "#475569", fontSize: 16, lineHeight: 1.8 }}>
          <section>
            <h2 style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 20, color: "#0F172A", marginBottom: 12 }}>1. Agreement to Terms</h2>
            <p>By accessing or using Wispfolio, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>
          </section>

          <section>
            <h2 style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 20, color: "#0F172A", marginBottom: 12 }}>2. Use License</h2>
            <p>Permission is granted to temporarily download one copy of the materials (information or software) on Wispfolio for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
            <ul style={{ paddingLeft: 24, marginTop: 12, display: "flex", flexDirection: "column", gap: 8 }}>
              <li>modify or copy the materials;</li>
              <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
              <li>attempt to decompile or reverse engineer any software contained on Wispfolio;</li>
              <li>remove any copyright or other proprietary notations from the materials; or</li>
              <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 20, color: "#0F172A", marginBottom: 12 }}>3. Content and Conduct</h2>
            <p>Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material ("Content"). You are responsible for the Content that you post to the Service, including its legality, reliability, and appropriateness.</p>
            <p style={{ marginTop: 12 }}>We reserve the right to terminate or suspend your account if you violate any of these terms or post content that is illegal, abusive, or otherwise objectionable.</p>
          </section>

          <section>
            <h2 style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 20, color: "#0F172A", marginBottom: 12 }}>4. Disclaimer</h2>
            <p>The materials on Wispfolio are provided on an 'as is' basis. Wispfolio makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
          </section>

          <section>
            <h2 style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 20, color: "#0F172A", marginBottom: 12 }}>5. Contact</h2>
            <p>If you have any questions about these Terms, please contact us at support@wispfolio.com.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
