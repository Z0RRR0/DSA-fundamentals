/**
 
    Recursive factorial of a number

Problem - Give an integer 'n', find the factorial of that integer

The factorial of a non-negative integer 'n', denoted n!, is the product of all positive integers less than or equal to 'n'.

Factorial Of zero is 1.
factorial(4) = 4*3*2*1 = 24
factorial(5) = = 120

 */

function recursiveFactorial(n) {
    if ( n < 1 ) {
        return 1
    }
    return recursiveFactorial(n-1) * n
}

console.log(recursiveFactorial(0));
console.log(recursiveFactorial(1));
console.log(recursiveFactorial(5));

// Big-O = O(n)