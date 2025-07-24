/*
Factorial of a number
Problem - Give an integer find the factorial of that integer
In mathematics, the factorial of a non-negative integer denoted n!, is the product of all
positive integers less than or equal to 'n'.
Factorial of zero is I.
factorial(4) = = 24
factorial(S) = = 120
*/

// my code
function factorial(n) {
    let fact = 1;
    for(let i = 0; i < n; i++) {
        fact *= (n-i)
    }
    console.log(fact)
}

factorial(5)
factorial(1)
factorial(0)



// tutorial guy code
function factorial1 (n){

    let result = 1
    for(let i = 2; i<=n; i++) {
        result = result * i
    }
    return result
}

console . log (factorial1 (0) )
console . log (factorial1 (1) )
console . log (factorial1 (5) )

 // Big-O = O(n)