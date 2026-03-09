type TreeNode = {
  next: Record<string, TreeNode>;
  isWord: boolean;
};

export class PrefixTree {
  root: TreeNode;
  pointer: TreeNode;

  constructor(seedData: string[]) {
    this.root = {
      next: {},
      isWord: true,
    };
    this.pointer = this.root;

    for (const word of seedData) {
      this.addWord(word);
    }
  }

  addWord(word: string) {
    let pointer = this.root;
    for (const letter of word) {
      if (!(letter in pointer.next)) {
        pointer.next[letter] = { next: {}, isWord: false } as TreeNode;
      }
      pointer = pointer.next[letter];
    }
    pointer.isWord = true;
  }

  newPath() {
    this.pointer = this.root;
  }

  movePointer(letter: string): { next: string[]; isWord: boolean } {
    if (!(letter in this.pointer.next)) {
      throw new Error("invalid letter");
    }

    this.pointer = this.pointer.next[letter];
    const res = {
      next: Object.keys(this.pointer.next),
      isWord: this.pointer.isWord,
    };
    // assuming that strands will only ever have 1 of each word
    this.pointer.isWord = false;
    return res;
  }
}
