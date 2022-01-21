class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}


class SLList{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    addToFront(num) {
        // create a new node with the value set to the passed in number
        var newNode = new Node(num);
        // take newNode's .next pointer and point it into the list
        newNode.next = this.head;

        if(this.head == null) {
            this.head = newNode;
            this.tail = newNode;    
        } else {
            // change .head pointer to point at our newNode
            this.head = newNode;
        }
    }

    addToBack(num) {
        // create a newNode with the given number
        var newNode = new Node(num);
        // take tail pointer and point it at the new node

        if(this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // take tail.next and point it to newNode
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    // removes the first item in your list
    removeFromFront() {
        if(this.head == null) {
            console.log("There's nothing in the list! Nothing can be removed!");
            // return 'this' to end function and allow chaining of methods
            return this;
        }
        // if we simply move out head pointer over, that creates a new entry point to our list 
        // we cannot traverse backwards!
        var temp = this.head;
        this.head = this.head.next;
        temp.next = null;

        return this;
    }

    // removes the last item in your list
    removeFromBack() {
        // this handles 2 edge cases: nothing in list, and only 1 item in list
        if(this.head == null || this.head.next == null) {
            console.log("List is too short! Cannot remove from back")
            // return 'this' to end function and allow chaining of methods
            return this
        }
        // ** alternate edge case handling, handles if there is only 1 items in the list or no items separately
        // if(this.head == null) {
        //     console.log("Nothing in the list! Cannot remove from back")
        //     return this
        // }
        // if(this.head.next == null) {
        //     this.head = null
        //     return this
        // }
        // set runner to start at the beginning of list
        var runner = this.head;

        // run all the way through this list until you hit the second to last item and stop
        while(runner.next != this.tail) {
            runner = runner.next
        }
        // set runner.next to null, effectively removing final node from the list
        runner.next = null;
        this.tail = runner;
        return this
    }

    // move through a given list and determine if a given num is contained in it; return true/false
    contains(num) {
        // edge case: what if there's nothing in the list?
        if(!this.head) { //this.head === null
            console.log("There's nothing in this list, so it cannot contain anything!")
            return false
        }
        // start runner at the beginning of the list
        var runner = this.head;
        while(runner != null) {
            // check if the input value is equal to the runner's value
            if(runner.value ==  num) {
                // if it is, return true
                console.log(`Found it! ${runner.value}`);
                return true
            }
            runner = runner.next;
        }
        // if we made it through out entire list and never hit true, we didn't find it!
        return false
    }

    // locate the min value move that value's node from inside the list to the front of the list
    // note that there are several parts to this:
    // 1) locate the node you are searching for
    // 2) basically remove that node from its current location
    // 3) add the node to the front of the list
    moveMinToFront() {
        if (!this.head || !this.head.next) {
            console.log("not enough nodes to move!");
            return this;
        }
        
        var min = this.head;
        var runner = this.head;
        var walker;

        while(runner.next != null){
            if(runner.next.value < min.value){
                min = runner.next;
                walker = runner;
            }
            runner = runner.next;
        }

        if(min == this.head) {
            console.log("The min is already at the front!");
            return this
        }

        walker.next = min.next;
        min.next = this.head;
        this.head = min;
        return this;
    }

    // locate the max value move that value's node from inside the list to the back of the list
    // note that there are several parts to this:
    // 1) locate the node you are searching for
    // 2) basically remove that node from its current location
    // 3) add the node to the back of the list
    moveMaxToBack() {
        if (!this.head || !this.head.next) {
            console.log("not enough nodes to move!");
            return this;
        }

        var max = this.head;
        var runner = this.head;
        var walker;

        while(runner.next != null){
            if(runner.next.value > max.value){
                max = runner.next;
                walker = runner;
            }
            runner = runner.next;
        }

        if(max == runner) {
            console.log("Max already at back!");
            return this;
        }

        if(max == this.head) {
            runner.next = max;
            this.head = this.head.next;
            runner.next.next = null;
            return this;
        }

        walker.next = max.next;
        runner.next = max;
        max.next = null;
        return this;
    }

    // find a location in a list, and add a new node AFTER that location with the given value
    // for example: given loc = 2, the new node should be inserted at spot #3
    // Reminder: there are not indices for your SLL! how you would keep track of what your location is?
    // take a look at printValues() and think about what you can add to determine how many nodes there are, can you adapt that to this scenario?
    appendValue(loc, num) {
        // your code here
    }

    // find a location in a list, and add a new node BEFORE that location with the given value
    prependValue(loc, num) {
        // your code here
    }

    // run through this list and print all the values
    printValues() {
        // start at head pointer
        var runner = this.head;

        var str = "this.head = ";
        // run through entire list and print each value
        while(runner.next != null) {
            // print the value
            str += `${runner.value} --> `;
            // iterate your runner
            runner = runner.next;
        }
        str += `this.tail = ${runner.value} --> null`;
        console.log(str);
    }
}

var sll = new SLList();
sll.addToFront(9);
sll.addToFront(-3);
sll.addToFront(22);
sll.addToFront(16);
sll.addToFront(4);
sll.addToFront(53);
sll.addToBack(12);
sll.addToBack(13);
sll.addToBack(14);
sll.printValues();
console.log("=================================")
console.log(sll.contains(4)); // true
console.log(sll.contains(93)); // false
sll.removeFromBack(); // should remove 14
sll.removeFromFront(); // should remove 53
sll.printValues();