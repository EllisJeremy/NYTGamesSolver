import type { LetterGuessType } from "../wordleTypes/wordleTypes";

export default function getGuessFeedback(wordIndex: number) {
  const rows = document.querySelectorAll<HTMLDivElement>(
    ".Row-module_row__pwpBq",
  );

  const row = rows[wordIndex].childNodes;
  const letters = Object.values(row).map((v) => {
    const [positionString, letter, accuracy] =
      v.childNodes[0].ariaLabel.split(", ");
    const position = Number(positionString[0]) - 1;
    const letterGuess: LetterGuessType = { position, letter, accuracy };
    return letterGuess;
  });
  console.log(letters);

  return letters;
}
