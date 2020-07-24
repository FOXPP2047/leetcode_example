/**
 * @param {number} maxSize
 */
var CustomStack = function(maxSize) {
    this.stack = [];
    this.maxSize = maxSize;
};

/** 
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function(x) {
    if(this.stack.length < this.maxSize) 
        this.stack.push(x);
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function() {
    return this.stack.length ? this.stack.pop() : -1;
};

/** 
 * @param {number} k 
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function(k, val) {
    let size = 0;
    
    if(this.stack.length > k)
        size = k;
    else size = this.stack.length;
    for(let i = 0; i < size; ++i) {
        this.stack[i] += val;
    }
};

/** 
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */