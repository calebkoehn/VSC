// Autocomplete
// The autocomplete! We can add words and confirm what words are in our trie, now write a function that, given a starter bit of letters, returns all words down that particular branch
// Ex, say we have a trie that has the words "car", "cat", "dog", carrot", "saw", and "can"
// if we ran autocomplete("ca"), we would expect back an array with ["car", "cat", "carrot", "can"]
// if we ran autocomplete("car") we would expect back an array with ["car","carrot"] - NOT cat and can, because they don't start with "car"
// Hint: you might have the best luck with this one using our old friend recursion

// Contains
// Given a string, return true or false whether that string exists in the trie
// Also check if "isWord" is set to true, if you find the letters but it's not a word return false

class TrieNode {
    constructor(val){
        this.val = val;
        this.children = [];
        this.isWord = false;
    }
}
class Trie {
    constructor(){
        this.root = new TrieNode("");
    }
    add(word){
        //loop through word
        //look at root
        //if no node exists with that value we add to children and then shift down the word
        let runner = this.root;
        for(let i =0; i<word.length;i++){
            let isPresent = false;
            for(let j=0; j<runner.children.length; j++){
                if(word[i] === runner.children[j].value){
                    runner = runner.children[j]
                    isPresent=true;
                    break;
                }
            }
            if(isPresent == false){
                runner.children.push(new TrieNode(word[i]));
                runner = runner.children[runner.children.length-1];
                console.log("added letter", word[i])
            } else {
                console.log("found letter", word[i])
            }
        }
        runner.isWord=true;
        console.log("word added");
    }
    find(word){
        let runner = this.root;
        for (let letter = 0;letter<word.length;letter++){
            let idx = word[letter].toLowerCase().charCodeAt(0) - 97;
            if (runner.children[idx] == null){
                return false;
            }
            runner = runner.children[idx];
        }
        return runner.isWord;
    }
    autoComplete(phrase, suggestions = [], runner = this.root) {
        if (runner == this.root) {
            for (let letter = 0; letter < phrase.length; letter++) {
                let idx = phrase[letter].toLowerCase().charCodeAt(0) - 97;
                if (runner.children[idx] == null) {
                    return null;
                }
                runner = runner.children[idx]
            }
        }
        for (let c = 0; c < runner.children.length; c++) {
            this.autoCompleteHelper(phrase, suggestions, runner.children[c]);
        }
        console.log(suggestions);
        return suggestions;
    }
    autoCompleteHelper(phrase, suggestions, runner){
        if(runner == null){
            return null;
        }
        phrase += runner.val
        if(runner.isWord){
            suggestions.push(phrase)
        }
        for(let c=0;c<runner.children.length;c++){
            this.autoCompleteHelper(phrase, suggestions, runner.children[c])
        }
    }
}

let newTrie = new Trie();

newTrie.add("Cat");
newTrie.add("Cart");
newTrie.add("Carrot");
newTrie.add("Saw");
newTrie.add("Can");
newTrie.add("Bat");
newTrie.autoComplete("Ca");



