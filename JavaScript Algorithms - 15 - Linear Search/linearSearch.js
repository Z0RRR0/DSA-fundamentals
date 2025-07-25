/**
    
    Linear search

Problem - Given an array Of 'n' elements and a target element 't', find the index Of 't' in the array. Return -1 if the target element is not found.

arr = [-5, 2, 10, 4, 6], t = 1O -> Should return 2
arr = [-5, 2, 10, 4, 61, t = 6 -> Should return 4
arr = [-5, 2, 10, 4, 61, t = 20 -> Should return -1

 */

// function getIndexOf(arr, t) {
//     let deadEnd = true;

//     for(let i = 0; i < arr.length; i++) {

//         if ( arr[i] === t ) {
//             deadEnd == true ? false : null
//             return i
//         }
//     }   
//     if (deadEnd == true) {
//         return -1
//     }
// }

// console.log(getIndexOf([1,2,3,4,5], 1));
// console.log(getIndexOf([1,2,3,4,5], 3));
// console.log(getIndexOf([1,2,3,4,5], 6));


function linearSearch(arr, target) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === target) {
            return i
        }
    }
    return -1
}

// Big-O = O(n)

console.log(linearSearch([-5, 2, 10, 4, 6], 10)); // 2
console.log(linearSearch([-5, 2, 10, 4, 6], 6)); // 4
console.log(linearSearch([-5, 2, 10, 4, 6], 20)); // -1


