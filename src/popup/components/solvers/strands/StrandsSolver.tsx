import { useState } from "react";
import Solver from "../shared/solver/Solver";
import StrandsTitle from "./strandsTitle/StrandsTitle";

export default function StrandsSolver() {
  const [guesses, setGuesses] = useState(0);
  const [status, setStatus] = useState("Ready");
  const [totalTime, setTotalTime] = useState(0);
  const [computeTime, setComputeTime] = useState(0);
  const [answer, setAnswer] = useState("");

  function setStateFromRes(response: any) {
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
    <Solver
      Title={StrandsTitle}
      setStateFromRes={setStateFromRes}
      status={status}
      setStatus={setStatus}
      feedback={feedback}
    />
  );
}
