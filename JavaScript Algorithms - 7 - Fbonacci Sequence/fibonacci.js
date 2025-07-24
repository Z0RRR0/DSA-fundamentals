// Give a number 'n', find the first 'n' elements of the Fibonacci sequence
// Input -> n=5, Output -> 0,1,1,2,3

/* My Code */
// let n = 5
// let num = 1
// let prev = 0
// console.log(prev);
// console.log(num);

// for (i = 2; i < n; i++) {
    
//     num = num + prev
//     console.log(num);
//     prev = num - prev
// }




/* Correct Code */
function fibonacci(n) {
    const fib = [0, 1]
    for(i = 2; i < n; i++) {
        fib.push(fib[i-1] + fib[i-2])
    }
    return fib
}

console.log(fibonacci(2))
console.log(fibonacci(3))
console.log(fibonacci(7))

// Big-O = O(n)