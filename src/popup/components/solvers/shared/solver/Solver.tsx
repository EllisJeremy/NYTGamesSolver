import styles from "./solver.module.css";

import Feedback from "../../shared/feedback/Feedback";

export default function Solver({
  setStatus,
  setStateFromRes,
  status,
  feedback,
  Title,
}: {
  setStatus: (status: string) => void;
  setStateFromRes: (response: any) => void;
  status: string;
  feedback: Record<string, string | number>;
  Title: React.FunctionComponent;
}) {
  return (
    <div className={styles.container}>
      <div>
        <Title />
        <Feedback status={status} feedback={feedback} />
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
              setStateFromRes(response);
            });
          });
        }}
      >
        Solve
      </button>
    </div>
  );
}
