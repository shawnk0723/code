/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s){
    if (s.length < 1 || s === null) return "";
    
    let longest = "";
    
    for (let i = 0; i < s.length; i++){
        let even = expendFromCenter(s, i-1, i);
        let odd = expendFromCenter(s, i, i);
        
        if (longest.length < even.length)longest = even;
        if (longest.length < odd.length)longest = odd;
    }
    return longest;
}

function expendFromCenter(s, l, r){
    let i = 0;
    while (s[l-i] && s[l-i] === s[r+i]){
        i++;
    }
    i--;
    return s.slice(l-i, r+i+1)
}