import { useState } from "react";
import Count from "./Count";
import styles from "./Counter.module.css";
import Display from "./Display";
import Step from "./Step";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  function addCount() {
    console.log("Seen");
    return setCount(count + step);
  }

  function subCount() {
    return setCount(count - step);
  }
  function addStep() {
    return setStep(step + 1);
  }
  function subStep() {
    return setStep(step - 1);
  }

  return (
    <div className={styles.counter}>
      <h2 className={styles.h2}>REact Counter App</h2>
      <Display count={count} />
      <Count addCount={addCount} subCount={subCount} step={step} />
      <Step step={step} addStep={addStep} subStep={subStep} />
    </div>
  );
}
