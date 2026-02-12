export type WordleRes = {
  answer: string;
  guesses: number;
  status: string;
  totalTime: number;
  computeTime: number;
};

export type StrandsRes = {
  spangram: string;
  words: string[];
  guesses: number;
  status: string;
  totalTime: number;
};

export type ResType = WordleRes | StrandsRes;
