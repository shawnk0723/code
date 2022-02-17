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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
// var isSubtree = function(root, subRoot) {
//     if (!root)return !subRoot;
//     return isEqual(root, subRoot) || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
        
//     }
//     function isEqual(s,t){
//         if(!s || !t)return !s&&!t;
//         if(s.val !== t.val)return false;
//         return isEqual(s.left, t.left)&& isEqual(s.right, t.right)
//     }
//time O(n)
//space O(1)

//trick
// var isSubtree = function(s, t) {
//     return JSON.stringify(s).indexOf(JSON.stringify(t))!==-1
// };

function isSubtree(root, subRoot){
    if (!root)return !subRoot;
    return isEqual(root, subRoot) || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}

function isEqual(r,s){
    if(!r || !s)return !r&&!s;
    if(r.val !== s.val)return false;
    return isEqual(r.left, s.left) && isEqual(r.right, s.right);
}

// function isSubtree(root, subRoot){
//     console.log(root, subRoot)
//     if (!root)return !subRoot;
//     return isEqual(root, subRoot) || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
// }
// function isEqual(s,t){
//     if(!s || !t)return !s&&!t;
//     if(s.val !== t.val)return false;
//     return isEqual(s.left, t.left) && isEqual(s.right, t.right);
// }



/*
var isSubtree = function(s, t) {
    return JSON.stringify(s).indexOf(JSON.stringify(t))!==-1
};

*/