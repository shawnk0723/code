/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let left = 0, right = 0;
    let maxCount = 0;
    const visited = {};
    
    while (right < s.length){
        const char = s[right];
        visited[char] = visited[char] ? visited[char]+1 : 1;
        
        if (visited[char] > maxCount) maxCount = visited[char];
        if (right - left + 1 - maxCount > k){
            visited[s[left]]--;
            left++;
        }
        right++;
    }
    return right-left;
};
//time O(n)
//space O(n)