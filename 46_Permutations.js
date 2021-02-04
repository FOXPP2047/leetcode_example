/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result = [];
    
    const backtracking = (curr, rest) => {
        if(rest.length === 0) {
            result.push(curr);
            return;
        }
        
        for(let i = 0; i < rest.length; ++i) {
            let print1 = [...curr, rest[i]]
            let print2 = [...rest.slice(0, i), ...rest.slice(i + 1)]
            console.log(print1, print2)
            backtracking(print1, print2)
        }
    }

    backtracking([], nums);
    return result;
};