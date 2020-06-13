/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const size = candies.length;
    let greatestNum = 0;
    for(let i = 0 ; i < size; ++i) {
        if(greatestNum < candies[i]) {
            greatestNum = candies[i];
        }
    }
    const result = [];
    for(let i = 0; i < size; ++i) {
        if(candies[i] + extraCandies >= greatestNum) {
            result[i] = true;
        } else result[i] = false;
    }
    return result;
};

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const max = Math.max(...candies);
    const result = candies.map((candy) => candy + extraCandies >= max);
    return result;
};