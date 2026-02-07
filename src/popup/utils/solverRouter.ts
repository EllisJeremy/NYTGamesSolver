import type { GameEnum } from "../types/types";
import WordleSolver from "../components/solvers/wordle/wordleSolver/wordleSolver";
import WorkInProgress from "../components/solvers/workInProgress/WorkInProgress";

export const solverRouter: Record<GameEnum, React.ComponentType> = {
  wordle: WordleSolver,
  strands: WorkInProgress,
  connections: WorkInProgress,
  crossword: WorkInProgress,
  letterBoxed: WorkInProgress,
  mini: WorkInProgress,
  pips: WorkInProgress,
  spellingBee: WorkInProgress,
  sudoku: WorkInProgress,
};
