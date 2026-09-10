import type { Metadata } from "next";
import ServicePageTemplate from "../../components/ServicePageTemplate";
import { automatizaciones } from "@/lib/pages/es/ia/automatizaciones";

export const metadata: Metadata = {
  title: automatizaciones.metaTitle,
  description: automatizaciones.metaDescription,
};

export default function Page() {
  return <ServicePageTemplate page={automatizaciones} locale="es" />;
}
