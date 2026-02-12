import type { LetterGuessType } from "../wordleTypes/wordleTypes";

export default function getGuessFeedback(wordIndex: number) {
  try {
    const rows = document.querySelectorAll<HTMLDivElement>(
      ".Row-module_row__pwpBq",
    );
    const row = rows[wordIndex].childNodes;
    const letters = Object.values(row).map((v) => {
      const [positionString, letter, accuracy] =
        v.childNodes[0].ariaLabel.split(", ");
      const position = Number(positionString[0]) - 1;
      const letterGuess: LetterGuessType = {
        position,
        letter: letter.toLowerCase(),
        accuracy,
      };
      return letterGuess;
    });

    return letters;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}
