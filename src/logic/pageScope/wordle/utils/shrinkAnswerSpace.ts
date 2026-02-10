export default function shrinkAnswerSpace(
  absent: Set<string>,
  present: PresentType,
  correct: (string | null)[],
  answerSpace: Set<string>,
) {
  for (const word of answerSpace) {
    if (!isValid(word)) {
      answerSpace.delete(word);
    }
  }

  function isValid(word: string): boolean {
    for (let i = 0; i < word.length; i++) {
      if (correct[i] && correct[i] !== word[i]) {
        return false;
      }
      if (word[i] in absent) {
        return false;
      }
    }

    return true;
  }
}
