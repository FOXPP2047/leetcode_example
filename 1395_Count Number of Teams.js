/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function(rating) {
    if(rating.length < 3) return 0;
    let result = 0;
    const size = rating.length;
    
    let greaterThan = new Array(size).fill(0);
    let lessThan = new Array(size).fill(0);

    for(let i = 0; i < size; ++i) {
        for(let j = i + 1; j < size; ++j) {
            if(rating[j] > rating[i]) {
                ++greaterThan[i];
            } else if(rating[j] < rating[i]) {
                ++lessThan[i];
            }
        }
    }
    
    for(let i = 0; i < size - 2; ++i) {
        for(let j = i + 1; j < size; ++j) {
            if(rating[j] > rating[i]) {
                result += greaterThan[j];
            } else if(rating[j] < rating[i]) {
                result += lessThan[j];
            }
        }
    }

    return result;    
};