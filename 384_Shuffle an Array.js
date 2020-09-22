/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.original = nums;
    this.size = nums.length;
    this.deck = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.original;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    const result = [];
    let indices = new Array(this.size).fill(0);
    let count = 0;
    while (count !== this.size) {
        let randomIndex = Math.floor(Math.random() * this.size);
        while(indices[randomIndex] === 0) {
            indices[randomIndex] += 1;
            result.push(this.deck[randomIndex]); 
            ++count;
        }
    }
        
    return result;
    
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */