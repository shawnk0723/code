/**
 * @param {number} n
 * @return {number[]}
 */
// var countBits = function(n) {
    
// };

var countBits = function(num) {
    const result = [0];
    let offset = 1;
    
    for(let index = 1; index <= num; index++) {
        if(offset * 2 === index) offset *= 2;
        result[index] = result[index - offset] + 1;
    }
    return result;
};

var countBits = function(num){
    const dp = [0];
    let offset = 1;
    
    for (let i = 1; i <= num; i++){
        if (offset * 2 === i) offset = i
        dp[i] = 1 + dp[i - offset]
    }
    return dp;
}

//time O(n)
//space O(n)