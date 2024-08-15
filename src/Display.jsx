import styles from "./Display.module.css";

export default function Display({ count }) {
  return <div className={styles.display}>{count}</div>;
}
