/**
 *
 * @param position <Integer>
 * @returns <Integer>
 */

let fibonacci = (position) => {

    let fibbs = [];

    while(position > 0) {
        if (fibbs.length === 0) {
            fibbs.push(1);
        } else {
            let nextFibb;
            if (fibbs.length === 1) {
                nextFibb = fibbs[fibbs.length - 1];
            } else {
                nextFibb = fibbs[fibbs.length - 1] + fibbs[fibbs.length - 2];
            }
            fibbs.push(nextFibb);
        }
        position--;
    }
    return fibbs[fibbs.length - 1];
}

// simpler with recursion
let fibonacciRecursion = (position) => {
    if (position <= 2) {
        return 1;
    } else {
        return fibonacciRecursion(position - 1) + fibonacciRecursion(position - 2);
    }
}

// examples
console.log( fibonacci(1) );   // 1
console.log( fibonacci(2) );   // 1
console.log( fibonacci(3) );   // 2
console.log( fibonacci(4) );   // 3
console.log( fibonacci(9) );   // 34
console.log( fibonacciRecursion(9) );   // 34