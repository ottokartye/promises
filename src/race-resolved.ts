import { randomPromise } from './promises';

/**
 * Resolve the first resolved promise.
 * 
 * @param {((Promise<any> | any)[])} promises
 * @returns {Promise<any>}
 */
function raceResolved(promises: (Promise<any> | any)[]): Promise<any> {
  return new Promise((resolve, reject) => {
    let result: any = undefined;

    let numberOfPromises = promises.length;
    promises.forEach((currentPromise, index) => {

      const storeValue = (value) => {
        result = {
          index,
          value
        };
        if (index >= numberOfPromises - 1) {
          resolve(result);
        }
      }

      if (!(currentPromise instanceof Promise)) {
        storeValue(currentPromise);
      }

      currentPromise
        .then(storeValue, error => { });
    });
  });
}

const promise0 = randomPromise();
const promise1 = randomPromise();
const promise2 = randomPromise();
const promise3 = randomPromise();

raceResolved([promise0, promise1, promise2, promise3])
  .then(result => {
    console.log('Resolved promise', result);
  });
