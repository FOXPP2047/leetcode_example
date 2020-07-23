/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let result = 0;
    const size = nums.length;
    
    for(let i = 0; i < size; ++i) {
        for(let j = i + 1; j < size; ++j) {
            if(nums[i] === nums[j])
                result++;
        }
    }
    return result;
};

var numIdenticalPairs = function(nums) {
    let map = new Map();
    let result = 0;
    
    for(let i = 0; i < nums.length; ++i) {
        if(map.has(nums[i])) {
            result += map.get(nums[i]);
            map.set(nums[i], map.get(nums[i]) + 1);
        } else map.set(nums[i], 1);
    }
    return result;
};

var numIdenticalPairs = function(nums) {
	const map = {};
	let result = 0;
	nums.forEach(num => {
	    if (map[num]) {
	        result += map[num];
	        map[num]++;
	    } else {
	        map[num] = 1;
	    }
	})
	return result;
};
