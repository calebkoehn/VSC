// Doubly Linked List

class DNode{
    constructor(val){
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DLL{
    constructor(){
        this.head = null;
        this.tail = null;
    }
    addToFront(val){
        let newNode = new DNode(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else{
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
    }
    addToBack(val){
        let newNode = new DNode(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
    }
    removeFromFront(){
        if(!this.head){
            return null;
        }
        if(this.head === this.tail){
            this.head = null;
            this.tail = null;
            return null;
        }
        this.head = this.head.next;
        this.head.prev = null;
    }
    removeFromBack(){
        if(!this.head){
            return null;
        }
        if(this.head === this.tail){
            this.head = null;
            this.tail = null;
            return null;
        }
        this.tail = this.tail.prev;
        this.tail.next = null;
    }
    display(){
        if(this.head == null){
            console.log("Nothing to print");
        } else {
            var runner = this.head;
            var result = "<-";
            while(runner){
                result += `${runner.value} <->`;
                runner = runner.next;
            }
            console.log(result);
        }
    }
}

let newList = new DLL();
newList.addToFront(7);
newList.addToFront(4);
newList.addToFront(9);
newList.addToFront(2);
newList.addToBack(9);
newList.addToBack(5);
newList.addToBack(8);
newList.addToBack(3);
newList.removeFromFront();
console.log(newList.head.value);
console.log(newList.tail.value);
