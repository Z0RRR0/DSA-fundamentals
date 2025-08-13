// function gcd(a, b) {
//     let arr = []
//     let i = 1
//     while( i <= a && i <= b) {
//         if (a % i === 0 && b % i === 0) {
//             arr.push(i)
//         }
//         i++
//     }
//     return arr[arr.length - 1]
// }


// function gcd(a, b) {
//     let result = 0
//     for (let i = 0; i <= a && i <= b; i++) {
//         (a % i === 0 && b % i === 0) ? result = i : null
//     }
//     return result
// }

// console.log(gcd(14, 21))


// var findGCD = function(nums) {
//     for(let i = 1; i < nums.length; i++) {
//         let numberToInsert = nums[i]
//         let j = i-1
//         while (j >= 0 && nums[j] > numberToInsert) {
//             nums[j+1] = nums[j]
//             j = j-1
//         }
//         nums[j+1] = numberToInsert
//     }
//     let a = nums.at(0)
//     let b = nums.at(-1)

//     let result = 0
//     for (let i = 0; i <= a && i <= b; i++) {
//         (a % i === 0 && b % i === 0) ? result = i : null
//     }
//     return result
    
// };


var findGCD = function(nums) {
    let minNum = Infinity
    let maxNum = -Infinity

    for(let num of nums) {
        if (num > maxNum) maxNum = num
        if (num < minNum) minNum = num
    }

    const gcd = (x, y) => y === 0 ? x : gcd(y, x % y)

    return gcd(minNum, maxNum)

}

console.log(findGCD([2,5,6,9,10]))
console.log(findGCD([7,5,6,8,3]))