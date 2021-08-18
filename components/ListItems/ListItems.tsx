import { graphql, usePaginationFragment } from "react-relay";

import type { ListItemsRefetchableQuery as ListItemsRefetchableQueryType } from "queries/__generated__/ListItemsRefetchableQuery.graphql";
import type { ListItemsFragment$key } from "queries/__generated__/ListItemsFragment.graphql";

const ListItemsFragment = graphql`
  fragment ListItemsFragment on lists
  @argumentDefinitions(
    cursor: { type: "String" }
    count: { type: "Int", defaultValue: 3 }
  )
  @refetchable(queryName: "ListItemsRefetchableQuery") {
    items_connection(first: $count, after: $cursor, order_by: { body: asc })
      @connection(key: "ListItems_items_connection") {
      edges {
        node {
          body
          pk
        }
      }
    }
  }
`;

type ListItemsProps = {
  list: ListItemsFragment$key;
};

export default function ListItems({ list }: ListItemsProps) {
  const { data, loadNext, hasNext, isLoadingNext } = usePaginationFragment<
    ListItemsRefetchableQueryType,
    ListItemsFragment$key
  >(ListItemsFragment, list);

  return (
    <>
      <ul>
        {data.items_connection.edges.map((item) => (
          <li key={item.node.pk as string}>{item.node.body}</li>
        ))}
      </ul>
      {hasNext && !isLoadingNext && (
        <button onClick={() => loadNext(3)}>Load more</button>
      )}
    </>
  );
}
