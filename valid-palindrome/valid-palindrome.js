/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

// [ and ] are the start and end of a character set.
// \W means "non-word", as opposed to \w which will match a word.
// _ is the "_" character.
// / mark the beginning and end of a regular expression.
// g means it's a global search.
//replace them with ''
    
    var nonAlpha = s.replace(/\W|_/g, '');
    var reversed = nonAlpha.split('').reverse().join('');
    return nonAlpha.toLowerCase() == reversed.toLowerCase();
};
//time O(n)
//space O(1)