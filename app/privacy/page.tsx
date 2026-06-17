"use client";
import Navbar from "@/components/layout/Navbar";

export default function PrivacyPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#FFFFFF" }}>
      <Navbar />
      <div style={{ paddingTop: 140, paddingBottom: 100, maxWidth: 800, margin: "0 auto", paddingLeft: 24, paddingRight: 24 }}>
        <h1 style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 36, color: "#0F172A", marginBottom: 16 }}>Privacy Policy</h1>
        <p style={{ fontSize: 15, color: "#64748B", marginBottom: 40 }}>Last updated: June 2026</p>

        <div style={{ display: "flex", flexDirection: "column", gap: 32, color: "#475569", fontSize: 16, lineHeight: 1.8 }}>
          <section>
            <h2 style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 20, color: "#0F172A", marginBottom: 12 }}>1. Introduction</h2>
            <p>Welcome to Wispfolio. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.</p>
          </section>

          <section>
            <h2 style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 20, color: "#0F172A", marginBottom: 12 }}>2. Data We Collect</h2>
            <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
            <ul style={{ paddingLeft: 24, marginTop: 12, display: "flex", flexDirection: "column", gap: 8 }}>
              <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong>Contact Data:</strong> includes email address.</li>
              <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version.</li>
              <li><strong>Profile Data:</strong> includes your username and password, projects you create, followers, and feedback.</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 20, color: "#0F172A", marginBottom: 12 }}>3. How We Use Your Data</h2>
            <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
            <ul style={{ paddingLeft: 24, marginTop: 12, display: "flex", flexDirection: "column", gap: 8 }}>
              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal or regulatory obligation.</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 20, color: "#0F172A", marginBottom: 12 }}>4. Data Security</h2>
            <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.</p>
          </section>

          <section>
            <h2 style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 20, color: "#0F172A", marginBottom: 12 }}>5. Contact Us</h2>
            <p>If you have any questions about this privacy policy or our privacy practices, please contact us at privacy@wispfolio.com.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
