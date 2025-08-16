var largestGoodInteger = function(num) {
    let n = num.length
    let lstr = '';
    let maxNumber = -Infinity
    for ( let i = 1; i < num.length - 1; i++) {
        if(num[i-1] == num[i] && num[i] == num[i+1]) {
            if(maxNumber < +num[i]) {
                maxNumber = +num[i]
                lstr = num[i].repeat(3);
            }
        } 
    }
    return lstr;
};
console.log(largestGoodInteger("6777133342"))