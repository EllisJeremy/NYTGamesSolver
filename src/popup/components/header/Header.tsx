import styles from "./header.module.css";
import type { SelectGameButtonProps } from "../SelectGameButton/SelectGameButton";
import connections from "../../../assets/connections.svg";
import crossword from "../../../assets/crossword.svg";
import letterBoxed from "../../../assets/letterBoxed.svg";
import mini from "../../../assets/mini.svg";
import pips from "../../../assets/pips.svg";
import spellingBee from "../../../assets/spellingBee.svg";
import strands from "../../../assets/strands.svg";
import sudoku from "../../../assets/sudoku.svg";
import wordle from "../../../assets/wordle.svg";
import SelectGameButton from "../SelectGameButton/SelectGameButton";
import { colors } from "../../utils/styles";

const buttons: SelectGameButtonProps[] = [
  { imageAddress: wordle, backgroundColor: colors.wordle, game: "wordle" },
  { imageAddress: strands, backgroundColor: colors.strands, game: "strands" },
  {
    imageAddress: connections,
    backgroundColor: colors.connections,
    game: "connections",
  },
  {
    imageAddress: crossword,
    backgroundColor: colors.crossword,
    game: "crossword",
  },
  {
    imageAddress: letterBoxed,
    backgroundColor: colors.letterBoxed,
    game: "letterBoxed",
  },
  { imageAddress: mini, backgroundColor: colors.mini, game: "mini" },
  { imageAddress: pips, backgroundColor: colors.pips, game: "pips" },
  {
    imageAddress: spellingBee,
    backgroundColor: colors.spellingBee,
    game: "spellingBee",
  },

  { imageAddress: sudoku, backgroundColor: colors.sudoku, game: "sudoku" },
];

export default function Header() {
  return (
    <div className={styles.container}>
      {buttons.map(({ imageAddress, backgroundColor, game }) => (
        <SelectGameButton
          imageAddress={imageAddress}
          backgroundColor={backgroundColor}
          game={game}
        />
      ))}
    </div>
  );
}
