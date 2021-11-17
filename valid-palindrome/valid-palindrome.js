/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    var nonAlpha = s.replace(/\W|_/g, '');
    var reversed = nonAlpha.split('').reverse().join('');
    return nonAlpha.toLowerCase() == reversed.toLowerCase();
};
//time O(n)
//space O(1)