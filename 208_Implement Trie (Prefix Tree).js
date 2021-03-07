/**
 * Initialize your data structure here.
 */
var Trie = function() {
    this.root = {};
    this.isTerminal;
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this.root;
    for(let char of word) {
        if(!node[char]) {
            node[char] = {};
        }
        node = node[char];
    }
    node.isTerminal = true;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let node = this.root;
    
    for(let char of word) {
        node = node[char];
        
        if(!node) return false;
    }
    if(node.isTerminal === undefined) {
        return false;
    }
    return node.isTerminal;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let node = this.root;
    
    for(let char of prefix) {
        node = node[char];
        
        if(!node) return false;
    }
    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */