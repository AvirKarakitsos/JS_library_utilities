const { PrimeNumber } = require('../build/package.cjs');

function isPrime(p) {
    if (p === 0 || p === 1) return false;
    if (p === 2 || p === 3) return true;

    let testNumber = Math.floor(Math.sqrt(p));
    const list = PrimeNumber.listOfPrime(testNumber);

    for (let i = 0; i < list.length; i++) {
        if (p % list[i] === 0) return false;
    }

    return true;
}

describe('PrimeNumber class test', () => {
    it('test if 2 is prime', () => {
        const result = isPrime(2);
        expect(result).toBe(true);
    });
    it('test if 3 is prime', () => {
        const result = isPrime(3);
        expect(result).toBe(true);
    });
    it('test if 0 is prime', () => {
        const result = isPrime(0);
        expect(result).toBe(false);
    });
    it('test if 1 is prime', () => {
        const result = isPrime(1);
        expect(result).toBe(false);
    });
    it('test if 14 is prime', () => {
        const result = isPrime(14);
        expect(result).toBe(false);
    });
});
