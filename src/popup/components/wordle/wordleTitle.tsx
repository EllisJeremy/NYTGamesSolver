import styles from "./wordleTitle.module.css";
import { motion } from "framer-motion";

export default function WordleTitle() {
  const letters = "WORDLE".split("");

  return (
    <motion.div
      className={styles.container}
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
    >
      {letters.map((letter, i) => (
        <motion.div
          key={i}
          variants={{
            hidden: { rotateX: 0 },
            visible: {
              rotateX: 180,
              transition: {
                duration: 0.6,
                ease: "easeInOut",
              },
            },
          }}
          className={styles.letter}
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className={styles.front}>{letter}</div>
          <div className={styles.back}>{letter}</div>
        </motion.div>
      ))}
    </motion.div>
  );
}
