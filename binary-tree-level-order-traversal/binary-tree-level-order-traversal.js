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
var levelOrder = function(root) {
    if(!root)return [];
    let res = [], q = [root];
    while(q[0]){
        let level = [];
        qLen = q.length;
        for(let i=0; i < qLen; i++){
            let node = q.shift();
            level.push(node.val);
            if(node.left)q.push(node.left)
            if(node.right)q.push(node.right)
        }
    res.push(level)
    }
    return res;
};

//time: O(n)
//space: O(n)