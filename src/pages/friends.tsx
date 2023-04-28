import Head from "next/head";

import styles from "../styles/Friends.module.scss";
import { Filter, FriendCard } from "../components";
import { Option } from "../components/Filter/Filter";
import { useEffect, useRef, useState, useCallback } from "react";
import { Friend } from "../types";
import { generateUsers } from "../util";
import { CLOSE_FRIENDS, SUPER_CLOSE_FRIENDS } from "../util/constants";

export default function Friends() {
  const [filters, setFilters] = useState<string[]>([]);
  const [friends, setFriends] = useState<Friend[]>([]);

  const observer = useRef(null);
  const lastFriendRef = useCallback((node) => {
    if (observer.current) {
      observer.current.disconnect();
    }
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        getFriends();
      }
    });
    if (node) observer.current.observe(node);
  }, []);

  useEffect(() => {
    getFriends();
  }, []);

  const getFriends = () => {
    const users = generateUsers(15);

    setFriends((prevFriends) => [...prevFriends, ...users]);
  };

  const onApply = (newFilters: string[]) => {
    setFilters(newFilters);
  };

  const filterOptions: Option[] = [
    {
      label: CLOSE_FRIENDS,
      applied: filters.includes(CLOSE_FRIENDS),
    },
    {
      label: SUPER_CLOSE_FRIENDS,
      applied: filters.includes(SUPER_CLOSE_FRIENDS),
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
          <div className={styles.list}>
            {friends
              .filter((friend) =>
                filters.length ? filters.includes(friend.status) : true
              )
              .map((friend, index) => (
                <FriendCard
                  friend={friend}
                  key={friend.number}
                  ref={index === friends.length - 1 ? lastFriendRef : null}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
