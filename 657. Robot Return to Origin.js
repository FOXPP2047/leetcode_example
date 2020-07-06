/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let pos = [0, 0];
    
    for(let i = 0; i < moves.length; ++i) {
        let char = moves.charAt(i);
        if(char === "U") {
            pos[0] += 1;
        } else if(char === "D") {
            pos[0] -= 1;
        } else if(char === "L") {
            pos[1] -= 1;
        } else if(char === "R") {
            pos[1] += 1;
        }
    }
    
    if(pos[0] === 0 && pos[1] === 0)
        return true;
    else return false;
};