/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
//using minheap
const kClosest = function(points, k) {
    const res = [];
    const minHeap = new MinPriorityQueue(); // not required to import fn
    
    // build heap -> O(nlogn)
    for (i=0; i<points.length; i++) {
        const x = points[i][0];
        const y = points[i][1];
        
        const dist = (x ** 2) + (y ** 2);
        
        minHeap.enqueue([x, y], dist); // {element:[x,y], value: dist}
    }
    
    // append k points to result -> O(klogn)
    while (k > 0) {
        res.push(minHeap.dequeue().element); // we want the element
        k -= 1;
    }
    
    return res;
};
//Time Complexity: O(nlogk), n for points.length, k for input K


//if heap is already given
// let distance = ([x,y]) => Math.sqrt(x**2 + y**2);


// var kClosest = function(points, k) {
//     if (k > points.length) return points;
//     let heap = new MaxHeap();
//     for (let i = 0; i < points.length; i++) {
//         let cur = points[i];
//         if (heap.size < k) {
//             heap.add(cur);
//             continue;
//         }
//         let maxDistance = distance(heap.peek());
//         if (maxDistance > distance(cur)) {
//             heap.pop();
//             heap.add(cur);
//         }
    
//     }
//     return heap.toArray();
// };

//using sort
// var kClosest = function(points, K) {
//     return points.sort((a, b) => getLength(a) - getLength(b)).slice(0, K);
// };

// // we don't need to find square root of c here
// // squared length is enough to determine order
// var getLength = function([a, b]) {
//     return (a * a) + (b * b);
// }
//O(nlogn).