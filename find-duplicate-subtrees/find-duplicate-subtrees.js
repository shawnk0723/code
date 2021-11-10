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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
    //left_child  i = i*2 + 1
    //right_child i = i*2 + 2
    
    const map = new Map()
    const output = [];
    
    const dfs= function(node){
        //base
        if (!node) return node;

        const s = node.val + ',' + dfs(node.left) + ',' + dfs(node.right);
        if(!map.has(s)) map.set(s,0);
        //console.log('map:', map)
        map.set(s, map.get(s)+1);
        if(map.get(s)===2) output.push(node);
        return s;
    }
    dfs(root);
    return output
};

//time:O(n)
//space:O(n)