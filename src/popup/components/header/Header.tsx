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
  { imageAddress: wordle, backgroundColor: colors.wordle },
  { imageAddress: strands, backgroundColor: colors.strands },
  { imageAddress: connections, backgroundColor: colors.connections },
  { imageAddress: crossword, backgroundColor: colors.crossword },
  { imageAddress: letterBoxed, backgroundColor: colors.letterBoxed },
  { imageAddress: mini, backgroundColor: colors.mini },
  { imageAddress: pips, backgroundColor: colors.pips },
  { imageAddress: spellingBee, backgroundColor: colors.spellingBee },

  { imageAddress: sudoku, backgroundColor: colors.sudoku },
];

export default function Header() {
  return (
    <div className={styles.container}>
      {buttons.map(({ imageAddress, backgroundColor }) => (
        <SelectGameButton
          imageAddress={imageAddress}
          backgroundColor={backgroundColor}
        />
      ))}
    </div>
  );
}
