import type { Metadata } from "next";
import ServicePageTemplate from "../../components/ServicePageTemplate";
import { agentes } from "@/lib/pages/es/ia/agentes";

export const metadata: Metadata = {
  title: agentes.metaTitle,
  description: agentes.metaDescription,
};

export default function Page() {
  return <ServicePageTemplate page={agentes} locale="es" />;
}
