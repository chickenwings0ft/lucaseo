import type { Metadata } from "next";
import ServicePageTemplate from "../../components/ServicePageTemplate";
import { aiEn } from "@/lib/pages/en/ai";

export const metadata: Metadata = {
  title: aiEn.metaTitle,
  description: aiEn.metaDescription,
  alternates: { canonical: "https://lucaseo.com/en/ai" },
};

export default function Page() {
  return <ServicePageTemplate page={aiEn} locale="en" />;
}
