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

// examples
console.log( fibonacci(1) );   // 1
console.log( fibonacci(2) );   // 1
console.log( fibonacci(3) );   // 2
console.log( fibonacci(4) );   // 3
console.log( fibonacci(9) );   // 34