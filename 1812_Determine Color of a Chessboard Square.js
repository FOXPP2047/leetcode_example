/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(coordinates) {
    let row = coordinates.charCodeAt(0) - 96;
    let col = parseInt(coordinates[1]);
    
    let bool_row = row % 2 == 0 ? true : false;
    let bool_col = col % 2 == 0 ? true : false;
    
    if(bool_row === bool_col) {
        return false;
    }
    return true;
};