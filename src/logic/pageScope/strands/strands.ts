import type { StrandsRes } from "../../../types/responseTypes";
import clickPath, { extractElements } from "./utils/clickPath";
import dfs from "./utils/dfs";

export default async function strandsSolver() {
  const res: StrandsRes = {
    spangram: "",
    words: [],
    guesses: 0,
    status: "Failed",
    totalTime: 0,
  };

  if (!extractElements()) {
    res["status"] = "Game not Found";
    return res;
  }

  clickPath([
    [0, 0],
    [0, 1],
    [0, 2],
  ]);

  return res;
}
