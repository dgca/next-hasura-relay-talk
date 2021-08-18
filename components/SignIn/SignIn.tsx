import { Suspense, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import {
  graphql,
  PreloadedQuery,
  usePreloadedQuery,
  useQueryLoader,
} from "react-relay";
import { AuthContext } from "components/Auth/Auth";

import { SignInQuery as SignInQueryType } from "queries/__generated__/SignInQuery.graphql";

const SignInQuery = graphql`
  query SignInQuery($username: String!) {
    users_connection(where: { username: { _eq: $username } }) {
      edges {
        node {
          pk
          username
        }
      }
    }
  }
`;

export default function SignIn() {
  const [queryReference, loadQuery] =
    useQueryLoader<SignInQueryType>(SignInQuery);

  return (
    <>
      <h2>Sign in</h2>
      {!queryReference && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // @ts-ignore
            const username = e.target.elements.username.value;
            loadQuery({ username });
          }}
        >
          <label>Username:</label>
          <input type="text" name="username" autoComplete="off" />
          <br />
          <button type="submit">Log in</button>
        </form>
      )}
      {!!queryReference && (
        <Suspense fallback="Loading...">
          <HandleSignIn queryReference={queryReference} />
        </Suspense>
      )}
    </>
  );
}

type HandleSignInProps = {
  queryReference: PreloadedQuery<SignInQueryType>;
};

function HandleSignIn({ queryReference }: HandleSignInProps) {
  const router = useRouter();
  const data = usePreloadedQuery(SignInQuery, queryReference);

  const { onAuth } = useContext(AuthContext);

  useEffect(() => {
    const user = data.users_connection.edges[0].node;
    const pk = user.pk as string;

    onAuth({ pk, username: user.username });
    router.push("/dashboard");
  }, [queryReference, router, data, onAuth]);

  return null;
}
