import type { StrandsRes } from "../../../types/responseTypes";

type Grid = HTMLElement[][];

function extractElements(): Grid {
  const board = document.querySelector('div[class*="styles-module_board"]');
  if (!board) throw new Error("Board not found");

  const buttons = Array.from(board.querySelectorAll("button"));
  const WIDTH = 6;

  const elements: HTMLElement[][] = [];

  buttons.forEach((btn, i) => {
    const r = Math.floor(i / WIDTH);
    const c = i % WIDTH;

    if (!elements[r]) elements[r] = [];
    elements[r][c] = btn as HTMLElement;
  });

  return elements;
}

async function clickPath(
  elements: HTMLElement[][],
  path: { r: number; c: number }[],
) {
  for (const { r, c } of path) {
    elements[r][c].click();
    await new Promise((res) => setTimeout(res, 50));
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
  console.log(board);
  clickPath(board, [{ c: 0, r: 0 }]);

  return res;
}
