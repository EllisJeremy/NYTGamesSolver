import getGuessFeedback from "./utils/getGuessFeeback";
import guessWord from "./utils/guessWord";
import { WORDS } from "./data/wordleWords";
import type { PresentType } from "./wordleTypes/wordleTypes";
import updateHints from "./utils/updateHints";
import sleep from "../globalUtils/sleep";
import shrinkAnswerSpace from "./utils/shrinkAnswerSpace";

export default async function wordleSolver() {
  const answerSpace = new Set(WORDS);
  const absent: Set<string> = new Set();
  const present: PresentType = {};
  const correct = [null, null, null, null, null];
  const guess = "crane";

  for (let rowIndex = 0; rowIndex <= 5; rowIndex++) {
    guessWord(guess);
    await sleep(2020);

    const feedback = getGuessFeedback(rowIndex);
    console.log(feedback);

    updateHints(absent, present, correct, feedback);
    shrinkAnswerSpace(absent, present, correct, answerSpace);
    console.log(answerSpace);
    return;
  }
}
