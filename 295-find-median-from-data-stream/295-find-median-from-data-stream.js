
var MedianFinder = function () {
  this.small = new MaxPriorityQueue({ priority: (num) => num });
  this.large = new MinPriorityQueue({ priority: (num) => num });
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  this.small.enqueue(num);
  this.large.enqueue(this.small.dequeue().element);
  if (this.small.size() < this.large.size()) {
    this.small.enqueue(this.large.dequeue().element);
  }
};



/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  return this.small.size() > this.large.size()
    ? this.small.front().element
    : (this.small.front().element + this.large.front().element) / 2;
};

//supported ds
// https://support.leetcode.com/hc/en-us/articles/360011833974-What-are-the-environments-for-the-programming-languages-




// class MedianFinder {
//     constructor() {
//         // set up array
//         this.arr = [];
//     }
    
//     addNum(num) {
//         // check if array is size 0, just push
//         if (this.arr.size === 0){
//             arr.push(num);
//             return;
//         }
        
//         // left and right pointers for binary search
//         let l = 0, r = this.arr.length -1;
        
//         // keep going until pointers meet
//         while (l <= r) {
//             // get mid point
//             const mid = Math.floor((l + r) / 2);
//             // check if we can insert at mid
//             if (num > this.arr[mid]){
//                 // search right half of array
//                 l = mid+1;
//             } else {
//                 // search left half of array
//                 r = mid-1;
//             }
//         }
//         // we can insert at left pointer
//         this.arr.splice(l, 0, num)
        
//     }
    
//     findMedian() {
//         // if odd, return middle, if even, return avg of two middle
//         const mid = Math.floor(this.arr.length / 2);
//         return (this.arr.length % 2 === 0) ? (this.arr[mid] + this.arr[mid-1]) /2 : this.arr[mid];
//     }
// }

//time find:O(1), add: O(logn) if not taking splice into acc or O(n)
//space O(n)



//optimized using minHeap
//time O(logn) + O(1)
// class MedianFinder {
// 	//Initilize max and min heap
//     constructor() {
//         this.minHeap = new MinPriorityQueue() //supported by leetcode
//         this.maxHeap = new MaxPriorityQueue()
//     }

//     addNum(num) {
// 	//add to min and pop the top for max to keep them in the order that we want
//         this.minHeap.enqueue(num);
//         this.maxHeap.enqueue(this.minHeap.dequeue().element);
// 		//balance them
//         if (this.minHeap.size() < this.maxHeap.size()) {
//             this.minHeap.enqueue(this.maxHeap.dequeue().element);
//         }
// 		//console.log(this.minHeap.toArray(), this.maxHeap.toArray()) //run this to understand better
//     }

//     findMedian() {
//         if (this.minHeap.size() > this.maxHeap.size()) // if one is bigger 21 and 345 example just pop from 345(min heap)
//             return this.minHeap.front().element;
//         else 
//             return (this.minHeap.front().element + this.maxHeap.front().element) / 2; // 21 and 34 example, pop 1 and 3 and find average
        
//     }
// }

