/**
*
*  @param numArray <Array>
*  @param sum <Integer>
*  @returns <Array> 
*/
let twoSum = (numArray, sum) => {

	let sumPairs = [];
	let pairValuesAlreadyUsed = {};

	numArray.forEach((outerLayer) => {
		numArray.forEach((innerLayer) => {
			if (
				(innerLayer + outerLayer === sum) && 
				(!pairValuesAlreadyUsed[outerLayer]) && 
				(!pairValuesAlreadyUsed[innerLayer])
			) {
				pairValuesAlreadyUsed[outerLayer] = true;
				pairValuesAlreadyUsed[innerLayer] = true;
				sumPairs.push([outerLayer, innerLayer]);
			}
		})		
	})

	return sumPairs;

}

// examples
console.log( twoSum([1,6,4,5,3,3], 7) )	//[ [ 1, 6 ], [ 6, 1 ], [ 4, 3 ], [ 4, 3 ], [ 3, 4 ], [ 3, 4 ] ]