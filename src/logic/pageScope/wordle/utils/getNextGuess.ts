import type { LetterGuessType } from "../wordleTypes/wordleTypes";
import { WORDS } from "../data/wordleWords";
export default function getNextGuess(
  feedback: LetterGuessType[],
  answerSpace: Set<string>,
) {
  let maxScore = 0;
  let guesses = [];
  for (const word of WORDS) {
    for (const answer of answerSpace) {
    }
  }
}
