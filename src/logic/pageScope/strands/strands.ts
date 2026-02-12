import type { StrandsRes } from "./strandsTypes/strandsTypes";

export default async function strandsSolver() {
  const res: StrandsRes = {
    spangram: "",
    words: [],
    guesses: 0,
    status: "Failed",
    totalTime: 0,
  };

  return res;
}
