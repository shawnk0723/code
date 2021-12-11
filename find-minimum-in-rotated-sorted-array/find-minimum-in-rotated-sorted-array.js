/**
 * @param {number[]} nums
 * @return {number}
 */

//time O(logn)
//space O(1)

var findMin = function(nums){
    let l = 0, r = nums.length-1;
    while (l < r){
        let m = Math.floor((l+r)/2);
        if(nums[m] > nums[r]){
            l = m+1;
        }else{
            r = m;
        }
    }
    return nums[r];
}