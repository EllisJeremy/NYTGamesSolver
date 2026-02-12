import { useState } from "react";
import Solver from "../shared/solver/Solver";
import StrandsTitle from "./strandsTitle/StrandsTitle";
import type { StrandsRes } from "../../../../types/responseTypes";

export default function StrandsSolver() {
  const [spangram, setSpangram] = useState("");
  const [words, setWords] = useState<string[]>([]);
  const [guesses, setGuesses] = useState(0);
  const [status, setStatus] = useState("Ready");
  const [totalTime, setTotalTime] = useState(0);

  function setStateFromRes(response: StrandsRes) {
    setStatus(response.status);
    setSpangram(response.spangram);
    setWords(response.words);
    setGuesses(response.guesses);
    setTotalTime(response.totalTime);
  }

  const feedback = {
    Spangram: spangram,
    Guesses: guesses,
    "Total Time": totalTime,
  };

  return (
    <Solver<StrandsRes>
      type="strands"
      Title={StrandsTitle}
      setStateFromRes={setStateFromRes}
      status={status}
      setStatus={setStatus}
      feedback={feedback}
    />
  );
}
