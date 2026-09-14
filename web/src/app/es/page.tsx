import type { Metadata } from "next";
import Landing from "../Landing";
import { client } from "@/lib/sanity";
import { landingQuery } from "@/lib/queries";
import { defaults, type LandingData } from "@/lib/content";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Lucaseo — Agencia de Marketing Digital | SEO, SEM, Web & IA",
  description: "SEO, SEM, redes sociales, diseño web e IA para negocios que quieren dejar de perseguir clientes. Resultados medibles, sin métricas de vanidad.",
  alternates: { canonical: "https://lucaseo.com/es" },
};

type QueryResult = Partial<LandingData> & {
  settings?: Partial<LandingData["settings"]> | null;
};

export default async function EsPage() {
  let result: QueryResult = {};
  if (client) {
    try {
      result = await client.fetch<QueryResult>(landingQuery);
    } catch {
      result = {};
    }
  }

  const data: LandingData = {
    settings: { ...defaults.settings, ...(result.settings ?? {}) },
    services: result.services?.length ? result.services : defaults.services,
    steps: result.steps?.length ? result.steps : defaults.steps,
    cases: result.cases?.length ? result.cases : defaults.cases,
    stats: result.stats?.length ? result.stats : defaults.stats,
    clients: result.clients ?? [],
  };

  return <Landing data={data} />;
}
