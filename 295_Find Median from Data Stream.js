/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
    this.arr = [];
    this.size = 0;
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    let low = 0;
    let high = this.size;
    
    while(low <= high) {
        let mid = Math.floor((low + high) / 2);
        
        if(this.arr[mid] < num) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    this.arr.splice(low, 0, num);
    this.size++;
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if(this.arr.length % 2 === 0) {
        let mid = this.arr.length / 2;
        return (this.arr[mid] + this.arr[mid - 1]) / 2;
    } else {
        let mid = Math.floor(this.arr.length / 2);
        return this.arr[mid];
    }
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */