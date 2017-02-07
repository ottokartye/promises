import { returnAPromise, randomPromise } from '../promise-generator';
import { expect } from 'chai';

describe('Promise-generators method', () => {

  describe('returnAPromise method', () => {

    it('should resolve to 10', async () => {
      const result = await returnAPromise(10).catch(error => false);
      expect(result).to.eql(10);
    });

    it('should reject as false', async () => {
      const result = await returnAPromise(false).catch(error => false);
      expect(result).to.be.false;
    });
  });

  describe('randomPromise method', () => {

    it('should resolve or reject randomly', async () => {
      const result = await randomPromise().then(result => true).catch(error => true);
      expect(result).to.be.true;
    });
  });

});
