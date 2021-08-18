import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "components/Auth/Auth";
import ListsByUsername from "components/ListsByUsername/ListsByUsername";
import CreateList from "components/CreateList/CreateList";

export default function Dashboard() {
  const { username } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!username) {
      router.replace("/");
    }
  }, [username, router]);
  return (
    username && (
      <>
        <h1>Hello {username}!</h1>
        <p>Your lists:</p>
        <ListsByUsername username={username} />
        <br />
        <CreateList />
      </>
    )
  );
}
