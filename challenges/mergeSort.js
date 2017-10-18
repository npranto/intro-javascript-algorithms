/**
 * Sorts an array of elements using merge sort algorithm
 * @param arr <Array>
 * @returns <Array>
 */

let mergeSort = (arr) => {
    if (arr.length < 2) {
        return arr;
    }
    let midIndex = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, midIndex));
    let right = mergeSort(arr.slice(midIndex));
    return merge(left, right);
}

let merge = (arr1, arr2) => {
    let bothMerged = [];
    while ((arr1.length !== 0) && (arr2.length !== 0)) {
        let lesser = (arr1[0] < arr2[0]) ? arr1.shift() : arr2.shift();
        bothMerged.push(lesser);
    }
    (arr1 > arr2)
        ? bothMerged.push(...arr1)
        : (arr2 > arr1)
            ? bothMerged.push(...arr2)
            : null;
    return bothMerged;
}

// example
console.log( mergeSort([1,2,3,4,5]) );
console.log( mergeSort([5,9,2,5,0,54,-2,-37,10,1]) );
console.log( mergeSort([5,3,8,2,1,4]) );
