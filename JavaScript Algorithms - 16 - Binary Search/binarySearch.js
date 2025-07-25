/**
 
    Binary search

Problem - Given sorte array of 'n' elements and a target element 't', find the index of 't' in the array. Return -1 if target element is not found.

arr = [-5, 2, 4, 6, 10], t = 10 -> Should return 4
arr = [-5, 2, 4, 6, 10], t = 6 -> Should return 3
arr = [-5, 2, 4, 6, 10], t = 20 -> Should return -1

 */

// function binarySearch(arr, target) {

//     const middleIndex = Math.floor((arr.length-1) / 2);

//     if (arr[middleIndex] === target) {
//         return middleIndex
//     } else if (target < arr[middleIndex]) {
//         for(let i = 0; i < middleIndex; i++) {
//             if( target === arr[i] ) {
//                 return i
//             }
//         }
//         return -1
//     } else if (target > arr[middleIndex]) {
//         for(let i = middleIndex; i < arr.length; i++) {
//             if( target === arr[i] ) {
//                 return i
//             }
//         }
//         return -1
//     }

// }

// console.log(binarySearch([-5, 2, 4, 6, 10], 10));
// console.log(binarySearch([-5, 2, 4, 6, 10], 6));
// console.log(binarySearch([-5, 2, 4, 6, 10], 20));



function binarySearch(arr, target) {
    let leftIndex = 0
    let RightIndex = arr.length-1

    while(leftIndex <= RightIndex) {
        let middleIndex = Math.floor((leftIndex + RightIndex) / 2)
        if(target === arr[middleIndex]) {
            return middleIndex;
        }
        if(target < arr[middleIndex]) {
            RightIndex = middleIndex - 1
        } else {
            leftIndex = middleIndex + 1
        }
    }
    return -1
}

console.log(binarySearch([-5, 2, 4, 6, 10], 10));
console.log(binarySearch([-5, 2, 4, 6, 10], 6));
console.log(binarySearch([-5, 2, 4, 6, 10], 20));
