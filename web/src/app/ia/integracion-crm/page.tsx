import type { Metadata } from "next";
import ServicePageTemplate from "../../components/ServicePageTemplate";
import { integracionCrm } from "@/lib/pages/es/ia/integracion-crm";

export const metadata: Metadata = {
  title: integracionCrm.metaTitle,
  description: integracionCrm.metaDescription,
};

export default function Page() {
  return <ServicePageTemplate page={integracionCrm} locale="es" />;
}
