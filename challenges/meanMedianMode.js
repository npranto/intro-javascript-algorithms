/**
 * @param arr <Array>
 * @returns <Object>
 */

let meanMedianMode = (arr) => {
    let findMean = (arr) => {
        return (arr.reduce((total, curr) => {
            return total + curr;
        }, 0)) / arr.length;
    }
    let findMedian = (arr) => {
        let sorted =  arr.sort((prev, curr) => {
            return prev - curr;
        })
        let hasEvenNumberOfValues = (arr.length % 2) === 0;
        return !hasEvenNumberOfValues
            ? arr[Math.floor(arr.length/2)]
            : (arr[arr.length/2] + arr[(arr.length/2) - 1]) / 2
    }
    let findMode = (arr) => {
        let itemFrequency = arr.reduce((accum, curr) => {
            if (!accum[curr]) {
                accum[curr] = 0;
            }
            accum[curr] += 1;
            return accum;
        }, {});

        let maxFreqs = 1;
        let mode = null;

        for (let key in itemFrequency) {
            if (itemFrequency[key] > maxFreqs) {
                maxFreqs = itemFrequency[key];
                mode = parseInt(key);
            }
        }
        return mode;
    }

    return {
        mean: findMean(arr),
        median: findMedian(arr),
        mode: findMode(arr)
    }

}

// examples
console.log( meanMedianMode([1,2,3,4,5,5,6,6,6]) );
console.log( meanMedianMode([1,2,3,4,5]) );