/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    const size = prices.length;
    for(let i = 0; i < size; ++i) {
        for(let j = i + 1; j < size; ++j) {
            if(prices[i] - prices[j] >= 0) {
                prices[i] = prices[i] - prices[j];
                break;
            }
        }
    }
    return prices;
};