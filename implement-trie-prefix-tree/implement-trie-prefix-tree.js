
var Trie = function() {
    this.root = {};
}

Trie.prototype.insert = function(word){
    let cur = this.root;
    for (let c of word){
        if(!cur[c]) cur[c] = {};
        cur = cur[c]
    }
    cur.isEnd = true;
};

Trie.prototype.search = function(word){
    let cur = this.root;
    for (let c of word){
        if (!cur[c])return false;
        cur = cur[c]
    }
    return cur.isEnd === true;
}

Trie.prototype.startsWith = function(prefix){
    let cur = this.root;
    for (let c of prefix){
        if (!cur[c])return false
        cur = cur[c]
    }
    return true;
}



/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */