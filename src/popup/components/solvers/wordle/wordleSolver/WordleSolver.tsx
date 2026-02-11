import styles from "./wordleSolver.module.css";
import WordleTitle from "../wordleTitle/WordleTitle";

export default function WordleSolver() {
  return (
    <div className={styles.container}>
      <WordleTitle />

      <button
        className={styles.solve}
        onClick={() => {
          chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
            if (!tab?.id) return;

            chrome.tabs.sendMessage(tab.id, { type: "PING" }, (response) => {
              if (chrome.runtime.lastError) {
                console.error(chrome.runtime.lastError.message);
                return;
              }

              console.log("Guesses:", response?.count);
            });
          });
        }}
      >
        Solve
      </button>
    </div>
  );
}
