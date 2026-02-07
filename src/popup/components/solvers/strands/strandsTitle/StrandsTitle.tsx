import styles from "./strandsTitle.module.css";
import { motion } from "framer-motion";
import { useState } from "react";

export default function StrandsTitle() {
  const letters = "STRANDS".split("");
  const [showFinal, setShowFinal] = useState(false);
  const [showPop, setShowPop] = useState(false);

  return (
    <motion.div
      className={styles.container}
      initial="initial"
      animate={showPop ? "pop" : showFinal ? "final" : "animate"}
    >
      {letters.map((letter, i) => (
        <div key={i} className={styles.letterWrapper}>
          <motion.div
            className={styles.letter}
            variants={{
              animate: {
                backgroundColor: [
                  "rgba(219,216,197,0)",
                  "rgba(219,216,197,0)",
                  "rgb(219,216,197)",
                  "rgb(219,216,197)",
                ],
                scale: [1, 0.85, 1.1, 1],
                transition: {
                  delay: i * 0.15,
                  duration: 0.4,
                  times: [0, 0.3, 0.7, 1],
                },
              },
              final: {
                backgroundColor: "#fbcc13",
              },
              pop: {
                backgroundColor: "#fbcc13",
                scale: [1, 0.85, 1.1, 1],
                transition: {
                  duration: 0.3,
                  times: [0, 0.3, 0.7, 1],
                },
              },
            }}
            onAnimationComplete={() => {
              if (i === letters.length - 1 && !showFinal) {
                setTimeout(() => setShowFinal(true), 250);
              }
              if (i === letters.length - 1 && showFinal && !showPop) {
                setTimeout(() => setShowPop(true), 100);
              }
            }}
          >
            <div className={styles.front}>{letter}</div>
          </motion.div>

          {i < letters.length - 1 && (
            <motion.div
              className={styles.connector}
              variants={{
                initial: {
                  scaleX: 0,
                  backgroundColor: "rgb(219, 216, 197)",
                },
                animate: {
                  scaleX: 1,
                  backgroundColor: "rgb(219, 216, 197)",
                  transition: {
                    delay: i * 0.15 + 0.3,
                    duration: 0.15,
                  },
                },
                final: {
                  scaleX: 1,
                  backgroundColor: "#fbcc13",
                  transition: { duration: 0 },
                },
                pop: {
                  scaleX: 1,
                  backgroundColor: "#fbcc13",
                },
              }}
            />
          )}
        </div>
      ))}
    </motion.div>
  );
}
