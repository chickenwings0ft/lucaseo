import type { Metadata } from "next";
import ServicePageTemplate from "../../components/ServicePageTemplate";
import { reportingAutomatizado } from "@/lib/pages/es/ia/reporting";

export const metadata: Metadata = {
  title: reportingAutomatizado.metaTitle,
  description: reportingAutomatizado.metaDescription,
};

export default function Page() {
  return <ServicePageTemplate page={reportingAutomatizado} locale="es" />;
}
