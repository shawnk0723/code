/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let sum = 0;
    
    while (n != 0){
        console.log(n)
        sum += n & 1
        n = n >>> 1
    }
    return sum;
};