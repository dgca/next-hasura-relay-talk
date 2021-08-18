import { withHydrateDatetime } from "relay-nextjs/date";
import {
  Environment,
  Network,
  Store,
  RecordSource,
  GraphQLResponse,
} from "relay-runtime";

import { fetchRelay } from "./fetchRelay";

function createServerNetwork() {
  return Network.create(async (params, variables) => {
    const query = params.text as string;

    const results = await fetchRelay(query, variables);

    const data = JSON.parse(
      JSON.stringify(results),
      withHydrateDatetime
    ) as GraphQLResponse;

    return data;
  });
}

export function createServerEnvironment() {
  return new Environment({
    network: createServerNetwork(),
    store: new Store(new RecordSource()),
    isServer: true,
  });
}
