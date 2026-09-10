import type { Metadata } from "next";
import ServicePageTemplate from "../../components/ServicePageTemplate";
import { tiktokAds } from "@/lib/pages/es/sem/tiktok-ads";

export const metadata: Metadata = {
  title: tiktokAds.metaTitle,
  description: tiktokAds.metaDescription,
};

export default function Page() {
  return <ServicePageTemplate page={tiktokAds} locale="es" />;
}
