/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    const map = new Map();
    for (const path of paths) {

        map.set(path[0], map.has(path[0]) ? 0 : 1);
        map.set(path[1], map.has(path[1]) ? 0 : -1);
    }
    for (const paths of map) {
        if (paths[1] === -1) 
            return paths[0];
    }
};