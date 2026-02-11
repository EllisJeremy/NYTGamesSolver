import getGuessFeedback from "./utils/getGuessFeeback";
import guessWord from "./utils/guessWord";
import { WORDS } from "./data/wordleWords";
import type { PresentType } from "./wordleTypes/wordleTypes";
import updateHints from "./utils/updateHints";
import sleep from "../globalUtils/sleep";
import shrinkAnswerSpace from "./utils/shrinkAnswerSpace";
import getNextGuess from "./utils/getNextGuess";

export default async function wordleSolver(): Promise<number | undefined> {
  const answerSpace = new Set(WORDS);
  const absent: Set<string> = new Set();
  const present: PresentType = {};
  const correct = [null, null, null, null, null];
  let guess = "crane";

  for (let rowIndex = 0; rowIndex <= 5; rowIndex++) {
    guessWord(guess);
    await sleep(2020);

    const feedback = getGuessFeedback(rowIndex);
    updateHints(absent, present, correct, feedback);
    if (correct.filter((x) => x === null).length === 0) return rowIndex + 1;

    shrinkAnswerSpace(absent, present, correct, answerSpace);

    guess =
      answerSpace.size <= 2
        ? answerSpace.values().next().value!
        : getNextGuess(answerSpace);
  }
}
