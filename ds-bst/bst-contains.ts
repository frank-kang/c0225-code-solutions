import { BinarySearchTree, TreeNode } from './lib/bst';

/**
 * Returns true iff `value` is in the BST.
 */
export function contains(bst: BinarySearchTree, value: number): boolean {
  if (!bst.root) {
    return false;
  }
  return containsRecursive(bst.root, value);
}

function containsRecursive(node: TreeNode | undefined, value: number): boolean {
  if (node === undefined) {
    return false;
  }

  if (node.value === value) {
    return true;
  }

  if (value < node.value) {
    return containsRecursive(node.left, value);
  } else {
    return containsRecursive(node.right, value);
  }
}
