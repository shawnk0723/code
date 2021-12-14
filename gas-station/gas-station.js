/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let gSum = gas.reduce((sum, i) => sum + i, 0 )
    let cSum = cost.reduce((sum, i) => sum + i, 0 )
    
    if (gSum < cSum) return -1;
    
    let total = 0, cnt = 0;
    for (let i = 0; i < gas.length; i++){
        total += gas[i] - cost[i];
        if (total < 0) {
            total = 0;
            cnt = i+1;
        }
    }
    return cnt;
};

//time O(n)
//space O(1)