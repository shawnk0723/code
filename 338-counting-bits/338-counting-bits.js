/**
 * @param {number} n
 * @return {number[]}
 */
// var countBits = function(n) {
    
// };

// var countBits = function(num) {
//     const result = [0];
//     let offset = 1;
    
//     for(let index = 1; index <= num; index++) {
//         if(offset * 2 === index) offset *= 2;
//         result[index] = result[index - offset] + 1;
//     }
//     return result;
// };

// var countBits = function(num){
//     const dp = [0];
//     let offset = 1;
    
//     for (let i = 1; i <= num; i++){
//         if (offset * 2 === i) offset = i
//         dp[i] = 1 + dp[i - offset]
//     }
//     return dp;
// }

//time O(n)
//space O(n)

//0-0000 -0
//1-0001 -1+dp[n-1]//1 is significant bit
//2-0010 -1+dp[n-2]//2 is significant bit
//3-0011 -1+dp[n-2]//same
//4-0100 -1+dp[n-4]//4 is significant bit
//:    :
//8-1000 -1+dp[n-8]//8 is..
//we'll call 1,2,4,8.. offset. each sig bits are power of 2

var countBits = function(num){
    const dp = [0];
    let offset = 1;
    
    for (let i = 1; i <= num;i++){
        if (2 * offset === i)offset = i;
        dp[i] = 1 + dp[i - offset]
    // console.log(dp[i])
    }
    return dp;
}

/* output of dp[i] 
1 => 1
1 => 2
2 => 3
1 => 4
2
2
3
1

*/