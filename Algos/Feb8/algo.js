// Binary Search
// Given a sorted array and a value, return whether the array contains that value.
// Do not sequentially iterate through the array. Instead, ‘divide and conquer’, taking advantage of the fact that the array is sorted.

// Ex: Given [1,3,4,6,8,10] and 3, return true
// Ex: Given [2,6,8,10,14,16] and 12, return false


function binarySearch(arr, target) {
    let start = 0
    let end = arr.length - 1
    while (start <= end) {
        let middle = Math.floor((start + end) / 2)
        // let middle = start + Math.floor((end-start) /2)
        if (arr[middle] < target) {
            // Search the right half
            start = middle + 1
        } else if (arr[middle] > target) {
            // Search the left half
            end = middle - 1
        } else if (arr[middle] === target) {
            // Found target
            return "True"
        }
    }
    // Target not found
    return "False"
}
console.log(binarySearch([1, 2, 3, 4], 1)) // True
console.log(binarySearch([1, 2, 3, 5, 9], 4)) // False
console.log(binarySearch([1, 2, 3, 4, 5], 5)) // True
console.log(binarySearch([0, 3], 3)) // True
console.log(binarySearch([2,6,8,10,14,16],12)) //False

