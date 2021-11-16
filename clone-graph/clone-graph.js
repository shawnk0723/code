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

//dfs
// function cloneGraph(graph) {
//   var map = {};
//   return traverse(graph);

//   function traverse(node) {
//     if (!node) return node;
//     if (!map[node.val]) {
//       map[node.val] = new Node(node.val);
//       map[node.val].neighbors = node.neighbors.map(traverse);
//     }
//     return map[node.val];
//   }
// }

//time: O(n)
//space: O(n)

//bfs
function cloneGraph(graph){
    let start = graph;
    if (start == null)return null;
    const map = new Map();
    const queue = [start];
    map.set(start, new Node(start.val))
    
    while (queue.length > 0){
        const cur = queue.shift();
        // console.log('q:',cur)
        for (const neighbor of cur.neighbors){
            if (!map.has(neighbor)){
                map.set(neighbor, new Node(neighbor.val))
                queue.push(neighbor);
            }
            map.get(cur).neighbors.push(map.get(neighbor))
        }
    }
    return map.get(start)
}