/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    const size = tasks.length;
    if(n === 0) return size;
    
    let map = new Map();
    
    let max = 0, maxCount = 0;
  
    for(let task of tasks) {
        let value = map.has(task) ? map.get(task) + 1 : 1;
        map.set(task, value);
        
        if(value > max) {
            max = value;
            maxCount = 1;
        } else if(value === max) {
            ++maxCount;
        }
    }
    let result = Math.max(size, (max - 1) * (n + 1) + maxCount);
    return result;
};