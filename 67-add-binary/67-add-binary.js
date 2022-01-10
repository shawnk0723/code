/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    // console.log((3n+1n).toString(2))
    return (BigInt("0b" + a) + BigInt("0b" + b)).toString(2);
};