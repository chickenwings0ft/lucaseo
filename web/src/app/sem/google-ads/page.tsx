import type { Metadata } from "next";
import ServicePageTemplate from "../../components/ServicePageTemplate";
import { googleAds } from "@/lib/pages/es/sem/google-ads";

export const metadata: Metadata = {
  title: googleAds.metaTitle,
  description: googleAds.metaDescription,
};

export default function Page() {
  return <ServicePageTemplate page={googleAds} locale="es" />;
}
