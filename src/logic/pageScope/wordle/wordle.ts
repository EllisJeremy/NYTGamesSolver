import getGuessFeedback from "./utils/getGuessFeeback";
import guessWord from "./utils/guessWord";
import { WORDS } from "./data/wordleWords";
import type { PresentType } from "./wordleTypes/wordleTypes";

export default function wordleSolver() {
  const answerSpace = new Set(WORDS);
  const unused = new Set();
  const correct = [null, null, null, null, null];
  const present: PresentType = {};
  const guess = "crane";

  for (let rowIndex = 0; rowIndex <= 5; rowIndex++) {
    guessWord(guess);
    const feedback = getGuessFeedback(rowIndex);
    console.log(feedback);
  }
}
