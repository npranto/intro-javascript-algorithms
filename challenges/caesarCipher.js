/**
 *
 * @param str <String>
 * @param shifter <Integer>
 * @returns <String
 */
let caesarCipher = (str, shifter) => {

    const STARTING_CODE = 65;
    const TOTAL_ALPHABETS = 26;

    let isLetter = (char) => {
        return (char.length === 1) && (char.toLowerCase().match(/[a-z]/i))
    }

    let shiftCharacter = (char, shiftBy) => {
        let isAnUpperCaseLetter = ((char.charCodeAt(0) >=65) && (char.charCodeAt(0) <= 90)) ? true : false;
        let newLetter = String.fromCharCode((((char.toUpperCase().charCodeAt(0) + shiftBy) - STARTING_CODE) % TOTAL_ALPHABETS) + STARTING_CODE);
        return isAnUpperCaseLetter ? newLetter : newLetter.toLowerCase();
    }

    let adjustShifter = (shiftBy, numberOfAlphabets) => {
        return (shiftBy < 0)
            ? numberOfAlphabets + (shiftBy % numberOfAlphabets)
            : shiftBy
    }

    let adjustedShifter = adjustShifter(shifter, TOTAL_ALPHABETS);
    console.log(adjustedShifter);

    return str
        .split('')
        .map((char) => {
            if (isLetter(char)) {
                return shiftCharacter(char, adjustedShifter);
            } else {
                return char;
            }
        })
        .join('');

}

// example
console.log( caesarCipher('zoo keeper', 2) ); // 'bqq mggrgt'
console.log( caesarCipher('zoO keePer a', -80) ); // 'xmM iccNcp y'

