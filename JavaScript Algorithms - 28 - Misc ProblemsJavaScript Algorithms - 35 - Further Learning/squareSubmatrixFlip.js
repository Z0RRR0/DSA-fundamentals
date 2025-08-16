var reverseSubmatrix = function(grid, x, y, k) {
    
    let rowToReverse = grid.slice(x,x+k).map(row => row.slice(y,y+k)).reverse()

    let isSquareMatrix = true
    rowToReverse.length === rowToReverse[0].length ? isSquareMatrix : isSquareMatrix = false

    if(isSquareMatrix) {
        for(let i = 0; i < rowToReverse.length; i++) {
            for(let j = 0; j < rowToReverse.length; j++) {
                grid[x + i][y + j] = rowToReverse[i][j] 
            }
        }
    }

    return grid

};

// console.log(reverseSubmatrix([[3,4,2,3],[2,3,4,2]], x = 0, y = 2, k = 2))
// console.log(reverseSubmatrix([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]], x = 1, y = 0, k = 3))
// console.log(reverseSubmatrix([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]], x = 1, y = 1, k = 1))
// console.log(reverseSubmatrix([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]], x = 0, y = 1, k = 3))
console.log(reverseSubmatrix([[6,16,14],[1,2,19],[14,17,15],[18,7,6],[14,12,5]], x = 2, y = 1, k = 2))