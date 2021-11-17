/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
// var minReorder = function(n, connections) {
//     const dist = Array(n).fill(-1);
//     dist[0]=0;
//     let cities = n-1;
//     while(cities){
//         connections.forEach(([src, dest])=> {
//             if (dist[src] !=-1 && dist[dest]==-1){
//                 dist[dest] = dist[src]+1;
//             }
//         })
//     }
// };

var minReorder = function(n, connections){
    const out = new Array(n).fill(0).map(()=>new Array());
    const inward = new Array(n).fill(0).map(()=> new Array());
    
    let cnt = 0, seen = {};
    for (let c of connections){
        out[c[0]].push(c[1])
        inward[c[1]].push(c[0])
    }
    
    const dfs = (node)=>{
        let leaving = out[node];
        let coming = inward[node];
        seen[node] = true;
        
        for (let i=0; i < leaving.length;i++){
            if(!seen[leaving[i]]){
                cnt++;
                dfs(leaving[i]);
            }
        }
        
        for (let i =0; i <coming.length;i++){
            if(!seen[coming[i]]){
                dfs(coming[i]);
            }
        }
    }
    dfs(0)
    return cnt;
}
//time: O(n)
//space: O(n)