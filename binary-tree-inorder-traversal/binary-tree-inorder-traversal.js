/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let stack = [], list = [];
    
    while (root || stack.length>0){
        while (root){
            stack.push(root)
            root = root.left;
        }
        let node = stack.pop();
        list.push(node.val);
        root = node.right;
    }
    return list;
};
//time:O(n)
//space:O(n)