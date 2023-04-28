import Head from "next/head";

import styles from "../styles/Friends.module.scss";

export default function Friends() {
  return (
    <>
      <Head>
        <title>Friends</title>
      </Head>
      <div className={styles.friends}>
        <div className={styles.wrapper}>
          <div className={styles.list}></div>
        </div>
      </div>
    </>
  );
}
