type TreeNode = {
  next: Record<string, TreeNode>;
  isWord: boolean;
};

export class PrefixTree {
  root: TreeNode;

  constructor(seedData: string[]) {
    this.root = {
      next: {},
      isWord: true,
    };
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
}
