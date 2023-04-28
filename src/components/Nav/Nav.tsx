import styles from "./Nav.module.scss";

export default function Nav({ title }) {
  return (
    <div className={styles.nav}>
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
}
