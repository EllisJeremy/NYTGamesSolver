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

export type wordleFeedback = {
  guesses: number | undefined;
  error: string;
};
