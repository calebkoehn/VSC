//looping through the array from 0 to arr.length,
//shift a value in the array back to the place it belongs
//the value to shift should increment with each loop iteration
//follow this example for each step, with the current value in ()
//step one: [(6),4,5,2,8,14,1,3] -> [(6),4,5,2,8,14,1,3]
//step two: [6,(4),5,2,8,14,1,3] -> [(4),6,5,2,8,14,1,3]
//step three: [4,6,(5),2,8,14,1,3] -> [4,(5),6,2,8,14,1,3]
//step four: [4,5,6,(2),8,14,1,3] -> [(2),4,5,6,8,14,1,3]
//step five: [2,4,5,6,(8),14,1,3] -> [2,4,5,6,(8),14,1,3]
//and so on...
const insertionSort = (arr) => {
    for(let i = 1; i < arr.length; i++){
        let current = arr[i];
        let j;
        for(j=i-1; j >= 0 && arr[j]> current; j--){
            arr[j + 1] = arr[j]
        }
        arr[j+1] = current;
    }
    return arr;
}

console.log(insertionSort([6,4,5,2,8,14,1,3]));


//The current variable holds the current value of the array and variable j is set to one value less than the current index position of the array.
//We check whether the current element (current) is smaller than the array value at jth position (unsortedData[j])and if it is true then we sort those values.
//The outer for loop iteration starts at 1st index position since we want to move the smallest element to the left hand side so we are comparing whether the current element is smaller than the elements on its left hand side.