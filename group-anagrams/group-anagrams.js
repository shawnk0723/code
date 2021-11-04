/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const anagrams = {};
    const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101];
    for (const word of strs){
        let key = word.split('').reduce((total, char) => total*primes[char.charCodeAt()-97],1);
        (!anagrams[key])? anagrams[key] = [word] : anagrams[key].push(word);
    }
    return Object.values(anagrams)
};
//time: O(wn)
//space: O(wn)

