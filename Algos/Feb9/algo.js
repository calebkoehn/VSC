// Remove duplicates
// Given a sorted array of integers, remove all duplicates from the array and return an array that does not contain duplicates (okay to make a new array)

// Ex: given [1,1,1,2,3,3,4] > return [1,2,3,4]
// Ex: given [2,2,3,4,4,4] > return [2,3,4]

// Challenge one: How would you do this with an unsorted array?
// Challenge two: try to do this WITHOUT making a new array! (Also known as in place)



// const arr = [2,2,3,4,4,4];
// const removeDuplicates = (arr = []) => {
//     const map = {};
//     const res = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (!map[arr[i]]) {
//             map[arr[i]] = true;
//             res.push(arr[i]);
//         };
//     };
//     return res.sort((a, b) => a-b);
// };
// console.log(removeDuplicates(arr));

const arr = [1,1,1,2,3,3,4];
let new_arr = [];
arr.forEach((c) =>{
    if (!new_arr.includes(c)){
        new_arr.push(c);
    }
});

console.log(new_arr);