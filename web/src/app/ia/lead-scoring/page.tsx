import type { Metadata } from "next";
import ServicePageTemplate from "../../components/ServicePageTemplate";
import { leadScoring } from "@/lib/pages/es/ia/lead-scoring";

export const metadata: Metadata = {
  title: leadScoring.metaTitle,
  description: leadScoring.metaDescription,
};

export default function Page() {
  return <ServicePageTemplate page={leadScoring} locale="es" />;
}
