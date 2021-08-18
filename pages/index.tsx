import Head from "next/head";
import { Auth } from "components/Auth/Auth";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Listly</title>
      </Head>

      <main>
        <h1>Listly</h1>
        <p>Make lists. Share with friends.</p>
        <Auth />
      </main>
    </div>
  );
}
