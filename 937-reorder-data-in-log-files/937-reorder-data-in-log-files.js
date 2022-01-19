/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
    const letters = []
    const digits = []
    
    for (let log of logs){

        if (isNaN(log[log.length - 1])){
            // it is letter
            letters.push(log)
        }
        else digits.push(log)
    }

    letters.sort((a,b)=> {
            //cuts off id
            stra = a.slice(a.indexOf(' ') +1)
            strb = b.slice(b.indexOf(" ") +1)
            
            //if same then sort by id
            //else just sort lexically
            if (stra == strb) {
                return a > b ? 1 : -1;
            }else {
                return stra > strb ? 1 : -1;
            }
    })   
    return letters.concat(digits)
};
//time O(nlogn)
//space O(n)