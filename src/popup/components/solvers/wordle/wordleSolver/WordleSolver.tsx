import styles from "./wordleSolver.module.css";
import WordleTitle from "../wordleTitle/WordleTitle";
import { useState } from "react";
import Feedback from "../../shared/feedback/Feedback";

export default function WordleSolver() {
  const [guesses, setGuesses] = useState(0);
  const [status, setStatus] = useState("Ready");
  const [totalTime, setTotalTime] = useState(0);
  const [computeTime, setComputeTime] = useState(0);
  const [answer, setAnswer] = useState("");

  return (
    <div className={styles.container}>
      <div>
        <WordleTitle />
        <Feedback
          answer={answer}
          status={status}
          guesses={guesses}
          totalTime={totalTime}
          computeTime={computeTime}
        />
      </div>

      <button
        className={styles.solve}
        onClick={() => {
          setStatus("Loading...");

          chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
            if (!tab?.id) return;

            chrome.tabs.sendMessage(tab.id, { type: "wordle" }, (response) => {
              if (chrome.runtime.lastError) {
                console.error(chrome.runtime.lastError.message);
                setStatus("Game Not Found");
                return;
              }

              if (!response) {
                setStatus("Game Not Found");
                return;
              }

              if (!response) return;
              setStatus(response.status);
              setAnswer(response.answer);
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
