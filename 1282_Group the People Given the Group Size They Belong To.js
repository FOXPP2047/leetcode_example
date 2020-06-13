/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    const size = groupSizes.length;
    const result = [];
    
    let groups = {};
    
    
    for(let i=0; i < size; ++i){
        let current = groupSizes[i];
        
        if(!groups[current]){
            groups[current] = [i];
        }else{
            groups[groupSizes[i]].push(i);
        }
        
        if(groups[current].length === current) {
            result.push(groups[current]);
            groups[current] = [];
        }
    }
    
    return result;
};