import type { GameEnum } from "../types/types";
import WordleSolver from "../components/solvers/wordle/WordleSolver";
import WorkInProgress from "../components/solvers/workInProgress/WorkInProgress";
import StrandsSolver from "../components/solvers/strands/strandsSolver/StrandsSolver";

export const solverRouter: Record<GameEnum, React.ComponentType> = {
  wordle: WordleSolver,
  strands: StrandsSolver,
  connections: WorkInProgress,
  crossword: WorkInProgress,
  letterBoxed: WorkInProgress,
  mini: WorkInProgress,
  pips: WorkInProgress,
  spellingBee: WorkInProgress,
  sudoku: WorkInProgress,
};
