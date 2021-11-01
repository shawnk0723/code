/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (!this.cache.has(key)) return -1;
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
        this.cache.delete(key);
    this.cache.set(key, value);
    if (this.cache.size > this.capacity)
        this.cache.delete(this.cache.keys().next().value);
    
    // if (this.cache.get(key) === -1){
    //     if (this.capacity < this.cache.size){
    //         for (let keyVal of this.cache) {
    //             this.cache.delete(keyVal[0]);
    //             break;
    //         }
    //     }
    // } 
    // this.cache.set(key, value);
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */


//time: O(1)
//space: O(n)