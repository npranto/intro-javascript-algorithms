/**
 * Sorts an array of elements using bubble sort algorithm
 * @param arr <Array>
 * @returns <Array>
 */

let bubbleSort = (arr) => {

    let swapValues = (current, next, currentIndex, arr) => {
        arr[currentIndex] = next;
        arr[currentIndex+1] = current;
    }

    for(let j=arr.length-1; j>=0; j--) {
        for(let i=0; i<j; i++) {
            let current = arr[i];
            let next = arr[i+1];
            if (current > next) {
                swapValues(current, next, i, arr);
            }
        }
    }
    return arr;

}

// example
console.log( bubbleSort([1,2,3,4,5]) );
console.log( bubbleSort([5,9,2,5,0,54,-2,-37,10,1]) );
console.log( bubbleSort([5,3,8,2,1,4]) );
