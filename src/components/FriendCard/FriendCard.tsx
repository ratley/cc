import { forwardRef } from "react";
import { Friend } from "../../types";
import styles from "./FriendCard.module.scss";

const classnames = {
  "Close Friends": styles.cf,
  "Super Close Friends": styles.scf,
};
// trunk-ignore(eslint/react/display-name)
const FriendCard = forwardRef(({ friend }: { friend: Friend }, ref) => {
  const statusClassName = friend.status ? classnames[friend.status] : "";
  return (
    <div className={styles.friendCard} ref={ref as any}>
      <div className={styles.title}>
        <h5 className={styles.name}>{friend.name}</h5>
        {friend.status && (
          <div className={`${styles.status} ${statusClassName}`}>
            <span>{friend.status}</span>
          </div>
        )}
      </div>
      <span className={styles.description}>
        {`${friend.email} • ${friend.number}`}
      </span>
      <div className={styles.loading}>
        <div className={styles.loadingRow}>
          <div className={styles.loadingBar1} />
          <div className={styles.loadingBar2} />
        </div>
        <div className={styles.loadingRow}>
          <div className={styles.loadingBar3} />
          <div className={styles.loadingBar4} />
        </div>
      </div>
    </div>
  );
});
export default FriendCard;
