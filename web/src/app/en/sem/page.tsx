import type { Metadata } from "next";
import ServicePageTemplate from "../../components/ServicePageTemplate";
import { semEn } from "@/lib/pages/en/sem";

export const metadata: Metadata = {
  title: semEn.metaTitle,
  description: semEn.metaDescription,
  alternates: { canonical: "https://lucaseo.com/en/sem" },
};

export default function Page() {
  return <ServicePageTemplate page={semEn} locale="en" />;
}
