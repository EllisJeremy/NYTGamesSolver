import sleep from "../../globalUtils/sleep";

export function extractElements(): HTMLElement[][] | null {
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

export default async function clickPath(path: number[][]) {
  for (const [i, j] of path) {
    const elements = extractElements();
    if (!elements) return;
    elements[i][j].click();
    await sleep(1);
  }
}
