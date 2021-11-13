/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let res = [];
    for (let num of nums){
        let idx = Math.abs(num) -1;
        if(nums[idx]<0)res.push(idx+1)
        nums[idx] = -nums[idx];
    }
    return res;
};

//time: O(n)
//space: O(1)