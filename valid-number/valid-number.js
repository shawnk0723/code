/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    //returns true if not a #, trims whitespace then checks not empty, checks not neg/pos infit... 
   return (! isNaN(s) ) && (s.trim() !== "" && s != "Infinity" && s != "-Infinity"  && s != "+Infinity")
    
};

//time: O(n)
//space: O(1)

