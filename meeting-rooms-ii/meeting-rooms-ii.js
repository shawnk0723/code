/**
 * @param {number[][]} intervals
 * @return {number}
 */
 /* function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */

var minMeetingRooms = function(intervals) {
    if (!intervals || intervals.length < 1)return 0;
    
    let rooms = 0, end =0;
    const starts = intervals.map(a=> a[0]).sort((a,b)=> a-b);
    const ends = intervals.map(a=> a[1]).sort((a,b)=>a-b);
    for(let i=0; i<intervals.length;i++){
        if(starts[i] < ends[end]){
            rooms++;
        }else{
            end++;
        }
    }
    return rooms;
};

//time O(nlogn)
//space O(n)
