import { randomPromise } from './promises';

function any(promises: (Promise<any> | any)[]): Promise<any[]> {
  return new Promise(resolve => {
    const values: any[] = [];

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

const promise1 = randomPromise();
const promise2 = randomPromise();
const promise3 = randomPromise();

any([promise1, promise2, promise3])
  .then(values => {
    console.log(values);
  });
