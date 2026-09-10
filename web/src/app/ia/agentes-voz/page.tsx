import type { Metadata } from "next";
import ServicePageTemplate from "../../components/ServicePageTemplate";
import { agentesVoz } from "@/lib/pages/es/ia/agentes-voz";

export const metadata: Metadata = {
  title: agentesVoz.metaTitle,
  description: agentesVoz.metaDescription,
};

export default function Page() {
  return <ServicePageTemplate page={agentesVoz} locale="es" />;
}
