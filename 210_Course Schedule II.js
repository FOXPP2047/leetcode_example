/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    const seen = new Set();
    const seeing = new Set();
    const result = [];
    
    const adj = [...Array(numCourses)].map(r => []);
    
    for(let [u, v] of prerequisites) {
        adj[v].push(u);
    }
    
    const dfs = (v) => {
        if(seen.has(v)) {
            return true;
        }
        
        if(seeing.has(v)) {
            return false;
        }
        seeing.add(v);
        
        for(let nv of adj[v]) {
            if(!dfs(nv)) {
                return false;
            }
        }
        
        seeing.delete(v);
        seen.add(v);
        result.push(v);
        return true;
    }
        
    for(let c = 0; c < numCourses; ++c) {
        if(!dfs(c)) {
            return [];
        }
    }
    return result.reverse();
};