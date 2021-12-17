/**
 * @param {number[]} nums
 * @return {number}
//  */
var missingNumber = function(nums){
    if (!nums || nums.length < 1) return null;
    
    let index = 0, sum = 0;
    
    for (let i = 0; i < nums.length; i++){
        sum += nums[i];
        index += 1+ i;
    }
    return index - sum;
}

//time O(n)
//space O(1)
