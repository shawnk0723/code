/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    let end = graph.length -1;
    let res = [];
    
    function dfs(node, arr){
        if (node == end)res.push([...arr, node]);
        
        for (let n of graph[node]){
            dfs(n, [...arr, node])
        }   
    }
    dfs(0,[])
    return res;
}

//time: O(n)
//space: O(n)