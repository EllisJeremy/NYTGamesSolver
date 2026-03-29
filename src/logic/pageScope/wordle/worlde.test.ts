/// <reference types="jest" />
import { WORDS } from "./data/wordleWords";
import updateHints from "./utils/updateHints";
import shrinkAnswerSpace from "./utils/shrinkAnswerSpace";
import getNextGuess from "./utils/getNextGuess";
import type {
  LetterGuessType,
  AccuracyEnum,
  PresentType,
} from "./wordleTypes/wordleTypes";

function guessWordAndGetFeedback(
  target: string,
  guess: string,
): LetterGuessType[] {
  const remaining: Record<string, number> = {};
  for (const letter of target) {
    remaining[letter] = (remaining[letter] ?? 0) + 1;
  }

  const accuracy: AccuracyEnum[] = Array(5).fill("absent");

  for (let i = 0; i < 5; i++) {
    if (guess[i] === target[i]) {
      accuracy[i] = "correct";
      remaining[guess[i]]--;
    }
  }

  for (let i = 0; i < 5; i++) {
    if (accuracy[i] === "correct") continue;
    if ((remaining[guess[i]] ?? 0) > 0) {
      accuracy[i] = "present in another position";
      remaining[guess[i]]--;
    }
  }

  return Array.from({ length: 5 }, (_, i) => ({
    position: i,
    letter: guess[i],
    accuracy: accuracy[i],
  }));
}

function wordle(target: string): number {
  const answerSpace = new Set(WORDS);
  const absent: Set<string> = new Set();
  const present: PresentType = {};
  const correct = [null, null, null, null, null];
  let guess = "crane";

  for (let rowIndex = 0; rowIndex <= 5; rowIndex++) {
    const feedback = guessWordAndGetFeedback(target, guess);

    updateHints(absent, present, correct, feedback);
    if (correct.filter((x) => x === null).length === 0) {
      return rowIndex;
    }

    shrinkAnswerSpace(absent, present, correct, answerSpace);
    if (answerSpace.size === 0) {
      throw new Error(`Answer space did not contain ${target}`);
    }
    guess =
      answerSpace.size <= 2
        ? answerSpace.values().next().value!
        : getNextGuess(answerSpace);
  }
  throw new Error(`${target} was not solved`);
}

describe("wordle", () => {
  test("all words", () => {
    let runningSum = 0;
    for (const word of WORDS) {
      const numberOfGuesses = wordle(word);
      runningSum += numberOfGuesses;
    }
    const mean = runningSum / WORDS.length;
    console.log(mean);
  });

  test("one", () => {
    const numberOfGuesses = wordle("abius");
    console.log(numberOfGuesses);
  });
});
