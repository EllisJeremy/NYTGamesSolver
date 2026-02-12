import { WORDS } from "../data/wordleWords";

function getPattern(guess: string, answer: string): string {
  const result = Array(5).fill("0");
  const answerArr = answer.split("");
  const guessArr = guess.split("");

  for (let i = 0; i < 5; i++) {
    if (guessArr[i] === answerArr[i]) {
      result[i] = "2";
      answerArr[i] = "_";
      guessArr[i] = "_";
    }
  }

  for (let i = 0; i < 5; i++) {
    if (guessArr[i] === "_") continue;
    const idx = answerArr.indexOf(guessArr[i]);
    if (idx !== -1) {
      result[i] = "1";
      answerArr[idx] = "_";
    }
  }

  return result.join("");
}

export default function getNextGuess(answerSpace: Set<string>): string {
  let bestGuess = "";
  let bestScore = Infinity;

  const candidates = [...answerSpace];

  for (const guess of candidates) {
    const buckets = new Map<string, number>();

    for (const answer of candidates) {
      const pattern = getPattern(guess, answer);
      buckets.set(pattern, (buckets.get(pattern) ?? 0) + 1);
    }

    const worstCase = Math.max(...buckets.values());

    if (worstCase < bestScore) {
      bestScore = worstCase;
      bestGuess = guess;
    }
  }

  return bestGuess;
}
