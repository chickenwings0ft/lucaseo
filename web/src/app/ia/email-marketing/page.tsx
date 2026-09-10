import type { Metadata } from "next";
import ServicePageTemplate from "../../components/ServicePageTemplate";
import { emailMarketing } from "@/lib/pages/es/ia/email-marketing";

export const metadata: Metadata = {
  title: emailMarketing.metaTitle,
  description: emailMarketing.metaDescription,
};

export default function Page() {
  return <ServicePageTemplate page={emailMarketing} locale="es" />;
}
