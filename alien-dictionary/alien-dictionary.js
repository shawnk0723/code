/**
 * @param {string[]} words
 * @return {string}
 */

var alienOrder = function(words) {
    let adj = {};
    
    //map of all letters in words, create a set for every map entry
    words.forEach((word) => {word.split('').forEach((ch) => adj[ch] = [])});
    
    //loop through every word, compare current word against previous word
    for(let i = 1; i < words.length;i++){
        let cur = words[i], prev = words[i-1];
        
        //if prev length is longer and starts with cur, alphabet is not valid
        if(prev.length > cur.length && prev.startsWith(cur)){
            return '';
        }
        
        //loop through the shortest length btw prev & cur
        for (let j=0; j< Math.min(prev.length, cur.length); j++){
            
            //once ch don't match, add current ch to prev ch's set
            //break the loop, proceed to the next word
            if(prev[j] != cur[j]) {
                adj[prev[j]].push(cur[j])
                break
            }
        }
    }
    
    //start Topological sorting
    let visiting = new Set();
    let visited = new Set();
    let res = [];
    var dfs = function(ch){
        if (visiting.has(ch))return false;//if already visited, loop detected
        if (visited.has(ch))return true;
        visiting.add(ch);
        
        for (let nei of adj[ch]){
            // console.log(nei)
            if (!dfs(nei))return false;//if false then the neighboring ch is in loop so return immediately
        }
        visiting.delete(ch)
        visited.add(ch);
        res.push(ch);
        return true;

    }
    //dfs through adj
    for (let ch in adj){
        if (!dfs(ch))return ""
    }
    // console.log(res)
    return res.reverse().join('');
    
}

//time O(n)
//space O(n)



// var alienOrder = function(words) {
//     let graph = {};
//     words.forEach((word)=>{word.split('').forEach((char)=>graph[char]=[])})
    
//     for (let i=0; i<words.length-1;i++){
//         let w1 = words[i], w2 = words[i+1];
//         let minLen = Math.min(w1.length, w2.length);
//         if(w1.length>w2.length && w1.startsWith(w2))return "";
//         for (let j=0; j<minLen;j++){
//             if (w1[j] !=w2[j]){
//                 graph[w1[j]].push(w2[j]);
//                 //console.log(graph)
//                 break;
//             }
//         }
//     }
//     let visit = new Set(), visited = new Set(), res=[];
    
//     var dfs = function(char){
//         // console.log('v1:',visit, 'v2:',visited.has(char),char)
//         if (visit.has(char))return false;
//         if (visited.has(char))return true;
//         visit.add(char)
//         for (let n of graph[char]){
//             if (!dfs(n)) return false;
//         }
//         visit.delete(char);
//         visited.add(char);
//         res.push(char)
//         return true;
//     }
//     for ([key,val] of Object.entries(graph)){
//         if(!dfs(key))return ""
//     }
//     return res.reverse().join('')
// };




// var alienOrder = function(words) {
//   const map = {};
//   // map of all letters in words, create a set for every map entry
//   words.forEach(w=>w.split('').forEach(c=>{map[c] = map[c] || new Set()}))
//   // loop through every word, compare current word against previous word
//   for(let i = 1; i < words.length; i++){
//     const curr = words[i]
//     const prev = words[i-1]
//     // if previous length is longer and starts with current, alphabet is not valid
//     if(prev.length > curr.length && prev.startsWith(curr)){
//        return '';
//     }
//     // loop thorugh the longest length between previous and current
//     for(let j = 0; j < Math.min(prev.length, curr.length); j++){
//       // once character don't match, add current char to previous char's set
//       // break the loop, proceed to the next word
//       if(prev[j] !== curr[j]){
//         map[prev[j]].add(curr[j])
//         break
//       }
//     }
//   }
  
//   // start Topological sorting
//   const visited = {}; // this will be the visited hash map
//   const marked = {}; // this will be the marked done hash map
//   let str = ''; // the output alphabet
//   let hasCycle = false;
//   Object.keys(map).map(visit) // loop through all the verticies
//   return hasCycle ? '' : str;
  
//   function visit(n){
//     if(marked[n]) return // if already marked return
//     if(visited[n]){ // if visited, and not marked done, than we have a cycle
//       hasCycle = true;
//       return;
//     }
//     visited[n] = true; // set value as visited
//     map[n].forEach(visit);// DFS thorugh the character's Set
//     marked[n] = true; // once complete, mark as done
//     str = n + str // the character is set ahead of the string, because of the recursion, and as the stack pops, we move back to the first letter in the alphabet
//   }
// };