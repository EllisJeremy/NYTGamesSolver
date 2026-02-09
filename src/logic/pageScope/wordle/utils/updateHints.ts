import type { PresentType, LetterGuessType } from "../wordleTypes/wordleTypes";

export default function updateHints(
  unused: Set<string>,
  present: PresentType,
  correct: (string | null)[],
  feedback: LetterGuessType[],
) {
  for (const { position, letter, accuracy } of Object.values(feedback)) {
    if (accuracy === "correct") {
      correct[position] = letter;
    } else if (accuracy === "absent") {
      unused.add(letter);
    } else {
    }
  }
}
