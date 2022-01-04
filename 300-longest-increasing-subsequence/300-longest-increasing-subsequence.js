/**
 * @param {number[]} nums
 * @return {number}
//  */

var lengthOfLIS = function (nums){
    const dp = Array.from(nums, () => 1);
    
    for (let i = 1; i < nums.length;i++){
        for (let j = 0; j < i; j++){
            if (nums[j] < nums[i]){
                // console.log( nums[j],nums[i], dp[j]+1, dp[i])
                dp[i] = Math.max(dp[i], dp[j]+1);
            }
        }
    }
    return Math.max(...dp)
}


/*
We start out by setting up an array for DP(dynamic programming). It is critical that we understand what each index in this array stands for.
If the input is [4,3,4,12]
dp[0] = [4] .......... dp = [1,1,1,1]............ dp[0] = 1 .....is the longest increasing subsequence here
dp[1] = [4,3] ........ dp = [1,1,1,1] ......... dp[1] = 1..is the longest increasing subsequence here
dp[2] = [4,3,4] .......... dp = [1,1,2,1] ..... dp[2] = 2 .....is the longest increasing subsequence here
dp[3] = [4,3,4,12] ....... dp = [1,1,2,3] ....... dp[3] = 3 ......is the longest increasing subsequence here

So what we can do is store the longest increasing subsequence in each index of this array. We start out by filling the entire DP array with 1 then we start at index 1 and look in reverse. As we traverse through the array we are storing the longest increasing subsequence for each sub array(listed above) at the index level. To make things more efficient(and dramatically make it faster) we can add a check where if the number+1 is equal to the current num then we already solved the SUB array and know the answer and can break out of the loop.

Time is O(n2) lower bound(because we added the check). Space is O(n) since we have a DP array of n elements.

Success
Details
Runtime: 144 ms, faster than 72.81% of JavaScript online submissions for Longest Increasing Subsequence.
Memory Usage: 39.4 MB, less than 77.02% of JavaScript online submissions for Longest Increasing Subsequence.

var lengthOfLIS = function(nums) {
    const dp = Array(nums.length).fill(1);

    for (let i = 1; i < nums.length; i++) {
        for (let n = i-1; n >= 0; n--) {
            const currentNum = nums[i];
            if (nums[n] < currentNum) {
                dp[i] = Math.max(dp[n]+1, dp[i])
            }

            // If the number is right below(-1) the currentNum then it's guaranteed
            // that this number(longest increasing subsequence) + 1 is the correct number(biggest)
            // and we can break(no need to continue).
            if (nums[n]+1 === currentNum) break;
        }
        
    } // The numbers in the dp array represent the longest increasing subsequences for each sub Array
    return Math.max(...dp)
};
*/

//dfs
// var lengthOfLIS = function(nums) {
//     function binarySearch(array, num){
//         let left = 0, right = array.length;
//         while (left < right){
//             const mid = ~~((right-left)/2 + left);
//             if(array[mid] < num) left = mid+1;
//             else right = mid;
//         }
//         return right;
//     }
    
//     const array = [];
    
//     for(const num of nums){
//         const pos = binarySearch(array, num);
//         // console.log(pos, array)
//         if(pos === array.length)array.push(num);
//         else array[pos]=num;
//     }
//     return array.length;
// }

//time O(nlogn)
//space O(n)