'use strict';

function createLogger(prefix) {
    return function strLogger(message) {
        return console.log(`${prefix}: ${message}`);
    }
}

const authLogger = createLogger('AUTH');
const apiLogger = createLogger('API');
authLogger('User logged in'); 
apiLogger('Request failed');


function createLimiter(limit) {
    let limitCounter = 0;
    return function() {
        if (!Number.isFinite(limit) || limit < 0) return 'Invalid date';
        while (limitCounter < limit) {
            limitCounter++;
            return 'Ok';
        }
        return 'Error';
    }
}

console.log('---------------');
const limited = createLimiter(2);
console.log(limited()); 
console.log(limited()); 
console.log(limited()); 