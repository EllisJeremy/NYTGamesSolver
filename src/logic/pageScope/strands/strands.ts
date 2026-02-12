import type { StrandsRes } from "../../../types/responseTypes";

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
