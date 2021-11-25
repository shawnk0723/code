
var WordDictionary = function() {
    this.trie = {};
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let root = this.trie;
    for (let i=0; i<word.length;i++){
        if(root[word[i]]==null)root[word[i]] = {};
        root = root[word[i]]
    }
    root.isEnd = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    return this.dfs(word, 0, this.trie);
};

WordDictionary.prototype.dfs = function(word, i, node){
    if (i === word.length) return node.isEnd == true;
    
    if (word[i] =='.'){
        for(let key in node){
            if(this.dfs(word, i+1, node[key]))return true;
        }
    }else{
        if (node[word[i]]!=null){
            return this.dfs(word, i+1, node[word[i]])
        }
    }
    return false;
}
// add time O(1), space O(n)
// search time O(n^2), space O(1)

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */