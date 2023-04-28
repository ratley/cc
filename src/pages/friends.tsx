import Head from "next/head";

import styles from "../styles/Friends.module.scss";
import { Filter } from "../components";
import { Option } from "../components/Filter/Filter";
import { useState } from "react";

export default function Friends() {
  const [filters, setFilters] = useState<string[]>([]);

  const onApply = (filters: string[]) => {
    setFilters(filters);
  };

  const filterOptions: Option[] = [
    {
      label: "Close friends",
      applied: filters.includes("Close friends"),
    },
    {
      label: "Super close friends",
      applied: filters.includes("Super close friends"),
    },
  ];
  return (
    <>
      <Head>
        <title>Friends</title>
      </Head>
      <div className={styles.friends}>
        <div className={styles.wrapper}>
          <Filter
            options={filterOptions}
            label="Friend status"
            onApply={onApply}
            onClear={() => setFilters([])}
          />
          <div className={styles.list}></div>
        </div>
      </div>
    </>
  );
}
