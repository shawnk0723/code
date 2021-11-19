/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    let uf = {};
    for (let edge of edges){
        let u = edge[0];
        let v = edge[1];
        if(find(u) === find(v)){
            return edge;
        } else {
            union(u, v);
        }
    }
    
    function union(a, b){
        uf[find(a)] = uf[find(b)]
    }
    
    function find(x){
        if(!uf[x]) uf[x] = x;
        if(uf[x] === x) return x;
        return find(uf[x])
    }
};

//time O(n)
//space O(n)





// Idea:
// In this problem, the redundant edge will be the one that links together an already-linked graph. To determine whether already-seen segments of the graph have been connected, we can use a simple union-find (UF) implementation to keep track of the different segments.

// With UF, we must define two functions: union and find. The find function will recursively trace a node's lineage back to its ultimate parent and update its value in the parent array (par), providing a shortcut for the next link.

// The union function merges two segments by assigning the ultimate parent of one segment to another.

// We can iterate through edges and find both vertices of the edge to see if they belong to the same segment. If so, we've located our redundant edge and can return it. If not, we should merge the two different segments with union.

// Time Complexity: O(N) where N is the length of edges
// Space Complexity: O(N) for par and the recursion stack

// var findRedundantConnection = function(edges) {
//     let par = Array.from({length: edges.length + 1}, (_,i) => i)
//     const find = x => x === par[x] ? par[x] : par[x] = find(par[x])
//     const union = (x,y) => par[find(y)] = find(x)
//     for (let [a,b] of edges)
//         if (find(a) === find(b)) return [a,b]
//         else union(a,b)
// };