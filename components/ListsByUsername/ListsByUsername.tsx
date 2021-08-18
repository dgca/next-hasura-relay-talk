import { Suspense, useState } from "react";
import { graphql, useLazyLoadQuery } from "react-relay";
import Link from "next/link";
import EditList from "components/EditList/EditList";
import { ListsByUsernameQuery as ListsByUsernameQueryType } from "queries/__generated__/ListsByUsernameQuery.graphql";

const ListsByUsernameQuery = graphql`
  query ListsByUsernameQuery($username: String!) {
    lists_connection(where: { user: { username: { _eq: $username } } }) {
      edges {
        node {
          name
          description
          pk
          id
        }
      }
    }
  }
`;

type ListsByUsernameProps = {
  username: string;
};

function ListsByUsernameLoader({ username }: ListsByUsernameProps) {
  const [listUnderEdit, setListUnderEdit] = useState<{
    name: string;
    description: string;
    pk: string;
  } | null>(null);

  const data = useLazyLoadQuery<ListsByUsernameQueryType>(
    ListsByUsernameQuery,
    {
      username,
    }
  );

  const lists = data.lists_connection.edges;

  if (lists.length === 0) {
    return <p>You don&apos;t have any lists :(</p>;
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.lists_connection.edges.map((item) => {
            const { name, description } = item.node;
            const pk = item.node.pk as string;
            return (
              <tr key={pk}>
                <td>
                  <Link href={`/list/${pk}`}>
                    <a>{name}</a>
                  </Link>
                </td>
                <td>{description}</td>
                <td style={{ textAlign: "right" }}>
                  <button
                    onClick={() => {
                      setListUnderEdit({
                        name,
                        description: description || "",
                        pk,
                      });
                    }}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {listUnderEdit && (
        <EditList
          {...listUnderEdit}
          onClose={() => {
            setListUnderEdit(null);
          }}
        />
      )}
    </>
  );
}

export default function ListsByUsername({ username }: ListsByUsernameProps) {
  return (
    <Suspense fallback="Loading...">
      <ListsByUsernameLoader username={username} />
    </Suspense>
  );
}
