import Landing from "./Landing";
import { client } from "@/lib/sanity";
import { landingQuery } from "@/lib/queries";
import { defaults, type LandingData } from "@/lib/content";

export const revalidate = 60;

type QueryResult = Partial<LandingData> & {
  settings?: Partial<LandingData["settings"]> | null;
};

export default async function Page() {
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
