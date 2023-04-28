import Head from "next/head";

import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className={styles.home}>
        <span>Welcome to the Clerkie Challenge!</span>
      </div>
    </>
  );
}
