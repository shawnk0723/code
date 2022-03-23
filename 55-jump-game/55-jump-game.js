/**
 * @param {number[]} nums
 * @return {boolean}
 */

var canJump = function(nums){
    let goal = nums.length-1;
    
    for (let i = nums.length-1; i >= 0; i--){
        if (nums[i]+i >= goal){
            goal = i;
        }
    }
    return goal === 0;
}

//time: O(n)
//space: O(1)