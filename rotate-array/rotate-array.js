/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k %= nums.length;
    
    function reverse(i, j){
        while(i < j){
            
            let tmp = nums[i];
            nums[i] = nums[j];
            nums[j] = tmp;
            i++;
            j--;
        }
        
    }
    reverse(0, nums.length-1)
    reverse(0,k-1)
    reverse(k, nums.length-1)
};
//time O(n)
//space O(1)

// var rotate = function(nums, k){
//     for(let i = 0; i < k; i++){
//         nums.unshift(nums.pop())
//     }
// }
//time O(n)
//space O(1)