import { any } from './any';

/**
 * Resolve the first resolved promise.
 * 
 * @param {((Promise<any> | any)[])} promises
 * @returns {Promise<any>}
 */
export function raceResolved(promises: Promise<any>[]): Promise<any> {
  return new Promise((resolve, reject) => {
    promises.forEach((currentPromise, index) => {
      currentPromise.then(resolve, () => {});
    });

    any(promises).then(() => reject('No resolved promise found'));
  });
}
