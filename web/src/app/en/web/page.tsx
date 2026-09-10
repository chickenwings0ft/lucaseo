import type { Metadata } from "next";
import ServicePageTemplate from "../../components/ServicePageTemplate";
import { webEn } from "@/lib/pages/en/web";

export const metadata: Metadata = {
  title: webEn.metaTitle,
  description: webEn.metaDescription,
  alternates: { canonical: "https://lucaseo.com/en/web" },
};

export default function Page() {
  return <ServicePageTemplate page={webEn} locale="en" />;
}
