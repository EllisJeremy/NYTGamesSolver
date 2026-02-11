import styles from "./wordleSolver.module.css";
import WordleTitle from "../wordleTitle/WordleTitle";
import { useState } from "react";
import Feedback from "../../shared/feedback/Feedback";

export default function WordleSolver() {
  const [guesses, setGuesses] = useState(2);
  const [error, setError] = useState("Not on Page");

  return (
    <div className={styles.container}>
      <div>
        <WordleTitle />
        <Feedback guesses={guesses} error={error} />
      </div>

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
