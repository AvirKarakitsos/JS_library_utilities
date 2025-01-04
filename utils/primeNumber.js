/**
 *
 * @class Prime Numbers
 * @description Methods for testing if a number is prime
 */

class PrimeNumber {
    /**
     * Return an array of prime numbers less than a variable nbr
     * @param {number} nbr
     *
     * @returns {number[]}
     */
    static listOfPrime(nbr) {
        let result = [];
        let deleteValue = new Set();

        for (let i = 2; i <= nbr; i++) {
            if (!deleteValue.has(i)) {
                let k = 2;
                let multiple = k * i;

                while (multiple <= nbr) {
                    deleteValue.add(multiple);
                    k = k + 1;
                    multiple = i * k;
                }

                result.push(i);
            }
        }

        return result;
    }
    /**
     * Test if a number is prime or not
     * @param {number} p
     *
     * @returns {boolean}
     */
    static isPrime(p) {
        if (p === 0 || p === 1) return false;
        if (p === 2 || p === 3) return true;

        let testNumber = Math.floor(Math.sqrt(p));
        const list = PrimeNumber.listOfPrime(testNumber);

        for (let i = 0; i < list.length; i++) {
            if (p % list[i] === 0) return false;
        }

        return true;
    }
}

export { PrimeNumber };
