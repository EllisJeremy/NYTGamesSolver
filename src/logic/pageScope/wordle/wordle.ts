import getGuessFeedback from "./utils/getGuessFeeback";
import guessWord from "./utils/guessWord";
import { WORDS } from "./data/wordleWords";
import type { PresentType } from "./wordleTypes/wordleTypes";
import updateHints from "./utils/updateHints";
import sleep from "../globalUtils/sleep";

export default async function wordleSolver() {
  const answerSpace = new Set(WORDS);
  const unused: Set<string> = new Set();
  const present: PresentType = Array.from("abcdefghijklmnopqrstuvwxyz").map(
    (l) => ({
      l: new Set(),
    }),
  );
  const correct = [null, null, null, null, null];
  const guess = "crane";

  for (let rowIndex = 0; rowIndex <= 5; rowIndex++) {
    guessWord(guess);
    await sleep(2000);
    const feedback = getGuessFeedback(rowIndex);
    console.log(feedback);
    updateHints(unused, present, correct, feedback);
    return;
  }
}
