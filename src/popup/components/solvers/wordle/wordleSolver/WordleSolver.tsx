import styles from "./wordleSolver.module.css";
import WordleTitle from "../wordleTitle/WordleTitle";

export default function WordleSolver() {
  return (
    <div className={styles.container}>
      <WordleTitle />

      <button className={styles.solve}>Solve</button>
    </div>
  );
}
