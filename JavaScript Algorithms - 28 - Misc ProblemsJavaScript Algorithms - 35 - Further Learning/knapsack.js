function knapsack(weights, values, capacity) {
    const n = weights.length
    const dp = Array.from({length: n + 1}, () => Array(capacity+1).fill(0));

    for (let i = 1; i <= n; i++) {
        for(let w = 0; w <= capacity; w++) {
            if(weights[i - 1] <= w) {
                dp[i][w] = Math.max(
                    values[i - 1] + dp[i - 1][w - weights[i - 1]],
                    dp[i - 1] [w]
                )
            } else {
                dp[i][w] = dp[i - 1][w]        
            }
        }
    }
    return dp[n][capacity];
}

const weights = [1,2,3];
const values = [10, 15, 40];
const capacity = 5;

console.log(knapsack(weights, values, capacity))