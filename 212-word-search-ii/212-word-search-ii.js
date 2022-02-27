/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
//  */
// var findWords = function(board, words) {
    
//     let res = [];//set result, 
//     let root = buildTrie(words); //set trie as root
    
//     //build trie
//     function buildTrie(words){
//         let root = {};
        
//         for (let word of words){
//             let node = root //for each word
//             for (let char of word){
//                 if (!node[char])node[char] = {};
//                 node = node[char]
//             }
//             node.wordEnd = word
//        }
//        return root;
//     }
    
//     //search
//     function search(root, i, j){
//         //found a word
//         if (root.wordEnd != null){
//             res.push(root.wordEnd)
//             root.wordEnd = null;//should print only once
//         }
//         //out of bound || null 
//         if (i < 0 || i >= board.length || j < 0 || j >= board[0].length || root[board[i][j] == null])return;
        
//         let tmp = board[i][j]
//         board[i][j] = '#';//mark visited
        
//         //dfs every positions
//         search(root[tmp], i+1,j)
//         search(root[tmp], i-1,j)
//         search(root[tmp], i,j+1)
//         search(root[tmp], i,j-1)
        
//         board[i][j] = tmp;//reset
//     }
    
//        //search every ch of board
//     for (let i = 0; i < board.length; i++){
//         for (let j = 0; i < board[i].length; j++){
//             search(root, i, j)
//         }
//     }
//     return res;
// }

// time O(m*n)
// space O(m*n)


var findWords = function(board, words) {
    let res = [];
    let root = buildTrie(words)
    
    for (let i = 0; i < board.length; i++){
        for ( let j = 0; j < board[i].length;j++){
            search(root, i, j)
        }
    }
    
    function buildTrie(words){
        let root = {}
        
        for (let word of words){
            let node = root
            for (let char of word){
                if (!node[char]){
                    node[char] = {}
                }
                node = node[char]
            }
            node.wordEnd = word
        }
 
        return root;
    }
    function search(root, i, j){
        if (root.wordEnd != null){
            res.push(root.wordEnd)
            root.wordEnd=null;
        }
        if (i < 0 || i >= board.length || j >= board[0].length || root[board[i][j]] == null) return
        
        let tmp = board[i][j];
        board[i][j] = '#';
        
        search(root[tmp], i+1,j)
        search(root[tmp], i-1, j)
        search(root[tmp], i,j+1)
        search(root[tmp], i,j-1)
        
        board[i][j] = tmp
    }
    return res;
};

