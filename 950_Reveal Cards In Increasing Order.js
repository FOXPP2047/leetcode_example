/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function(deck) {
    deck.sort((a, b) => a - b);
    const result = [];
    
    while (deck.length) {
        result.unshift(deck.pop());
        result.unshift(result.pop());
    }
    result.push(result.shift());
    return result;
};