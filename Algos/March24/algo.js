class MinHeap{
    constructor(){
        this.heap = [null];
    }

    add(val){
        this.heap.push(val);
        this.shiftUp();

        console.log(this.heap);
    }

    shiftUp(){
        let currentIndex = this.heap.length - 1;
        let parentIndex = Math.floor(currentIndex/2);

        //while parent value is bigger and currentIndex is not 1
            //swap the values
            //set currentIndex to parentIndex
            //find parent of currentIndex
        while(this.heap[parentIndex] > this.heap[currentIndex] && currentIndex !== 1){
            const temp = this.heap[parentIndex];
            this.heap[parentIndex] = this.heap[currentIndex];
            this.heap[currentIndex] = temp;

            currentIndex = parentIndex;
            parentIndex = Math.floor(currentIndex/2);
        }

    }

    min(){
        return this.heap.length < 2 ? null : this.heap[1];
    }

    remove() {

        if(this.heap.length < 2) return null;

        const min = this.heap[1];

        if(this.heap.length === 2){
            this.heap.pop();
            return min;
        }

        this.heap[1] = this.heap.pop();

        this.shiftDown();


        return min;
    }

    shiftDown(){
        let idxToShiftDown = 1;
        let leftIdx = idxToShiftDown * 2;

        while(leftIdx < this.heap.length){
            let rightIdx = leftIdx + 1;
            let idxOfSmallest = leftIdx;

            if(rightIdx < this.heap.length && this.heap[rightIdx] < this.heap[leftIdx]){
                idxOfSmallest = rightIdx;
            }
            if(this.heap[idxToShiftDown] <= this.heap[idxOfSmallest]){
                console.log("The value to shift down has found it's home!");
                break;
            }
            console.log("Have not found it's home yet, swapping with a smaller value");
            let temp = this.heap[idxToShiftDown];
            this.heap[idxToShiftDown] = this.heap[idxOfSmallest];
            this.heap[idxOfSmallest] = temp;

            idxToShiftDown = idxOfSmallest;
            leftIdx = idxToShiftDown * 2;
        }
    }
}

const myHeap = new MinHeap();

myHeap.add(4);
myHeap.add(18);
myHeap.add(90);
myHeap.add(2000);
myHeap.add(3);
// myHeap.add(2);
// myHeap.add(17);
// myHeap.add(16);
// myHeap.add(18);
// myHeap.add(0.1);
// myHeap.add(2);
// myHeap.add(4.8);
// myHeap.add(93);
// myHeap.add(1);
myHeap.remove();
console.log(myHeap.min());