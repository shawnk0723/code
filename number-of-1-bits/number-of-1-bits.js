/**
 * @param {number} n - a positive integer
 * @return {number}
 */

var hammingWeight = function(n) {
    let sum = 0;
    
    while (n != 0){
        //input in binary is 11(0....1011) so & 1 give 1(1011&0001=>0001)
        //continue to add until not zero(0000)
        sum += n & 1
        // console.log(n, sum)
        n = n >>> 1
    }
    return sum;
};

//time 0(n)
//space O(1)
