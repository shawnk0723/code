/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function(n, edges){
    if (n < 2) return true;
    let adj = {};
    
    for (let i = 0; i < n; i++){
        adj[i] = [];
    }
    
    for (let [v, e] of edges){
        adj[v].push(e);
        adj[e].push(v);
    }
    
    let visit = new Set();
    
    function dfs(i, prev) {
        if (visit.has(i)) return false;
        
        visit.add(i);
        for (let j of adj[i]){
            // console.log(i,adj[i])
            if (j === prev) continue;
            if (!dfs(j, i))return false;
        }
        return true;
    }
    return dfs(0, -1) && n == visit.size;
}
//time O(E+V)
//space O(E+V)



// var validTree = function(n, edges) {
//     if(n<2)return true;
//     let adj = {};
    
//     for(let i=0; i<n;i++){
//         adj[i] = [];
//     }
//     for(let edge of edges){
//         adj[edge[0]].push(edge[1])
//         adj[edge[1]].push(edge[0])
//     }
    
//     let visited = new Set(),
//         parent = {},
//         containsCycles = false;
//     function dfs(root){
//         visited.add(root);
//         for(let neighbor of adj[root]){
//             if(visited.has(neighbor)){
//                 if(parent[root] !== neighbor){
//                     containsCycles = true;
//                 }else{
//                     continue;
//                 }
//             }else {
//                 parent[neighbor]=root;
//                 dfs(neighbor);
//             }
//         }
//     }
//     dfs(0);
//     if(containsCycles)return false;
    
//     return visited.size === n;
// };

//time O(n)
//space O(n)