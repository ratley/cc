import Image from "next/image";
import Link from "next/link";
import styles from "./Sidebar.module.scss";
import { useRouter } from "next/router";

const Sidebar = () => {
  const { pathname } = useRouter();

  return (
    <div className={styles.sidebar}>
      <div className={styles.header}>
        <Image src="/clerkie-logo.png" alt="logo" width={20} height={20} />
        <span className={styles.title}>Clerkie Challenge</span>
      </div>
      <div className={styles.content}>
        <Link
          className={`${styles.item} ${pathname === "/" ? styles.active : ""}`}
          href="/"
        >
          <Image src="/home-icon.png" alt="home" width={24} height={24} />
          <span className={styles.itemName}>Home</span>
        </Link>
        <Link
          className={`${styles.item} ${
            pathname === "/friends" ? styles.active : ""
          }`}
          href="/friends"
        >
          <Image src="/friends-icon.png" alt="home" width={24} height={24} />
          <span className={styles.itemName}>Friends</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
