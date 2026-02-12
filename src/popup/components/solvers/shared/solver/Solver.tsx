import styles from "./solver.module.css";
import Feedback from "../../shared/feedback/Feedback";
import type { GameEnum } from "../../../../../types/gameEnum";

type SolverProps<T> = {
  setStatus: (status: string) => void;
  setStateFromRes: (response: T) => void;
  status: string;
  feedback: Record<string, string | number>;
  Title: React.FunctionComponent;
  type: GameEnum;
};

export default function Solver<T>({
  setStatus,
  setStateFromRes,
  status,
  feedback,
  Title,
  type,
}: SolverProps<T>) {
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

            chrome.tabs.sendMessage(tab.id, { type }, (response) => {
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
