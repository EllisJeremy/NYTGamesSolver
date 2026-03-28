export default function getNextGuess(answerSpace: Set<string>): string {
  if (answerSpace.size == 0) {
    throw new Error("answer space is blank");
  }

  return answerSpace.values().next().value!;
}
