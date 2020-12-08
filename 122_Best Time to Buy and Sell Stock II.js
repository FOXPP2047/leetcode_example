/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let i = 0;
    let valley = prices[0];
    let peak = prices[0];
    
    let maxProfit = 0;
    const size = prices.length;
    while(i < size - 1) {
        while(i < size - 1 && prices[i] >= prices[i + 1])
            ++i;
        valley = prices[i];
        while(i < size - 1 && prices[i] <= prices[i + 1])
            ++i;
        peak = prices[i];
        maxProfit += peak - valley;
    }
    return maxProfit;
};