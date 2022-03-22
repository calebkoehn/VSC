//Union Sorted Arrays
//Efficiently combine two pre-sorted arrays into a new sorted array
//no built in functions!!!

//Ex: given [2,4,7,9,10] and [2,3,5,7,9,10], return [2,3,4,5,7,9,10]
//Ex: given [1,2,2,2,7] and [2,2,6,6,7] return [1,2,2,2,6,6,7]
//Ex: given [1,5,9] and [2,6,10] return [1,2,5,6,9,10]

const unionSorted = (arrLeft, arrRight) => {
    var union = [];
    var i =  0;
    var j = 0;

    while(i <= arrLeft.length - 1){
        if(arrLeft[i] === arrRight[j]){
            union.push(arrLeft[i])
            i++;
            j++;
        }else if(arrLeft[i] >  arrRight[j]){
            union.push(arrRight[j]);
            j++;
        }else{
            // console.log(`left i:${i}, right i:${j}`);
            union.push(arrLeft[i]);
            i++;
        }
    }
    while(j <= arrRight.length - 1){
        union.push(arrRight[j]);
        ++j;
    }
    return union;
}

console.log(unionSorted([2,4,7,9,10],[2,3,5,7,9,10]));
// console.log(unionSorted([1,2,2,2,7],[2,2,6,6,7]));
// console.log(unionSorted([1,5,9],[2,6,10]));

//return a new unsorted union multiset of two arrays
//essentially same as yesterday but your input is unsorted
//don't just sort the arrays, then do a union!
//[2,7,2,1,2], [6,7,2,7,6,2] returns [7,2,7,2,2,1,6,6]
//(or a different combination of the same numbers, since it's unsorted)

const unionUnsorted = (leftArr,rightArr) => {
}

// console.log(unionUnsorted([2,7,2,1,2], [6,7,2,7,6,2]));
// console.log(unionUnsorted([2,1,10,7,9],[3,10,2,7,9,5,2]));
// console.log(unionUnsorted([2,2,7,1,2],[2,2,6,7,6]));