/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var min = Number.MAX_SAFE_INTEGER; 
    var max = 0;
    for (var i = 0; i < prices.length; i++) {
        min = Math.min(min, prices[i]);
        max = Math.max(max, prices[i] - min);
    }
    return max;
};

/*
var maxProfit = function(prices) {
    let profit = 0;
    let min = prices[0];
    
    for(let i = 1; i < prices.length; ++i) { 
        if(min > prices[i]) {
            min = prices[i];
        } else if(prices[i] - min > profit) {
            profit = prices[i] - min;
        }
    }
    
    return profit;
};

*/