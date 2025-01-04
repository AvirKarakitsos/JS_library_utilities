/**
 * 
 * @class Prime Numbers
 * @description Methods for testing if a number is prime 
 */

class PrimeNumber {
    /**
     * Calcul the sum of an array
     * @param {number[]} arr
     * 
     * @returns {number}
     */
    static listOfPrime(nbr) {
        let result = []
        let deleteValue = new Set()

        for (let i=2; i<=nbr;i++) {

            if(!deleteValue.has(i)) {
                let k=2
                let multiple = k*i
                
                while(multiple <= nbr) {
                    deleteValue.add(multiple)
                    k=k+1
                    multiple = i*k
                }
                
                result.push(i)
            }
            
        }

        return result
    }
}

export {PrimeNumber}