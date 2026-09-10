import type { Metadata } from "next";
import ServicePageTemplate from "../../components/ServicePageTemplate";
import { seoEn } from "@/lib/pages/en/seo";

export const metadata: Metadata = {
  title: seoEn.metaTitle,
  description: seoEn.metaDescription,
  alternates: { canonical: "https://lucaseo.com/en/seo" },
};

export default function Page() {
  return <ServicePageTemplate page={seoEn} locale="en" />;
}
