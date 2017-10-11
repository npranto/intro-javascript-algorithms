/**
 * Check to see if a note text is a randon note of magazine text
 * @param noteText <String>
 * @param magazineText <String>
 * @returns <Boolean>
 */
let harmlessRansonNote = (noteText, magazineText) => {

    let noteTextToWords = noteText.toLowerCase().split(' ');
    let magazineTextToWords = magazineText.toLowerCase().split(' ');
    let magazineTextWordsOccurances = {};

    // keeps track of magazine text word occurances
    magazineTextToWords.forEach((currentWord) => {
        if (!magazineTextWordsOccurances.hasOwnProperty(currentWord)) {
            magazineTextWordsOccurances[currentWord] = 0;
        };
        magazineTextWordsOccurances[currentWord] += 1;
    })

    console.log(magazineTextWordsOccurances);

    return noteTextToWords.every((currentWord) => {
        if (!magazineTextWordsOccurances.hasOwnProperty(currentWord) || !(magazineTextWordsOccurances[currentWord] > 0)) {
            return false;
        }
        magazineTextWordsOccurances[currentWord] += 1;
        return true;
    })
}

// example
let noteTextSample = 'This is a secret note for you from a secret admirer';
let magazineTextSample = 'puerto rico is a great place you must hike far from town to find a secret waterfall that i am an admirer of but note that it is not as hard as it seems this is my advice for you';
console.log( harmlessRansonNote(noteTextSample, magazineTextSample) );
