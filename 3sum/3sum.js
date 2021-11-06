/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums){
    let res = [];
    
    nums.sort((a,b)=> a-b);
    for (let i = 0; i < nums.length; i++){
        let l = i +1;
        let r = nums.length -1;
        
        if (l > 0 && nums[i] === nums[i-1]) continue;
        while (l<r){
            let sum = nums[i]+nums[l]+nums[r];
            if(sum < 0){
                l++;
            }else if(sum > 0){
                r--;
            }else{
                res.push([nums[i], nums[l], nums[r]])
                l++
                while (l<r && nums[l] === nums[l-1]){
                    l++
                }
            }
        }
    }
    return res;
}

//time: O(n)
//space: O(n)



