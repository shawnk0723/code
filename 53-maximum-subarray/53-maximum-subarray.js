/**
 * @param {number[]} nums
 * @return {number}
 */
/*
kadane algo
max = Math.max(max, current) means that we choose only the highest value (previous max or new current).
current = Math.max(current, 0) means that if the value was negative, then we throw it away and set zero as default. Why? Because it makes no sense to summarize the negative values, they simply do not interest us.
*/
var maxSubArray = function(nums){
    let maxHere = 0;
    let maxSofar = -Number.MAX_VALUE;
;
    
    for (let i = 0; i < nums.length;i++){
        maxHere = Math.max(maxHere+nums[i], nums[i]);
        maxSofar = Math.max(maxSofar, maxHere);
    }
    return maxSofar;
}

//time: O(n)
//space: O(1)