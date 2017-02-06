"use strict";
const promises_1 = require('./promises');
function any(promises) {
    return new Promise(resolve => {
        const values = [];
        let max = promises.length;
        promises.forEach((currentPromise, index) => {
            const onResult = (value) => {
                values[index] = value;
                if (--max <= 0) {
                    resolve(values);
                }
            };
            if (!(currentPromise instanceof Promise)) {
                return onResult(currentPromise);
            }
            currentPromise.then(onResult, onResult);
        });
    });
}
const promise1 = promises_1.randomPromise();
const promise2 = promises_1.randomPromise();
const promise3 = promises_1.randomPromise();
any([promise1, promise2, promise3])
    .then(values => {
    console.log(values);
});
