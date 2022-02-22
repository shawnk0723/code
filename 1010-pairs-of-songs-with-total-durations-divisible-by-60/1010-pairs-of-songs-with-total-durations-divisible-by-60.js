/**
 * @param {number[]} time
 * @return {number}
 */
// Brute force
// // O(N2), O(1)
// // 6532ms (13.10%), 39.6MB (10.00%)
// var numPairsDivisibleBy60 = function(time) {
//     let counter = 0;
//     for (let i = 0; i < time.length - 1; i++) {
//         for (let j = i + 1; j < time.length; j++) {
//             if ((time[i] + time[j]) % 60 === 0) counter++;
//         }
//     }
//     return counter;
// };

//Hash map
// O(n), O(1)
// 100ms (71.03%), 39.8MB (10.00%)
// var numPairsDivisibleBy60 = function(time) {
//     let hashMap = new Array(60).fill(0);
//     let c = 0;
//     for (let i = 0; i < time.length; i++) {
//         let val = time[i] % 60;
//         c += hashMap[(60 - val) % 60];
//         hashMap[val] += 1;
//     }
//     return c;
// }

// O(n) time | O(1) space due to fixed size at 60
function numPairsDivisibleBy60(time) {
  // Distribute the numbers in buckets 0-59 i.e num % 60
  // and prefill with "0"
  const bucket = Array(60).fill(0);

  let count = 0;
  for (const t of time) {
    const mod = t % 60; // <- current song
    const left = (60 - mod) % 60; // potential song	
    // console.log(left, bucket[left],mod)
    count += bucket[left];
    bucket[mod]++;     // update bucket remainder
  }
  return count;
}
