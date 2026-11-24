import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk } from "next/font/google";
import { academy } from "@/lib/content";
import "./globals.css";

const hanken = Hanken_Grotesk({ variable: "--font-hanken", subsets: ["latin"], style: ["normal", "italic"] });

export const metadata: Metadata = {
  metadataBase: new URL(academy.url),
  title: {
    default: `${academy.name} | Junior Football Academy ${academy.city}`,
    template: `%s | ${academy.name}`,
  },
  description: `Football coaching for kids and teens aged 4–18 on the ${academy.city}. Mini Kickers, Junior Development, Elite Pathway, holiday camps and private coaching. Book a free trial.`,
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: academy.name,
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: academy.name,
  description: academy.tagline,
  url: academy.url,
  telephone: academy.phone,
  email: academy.email,
  sport: "Soccer",
  address: {
    "@type": "PostalAddress",
    addressLocality: academy.city,
    addressRegion: academy.region,
    addressCountry: "AU",
  },
  sameAs: [academy.instagram],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-AU" className={`${hanken.variable} antialiased`}>
      <body className="min-h-dvh">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  );
}
