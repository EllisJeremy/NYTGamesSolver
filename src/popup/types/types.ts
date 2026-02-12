export type GameEnum =
  | "wordle"
  | "strands"
  | "connections"
  | "crossword"
  | "letterBoxed"
  | "mini"
  | "pips"
  | "spellingBee"
  | "sudoku";

export type WordleRes = {
  guesses: number;
  status: string;
  totalTime: number;
  computeTime: number;
};
