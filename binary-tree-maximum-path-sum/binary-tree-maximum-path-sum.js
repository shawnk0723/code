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
 * @return {number}
 */
var maxPathSum = function(root) {
    let max = -Infinity;
    function pathSum(root){
        if(!root)return 0;
        let left = Math.max(0, pathSum(root.left))
        let right = Math.max(0, pathSum(root.right))
        max = Math.max(root.val+left+right, max);
        return Math.max(left, right) + root.val;
    }
    pathSum(root);
    return max
}; 
//time O(n)
//space O(h)