/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length==0)return 0;
    if(nums.length==1)return nums[0];
    
    const robHouse = function(start, end){
        let prev = 0, cur = 0;
        for(let i = start; i < end; i++){
            let tmp = Math.max(nums[i]+prev, cur);
            prev = cur;
            cur = tmp
        }
        return cur
    } 
    return Math.max(robHouse(0,nums.length-1), robHouse(1,nums.length))
};

//time O(n)
//space O(1)