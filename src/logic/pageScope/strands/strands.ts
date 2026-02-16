import type { StrandsRes } from "../../../types/responseTypes";
import sleep from "../globalUtils/sleep";

function extractElements(): HTMLElement[][] | null {
  const board = document.querySelector('div[class*="styles-module_board"]');
  if (!board) return null;

  const buttons = Array.from(board.querySelectorAll("button"));

  const elements: HTMLElement[][] = [];

  buttons.forEach((btn, index) => {
    const i = Math.floor(index / 6);
    const j = index % 6;

    if (!elements[i]) elements[i] = [];
    elements[i][j] = btn as HTMLElement;
  });

  return elements;
}

async function clickPath(path: number[][]) {
  for (const [i, j] of path) {
    const elements = extractElements();
    if (!elements) return;
    elements[i][j].click();
    await sleep(Math.random() * 200 + 100);
  }
}

export default async function strandsSolver() {
  const res: StrandsRes = {
    spangram: "",
    words: [],
    guesses: 0,
    status: "Failed",
    totalTime: 0,
  };

  const board = extractElements();
  if (!board) {
    res["status"] = "Game not Found";
    return res;
  }

  console.log(board);
  clickPath([
    [0, 0],
    [0, 1],
    [0, 2],
  ]);

  return res;
}
