/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const size = prices.length;
    let result = -Number.MAX_VALUE;
    for(let i = 0; i < size; ++i) {
        let buyPrice = prices[i];
        for(let j = i + 1; j < size; ++j) {
            if(result < prices[j] - buyPrice) result = prices[j] - buyPrice;
        }
    }
    if(result < 0) result = 0;
    return result;
};

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let min = prices[0], max = 0;
    const size = prices.length;
    
    for(let i = 1; i < size; ++i) {
        if(prices[i] - min > max) max = prices[i] - min;
        if(prices[i] < min) min = prices[i];
    }
    
    return max;
};