/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */

var insert = function(intervals, newInterval){
    let res = [];
    
    for (let i = 0; i < intervals.length; i++){
        //no overlaps and newInt inserted at the end
        if (newInterval[1] < intervals[i][0]){
            res.push(newInterval)
            return res.concat(intervals.slice(i));
        //no overlaps and newInt inserted before the end
        } else if (newInterval[0] > intervals[i][1]){
            res.push(intervals[i])
        //overlaps
        } else {
            newInterval = [Math.min(newInterval[0], intervals[i][0]), Math.max(newInterval[1], intervals[i][1])]
        }
    }
    res.push(newInterval)
    return res
}


//time: O(n)
//space: O(n)


// var insert = function(intervals, newInterval) {
//     let i = 0;
//     let res = [];
    
//     //append newInterval if interval empty
//     if (intervals.length < 0){
//         res.push(newInterval);
//         return res;
//     }
    
//     //append interval first
//     while (i < intervals.length && newInterval[0] > intervals[i][0]){
//         res.push(intervals[i])
//         i++;
//     }
//     //append newInterval
//     //if res[2,3] & new[4,6] => [2,3],[4,6] bc 4 is larger
//     if (res.length <= 0 || res[res.length -1][1] < newInterval[0]) {
//         res.push(newInterval)
//     //if res[2,4] & new[3,6] => [2, 6] bc 6 is larger
//     }else {
//         res[res.length-1][1] = Math.max(newInterval[1], res[res.length-1][1])
//     }
//     //merge rest (compare intervals and res)
//     while(i < intervals.length){
//         //if int[5,6] & res[3,4] => [5,6] bc 5 is larger
//         if (intervals[i][0] > res[res.length-1][1]){
//             res.push(intervals[i])
//         //otherwise check last index of both interval & res
//         }else{
//             res[res.length-1][1] = Math.max(intervals[i][1], res[res.length-1][1])
//         }
//     i++;
//     }
//     return res;
// };

