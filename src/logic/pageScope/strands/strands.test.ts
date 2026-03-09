/// <reference types="jest" />
import { PrefixTree } from "./utils/prefixTree";

describe("strands", () => {
  test("prefix tree", () => {
    const seedData = ["word1", "word2", "apple", "w"];
    const prefixTree = new PrefixTree(seedData);
    console.log(JSON.stringify(prefixTree));

    const res = prefixTree.movePointer("w");
    console.log(res);
  });
});
