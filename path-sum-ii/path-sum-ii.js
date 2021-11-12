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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum, res=[], path=[]) {
    if(root){
        path.push(root.val)
        //console.log('path1:', path)
        if(!root.left && !root.right && root.val === targetSum)res.push([...path]);
        pathSum(root.left, targetSum-root.val, res, path);
        pathSum(root.right, targetSum-root.val, res, path);
        path.pop();
        //console.log('path2:', path)
        
    }
    return res;
};
//time: O(n)
//space: O(n)