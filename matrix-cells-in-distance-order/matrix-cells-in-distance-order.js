/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rCenter
 * @param {number} cCenter
 * @return {number[][]}
 */
var allCellsDistOrder = function(rows, cols, rCenter, cCenter) {
    const buckets = [];
    const ret = [];
    for (let i = 0; i < rows; ++i){
        for (let j = 0; j < cols; ++j){
            const dis = Math.abs(i - rCenter) + Math.abs(j - cCenter);
            if (buckets[dis] === undefined) buckets[dis] = [];
            buckets[dis].push([i, j])
        }
    }
    for (const bucket of buckets) {
        ret.push(...bucket);
    }
    return ret;
};

//time: O(n^2)
//space: O(n^2)