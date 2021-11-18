/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    let map = {};
    let res = [];
    
    for(let i=0; i<tickets.length;i++){
        let dep = tickets[i][0];
        let des = tickets[i][1];
        if(map[dep]){
            map[dep].push(des)
        }else{
            map[dep] = [des]
        }
    }
    
    for(let n in map){
        map[n].sort();
    }
    
    function dfs(node){
        let des = map[node]
        while(des && des.length>0){
            dfs(des.shift())
        }
        res.push(node)
    }
    dfs('JFK')
    return res.reverse();
};

//time: O(nlogn)
//space: O(n)