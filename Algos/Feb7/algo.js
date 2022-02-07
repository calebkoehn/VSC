//Balance Point
//Write a function that returns whether the given array has a balance point BETWEEN indices, where one side’s sum is equal to the other’s. 
// Ex: given [1,1,1,1] //return true, because between indices 1 and 2 the sum on the left and right are equal
// Ex: given [2,1,1]  //return true, because between indices 0 and 1 the sum of the left and right are equal
// Ex: given [3,1,1]  //return false, because at no point is the left sum equal to the right sum


function balancedPoint(array) {
    const halfSum = array.reduce((a, b) => a + b) / 2;
    let leftSum = 0;
    for (let i = 0; i < array.length; i++) {
        leftSum = leftSum + array[i];
        if (leftSum == halfSum) {
            return false;
        } return true;
    }
}


console.log (balancedPoint([1,1,1,1])); 
console.log (balancedPoint([2,1,1])); 
console.log (balancedPoint([3,1,1])); 




//Balance Index

//Here, a balance point is ON an index, not between indices. Return the balance index where sums are equal on either side (exclude its own value).
//Return -1 if none exist.
// Ex: given [1,20,1] > return 1 because the sums of the values on the left and right of index 1 are equal
// Ex: given [1,20,2] > return -1 because the sums of the values on the left and right of index 1 are not equal
// Ex: given [1,2,1,20,4] > return 3
// Ex: given [2,2,9,6,-2] > return 2

const balancedIndex = (array) => {
    let total = array.reduce((a, b) => a + b);
    let sumLeft = 0;

    for (let i = 0; i < array.length; i++) {
        total = total - array[i];
        if (sumLeft === total) {
            return i;
        }
        sumLeft += array[i];
    }
    return -1;
};
console.log (balancedIndex([1,20,1])); 
console.log (balancedIndex([1,20,2])); 
console.log (balancedIndex([1,2,1,20,4])); 
console.log (balancedIndex([2,2,9,6,-2])); 

