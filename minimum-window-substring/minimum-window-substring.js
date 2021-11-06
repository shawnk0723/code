/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    //get mapT, countT
    //l, r of sub window
    //when formed != countT, r++
    //when formed == countT, track min, l++
    var l=0, r=0, n=s.length, mapT={}, map={}, countT=0;
    
    if(n<t.length){
        return "";
    }
    
    //mapT
    for(var i = 0; i < t.length; i++){
        var c = t.charAt(i);
        if(mapT[c] === undefined) {
            mapT[c] = 1;
            countT++;
        } else {
            mapT[c]++;
        }
    }
    //map
    var formed = 0;
    var min = [0, n-1, Number.MAX_SAFE_INTEGER]; // l, r, length
    while(r < n) {
        var c = s.charAt(r);
        if(map[c] === undefined) {
            map[c] = 1;
        } else {
            map[c]++;
        }
 
    //check map === mapT to update formed status 
    if(mapT[c] && map[c] === mapT[c]) {
        formed++;
    }
    
    //when formed--, it will break out of this while
    while(formed == countT && l<=r) {
        var cL = s.charAt(l);
        //update min here
        if((r-l+1) < min[2]) {
            min = [l, r, (r-l+1)]
        }
        map[cL]--;
        if(mapT[cL] && map[cL] < mapT[cL]){
            formed--;
        }
        l++;
    }
    
    r++;
}
if(min[2] === Number.MAX_SAFE_INTEGER) {
    return "";
}    
return s.substring(min[0], min[1]+1);
};
//time: O(n)
//space: O(n)