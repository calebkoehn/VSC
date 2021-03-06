// Write a function that, given a sorted array and a value, determines whether the value is found within the array through 
// recursively searching, and returns the index. Binary Search works by checking whether the value given is greater than or 
// less than a midway point, which is why the given array must be sorted. 
// Also, even though there's only an array and value given, you can add additional parameters to your function.
// Return -1 if the number is not in the array


// val = 9
// arr = [1,2,3,5,7,9,10,11,13,14,15,56,78]

// [1,2,3,5,7,9,10      |        11,13,14,15,56,78] <----- 9 is less than halfway so now you can search the left side only
// [1,2,3,5,       |        7,9,10] <------  9 is greater than halfway so you can search the right side only
// [7,      |       9,10] <------ depending on where you split,9 is greater than halfway
// [9,     |      10] <------ whittle down to 1 or 2 items to check and solve!


function recursiveBinarySearch(num, arr, x=0, i=arr.length) {
    if(arr.length < 1){
    return -1;
    }

    if (i - x > 1) {
        var mid = Math.floor((i+x)/2);
        if(arr[mid] == num){
            return mid
        }
        if(num< arr[mid]){
            return recursiveBinarySearch(num, arr, x, mid)
        }
        return recursiveBinarySearch(num, arr, mid+1, i)
    }
    return arr[x] == num ? x : -1;
}

console.log(recursiveBinarySearch(13,[1,2,3,4,5,7,9,10,11,13,14,15]));

// arr = [1, 2]//, -2 ---> -1
// arr = [1, 2]//, 4 ---> -1
// arr = [1, 2]//, 1 ---> 0
// arr = [1,2,2]//, 2 ---> 1
// //[], 7 ---> -1
// arr = [1,2,2,2,2,2,2,4,5,5,5,5,6,6,6]//, 2 ---> 3
// arr = [1, 1, 1, 1, 1]//, ---> 1
// [arr = 1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 8, 9, 10]//, 8 ---> 11
// // make sure to test all given scenarios!
