import type { Metadata } from "next";
import ServicePageTemplate from "../../components/ServicePageTemplate";
import { paidMedia } from "@/lib/pages/es/rrss/paid-media";

export const metadata: Metadata = {
  title: paidMedia.metaTitle,
  description: paidMedia.metaDescription,
};

export default function Page() {
  return <ServicePageTemplate page={paidMedia} locale="es" />;
}
