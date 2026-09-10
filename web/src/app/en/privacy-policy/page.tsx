import type { Metadata } from "next";
import ServiceNav from "../../components/ServiceNav";
import SiteFooter from "../../components/SiteFooter";

export const metadata: Metadata = {
  title: "Privacy Policy | Lucaseo",
  description: "Lucaseo privacy policy. How we collect, use and protect your personal information in compliance with GDPR.",
  alternates: { canonical: "https://lucaseo.com/en/privacy-policy" },
};

export default function PrivacyPolicy() {
  return (
    <>
      <ServiceNav locale="en" />
      <style>{`
        .legal { max-width: 720px; margin: 0 auto; padding: 9rem 2rem 5rem; }
        .legal h1 { font-family: var(--font-display); font-weight: 800; font-size: clamp(2rem, 4vw, 3rem); letter-spacing: -0.03em; margin-bottom: 0.5rem; }
        .legal .updated { font-size: 0.875rem; color: #5a6480; margin-bottom: 3rem; }
        .legal h2 { font-family: var(--font-display); font-weight: 700; font-size: 1.25rem; margin-top: 2.5rem; margin-bottom: 0.75rem; }
        .legal p, .legal li { font-size: 0.9375rem; color: #3d4661; line-height: 1.8; }
        .legal p + p { margin-top: 1rem; }
        .legal ul { padding-left: 1.25rem; margin: 1rem 0; }
        .legal li { margin-bottom: 0.5rem; }
        .legal a { color: #004aad; text-decoration: none; }
        .legal a:hover { text-decoration: underline; }
      `}</style>

      <div className="legal">
        <h1>Privacy Policy</h1>
        <p className="updated">Last updated: September 2026</p>

        <p>At Lucaseo, we take the protection of your personal data very seriously. This Privacy Policy explains how we collect, use, store and protect your information when you interact with our website lucaseo.com and our services.</p>

        <h2>1. Data Controller</h2>
        <p>The data controller for your personal data is Lucaseo, based in Spain. You can contact us at any time through our website contact form or by sending an email to hola@lucaseo.com.</p>

        <h2>2. Data We Collect</h2>
        <ul>
          <li><strong>Contact data:</strong> name, email, phone and company, voluntarily provided through our contact form.</li>
          <li><strong>Browsing data:</strong> IP address, browser type, pages visited and time spent, collected automatically through analytics cookies.</li>
          <li><strong>Communication preferences:</strong> your preference on how you wish to be contacted (email or phone).</li>
        </ul>

        <h2>3. Purpose of Processing</h2>
        <ul>
          <li>To respond to your information or quote request.</li>
          <li>To send you commercial communications if you have given your consent.</li>
          <li>To analyze the use of our website to improve user experience.</li>
          <li>To comply with applicable legal obligations.</li>
        </ul>

        <h2>4. Legal Basis</h2>
        <ul>
          <li><strong>Consent:</strong> by submitting the contact form, you agree that we process your data to respond to you.</li>
          <li><strong>Legitimate interest:</strong> to improve our services and user experience.</li>
          <li><strong>Legal compliance:</strong> when the law requires us to retain certain data.</li>
        </ul>

        <h2>5. Data Recipients</h2>
        <p>Your data may be shared with the following service providers, exclusively for the purposes described: Sanity.io (CMS), Resend (transactional email), Vercel (hosting), and Google Analytics (anonymized traffic analysis). We do not sell, rent or share your personal data with third parties for commercial purposes.</p>

        <h2>6. Data Retention</h2>
        <ul>
          <li><strong>Contact form data:</strong> retained for a maximum of 2 years from the last interaction.</li>
          <li><strong>Browsing data:</strong> retained for a maximum of 26 months.</li>
        </ul>

        <h2>7. Your Rights</h2>
        <p>Under the GDPR, you have the right to: access, rectification, erasure, restriction, portability and objection. To exercise any of these rights, email us at hola@lucaseo.com with the subject &ldquo;GDPR Rights&rdquo;. We will respond within 30 days.</p>

        <h2>8. Cookies</h2>
        <p>Our website uses own and third-party cookies to improve browsing experience and analyze traffic. You can manage your cookie preferences at any time through your browser settings.</p>

        <h2>9. Security</h2>
        <p>We implement appropriate technical and organizational measures to protect your personal data. All communications with our website are encrypted via SSL/TLS.</p>

        <h2>10. Changes</h2>
        <p>We reserve the right to update this Privacy Policy at any time. Changes will be published on this page with the last update date.</p>

        <h2>11. Contact</h2>
        <p>If you have questions about this Privacy Policy, contact us at hola@lucaseo.com. You may also file a complaint with the Spanish Data Protection Agency (AEPD): <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a>.</p>
      </div>

      <SiteFooter locale="en" />
    </>
  );
}
