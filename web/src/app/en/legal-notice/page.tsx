import type { Metadata } from "next";
import ServiceNav from "../../components/ServiceNav";
import SiteFooter from "../../components/SiteFooter";

export const metadata: Metadata = {
  title: "Legal Notice | Lucaseo",
  description: "Legal notice and terms of use for the lucaseo.com website.",
  alternates: { canonical: "https://lucaseo.com/en/legal-notice" },
};

export default function LegalNotice() {
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
      `}</style>

      <div className="legal">
        <h1>Legal Notice</h1>
        <p className="updated">Last updated: September 2026</p>

        <h2>1. Identification</h2>
        <ul>
          <li><strong>Name:</strong> Lucaseo</li>
          <li><strong>Activity:</strong> Digital marketing agency — SEO, SEM, social media, web development and artificial intelligence</li>
          <li><strong>Website:</strong> lucaseo.com</li>
          <li><strong>Email:</strong> hola@lucaseo.com</li>
        </ul>

        <h2>2. Purpose</h2>
        <p>This legal notice governs the use and conditions of access to the website lucaseo.com. Access to this website implies express acceptance of all conditions established herein.</p>

        <h2>3. Terms of Use</h2>
        <p>The user agrees to make appropriate use of the contents and services offered through this website and not to use them for illegal activities, activities contrary to morals or public order, or activities that cause damage to the physical and logical systems of the website or third parties.</p>

        <h2>4. Intellectual Property</h2>
        <p>All content on this website (texts, photographs, graphics, images, technology, software, designs, logos, etc.) is the intellectual property of Lucaseo or its legitimate owners, protected by applicable intellectual and industrial property laws. Reproduction, distribution, public communication and transformation of any content is expressly prohibited without authorization.</p>

        <h2>5. Limitation of Liability</h2>
        <p>Lucaseo is not responsible for damages arising from improper access or use of the website, content of third-party websites linked from this site, service interruptions beyond our control, or the presence of viruses in content transmitted by third parties.</p>

        <h2>6. External Links</h2>
        <p>This website may contain links to third-party pages. Lucaseo assumes no responsibility for the content, privacy policies or practices of third-party websites.</p>

        <h2>7. Applicable Law</h2>
        <p>These conditions are governed by Spanish law. For any dispute arising from access or use of this website, the parties submit to the courts and tribunals of the user's domicile, in accordance with applicable regulations.</p>

        <h2>8. Modifications</h2>
        <p>Lucaseo reserves the right to modify this legal notice at any time. Changes are effective from their publication on this website.</p>
      </div>

      <SiteFooter locale="en" />
    </>
  );
}
