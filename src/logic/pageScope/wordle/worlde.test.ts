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
  const targetCounter: Record<string, number> = {};
  for (const letter of target) {
    targetCounter[letter] = (targetCounter[letter] ?? 0) + 1;
  }
  const guessCounter: Record<string, number> = {};
  for (const letter of guess) {
    guessCounter[letter] = (guessCounter[letter] ?? 0) + 1;
  }
  const feedback = [];

  for (let i = 0; i < 5; i++) {
    let accuracy: AccuracyEnum = "absent";
    if (guess[i] === target[i]) {
      accuracy = "correct";
    } else if (
      target.includes(guess[i]) &&
      guessCounter[guess[i]] <= (targetCounter[guess[i]] ?? 0)
    ) {
      console.log(target, guess, guess[i], i);
      console.log(guessCounter[guess[i]], targetCounter[guess[i]] ?? 0);

      accuracy = "present in another position";
    }
    feedback.push({
      position: i,
      letter: guess[i],
      accuracy,
    });
  }

  return feedback;
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
