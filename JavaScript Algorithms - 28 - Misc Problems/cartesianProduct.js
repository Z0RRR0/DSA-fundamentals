function cartesianProduct(arr1, arr2) {
    const result = [];
    for (let i = 0; i < arr1.length; i++) {
        for  (let j = 0; j < arr2.length; j++) {
            result.push([arr1[i], arr2[j]]);
        }
    }
    return result
}

console.log(cartesianProduct([1, 2], [3, 4])); // [[1, 3], [1, 4], [2, 3], [2, 4]]

// Big-O = O(n * m) where n is the length of arr1 and m is the length of arr2
// Space Complexity = O(n * m) for the result array 