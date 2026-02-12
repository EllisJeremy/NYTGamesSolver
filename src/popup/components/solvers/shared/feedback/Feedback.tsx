import styles from "./feedback.module.css";
import type { WordleRes } from "../../../../types/types";

export default function Feedback({
  status,
  answer,
  guesses,
  totalTime,
  computeTime,
}: WordleRes) {
  const info = {
    Answer: answer,
    Guesses: guesses,
    "Total Time": totalTime,
    "Compute Time": computeTime,
  };

  return (
    <div className={styles.full}>
      <div className={styles.container}>
        <div className={styles.row}>
          <p>Status:</p>
          <p>{status}</p>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.background}>
          {Object.entries(info).map(([label, value]) => (
            <div className={styles.row} key={label}>
              <p>{label}:</p>
              <p>
                {value}
                {label.includes("Time") && "s"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
