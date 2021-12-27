/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
// let canFinish = function(numCourses, prerequisites) {
//     const order = [];
//     const zeroDegree = [];
//     const graph = new Map();
//     const indegree = Array(numCourses).fill(0);
    
//     for (const [e,v] of prerequisites){
//         if (graph.has(v)){
//             graph.get(v).push(e)
//         }else{
//             graph.set(v, [e]);
//         }
//         indegree[e]++;
//     }
//     for(let i=0; i<indegree.length;i++){
//         if(indegree[i]==0)zeroDegree.push(i)
//     }
    
//     while(zeroDegree.length){
//         const v = zeroDegree.shift();
//         if(graph.has(v)){
//             for(const e of graph.get(v)){
//                 indegree[e]--;
//                 if(indegree[e]===0)zeroDegree.push(e);
//             }
//         }
//         order.push(v)
//     }
//     return numCourses === order.length;
// };
// //time O(n)
// //space O(n)




//dfs
var canFinish = function(numCourses, prerequisites) {
    
    const adjList = {};
    const visited  = new Set();
    
    for (let course =0; course < numCourses; course++){
        adjList[course] = [];
    }
    //map each course to prereq list
    for (const [v, e] of prerequisites) {
        adjList[v].push(e)
    }
    
    // console.log(adjList);
    
    function checkCycles(course){
        if (visited.has(course)) return false;
        if (adjList[course] == []) return true;//no prereq
        
        visited.add(course);
        
        for (const pre of adjList[course]){
            if(!checkCycles(pre)) return false;
        }
     
        
        visited.delete(course);
        adjList[course] = [];
        return true;
    }
    
      //check for cycles on each course
    for (const course in adjList){
        
        if(!checkCycles(course))return false;
    }
    return true;
}

// //time O(n+p)
// //space O(n+p)