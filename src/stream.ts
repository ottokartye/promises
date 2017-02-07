/**
 * Creates an array and marks 
 * each element as undefined.
 * 
 * @param {number} max
 * @returns
 */
function initValues(max: number) {
  const values: any[] = [];
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
export function stream(promises: (Promise<any> | any)[], progressCallback): Promise<any[]> {
  return new Promise(resolve => {
    const max = promises.length;
    // Mark all elements of the array as undefined
    const values: any = initValues(max);

    promises.forEach((currentPromise: Promise<any> | any, index: number) => {
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
