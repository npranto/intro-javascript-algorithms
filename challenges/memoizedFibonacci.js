/**
 *
 * @param index <Integer>
 * @param cache <Array>
 * @returns <Integer>
 */
let memoizedFibonacci = (index, cache) => {

    cache = cache || [];

    if ((index <= 2) && cache[index]) {
        return cache[index];
    } else {
        if (index <= 2) {
            return 1;
        } else {
            cache[index] = memoizedFibonacci(index - 1, cache) + memoizedFibonacci(index - 2, cache);
        }
    }
    return cache[index];

}

// examples
console.log( memoizedFibonacci(1) );   // 1
console.log( memoizedFibonacci(2) );   // 1
console.log( memoizedFibonacci(3) );   // 2
console.log( memoizedFibonacci(4) );   // 3
console.log( memoizedFibonacci(9) );   // 34
console.log( memoizedFibonacci(12) );   // 144
