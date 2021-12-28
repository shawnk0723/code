/**
 * @param {number[][]} intervals
 * @return {number}
 */
 /* function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */

// var minMeetingRooms = function(intervals){
//     if (!intervals || intervals.length < 1) return 0;
    
//     let rooms = 0, e = 0;
//     const start = intervals.map(a => a[0]).sort((a,b) => a-b);
//     const ends = intervals.map(a => a[1]).sort((a,b) => a-b);
    
//     for (let i = 0; i < intervals.length; i++){
//         if (start[i] < ends[e]){
//             rooms++;
//         }else{
//             e++
//         }
//     }
//     return rooms;
// }


var minMeetingRooms = function(intervals){
    if (intervals.length < 1 || !intervals) return 0;
    
    let res = 0, cnt = 0;
    
    const start = intervals.map(a => a[0]).sort((a,b) => a-b);
    const ends = intervals.map(a => a[1]).sort((a,b) => a-b);
    
    let s = 0, e = 0;
    while (s < intervals.length){
        if (start[s] < ends[e]){
            s++;
            cnt++;
        }else{
            e++;
            cnt--;
        }
        res = Math.max(res, cnt);
    }
    return res;
    
}


// var minMeetingRooms = function(intervals) {
//     if (!intervals || intervals.length < 1)return 0;
    
//     let rooms = 0, end =0;
//     const starts = intervals.map(a=> a[0]).sort((a,b)=> a-b);
//     const ends = intervals.map(a=> a[1]).sort((a,b)=>a-b);
//     for(let i=0; i<intervals.length;i++){
//         if(starts[i] < ends[end]){
//             rooms++;
//         }else{
//             end++;
//         }
//     }
//     return rooms;
// };

//time O(nlogn)
//space O(n)
