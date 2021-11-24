/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    if (cost.length===1)return 0;
    if (cost.length===2)return Math.min(cost[0],cost[1]);
    
    let prev1 = cost[1];
    let prev2 = cost[0];
    
    for(let n=2; n < cost.length;n++){
        const tmp = cost[n] + Math.min(prev1, prev2)
        prev2 = prev1;
        prev1 = tmp;
    }
    return Math.min(prev1, prev2)
};

//time O(n)
//space O(1)