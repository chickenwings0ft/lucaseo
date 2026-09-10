import type { Metadata } from "next";
import ServicePageTemplate from "../../components/ServicePageTemplate";
import { chatbots } from "@/lib/pages/es/ia/chatbots";

export const metadata: Metadata = {
  title: chatbots.metaTitle,
  description: chatbots.metaDescription,
};

export default function Page() {
  return <ServicePageTemplate page={chatbots} locale="es" />;
}
