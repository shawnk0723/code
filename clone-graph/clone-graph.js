/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
function cloneGraph(graph){
    let map = {};
    function dfs(node){
        if (!node)return node;
        if (!map[node.val]){
            map[node.val] = new Node(node.val);
            map[node.val].neighbors = node.neighbors.map(dfs)
        }
        return map[node.val]
    }
    return dfs(graph)
}
//time: O(e+v)//#edges+vertex
//space: O(e+v)

//dfs
// function cloneGraph(graph) {
//   var map = {};

//   function dfs(node) {
//     if (!node) return node;
//     if (!map[node.val]) {
//       map[node.val] = new Node(node.val);
//       for (let n of node.neighbors){
//           map[node.val].neighbors.push(dfs(n))
//       }  
//       // map[node.val].neighbors = node.neighbors.map(dfs);
//     }
//     return map[node.val];
//   }
// return dfs(graph);
// }



//bfs
// function cloneGraph(graph){
//     let start = graph;
//     if (start == null)return null;
//     const map = new Map();
//     const queue = [start];
//     map.set(start, new Node(start.val))
    
//     while (queue.length > 0){
//         const cur = queue.shift();
//         // console.log('q:',cur)
//         for (const neighbor of cur.neighbors){
//             if (!map.has(neighbor)){
//                 map.set(neighbor, new Node(neighbor.val))
//                 queue.push(neighbor);
//             }
//             map.get(cur).neighbors.push(map.get(neighbor))
//         }
//     }
//     return map.get(start)
// }