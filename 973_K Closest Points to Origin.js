/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
    
    points.sort((p1, p2) => {
        return (Math.pow(p1[0], 2) + Math.pow(p1[1], 2)) - (Math.pow(p2[0], 2) + Math.pow(p2[1], 2));
    });
    
    const result = [];
    for(let i = 0; i < K; ++i) {
        result.push(points[i]);
    }
    return result;
};

/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
function distance(a) {
    return a[0] * a[0] + a[1] * a[1];
}

var kClosest = function(points, K) {
    return points.sort((a, b) => distance(a) - distance(b)).slice(0, K);
};


/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
    const size = points.length;
    const result = [];
    
    const partition = (low, high) => {
        let pivot = points[high][0] * points[high][0] + points[high][1] * points[high][1];
        let index = (low - 1);
        
        for(let i = low; i < high; ++i) {
            let dist = points[i][0] * points[i][0] + points[i][1] * points[i][1];
            
            if(dist <= pivot) {
                index++;
                let temp = points[index];
                points[index] = points[i];
                points[i] = temp;
            }
        }
        
        let temp = points[index + 1];
        points[index + 1] = points[high];
        points[high] = temp;
        
        return (index + 1);
    }
    
    const quickSort = (low, high) => {
        if(low < high) {
            let pi = partition(low, high);
            
            quickSort(low, pi - 1);
            quickSort(pi + 1, high);
        }
    }
    
    quickSort(0, size - 1);
    
    for(let i = 0; i < K; ++i) {
        result.push(points[i]);
    }
    
    return result;
    
};