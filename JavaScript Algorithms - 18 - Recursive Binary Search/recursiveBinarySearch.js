/**
 
    Binary search

Problem - Given sorte array of 'n' elements and a target element 't', find the index of 't' in the array. Return -1 if target element is not found.

arr = [-5, 2, 4, 6, 10], t = 10 -> Should return 4
arr = [-5, 2, 4, 6, 10], t = 6 -> Should return 3
arr = [-5, 2, 4, 6, 10], t = 20 -> Should return -1

 */


//  WRONG SOLUTION-------------
// function recursiveBinarySearch(arr, target) {

//     let firstIndex = 0
//     let lastIndex = arr.length
//     let middleIndex = Math.floor((lastIndex+firstIndex)/2)
        
//     if(target === arr[middleIndex]) {
//         return middleIndex
//     }

//     if(target < arr[middleIndex] && target >= arr[firstIndex]) {
//         return recursiveBinarySearch(arr.slice(firstIndex, middleIndex), target)
//     }

//     if(target > arr[middleIndex] && target <= arr[lastIndex]) {
//         return middleIndex + recursiveBinarySearch(arr.slice(middleIndex, lastIndex), target)
//     }

//     return -1
// }

// console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 4));
// console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 2));
// console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 6));



//  CORRECT SOLUTION

// function recursiveBinarySearch(arr, target) {
//     return search(arr, target, 0, arr.length - 1)
// }

// function search(arr, target, leftIndex, rightIndex) {
//     if (leftIndex > rightIndex) {
//         return -1
//     }

//     let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
//     if (target === arr[middleIndex]) {
//         return middleIndex
//     }

//     if (target < arr[middleIndex]) {
//         return search(arr, target, leftIndex, middleIndex - 1)
//     } else {
//         return search(arr, target, middleIndex + 1, rightIndex)
//     }
// }

// console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 6));
// console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 10));
// console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 20));



// ANOTHER APPROACH

function recursiveBinarySearch(arr, target) {
    return search(arr, target, head = 0, tail = arr.length - 1)
}

function search(arr, target, head, tail) {
    if (head > tail) {
        return -1
    }

    const stomach = Math.floor((head + tail)/2)
    if (target === arr[stomach]) {
        return stomach
    }

    return (target > arr[stomach]) ? search(arr, target, stomach + 1, tail)  : search(arr, target, head, stomach - 1)
}

console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 6));
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 10));
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 20));


// Big-O = O(logn)