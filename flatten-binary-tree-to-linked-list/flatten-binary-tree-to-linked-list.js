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
 * @return {void} Do not return anything, modify root in-place instead.
 */
//using Morris Traversal (w/o recursion)
var flatten = function(root) {
    let cur = root;
    
    while (cur) {
        if (cur.left){
            let runner = cur.left;
            while (runner.right)runner=runner.right;
            runner.right = cur.right, cur.right = cur.left, cur.left = null;
        }
        cur = cur.right;
    }
};

//time: O(n);
//space: O(1);