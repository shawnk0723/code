/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function(n, edges) {
    if(n<2)return true;
    let adj = {};
    
    for(let i=0; i<n;i++){
        adj[i] = [];
    }
    for(let edge of edges){
        adj[edge[0]].push(edge[1])
        adj[edge[1]].push(edge[0])
    }
    
    let visited = new Set(),
        parent = {},
        containsCycles = false;
    function dfs(root){
        visited.add(root);
        for(let neighbor of adj[root]){
            if(visited.has(neighbor)){
                if(parent[root] !== neighbor){
                    containsCycles = true;
                }else{
                    continue;
                }
            }else {
                parent[neighbor]=root;
                dfs(neighbor);
            }
        }
    }
    dfs(0);
    if(containsCycles)return false;
    
    return visited.size === n;
};

//time O(n)
//space O(n)