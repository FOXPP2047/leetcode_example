/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0;
    const size = height.length;
    let head = 0, tail = size - 1;
    
    while(tail - head > 0) {
        let area = Math.min(height[head], height[tail]) * (tail - head);
        max = Math.max(max, area);
        if(height[head] > height[tail]) tail--;
        else head++;
    }
    return max;
};
//maxArea of water