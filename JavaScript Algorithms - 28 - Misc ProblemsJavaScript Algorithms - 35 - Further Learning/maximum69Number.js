// var maximum69Number  = function(num) {
//     let result = num
//     let length = num.toString().split('').length
//     for (let i = 0; i < length; i++) {
//         let numStr = num.toString().split('')
        
//         numStr[i] == 6 ? numStr[i] = 9 : numStr[i] = 6
//         numStr = numStr.join('')

//         Number(numStr) > result ? result = Number(numStr) : result = result        
//     }

//     return result
// };

var maximum69Number = function(num) {
    let numStr = num.toString().split('');

    for (let i = 0; i < numStr.length; i++) {
        if (numStr[i] === '6') {
            numStr[i] = '9';
            break;  // stop after the first change
        }
    }

    return Number(numStr.join(''));
};

console.log(maximum69Number(9669))
console.log(maximum69Number(9996))
console.log(maximum69Number(9999))