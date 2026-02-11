import { WORDS } from "../data/wordleWords";
export default function getNextGuess(answerSpace: Set<string>): string {
  return answerSpace.values().next().value!;
}
