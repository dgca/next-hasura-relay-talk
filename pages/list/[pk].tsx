import { withRelay, RelayProps } from "relay-nextjs";
import { graphql, usePreloadedQuery } from "react-relay";
import { getClientEnvironment } from "lib/relayClientEnvironment";
import { useRouter } from "next/router";
import ListItems from "components/ListItems/ListItems";

import type { Pk_ListQuery as Pk_ListQueryType } from "queries/__generated__/Pk_ListQuery.graphql";

const ListQuery = graphql`
  query Pk_ListQuery($pk: uuid!) {
    lists_connection(where: { pk: { _eq: $pk } }) {
      edges {
        node {
          user {
            pk
            username
          }
          pk
          name
          description
          ...ListItemsFragment
        }
      }
    }
  }
`;

type ListProps = RelayProps<{}, Pk_ListQueryType>;

function List({ preloadedQuery }: ListProps) {
  const data = usePreloadedQuery(ListQuery, preloadedQuery);

  const list = data.lists_connection.edges[0];

  if (!list) {
    return null;
  }

  const {
    description,
    name,
    pk: listPk,
    user: { pk: userPk, username },
  } = list.node;

  return (
    <>
      <h1>List: {name}</h1>
      <h2>By: {username}</h2>
      <p>{description}</p>
      <ListItems list={list.node} />
    </>
  );
}

function ListFallback() {
  return (
    <>
      <h1>List: Loading...</h1>
      <h2>By...?</h2>
      <p>Any minute now...</p>
    </>
  );
}

export default withRelay(List, ListQuery, {
  fallback: <ListFallback />,
  createClientEnvironment: () => getClientEnvironment()!,
  createServerEnvironment: async () => {
    const { createServerEnvironment } = await import(
      "lib/server/relayServerEnvironment"
    );

    return createServerEnvironment();
  },
});
