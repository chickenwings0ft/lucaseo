import type { Metadata } from "next";
import ServicePageTemplate from "../../components/ServicePageTemplate";
import { estrategiaMensual } from "@/lib/pages/es/rrss/estrategia-mensual";

export const metadata: Metadata = {
  title: estrategiaMensual.metaTitle,
  description: estrategiaMensual.metaDescription,
};

export default function Page() {
  return <ServicePageTemplate page={estrategiaMensual} locale="es" />;
}
