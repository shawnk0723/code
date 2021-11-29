/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function(words) {
    let graph = {};
    words.forEach((word)=>{word.split('').forEach((char)=>graph[char]=[])})
    
    for (let i=0; i<words.length-1;i++){
        let w1 = words[i], w2 = words[i+1];
        let minLen = Math.min(w1.length, w2.length);
        if(w1.length>w2.length && w1.startsWith(w2))return "";
        for (let j=0; j<minLen;j++){
            if (w1[j] !=w2[j]){
                graph[w1[j]].push(w2[j]);
                break;
            }
        }
    }
    let visit = new Set(), visited = new Set(), res=[];
    
    var dfs = function(char){
        if (visit.has(char))return false;
        if (visited.has(char))return true;
        visit.add(char)
        for (let n of graph[char]){
            if (!dfs(n)) return false;
        }
        visit.delete(char);
        visited.add(char);
        res.push(char)
        return true;
    }
    for ([key,val] of Object.entries(graph)){
        if(!dfs(key))return ""
    }
    return res.reverse().join('')
};