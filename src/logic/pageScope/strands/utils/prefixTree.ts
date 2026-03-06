type TreeNode = {
  next: Record<string, TreeNode | null>;
  isEnd: boolean;
};

export class PrefixTree {
  root: TreeNode;
  constructor(seedData: string[]) {
    this.root = {};
  }
}
