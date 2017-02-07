import { returnAPromise } from '../promise-generator';
import { raceResolved } from '../race-resolved';
import { expect } from 'chai';

describe('Race-resolved method', () => {

  it('should return 10 since it is the first promise to be resolved', async () => {
    const promiseCollection = [returnAPromise(false), returnAPromise(10), returnAPromise(false)];
    const result = await raceResolved(promiseCollection).catch(error => false);
    expect(result).to.eql(10);
  });

  it('should throw an error since no promise is resolved', async () => {
    const promiseCollection = [returnAPromise(false), returnAPromise(false), returnAPromise(false)];
    const result = await raceResolved(promiseCollection).catch(error => false);
    expect(result).to.be.false;
  });

});
