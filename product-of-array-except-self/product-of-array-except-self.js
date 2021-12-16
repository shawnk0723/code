/**
 * @param {number[]} nums
 * @return {number[]}
 */
//num: 1,2,3,4
//prefix: 1,2,6,24
//postfix:24,24,12,4
//output(exclude i pos and pre * post): 24,12,8,6 
var productExceptSelf = function(nums){
    let prefix = 1, postfix =1;
    let res = [];
    
    for (let i = nums.length-1; i >= 0; i--){
        res[i] = postfix;
        postfix *= nums[i];
    }
    for (let i = 0; i < nums.length; i++){
        // console.log(res[i], prefix)
        res[i] *=prefix;
        prefix *= nums[i];
    }
    return res;
}


//time O(n)
//space O(1)
