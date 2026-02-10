import type { PresentType, LetterGuessType } from "../wordleTypes/wordleTypes";

export default function updateHints(
  absent: Set<string>,
  present: PresentType,
  correct: (string | null)[],
  feedback: LetterGuessType[],
) {
  const counts = feedback.reduce<Record<string, number>>((acc, g) => {
    if (g.accuracy !== "absent") {
      acc[g.letter] = (acc[g.letter] ?? 0) + 1;
    }
    return acc;
  }, {});

  for (const { position, letter, accuracy } of feedback) {
    if (accuracy === "absent") {
      if (!(letter in counts)) {
        absent.add(letter);
      }
    } else {
      if (!(letter in present)) {
        present[letter] = {
          bannedPositions: new Set<number>(),
          minCount: 0,
        };
      }
      present[letter].minCount = Math.max(
        present[letter].minCount,
        counts[letter],
      );

      if (accuracy === "present in another position") {
        present[letter].bannedPositions.add(position);
      } else {
        correct[position] = letter;
      }
    }
  }
}
