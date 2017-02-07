import { returnAPromise } from '../promise-generator';
import { stream } from '../stream';
import { expect } from 'chai';

describe('Stream method', () => {

  it('should return [false, 10, false]', async () => {
    const promiseCollection = [returnAPromise(false), returnAPromise(10), returnAPromise(false)];
    const progressCallback = (values, index) => {
      // console.log(index, ': ', values);
    };
    const result = await stream(promiseCollection, progressCallback).catch(error => false);
    expect(result).to.eql([false, 10, false]);
  });

  it('should return [false, false, false]', async () => {
    const promiseCollection = [returnAPromise(false), returnAPromise(false), returnAPromise(false)];
    const progressCallback = (values, index) => {
      // console.log(index, ': ', values);
    };
    const result = await stream(promiseCollection, progressCallback).catch(error => false);
    expect(result).to.eql([false, false, false]);
  });

});
