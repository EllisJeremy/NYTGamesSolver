import styles from "./wordleSolver.module.css";
import WordleTitle from "../wordleTitle/WordleTitle";

export default function WordleSolver() {
  return (
    <div className={styles.container}>
      <WordleTitle />

      <button
        className={styles.solve}
        onClick={() => {
          console.log("popup ping");
          chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
            if (!tab?.id) return;
            chrome.tabs.sendMessage(tab.id, { type: "PING" });
          });
        }}
      >
        Solve
      </button>
    </div>
  );
}
