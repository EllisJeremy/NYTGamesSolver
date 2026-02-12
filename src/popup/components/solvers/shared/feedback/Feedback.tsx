import styles from "./feedback.module.css";
import type { WordleRes } from "../../../../types/types";
import { motion, AnimatePresence } from "framer-motion";

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
      <AnimatePresence>
        {status === "Solved" && (
          <motion.div
            className={styles.container}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
