/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    
    if (n<=3) return n;
    
    let dp = [];
    dp[1]=1;
    dp[2]=2;
    dp[3]=3;
    
    for (let i=4; i <=n;i++){
        dp[i]=dp[i-1]+dp[i-2];
    }
    return dp[n];
};

//time O(n)
//space O(n)