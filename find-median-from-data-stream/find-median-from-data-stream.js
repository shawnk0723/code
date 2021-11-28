
var MedianFinder = function() {
    this.arr = []
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    if(this.arr.length===0){
        this.arr.push(num);
        return;
    } 
    
    let l = 0, r = this.arr.length;
    
    //keep going till pointers meet
    while(l<r){
        const mid = Math.floor((l+r)/2);
        //check if we can insert at mid
        if(num > this.arr[mid]){
            //search right half of array
            l= mid+1;
        }else{
            //search left half of array
            r=mid;
        }
    }
    //insert at left pointer
    this.arr.splice(l,0,num)
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    const mid = Math.floor(this.arr.length/2)
    return (this.arr.length%2===0) ? (this.arr[mid-1]+this.arr[mid])/2 : this.arr[mid]
};

//time O(nlog n) + O(1)binarySearch, splice..

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */ 