/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    //edge
    if (!nums || nums.length < 1) return null
    
    let arraySum = 0, indexSum = 0
    
    for (let i = 0; i < nums.length; i++){
        arraySum += nums[i];
        indexSum += i+1
    }
    return indexSum - arraySum;
};
//time: O(n)
//space: O(1)

