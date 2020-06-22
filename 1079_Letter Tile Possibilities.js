/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function(tiles) {
    let newMap  = new Map();
    for(let i = 0; i < tiles.length; ++i) {
        newMap.set(tiles[i], (newMap.get(tiles[i]) || 0) + 1);
    }
    return backtracking(newMap);
};

const backtracking = (map) => {
    let result = 0;
    
    for(let [key, value] of map.entries()) {
        if(!value) continue;
        result++;
        map.set(key, map.get(key) - 1);
        //console.log(map);
        result += backtracking(map, result);
        map.set(key, map.get(key) + 1);
        //console.log(map);
    }
    return result;
}