/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function(s) {
    if (s === '') return 0;
    if (isPalidrome(s)) return 1;
    return 2;
};

var isPalidrome = function(s) {
    let left = 0, right = s.length-1;
    
    while (left < right) {
        if (s[left] !== s[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
}

//time: O(n)
//space: O(1)