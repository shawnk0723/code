/**
 * @param {number} rowIndex
 * @return {number[]}
 */
// var getRow = function(rowIndex) {
//     let row = [1];
    
//     for(let i=1; i <= rowIndex; i++){
//         for(let j=i; j > 0; j--){
//             if(j===i){
//                 row[j] = 1;
//             }else
//                 row[j]= row[j-1] + row[j];
//         }
//     }
//     return row;
// };

var getRow = function(rowIndex){
    let row = [];
    if(rowIndex < 0)return row;
    
    row.push(1);
    for(let i=1; i<=rowIndex;i++){
        for(let j=row.length-1; j> 0; j--){
            row[j] = row[j-1]+row[j];
        }
        row.push(1)
    }
    return row
}
//time O(n^2)
//space O(n^2)