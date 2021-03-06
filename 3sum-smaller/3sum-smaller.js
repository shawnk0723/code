/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumSmaller = function(nums, target) {
    nums.sort((a,b)=> a-b);
    let cnt = 0;
    
    for (let i = 0; i < nums.length-2; i++){
        let l = i+1, r = nums.length-1;
        while (l < r){
            let sum = nums[i] + nums[l] + nums[r];
            if (sum >= target){
                r--;
            }else {
                cnt+= r-l;
                l++;
            }
        }
    }
    return cnt;
};

//time O(nlogn)
//space O(1)