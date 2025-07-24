/*

    Power of Two

Problem - Give a positive integer 'n', determine if the number is a power of 2 or not
An integer is a power of two if there exists an integer 'x' such that n
isPowerOfTwo(1) = true (2 power(0))
isPowerOfTwo(2) = true (2 power(1))
isPowerOfTwo(5) = false

*/

function isPowerOfTwoBitWise(n) {
    if(n < 1) {
        return false
    }
    return (n & (n-1)) === 0
}

console.log(isPowerOfTwoBitWise(1));
console.log(isPowerOfTwoBitWise(4));
console.log(isPowerOfTwoBitWise(5));

//  Big O = O(1)


// function isPowerOfTwo(n) {
//     if(n < 1) {
//         return false
//     }
//     while(n > 1) {
//         if(n%2 !== 0) {
//             return false
//         }
//         n =n/2
//     }
//     return true
// }

// console.log(isPowerOfTwo(1));  // true
// console.log(isPowerOfTwo(2));  // true
// console.log(isPowerOfTwo(5));  // false

// Big O = O(logn)