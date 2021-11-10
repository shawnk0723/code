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
 * @return {boolean}
 */
var isBalanced = function(root) {
    return maxDepth(root) !== null;
};

var maxDepth = function(root){
    if(!root) return 0;
    let left = maxDepth(root.left)
    let right = maxDepth(root.right);
    
    if(left === null || right === null || Math.abs(left-right)>1)return null;
    return Math.max(left,right)+1;
}

//time: O(n)
//space: O(n)


// var isBalanced = function(root){
//     if(root === null)return true;
//     let flag = true;
    
//     function helper(root){
//         if(root.left===null&&root.right===null){
//             return 0;
//         }
//         let leftHeight =0, rightHeight=0;
//         if(root.left !==null){
//             leftHeight=1+helper(root.left)
//         }
//         if(root.right!==null){
//             rightHeight=1+helper(root.right)
//         }
//         let actualHeight=Math.max(leftHeight, rightHeight);
//         if(Math.abs(leftHeight-rightHeight)>1)flag=false;
//         return actualHeight;
//     }
//     helper(root)
//     return flag
// }