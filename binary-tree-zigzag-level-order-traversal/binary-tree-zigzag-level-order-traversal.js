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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    let res = [];
    function dfs(node, level, res){
        if (!node)return;
        if (res.length <= level)res.push([])
        dfs(node.left, level+1, res)
        dfs(node.right, level+1, res)
        
        if (level % 2 == 0){
            res[level].push(node.val)
        }else {
            res[level].unshift(node.val)
        }
    }
    dfs(root, 0, res);
    return res;
};

//time: O(n)
//space: O(h)