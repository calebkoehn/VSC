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
        
        var newNode = new Node(num);
        

        if(this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    removeFromFront() {
        if(this.head == null) {
            console.log("Nothing in the list!");
            return this;
        }
        this.head = this.head.next;

        return this;
    }

    removeFromBack() {
        if(this.head == null || this.head.next == null) {
            console.log("list is too short.");
            return this;
        }
        var runner = this.head;
        while(runner.next != this.tail) {
            runner = runner.next;
        }
        this.tail = runner;
        runner.next = null;
        return this;
    }

}

    // run through this list and print all the values
    printValues(){
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
sll.contains(4); // true
sll.contains(93); // false
sll.removeFromBack(); // should remove 14
sll.removeFromFront(); // should remove 53
sll.printValues();