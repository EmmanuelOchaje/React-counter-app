import styles from "./Step.module.css";

export default function Step({ step, addStep, subStep }) {
  return (
    <div>
      <div className={styles.count}>
        <button className={styles.btn} onClick={subStep}>
          -
        </button>
        <p className={styles.para}>Step: {step}</p>
        <button className={styles.btn} onClick={addStep}>
          +
        </button>
      </div>
    </div>
  );
}
