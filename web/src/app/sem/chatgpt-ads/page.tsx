import type { Metadata } from "next";
import ServicePageTemplate from "../../components/ServicePageTemplate";
import { chatgptAds } from "@/lib/pages/es/sem/chatgpt-ads";

export const metadata: Metadata = {
  title: chatgptAds.metaTitle,
  description: chatgptAds.metaDescription,
};

export default function Page() {
  return <ServicePageTemplate page={chatgptAds} locale="es" />;
}
