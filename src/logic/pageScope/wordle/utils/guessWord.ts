export default function guessWord(word: string) {
  if (word.length !== 5) {
    console.error("guess must be 5 chars long");
    return;
  }

  for (const letter of word) {
    window.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: letter,
        code: `Key${letter}`,
        bubbles: true,
      }),
    );
  }

  window.dispatchEvent(
    new KeyboardEvent("keydown", {
      key: "Enter",
      code: "Enter",
      bubbles: true,
    }),
  );
}
