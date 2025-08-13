//  function climbingStaircase(n) {
//     if ( n <= 2) return n;

//     return climbingStaircase(n - 1) + climbingStaircase(n - 2);
//  }

//  console.log(climbingStaircase(5)); // Output: 8
//  console.log(climbingStaircase(6)); // Output: 13


var climbStairs = function(n) {
    const noOfWays = [1, 2]
    for(let i = 2; i <= n; i++){
        noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2]
    }

    return noOfWays[n - 1]
};

console.log(climbStairs(1)); // Output: 1
console.log(climbStairs(2)); // Output: 2
console.log(climbStairs(5)); // Output: 8

// Big-O = O(n)
// Space Complexity = O(n) Where n is the number of steps in the staircase