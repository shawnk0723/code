/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length != t.length) return false;
    
    let map = {};
    
    for (let c of s){
        map[c] ? map[c]++ : map[c]=1
    }
    
    for (let c of t){
        map[c] ? map[c]-- : map[c]=1
    }
    
    for (let key in map){
        if(map[key] > 0)return false;
    }
    return true;
};

//time O(n)
//space O(1) //static: 26