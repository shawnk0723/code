/**
 * @param {string[]} strs
 * @return {string[][]}
 */


var groupAnagrams = function(strs){
    let res = {};
    
    for (let str of strs){
        let cnt = new Array(26).fill(0);
        for (let char of str)cnt[char.charCodeAt()-97]++;
        let key = cnt.join('#');
        res[key] ? res[key].push(str) : res[key] = [str]
    }
    return Object.values(res)
}


//time O(n*m) where n is # of arrays & m is # of each strings
//space O(n*m)


// var groupAnagrams = function(strs) {
//     const anagrams = {};
//     const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101];
//     for (const word of strs){
//         let key = word.split('').reduce((total, char) => total*primes[char.charCodeAt()-97],1);
//         (!anagrams[key])? anagrams[key] = [word] : anagrams[key].push(word);
//     }
//     return Object.values(anagrams)
// };
// //time: O(wn)
// //space: O(wn)

// var groupAnagrams = function(strs){
//     if (strs== [""])return [[""]]
//     const map ={};
    
//     for (let i = 0; i < strs.length; i++){
//         const key = strs[i].split('').sort().join('');
        
//         if (!map[key]) {
//             map[key] = [strs[i]];
//         }else{
//             map[key].push(strs[i])
//         }
//     }
//     return Object.values(map);
// }
// //time: O(n)
// //space: O(n)
