/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxHere = nums[0];
    let maxSofar = nums[0];
    
    for (let i = 1; i < nums.length; i++){
        maxHere = Math.max(nums[i], nums[i]+maxHere)   
        maxSofar = Math.max(maxSofar, maxHere);
    }
    return maxSofar;

};

//time: O(n)
//space: O(1)