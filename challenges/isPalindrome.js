/**
 * Checks to see if str is palindrome(spells the same in both front and back directions) or not
 * @param str <String>
 * @returns <Boolean>
 */
let isPalindrome = (str) => {
    let originalWord = str
                        .toLowerCase()
                        .split('')
                        .filter((char) => {
                            return (char.length === 1) && (char.toLowerCase().match(/[a-z]/i));
                        })
    return originalWord.join('') === originalWord.reverse().join('');
}

// example
let isPalindromeSample1 = 'race car';
let isPalindromeSample2 = 'Madam, I\'m Adam';
console.log( isPalindrome(isPalindromeSample1) );
console.log( isPalindrome(isPalindromeSample2) );

