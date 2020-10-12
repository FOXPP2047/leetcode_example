/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function(M) {
    const dfs = (index) => {
        for(let j = 0; j < M.length; ++j) {
            if(M[index][j] === 1 && !visited.has(j)) {
                visited.add(j);
                dfs(j);
            }
        }
    }
    
    let visited = new Set();
    let result = 0;
    
    for(let i = 0; i < M.length; ++i) {
        if(!visited.has(i)) {
            dfs(i);
            ++result;
        }
    }
    return result;
};

