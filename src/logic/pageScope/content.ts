import wordleSolver from "./wordle/wordle";
import strandsSolver from "./strands/strands";
import type { WordleRes } from "./wordle/wordleTypes/wordleTypes";

const router: Record<string, () => Promise<WordleRes>> = {
  wordle: wordleSolver,
};

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  const solver = router[msg.type];
  solver().then((res) => {
    sendResponse(res);
  });
  return true;
});
