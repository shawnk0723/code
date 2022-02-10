/**
 * @param {number[][]} intervals
 * @return {number}
 */
// var eraseOverlapIntervals = function(intervals) {
//     intervals.sort((a,b)=> a[1] - b[1]);
//     let prev = intervals[0], remove = 0;
//     for (let i = 1; i < intervals.length;i++){
//         if(intervals[i][0] < prev[1])remove++;
//         else prev = intervals[i];
//     }
//     return remove;
// };

var eraseOverlapIntervals = function(intervals){
    intervals.sort((a,b)=> a[1]-b[1]);
    
    let prev = intervals[0], remove = 0;
    for (let i = 1; i < intervals.length;i++){
        if(intervals[i][0]<prev[1])remove++;
        else prev = intervals[i];
    }
    return remove;
}
//time O(nlogn)
//space O(1)
