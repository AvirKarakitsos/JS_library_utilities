const { Prime } = require('../build/package.cjs');

describe('Prime class test', () => {
    it('list of 2', () => {
        const result = Prime.listOfPrime(2);
        expect(result).toEqual([2]);
    });

    it('list of 3', () => {
        const result = Prime.listOfPrime(3);
        expect(result).toEqual([2, 3]);
    });

    it('27', () => {
        const result = Prime.isPrime(27);
        expect(result).toBe(false);
    });
});
