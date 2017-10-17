/**
*
*  @param numArray <Array>
*  @param searchItem <Integer>
*  @returns <Integer> 
*/
let binarySearch = (numArray, searchItem) => {

	let midIndex = Math.floor(numArray.length/2);

	if (numArray[midIndex] === searchItem) {
		return true;
	} else if (numArray[midIndex] > searchItem) {
		return binarySearch(numArray.slice(0, midIndex), searchItem);
	} else if (numArray[midIndex] < searchItem) {
		return binarySearch(numArray.slice(midIndex + 1, numArray.length), searchItem);
	}

	return false;
	
}

// examples
console.log( binarySearch([1,2,4,5,7,9,10], 7) )	// true
console.log( binarySearch([1,2,4,5,7,9,10], 11) )	// false

