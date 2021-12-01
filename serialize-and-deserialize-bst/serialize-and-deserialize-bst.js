/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */

let serialize = (root, result = []) => {
  if (root) {
    result.push(root.val);
    result.push(...serialize(root.left));
    result.push(...serialize(root.right));
  } else {
    result.push(null);
  }
  return result;
};

let deserialize = (data) => {
  let val = data.shift();
  if (val == null) return null;
  let node = new TreeNode(val);
  node.left = deserialize(data);
  node.right = deserialize(data);
  return node;
};

//time O(n)
//space O(n)