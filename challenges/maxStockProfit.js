/**
 * Find the max stock profit for an array of stocks
 * @param arr <Array>
 * @returns <Integer>
 */

let maxStockProfit = (arr) => {
    if (arr.length < 2) return arr;
    else {
        let buyAt = arr[0];
        let sellAt = arr[arr.length-1];
        arr.forEach((currPrice) => {
            if (currPrice < buyAt) {
                buyAt = currPrice;
            }
            if (currPrice > sellAt) {
                sellAt = currPrice;
            }
        })
        return sellAt - buyAt;
    }
}

// examples
console.log( maxStockProfit([32, 46, 26, 38, 40, 48, 42]) ); // 22