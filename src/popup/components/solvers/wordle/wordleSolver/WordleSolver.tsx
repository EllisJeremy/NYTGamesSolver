import styles from "./wordleSolver.module.css";
import WordleTitle from "../wordleTitle/WordleTitle";
import { useState } from "react";
import Feedback from "../../shared/feedback/Feedback";

export default function WordleSolver() {
  const [guesses, setGuesses] = useState(0);
  const [status, setStatus] = useState("Not on Page");
  const [totalTime, setTotalTime] = useState(10);
  const [computeTime, setComputeTime] = useState(0);

  return (
    <div className={styles.container}>
      <div>
        <WordleTitle />
        <Feedback
          status={status}
          guesses={guesses}
          totalTime={totalTime}
          computeTime={computeTime}
        />
      </div>

      <button
        className={styles.solve}
        onClick={() => {
          console.log("here");
          chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
            if (!tab?.id) return;

            chrome.tabs.sendMessage(tab.id, { type: "PING" }, (response) => {
              if (chrome.runtime.lastError) {
                console.error(chrome.runtime.lastError.message);
                return;
              }
              console.log(response);

              if (!response) return;
              setStatus(response.status);
              setGuesses(response.guesses);
              setTotalTime(response.totalTime);
              setComputeTime(response.computeTime);
            });
          });
        }}
      >
        Solve
      </button>
    </div>
  );
}
