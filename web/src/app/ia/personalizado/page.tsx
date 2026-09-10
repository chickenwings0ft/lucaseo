import type { Metadata } from "next";
import ServicePageTemplate from "../../components/ServicePageTemplate";
import { personalizado } from "@/lib/pages/es/ia/personalizado";

export const metadata: Metadata = {
  title: personalizado.metaTitle,
  description: personalizado.metaDescription,
};

export default function Page() {
  return <ServicePageTemplate page={personalizado} locale="es" />;
}
