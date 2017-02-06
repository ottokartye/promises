/**
 * Returns a promise that will randomly
 * resolve a number or reject with false.
 * 
 * @export
 * @returns {Promise<any>}
 */
export function randomPromise(): Promise<any> {
  return new Promise((resolve, reject) => {
    const timeOut = setTimeout(() => {
      let number = Math.random();
      number = Math.round(number * 100) / 100
      if (number > 0.2 && number < 0.8) {
        resolve(number);
      } else {
        reject(false);
      }
    }, 100);
  })
}

/**
 * Returns a simple promise.
 * It will resolve if you pass true or fail if you pass false.
 * 
 * @export
 * @param {boolean} [shouldResolve=true]
 * @returns {Promise<any>}
 */
export function returnAPromise(shouldResolve: boolean = true): Promise<any> {
  return new Promise((resolve, reject) => {
    if (shouldResolve) {
      resolve(true);
    } else {
      reject(false);
    }
  })
}
