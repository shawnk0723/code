/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function(n, edges) {
    
    let parent = Array(n).fill().map((_,i)=>i)
    let rank = Array(n).fill().map((_)=>1);
    
    function find(n1){
        let res = n1;
        while (res !== parent[res]){
            parent[res] = parent[parent[res]]
            res = parent[res];
        }
        return res;
    }
    
    function union(n1, n2){
        let p1 = find(n1), p2 = find(n2)
        if (p1==p2)return 0;
        
        if (rank[p2]>rank[p1]){
            parent[p1] = p2
            rank[p2] += rank[p1]
        }else{
            parent[p2]=p1
            rank[p1] += rank[p2]
        }
        return 1;
    }
    
    let res = n;
    for (const [n1, n2] of edges) res -= union(n1, n2)
    return res;
    
};
//time O(n)
//space O(n)