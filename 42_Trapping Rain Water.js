/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let result = 0, curr = 0;
    let stack = [];
    
    while(curr < height.length) {
        while(stack.length && height[curr] > height[stack[stack.length - 1]]) {
            let top = stack.pop();
            
            if(!stack.length) {
                break;
            }
            let dist = curr - stack[stack.length - 1] - 1;
            let boundedHeight = Math.min(height[curr], height[stack[stack.length - 1]]) - height[top];
            result += (dist * boundedHeight);
        }
        stack.push(curr++);
    }
    return result;
};

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let left = 0, right = height.length - 1;
    let result = 0;
    
    let leftMax = 0, rightMax = 0;
    
    while(left < right) {
        if(height[left] < height[right]) {
            if(height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                result += (leftMax - height[left]);
            }
            ++left;
        } else {
            if(height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                result += (rightMax - height[right]);
            }
            --right;
        }
    }
    return result;
};