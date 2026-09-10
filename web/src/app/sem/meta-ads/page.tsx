import type { Metadata } from "next";
import ServicePageTemplate from "../../components/ServicePageTemplate";
import { metaAds } from "@/lib/pages/es/sem/meta-ads";

export const metadata: Metadata = {
  title: metaAds.metaTitle,
  description: metaAds.metaDescription,
};

export default function Page() {
  return <ServicePageTemplate page={metaAds} locale="es" />;
}
