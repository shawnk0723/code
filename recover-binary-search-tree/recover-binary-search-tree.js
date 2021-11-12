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
var recoverTree = function(root) {
    let prev = null, big = null, small = null;
    let dfs = function(root){
        if (!root)return;
        dfs(root.left);
        if (prev != null && prev.val > root.val){
        // console.log('p:',prev.val,'r:', root.val)
            
            small = root;
            if (!big) big = prev;
            else return;
        }
        prev = root;
        dfs(root.right);
    }
    dfs(root);
    [big.val, small.val] = [small.val, big.val];
};

//time O(n)
//space O(1)