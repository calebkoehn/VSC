// write a fnction that takes an array, then returns the reversed version of the same array



// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var reversedNumbers = [];

// for(var i = numbers.length -1; i >= 0; i--) {
//     reversedNumbers.push(numbers[i]);
// }


// console.log(reversedNumbers);

function reverse(arr){
var start = 0;
var end = arr.length -1;

while(start<end){
    var temp = arr[start];
    arr[start]= arr[end];
    arr[end] = temp;

    start++;
    end--;
}
    return arr;
}

console.log(reverse([1,2,3,4,5,6,7,8,9,10]));
console.log(reverse([4,8,15,16,23,42]));