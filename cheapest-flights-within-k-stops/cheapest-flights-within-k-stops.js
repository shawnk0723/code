/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
    let M = Array(n).fill().map((_, i) => i === src ? 0 : Infinity);
    M[src] = 0;
    
    for (let l = 0; l < k+1; l++){
        let N = [...M];
        for (let [from, to , price] of flights){
            N[to] = Math.min(N[to], M[from] + price);
        }
        M = [...N];
    }
    
    return M[dst] != Infinity ? M[dst] : -1
};
//time O(n)
//space O(n)