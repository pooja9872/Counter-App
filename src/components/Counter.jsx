import React from "react";
import styles from "./counter.module.css";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.counter_app}>
      <h1>{count}</h1>
      <button className={styles.btn} onClick={() => setCount(0)}>
        Reset Counter
      </button>
      <button
        className={styles.btn}
        onClick={() => (count > 10 ? "" : setCount(count + 1))}
      >
        Incerement Counter
      </button>
      <button
        className={styles.btn}
        onClick={() => (count <= 0 ? "" : setCount(count - 1))}
      >
        Decrement Counter
      </button>
    </div>
  );
}

export default Counter;
