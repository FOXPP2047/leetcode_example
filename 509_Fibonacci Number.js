/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
    if(N === 0) return 0;
    else if(N === 1) return 1;
    
    return fib(N - 1) + fib(N - 2);
};

/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
    if(N < 2) return N;
    
    let a = 0, b = 1, c = 0;
    
    for(let i = 1; i < N; ++i) {
        c = a + b;
        a = b;
        b = c;
    }
    
    return c;
};