
// Size
// Return how many values are inside a binary search tree

// BST Height
// Write a function for your BST that returns how tall (the length of the longest running branch) your tree is

// Node
class BNode {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

// Binary Search Tree
class BST {
    // Our BST only has a root that starts at null
    constructor() {
        this.root = null;
    }
    // How do I identify that a BST is empty?
    isEmpty() {
        // Returns true if it IS empty and false if it is NOT empty
        return this.root == null;
    }
    // How do I find the smallest value?
    // We keep going left until we hit null
    min() {
        if (this.isEmpty()) {
            return null;
        }
        // We have to search down the tree
        let squirrel = this.root;
        // While there is still a left to go to
        // But we do NOT run off the branch
        while (squirrel.left) {
            // We shift the squirrel down the branch until the while loop stops
            squirrel = squirrel.left;
        }
        // We are on the last node, so return the value
        return squirrel.value;
    }
    // How do I find the larget value?
    max() {
        if (this.isEmpty()) {
            return null;
        }
        let squirrel = this.root;
        while (squirrel.right) {
            squirrel = squirrel.right;
        }
        return squirrel.value;
    }
    // Add a node
    add(newValue) {
        let node = new BNode(newValue);
        // First we check if the tree is empty
        if (this.isEmpty()) {
            // If we DON'T have a root
            // Our new value IS our root
            this.root = node;
            return this;
        } else {
            // There ARE values so we need to figure out where our new value fits
            let squirrel = this.root;
            // a while true runs literally forever - nothing will stop it
            // So if you're going to do this you MUST have return statements that are reachable
            while (true) {
                if (newValue < squirrel.value) {
                    // If our new value is LESS than our runner's value
                    // We go to the left but we need to verify that there IS a left
                    if (!squirrel.left) {
                        // This statement triggers if the left pointer points to NULL
                        // If it is null that means our new node has a home
                        squirrel.left = node;
                        return this;
                    } else {
                        // If there IS a left to go down
                        squirrel = squirrel.left;
                    }
                } else {
                    // The value must be greater than OR equal to
                    // Need to see if there is an end to the branch
                    if (!squirrel.right) {
                        squirrel.right = node;
                        return this;
                    } else {
                        // If there IS a right to go down
                        squirrel = squirrel.right;
                    }
                }
            }
        }
    }
    printTwo(node = this.root, spaceCnt = 0, spaceIncr = 5) {
        if (!node) {
            return;
        }
        spaceCnt += spaceIncr;
        this.printTwo(node.right, spaceCnt);
        console.log(" ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) + `${node.value}`);
        this.printTwo(node.left, spaceCnt);
    }
    // Return true or false whether a given value is present in my BST
    contains(val) {
        // Can't have a value if the tree is empty
        if (this.isEmpty()) {
            return false;
        } else {
            let squirrel = this.root;
            while (squirrel) {
                if (val == squirrel.value) {
                    return true;
                }
                if (val < squirrel.value) {
                    // if our value is SMALLER
                    squirrel = squirrel.left;
                } else {
                    // if our value iS GREATER
                    squirrel = squirrel.right;
                }
            }
            return false;
        }
    }
    nodeCount(node = this.root, count = 0){
        if (node == null){
            return count;
        }
        count++;
        count = this.nodeCount(node.left, count);
        count = this.nodeCount(node.right, count);
        return count;
    }
}

let tree = new BST();
tree.add(10);
tree.add(20);
tree.add(5);
tree.add(18);
tree.add(8);
tree.add(25);
tree.add(22);
// tree.printTwo();
console.log(tree.contains(9));
console.log(tree.contains(18));
console.log(tree.min());
console.log(tree.max());
console.log(tree.nodeCount());