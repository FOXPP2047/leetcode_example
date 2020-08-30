/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    
    const size = gas.length;
    let tank = 0;
    let curr = 0;
    let index = false;
    
    for(let i = 0; i < size; ++i) {
        let amount = gas[i];
        let spend = cost[i];
        if(curr + amount - spend > 0) {
            if(!index) index = i;
            curr += (amount - spend);
        } else {
            index = false;
            curr = 0;
        }
        tank += (amount - spend);
    }
    return (tank > -1 ? index : -1);
};