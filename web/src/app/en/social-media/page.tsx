import type { Metadata } from "next";
import ServicePageTemplate from "../../components/ServicePageTemplate";
import { socialMediaEn } from "@/lib/pages/en/social-media";

export const metadata: Metadata = {
  title: socialMediaEn.metaTitle,
  description: socialMediaEn.metaDescription,
  alternates: { canonical: "https://lucaseo.com/en/social-media" },
};

export default function Page() {
  return <ServicePageTemplate page={socialMediaEn} locale="en" />;
}
