// function insertionSort(arr) {
//     for( let i = 1; i < arr.length; i++) {
//         let j = i
//         let numberToInsert = arr[j]
//         while(numberToInsert < arr[j-1]) {
//             arr[j] = arr[j-1]
//             arr[j-1] = numberToInsert
//             j--;
//         }
//     }
//     return arr
// }


function insertionSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        let numberToInsert = arr[i];
        let j = i - 1
        while(j >= 0 && arr[j] > numberToInsert) {
            arr[j+1] = arr[j]
            j = j - 1
        }
        arr[j+1] = numberToInsert
    }
    return arr
}

console.log(insertionSort([-6, 20, 8, -2, 4]));

//Big-O = O(n^2)
