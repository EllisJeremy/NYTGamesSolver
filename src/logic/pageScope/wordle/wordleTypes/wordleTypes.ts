export type AccuracyEnum = "absent" | "present in another position" | "correct";

export type LetterGuessType = {
  position: number;
  letter: string;
  accuracy: AccuracyEnum;
};

export type LetterInfo = {
  bannedPositions: Set<number>;
  minCount: number;
};

export type PresentType = Record<string, LetterInfo>;

export type WordleRes = {
  answer: string;
  guesses: number;
  status: string;
  totalTime: number;
  computeTime: number;
};
