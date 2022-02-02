/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function(x){
    if(x<0){
        return false;
    }
    let temp = x;
    let reversed = 0;
    
    while (temp > 0){
        reversed = reversed * 10 + temp % 10;
        temp = Math.floor(temp / 10)
    }
    return x + (-reversed) === 0;
}