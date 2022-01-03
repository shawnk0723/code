/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */


// const coinChange = (coins, amount) => {
//     const dp = Array(amount + 1).fill(Infinity);//set to max value
//     dp[0] = 0;//base case is 0 that only takes 0 coin
    
//     for (let coin of coins) {
//         //a is amount
//         for (let a = coin; a <= amount; a++) {
//             dp[a] = Math.min(dp[a], dp[a - coin] + 1)
//         }
//     }
//     return dp[amount] === Infinity ? -1 : dp[amount];

// }

const coinChange = (coins, amount) => {
    const dp = Array(amount+1).fill(Infinity);
    dp[0] =0;
    for (let i =1; i <= amount; i++){
        for(const coin of coins){
            if (i -coin >= 0){
                   // the curremt value is compare with the itself and the value minus the current coin
            // dp[j - coins[i]] represents checking the previous coins count value, + 1 to account for this coin being counted 
              //  we will find least no. of coins needed to make amount 1 then amount 2 then 3............11 and ultimately we will find about 11


                dp[i] = Math.min(dp[i], dp[i-coin]+1)
            }
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount]
}
//time O(a*c)
//space O(a)

/*
greedy won't work. dfs is not efficient. dp is the best. 
Approach: ex)[1,3,4,5], amt=7 => 7- dp4 =dp[3] => 1+1
dp[0]=0
dp[1]=1
dp[2]=2
dp[3]=1
d[4]=1
dp[5]=1
dp[6]=2
*/