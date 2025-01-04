const { PrimeNumber } = require('../build/package.cjs');

describe('PrimeNumber class test', () => {
    it('test if 2 is prime', () => {
        const result = PrimeNumber.isPrime(2);
        expect(result).toBe(true);
    });
    it('test if 3 is prime', () => {
        const result = PrimeNumber.isPrime(3);
        expect(result).toBe(true);
    });
    it('test if 0 is prime', () => {
        const result = PrimeNumber.isPrime(0);
        expect(result).toBe(false);
    });
    it('test if 1 is prime', () => {
        const result = PrimeNumber.isPrime(1);
        expect(result).toBe(false);
    });
    it('test if 14 is prime', () => {
        const result = PrimeNumber.isPrime(15);
        expect(result).toBe(false);
    });
    it('test if 17 is prime', () => {
        const result = PrimeNumber.isPrime(17);
        expect(result).not.toBe(false);
    });
});
