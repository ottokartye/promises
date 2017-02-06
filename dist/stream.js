"use strict";
const promises_1 = require('./promises');
/**
 * Creates an array and marks
 * each element as undefined.
 *
 * @param {number} max
 * @returns
 */
function initValues(max) {
    let values = [];
    for (let i = 0; i < max; i++) {
        values[i] = undefined;
    }
    return values;
}
/**
 * Resolve each passed promise and execute the passed
 * callback after each resolve/rejected promise.
 *
 * @param {((Promise<any> | any)[])} promises
 * @param {any} progressCallback
 * @returns {Promise<any>}
 */
function stream(promises, progressCallback) {
    return new Promise(resolve => {
        const max = promises.length;
        // Mark all elements of the array as undefined
        let values = initValues(max);
        promises.forEach((currentPromise, index) => {
            const store = (value) => {
                values[index] = value;
                if (index >= max - 1) {
                    resolve(values);
                }
                progressCallback(values, index);
            };
            currentPromise
                .then(store, store);
        });
    });
}
const promise1 = promises_1.randomPromise();
const promise2 = promises_1.randomPromise();
const promise3 = promises_1.randomPromise();
/**
 * The function to be executed after
 * each resolved/rejected promise.
 *
 * @param {any} values
 * @param {any} index
 */
function progress(values, index) {
    console.log(index, ': ', values);
}
;
stream([promise1, promise2, promise3], progress).then(values => {
    console.log('Final result: ', values);
});
