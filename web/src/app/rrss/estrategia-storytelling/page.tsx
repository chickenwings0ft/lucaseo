import type { Metadata } from "next";
import ServicePageTemplate from "../../components/ServicePageTemplate";
import { estrategiaStorytelling } from "@/lib/pages/es/rrss/estrategia-storytelling";

export const metadata: Metadata = {
  title: estrategiaStorytelling.metaTitle,
  description: estrategiaStorytelling.metaDescription,
};

export default function Page() {
  return <ServicePageTemplate page={estrategiaStorytelling} locale="es" />;
}
