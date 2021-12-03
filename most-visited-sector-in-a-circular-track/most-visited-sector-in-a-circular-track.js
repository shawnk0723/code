/**
 * @param {number} n
 * @param {number[]} rounds
 * @return {number[]}
 */
// var mostVisited = function(n, rounds) {
//     const start = rounds[0], end = rounds[rounds.length-1];
//     const res = [];
    
//     if(start <= end){
//         for (let i = start; i <= end; i++)res.push(i)
//     }else{
        
//     }
// };

// Consider rounds[0] as start of marathon and rounds[A.length-1] as end of marathon, We are running from 1 to n repeatedly.

// Most visited sectors can be identified from start and end point, In between how many rounds we run, it doesn't matter.

// if(start <= end) we have most visited all sectors between start and end.

// if(start > end) then we have to add all from (start to n) and (1 to end).

// Explanation
// If start <= end, return the range [start, end].
// If end < start, return the range [1, end] + range [start, n].


// Complexity
// Time O(N)
// Space O(N)

var mostVisited = function(n, rounds) {
    const start = rounds[0], end = rounds[rounds.length-1];
    const result = [];
    
    if(start <= end) {
        for(let i = start; i <= end; i++) {
            
                result.push(i);
            // console.log(result)
        }
    }else{
        for(let i=1;i<=end; i++)result.push(i)
        for(let i=start; i<=n;i++)result.push(i)
    } 
        
    
    return result;
};
//time O(n)
