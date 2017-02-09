export type TProgressCallback = (values: any[], newIndex: number) => void;
export type TExtendedPromise = Promise<any[]> & {progress?: (callback: TProgressCallback) => TExtendedPromise};

/**
 * Resolve each passed promise and execute the passed
 * callback after each resolve/rejected promise.
 *
 * @param {((Promise<any> | any)[])} promises
 * @param {any} progressCallback
 * @returns {Promise<any>}
 */
export function stream(promises: (Promise<any> | any)[]): TExtendedPromise {
  const progressCallback: TProgressCallback[] = [];
  const promise: TExtendedPromise = new Promise(resolve => {

    const values: any[] = [];
    let max = promises.length;

    promises.forEach((currentPromise: Promise<any> | any, index: number) => {

      const addValue = (value) => {
        values[index] = value;
        progressCallback.forEach((callback) => {
          callback(values, index);
        });

        if (--max <= 0) {
          resolve(values);
        }
      };

      if (!(currentPromise instanceof Promise)) {
        addValue(currentPromise);
      }

      currentPromise.then(addValue, addValue);
    });

  });

  promise.progress = (callback: TProgressCallback) => {
    progressCallback.push(callback);
    return promise;
  };

  return promise;
}
