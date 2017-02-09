import { returnAPromise } from '../promise-generator';
import { stream } from '../stream';
import { expect } from 'chai';

describe('Stream method', () => {

  it('should return [false, 10, false]', async () => {
    const indexCollection: number[] = [];
    const promiseCollection = [returnAPromise(false), returnAPromise(10), returnAPromise(false)];
    const result = await stream(promiseCollection)
                          .progress((values, index) => {
                            indexCollection.push(index);
                          })
                          .catch(error => false);
    expect(result).to.eql([false, 10, false]);
    expect(indexCollection).to.eql([1, 0, 2]);
  });

  it('should return [false, false, false]', async () => {
    const indexCollection: number[] = [];
    const promiseCollection = [returnAPromise(false), returnAPromise(false), returnAPromise(false)];
    const result = await stream(promiseCollection)
                          .progress((values, index) => {
                            indexCollection.push(index);
                          })
                          .catch(error => false);
    expect(result).to.eql([false, false, false]);
    expect(indexCollection).to.eql([0, 1, 2]);
  });
});
