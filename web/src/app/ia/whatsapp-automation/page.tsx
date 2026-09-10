import type { Metadata } from "next";
import ServicePageTemplate from "../../components/ServicePageTemplate";
import { whatsappAutomation } from "@/lib/pages/es/ia/whatsapp-automation";

export const metadata: Metadata = {
  title: whatsappAutomation.metaTitle,
  description: whatsappAutomation.metaDescription,
};

export default function Page() {
  return <ServicePageTemplate page={whatsappAutomation} locale="es" />;
}
