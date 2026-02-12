import { useState } from "react";
import Solver from "../shared/solver/Solver";
import WordleTitle from "./wordleTitle/WordleTitle";
import type { WordleRes } from "../../../../types/responseTypes";

export default function WordleSolver() {
  const [guesses, setGuesses] = useState(0);
  const [status, setStatus] = useState("Ready");
  const [totalTime, setTotalTime] = useState(0);
  const [computeTime, setComputeTime] = useState(0);
  const [answer, setAnswer] = useState("");

  function setStateFromRes(response: WordleRes) {
    setStatus(response.status);
    setAnswer(response.answer);
    setGuesses(response.guesses);
    setTotalTime(response.totalTime);
    setComputeTime(response.computeTime);
  }

  const feedback = {
    Answer: answer,
    Guesses: guesses,
    "Total Time": totalTime,
    "Compute Time": computeTime,
  };

  return (
    <Solver<WordleRes>
      type="wordle"
      Title={WordleTitle}
      setStateFromRes={setStateFromRes}
      status={status}
      setStatus={setStatus}
      feedback={feedback}
    />
  );
}
