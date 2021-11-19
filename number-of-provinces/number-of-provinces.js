/**
 * @param {number[][]} isConnected
 * @return {number}
 */
// var findCircleNum = function(isConnected) {
//     let res = 0;
//     const dsu = new DSU(isConnected.length);
//     for(let row = 0; row < isConnected.length; row++){
//         for(let col = 0; col < isConnected[0].length; col++){
//             if(isConnected[row][col]){
//                 dsu.union(row, col);
//             }
//         }
//     }
//     return new Set(isConnected.map((m, i) => dsu.find(i))).size;
// };

// class DSU {
//     constructor(N){
//         this.parent = [...new Array(N).keys()]
//     }
//     find(x){
//         if(this.parent[x] !== x) this.parent[x] = this.find(this.parent[x]);
//         return this.parent[x]
//     }
//     union(x, y){
//         this.parent[this.find(x)] = this.find(y)
//     }
// }

var findCircleNum = function(M){
    
    class UnionFind {
        constructor(n){
            this.parent = [...Array(n)].map((_, i) => i)
            this.cnt = n;
        }
        
        find(x) {
            if(this.parent[x] === x) return x;
            this.parent[x] = this.find(this.parent[x])
            return this.parent[x];
        }
        
        union(x, y){
            const rootX = this.find(x);
            const rootY = this.find(y);
            if(rootX !== rootY){
                this.parent[rootY] = rootX;
                this.cnt--;
            }
        }
    }
    
    const N = M.length, unionfind = new UnionFind(N);
    
    for(let r = 0; r < N; r++){
        for(let c =0; c < N; c++){
            if(M[r][c]) unionfind.union(r, c)
        }
    }
    return unionfind.cnt;
}

//time O(n)
//space O(1)