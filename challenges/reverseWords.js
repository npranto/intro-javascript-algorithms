/**
 *
 * @param str <String>
 * @returns <String>
 */

let reverseWords = (str) => {
    return str
        .split(' ')
        .map((word) => {
            return word
                .trim()
                .split('')
                .reverse()
                .join('');
        })
        .filter((word) => {
            return word.length > 0;
        })
        .join(' ');
}

// examples
console.log( reverseWords('this is a string of words') );   // ''