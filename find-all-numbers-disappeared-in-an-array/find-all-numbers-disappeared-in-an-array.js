/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    for (let i = 0; i < nums.length; i++){
        let idx = Math.abs(nums[i]) -1;
        nums[idx] = Math.abs(nums[idx]) * -1;
    }
    let res = [];
    for (let j = 0; j < nums.length; j++){
        if (nums[j] > 0) {
            res.push(j+1)
        }
    }
    return res;
};

//time: O(n)
//space: O(1)