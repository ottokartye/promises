import { returnAPromise } from '../promise-generator';
import { any } from '../any';
import { expect } from 'chai';

describe('Any method', () => {

  it('should return [false, 10, false]', async () => {
    const promiseCollection = [returnAPromise(false), returnAPromise(10), returnAPromise(false)];
    const result = await any(promiseCollection).catch(error => false);
    expect(result).to.eql([false, 10, false]);
  });

  it('should return [false, false, false]', async () => {
    const promiseCollection = [returnAPromise(false), returnAPromise(false), returnAPromise(false)];
    const result = await any(promiseCollection).catch(error => false);
    expect(result).to.eql([false, false , false]);
  });

});
