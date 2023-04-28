import Head from "next/head";
import { Nav } from "../components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div>
        <Nav title="Home" />
      </div>
    </>
  );
}
