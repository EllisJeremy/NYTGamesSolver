import styles from "./feedback.module.css";
import type { wordleFeedback } from "../../../../types/types";

export default function Feedback({ guesses, error }: wordleFeedback) {
  const info = {
    Result: "crane",
    Guesses: guesses,
  };

  return (
    <div className={styles.full}>
      <div className={styles.container}>
        <div className={styles.row}>
          <p>Status:</p>
          <p>{error}</p>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.background}>
          {Object.entries(info).map(([label, value]) => (
            <div className={styles.row}>
              <p>{label}:</p>
              <p>{value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
