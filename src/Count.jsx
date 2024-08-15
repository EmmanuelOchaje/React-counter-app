import styles from "./Count.module.css";

export default function Count(props) {
  const subCount = props.subCount;
  const addCount = props.addCount;
  const step = props.step;

  return (
    <div className={styles.count}>
      <button className={styles.btn} onClick={subCount}>
        -
      </button>
      <p className={styles.para}>Count: +{step}</p>
      <button className={styles.btn} onClick={addCount}>
        +
      </button>
    </div>
  );
}
