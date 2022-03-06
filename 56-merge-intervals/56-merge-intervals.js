/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

// var merge = function(intervals){
//     intervals.sort((a,b)=> a[0]-b[0]);
//     let tmp = [intervals[0]];
//     for (let i = 1; i < intervals.length;i++){
//         [start,end] = intervals[i];
//         if (tmp[tmp.length-1][1]>=start){
//             tmp[tmp.length-1][1] = Math.max(tmp[tmp.length-1][1], end)
//         }else{
//             tmp.push(intervals[i])
//         }
//     }
//     return tmp
// }

//time O(nlogn)
//space O(n)

var merge = function(intervals){
    intervals.sort((a,b) => a[0]-b[0]);
    let tmp = [intervals[0]];
    for (let i = 1; i < intervals.length;i++){
        [start, end] = intervals[i];
        if (tmp[tmp.length-1][1]>=start){
            tmp[tmp.length-1][1] = Math.max(tmp[tmp.length-1][1], end);
        }else{
            tmp.push(intervals[i])
        }
    }
    return tmp;
}