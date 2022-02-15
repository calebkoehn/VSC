// Singly Linked List Flatten Children
// Given a Singly Linked List that may contain nodes with children, return a flattened version of the list
// Ex: given 1 -> 2 -> 3    ->  4 -> 5
//                   |                |
//                   1 -> 2 -> 3   2 -> 3
// Return a list like so: 1 -> 2 -> 1 -> 2 -> 3 -> 3 -> 4 -> 2 -> 3 -> 5

// Singly Linked List Unflatten Children
// Given a Singly Linked List that may have flattened children, unflatten it back to its original state


// SLL Flatten Children Starter
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    isEmpty() {
        return this.head === null;
    }

    print() {
        let runner = this.head;
        let list = "";
        while (runner) {
            list += `${runner.value} ${runner.next ? " -> " : ""}`;
            runner = runner.next;
        }
        console.log(list);
    }

    printWithChildren() {
        let returnStr = "";
        let runner = this.head;
        while (runner) {
            returnStr += `${runner.value}`;
            if (runner.child) {
                returnStr += " (";
                let runner2 = runner.child.head;
                while (runner2) {
                    returnStr += `${runner2.value} ${runner2.next ? " -> " : ")"} `;
                    runner2 = runner2.next;
                }
            }
            if (runner.next) {
                returnStr += " -> ";
            }
            runner = runner.next;
        }
        console.log(returnStr);
        return returnStr;
    }

    insertAtBack(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.head = newNode;
            return this;
        } else {
            let runner = this.head;
            while (runner.next !== null) {
                runner = runner.next;
            }
            runner.next = newNode;
            return this;
        }
    }

    length() {
        let len = 0;
        let runner = this.head;
        while (runner) {
            len++;
            runner = runner.next;
        }
        return len;
    }

    insertAtFront(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        return this;
    }

    removeFront() {
        if (this.isEmpty()) {
            return null;
        }
        const oldHead = this.head;
        this.head = oldHead.next;
        return oldHead.value;
    }

    removeBack() {
        if (this.isEmpty()) {
            return null;
        }
        if (this.head.next === null) {
            return this.removeFront();
        }
        let runner = this.head;
        while (runner.next.next) {
            runner = runner.next;
        }
        const removed = runner.next.value;
        runner.next = null;
        return removed;
    }

    contains(val) {
        let runner = this.head;
        while (runner) {
            if (runner.value === val) {
                return true;
            }
            runner = runner.next;
        }
        return false;
    }

    reverse() {
        let prev = null;
        let node = this.head;
        while (node) {
            const nextNode = node.next;
            node.next = prev;
            prev = node;
            node = nextNode;
        }
        this.head = prev;
        return this;
    }

    populateChildren() {
        let runner = this.head;
        while (runner) {
            let numChildren = Math.floor(Math.random() * 5);
            if (numChildren !== 0) {
                let childList = new SLL();
                for (let i = 0; i < numChildren; ++i) {
                    childList.insertAtFront(Math.floor(Math.random() * 50));
                }
                runner.child = childList;
            }
            runner = runner.next;
        }
    }

    flattenChildren() {
        let returnStr = "";
        let runner = this.head;
        while (runner) {
            returnStr += `${runner.value}`;
            if (runner.child) {
                returnStr += " * ";
                let runner2 = runner.child.head;
                while (runner2) {
                    returnStr += `${runner2.value} ${runner2.next ? " * " : " ->"} `;
                    runner2 = runner2.next;
                }
            }
            if (runner.next) {
                returnStr;
            }
            runner = runner.next;
        }
        console.log(returnStr);
        return returnStr;
    
}

    unflattenChildren() {
        // Your code here
    }
}

var myList = new SLL();
myList.insertAtFront(5);
myList.insertAtFront(4);
myList.insertAtFront(3);
myList.insertAtFront(2);
myList.insertAtFront(1);
myList.populateChildren();
myList.print();
myList.printWithChildren();
  // Uncomment these as you test your code

myList.flattenChildren();
myList.print();
// myList.unflattenChildren();
// myList.print();
myList.printWithChildren();