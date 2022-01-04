/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */

var countComponents = function(n, edges){
    let parent = Array(n).fill().map((_,i)=>i)
    let rank = Array(n).fill().map((_)=>1);
    
    function find(n1){
        let res = n1;
        while (res !== parent[res]){
            parent[res] = parent[parent[res]]
            res = parent[res]
        }
        return res;
    }
    
    function union(n1, n2){
        let p1 = find(n1), p2 = find(n2)
        if (p1==p2)return 0;
        
        if (rank[p2]>rank[p1]){
            parent[p1] = p2;
            rank[p2] += rank[p1];
        }else{
            parent[p2]=p1
            rank[p1] += rank[p2];
        }
        return 1;
    }
    let res = n;
    for (const [n1, n2] of edges)res -= union(n1, n2)
    return res;
}
//time O(n)
//space O(n)

/*
var countComponents = function(n, edges) {
  const arr = [];
  for (let i = 0; i < n; i += 1) arr[i] = i;

  const find = x => {
    if (x != arr[x]) {
      arr[x] = find(arr[x]);
    }
    return arr[x];
  };

  edges.forEach(e => {
    const u = find(e[0]), v = find(e[1]);
    if (u != v) arr[u] = v;
  });

  let ans = 0;
  arr.forEach((a, i) => (ans += a == i ? 1 : 0));

  return ans;
};
*/









// var countComponents = function(n, edges) {
    
//     let parent = Array(n).fill().map((_,i)=>i)
//     let rank = Array(n).fill().map((_)=>1);
    
//     function find(n1){
//         let res = n1;
//         while (res !== parent[res]){
//             parent[res] = parent[parent[res]]
//             res = parent[res];
//         }
//         return res;
//     }
    
//     function union(n1, n2){
//         let p1 = find(n1), p2 = find(n2)
//         if (p1==p2)return 0;
        
//         if (rank[p2]>rank[p1]){
//             parent[p1] = p2
//             rank[p2] += rank[p1]
//         }else{
//             parent[p2]=p1
//             rank[p1] += rank[p2]
//         }
//         // console.log(parent, rank)
//         return 1;
//     }
    
//     let res = n;
//     for (const [n1, n2] of edges) res -= union(n1, n2)
//     return res;
    
// };
