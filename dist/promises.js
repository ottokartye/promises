"use strict";
/**
 * Returns a promise that will randomly
 * resolve a number or reject with false.
 *
 * @returns
 */
function randomPromise() {
    return new Promise((resolve, reject) => {
        const timeOut = setTimeout(() => {
            let number = Math.random();
            number = Math.round(number * 100) / 100;
            if (number > 0.2 && number < 0.8) {
                resolve(number);
            }
            else {
                reject(false);
            }
        }, 100);
    });
}
exports.randomPromise = randomPromise;
/**
 * Returns a simple promise.
 *
 * @param {any} shouldResolve
 * @returns true or false
 */
function returnAPromise(shouldResolve) {
    return new Promise((resolve, reject) => {
        if (shouldResolve) {
            resolve(true);
        }
        else {
            reject(false);
        }
    });
}
exports.returnAPromise = returnAPromise;
