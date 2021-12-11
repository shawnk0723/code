/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    let total = numBottles;
    
    while (numBottles >= numExchange){
        let remainder = numBottles % numExchange;
        let newBottles = Math.floor(numBottles / numExchange);
        total += newBottles;
        
        numBottles = newBottles + remainder;
    }
    return total;
};