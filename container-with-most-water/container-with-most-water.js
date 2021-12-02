/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let res = 0;
    let l = 0;
    let r = height.length -1;
    
    while (l < r) {
        let area = (r - l) * Math.min(height[l], height[r])
        res = Math.max(area, res)
        if (height[l] < height[r]){
            l++;
        }else {
            r--;
        }
    }
    return res;
};

//time O(n)
//space O(1)