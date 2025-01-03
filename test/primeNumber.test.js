const {PrimeNumber} = require("../build/package.cjs")

describe('Return an array of n number', () => {
    const result = PrimeNumber.listOfPrime(10)
    
    // it('contain first element', () => {
    //   expect(result).toContain(2);
    // });

    // it('contain 6', () => {
    //   expect(result).not.toContain(6);
    // });
    
    it('return an array', () => {
      expect(result).toEqual([2,3,5,7]);
    });

  });