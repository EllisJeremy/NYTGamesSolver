import wordleSolver from "./wordle/wordle";
import strandsSolver from "./strands/strands";
import type { ResType } from "../../types/responseTypes";

const router: Record<string, () => Promise<ResType>> = {
  wordle: wordleSolver,
  strands: strandsSolver,
};

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  const solver = router[msg.type];
  solver().then((res) => {
    sendResponse(res);
  });
  return true;
});
