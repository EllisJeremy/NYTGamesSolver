import getGuessFeedback from "./utils/getGuessFeeback";
import guessWord from "./utils/guessWord";
import { WORDS } from "./data/wordleWords";
import type { PresentType } from "./wordleTypes/wordleTypes";
import updateHints from "./utils/updateHints";
import sleep from "../globalUtils/sleep";
import shrinkAnswerSpace from "./utils/shrinkAnswerSpace";
import getNextGuess from "./utils/getNextGuess";
import type { WordleRes } from "./wordleTypes/wordleTypes";

export default async function wordleSolver(): Promise<WordleRes> {
  const startTime = performance.now();
  const answerSpace = new Set(WORDS);
  const absent: Set<string> = new Set();
  const present: PresentType = {};
  const correct = [null, null, null, null, null];
  let guess = "crane";
  const DELAY = 2020;

  const res = {
    status: "Not on Page",
    guesses: -1,
    totalTime: -1,
    computeTime: -1,
  };

  for (let rowIndex = 0; rowIndex <= 5; rowIndex++) {
    guessWord(guess);
    await sleep(DELAY);

    const feedback = getGuessFeedback(rowIndex);
    updateHints(absent, present, correct, feedback);
    if (correct.filter((x) => x === null).length === 0) {
      const endTime = performance.now();
      const totalTime = endTime - startTime;
      res["status"] = "Complete";
      res["guesses"] = rowIndex + 1;
      res["totalTime"] = Math.round(totalTime) / 1000;
      res["computeTime"] = Math.round(totalTime - DELAY * rowIndex + 1) / 1000;
      return res;
    }

    shrinkAnswerSpace(absent, present, correct, answerSpace);

    guess =
      answerSpace.size <= 2
        ? answerSpace.values().next().value!
        : getNextGuess(answerSpace);
  }

  return res;
}
