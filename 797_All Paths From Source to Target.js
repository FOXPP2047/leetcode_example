/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    const start = 0;
    const end = graph.length;
    
    let result = [];
    let path = [];
    
    path.push(start);
    
    const dfs = (node) => {
        if(node === end - 1) {
            result.push(path.slice(0));
        } else {
            for(let n of graph[node]) {
                path.push(n);
                dfs(n);
                path.pop();
            }
        }
    }
    
    dfs(start);
    return result;
};