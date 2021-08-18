import { useContext } from "react";
import { useRouter } from "next/router";

import { graphql, useMutation } from "react-relay";
import { SignUpMutation as SignUpMutationType } from "queries/__generated__/SignUpMutation.graphql";

import { AuthContext } from "components/Auth/Auth";

const SignUpMutation = graphql`
  mutation SignUpMutation($username: String!) {
    insert_users_one(object: { username: $username }) {
      username
      pk
    }
  }
`;

export default function SignUp() {
  const router = useRouter();
  const { onAuth } = useContext(AuthContext);
  const [commit, isInFlight] = useMutation<SignUpMutationType>(SignUpMutation);

  return (
    <>
      <h2>Sign up</h2>
      {isInFlight ? (
        <p>Loading...</p>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // @ts-ignore
            const username = e.target.elements.username.value;
            commit({
              variables: {
                username,
              },
              onCompleted(data) {
                const pk = data.insert_users_one?.pk as string;
                const username = data.insert_users_one?.username as string;
                onAuth({ pk, username });
                router.push("/dashboard");
              },
            });
          }}
        >
          <label>Username:</label>
          <input type="text" name="username" autoComplete="off" />
          <br />
          <button type="submit">Create account</button>
        </form>
      )}
    </>
  );
}
