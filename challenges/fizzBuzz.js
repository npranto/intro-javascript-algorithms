/**
 * Print all numbers from 1 to num.
 * If a num is divisible by 3, print 'Fizz,' instead of that num.
 * If a num is divisible by 5, print 'Buzz,' instead of that num.
 * If a num is divisible by 3 and 5, print 'FizzBuzz,' instead of that num.
 * @param num <Integer>
 * @returns N/A
 */
let fizzBuzz = num => {

    let counter = 1;

    const FIZZ_BUZZ = 'FizzBuzz';
    const FIZZ = 'Fizz';
    const BUZZ = 'Buzz';

    while (counter <= num) {
        if ((counter % 3 === 0) && (counter % 5 === 0)) {
            console.log(FIZZ_BUZZ);
        } else if (counter % 3 === 0) {
            console.log(FIZZ);
        } else if (counter % 5 === 0) {
            console.log(BUZZ);
        } else {
            console.log(counter);
        }
        counter++;
    }

}

// examples

fizzBuzz(20);
// prints
/*
    1
    2
    Fizz
    4
    Buzz
    Fizz
    7
    8
    Fizz
    Buzz
    11
    Fizz
    13
    14
    FizzBuzz
    16
    17
    Fizz
    19
    Buzz
*/

fizzBuzz(5);
// prints
/*
    1
    2
    Fizz
    4
    Buzz
*/

