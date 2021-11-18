/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
let canFinish = function(numCourses, prerequisites) {
    const order = [];
    const zeroDegree = [];
    const graph = new Map();
    const indegree = Array(numCourses).fill(0);
    
    for (const [e,v] of prerequisites){
        if (graph.has(v)){
            graph.get(v).push(e)
        }else{
            graph.set(v, [e]);
        }
        indegree[e]++;
    }
    for(let i=0; i<indegree.length;i++){
        if(indegree[i]==0)zeroDegree.push(i)
    }
    
    while(zeroDegree.length){
        const v = zeroDegree.shift();
        if(graph.has(v)){
            for(const e of graph.get(v)){
                indegree[e]--;
                if(indegree[e]===0)zeroDegree.push(e);
            }
        }
        order.push(v)
    }
    return numCourses === order.length;
};
//time O(n)
//space O(n)