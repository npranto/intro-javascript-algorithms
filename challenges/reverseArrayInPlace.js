/**
 *
 * @param arr <Array>
 * @returns <Array>
 */

let reverseArrayInPlace = (arr) => {
    for (let left = 0, right = arr.length-1; left < right; left++, right--) {
        let rightValue = arr[right];
        arr[right] = arr[left];
        arr[left] = rightValue;
    }
    return arr;
}

// examples
console.log( reverseArrayInPlace([1,2,3,4,5]) );
console.log( reverseArrayInPlace(['a', 'b', 'c', 'd', 'e']) )