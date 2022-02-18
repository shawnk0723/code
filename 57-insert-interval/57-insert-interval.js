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