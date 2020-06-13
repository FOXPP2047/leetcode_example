/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    const jewels = [];
    let spiltJ = J.split("");
    
    spiltJ.forEach(e => {
        jewels.push(e);
    });
    
    let splitS = S.split("");
    let result = 0;
    
    splitS.forEach(e =>  {
        if(jewels.includes(e)) {
            result++;
        }
    });
    return result;
};

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    let jewels = new Set(J)
    let spiltJ = J.split("");
    
    spiltJ.forEach(e => {
        jewels.add(e);
    });
    
    let splitS = S.split("");
    let result = 0;
    
    splitS.forEach(e =>  {
        if(jewels.has(e)) {
            result++;
        }
    });
    return result;
};