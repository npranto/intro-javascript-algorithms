/**
 * Returns all prime numbers up to target in an array
 * @param target <Integer>
 * @returns <Array>
 */

let sieveOfEratosthenes = (target) => {

    let isPrime = (num) => {
        if (num <= 1) {
            return false;
        }
        if (num === 2) {
            return true;
        }
        if ((num > 2) && (num % 2 === 0)) {
            return false;
        }
        for(let i=3; i<=Math.floor(num/2); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }

    let primeNumbers = [];
    let counter = 1;

    while(counter <= target) {
        if (isPrime(counter)) {
            primeNumbers.push(counter);
        }
        counter++;
    }

    return primeNumbers;

}

// examples
console.log( sieveOfEratosthenes(20) );
console.log( sieveOfEratosthenes(50) )