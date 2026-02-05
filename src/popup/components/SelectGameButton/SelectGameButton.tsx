import styles from "./SelectGameButton.module.css";
import type { GameEnum } from "../../types/types";
import { usePopupStore } from "../../state/usePopupStore";

export type SelectGameButtonProps = {
  imageAddress: string;
  backgroundColor: string;
  game: GameEnum;
};
export default function SelectGameButton({
  imageAddress,
  backgroundColor,
  game,
}: SelectGameButtonProps) {
  const { currentSolver, setCurrentSolver } = usePopupStore();
  return (
    <button
      onClick={() => setCurrentSolver(game)}
      className={`${styles.button} ${
        currentSolver === game ? styles.active : ""
      }`}
      style={
        {
          backgroundColor,
          "--shadow-color": backgroundColor,
        } as React.CSSProperties
      }
    >
      <img src={imageAddress} />
    </button>
  );
}
