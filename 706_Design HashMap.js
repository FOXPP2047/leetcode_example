/**
 * Initialize your data structure here.
 */
var MyHashMap = function() {
    this.keys = [];
    this.values = [];
};

/**
 * value will always be non-negative. 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    if(this.keys[key] === undefined) {
        this.values.push(value);
        this.keys[key] = this.values.length - 1;
    } else this.values[this.keys[key]] = value;
};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    if(this.keys[key] === undefined) return -1;
    else return this.values[this.keys[key]];
};

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    if(this.keys[key] !== undefined) {
        this.values[this.keys[key]] = undefined;
        this.keys[key] = undefined;
    }
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */