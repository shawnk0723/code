/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let evenSum = 0, oddSum = 0;
    
    for (let i = 0; i < nums.length;i++){
        if (i % 2 == 0) {
            evenSum = Math.max(nums[i]+evenSum, oddSum);
        }else{
            oddSum = Math.max(nums[i]+oddSum, evenSum);
        }
    }
    return Math.max(evenSum, oddSum);
};