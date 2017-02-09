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
      let myNumber = Math.random();
      myNumber = Math.round(myNumber * 100) / 100;
      if (myNumber > 0.2 && myNumber < 0.8) {
        resolve(myNumber);
      } else {
        reject(false);
      }
    }, 10);
  });
}

/**
 * Returns a simple promise.
 * It will resolve if you pass true or fail if you pass false.
 *
 * @export
 * @param {boolean} [shouldResolve=true]
 * @returns {Promise<any>}
 */
export function returnAPromise(result: number | boolean = false): Promise<any> {
  return new Promise((resolve, reject) => {
    if (result) {
      resolve(result);
    } else {
      reject(result);
    }
  });
}
