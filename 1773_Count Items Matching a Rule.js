/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    const size = items.length;
    let result = 0;
    for(let i = 0; i < size; ++i) {
        if(ruleKey === "type") {
            if(items[i][0] === ruleValue) {
                ++result;
            }
        } else if(ruleKey === "color") {
            if(items[i][1] === ruleValue) {
                ++result;
            }
        } else if(ruleKey === "name") {
            if(items[i][2] === ruleValue) {
                ++result;
            }
        }
    }
    return result;
};