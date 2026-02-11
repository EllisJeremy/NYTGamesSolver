import type { PresentType } from "../wordleTypes/wordleTypes";

export default function shrinkAnswerSpace(
  absent: Set<string>,
  present: PresentType,
  correct: (string | null)[],
  answerSpace: Set<string>,
) {
  for (const word of [...answerSpace]) {
    if (!isValid(word)) {
      answerSpace.delete(word);
    }
  }

  function isValid(word: string): boolean {
    const counts = [...word].reduce<Record<string, number>>((acc, c) => {
      acc[c] = (acc[c] ?? 0) + 1;
      return acc;
    }, {});

    // green + absent checks
    for (let i = 0; i < word.length; i++) {
      if (correct[i] && word[i] !== correct[i]) return false;
      if (absent.has(word[i]) && present[word[i]].minCount === 0) return false;
    }

    // yellow + frequency checks
    for (const letter of Object.keys(present)) {
      if ((counts[letter] ?? 0) < present[letter].minCount) return false;

      for (const idx of present[letter].bannedPositions) {
        if (word[idx] === letter) return false;
      }
    }

    return true;
  }
}
