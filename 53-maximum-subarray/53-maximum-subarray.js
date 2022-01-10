/**
 * @param {number[]} nums
 * @return {number}
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