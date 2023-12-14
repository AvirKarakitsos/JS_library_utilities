class Calculus {
    /**
     * Calcul the sum of an array
     * @param {number[]} arr
     * 
     * @returns {number}
     */
    static sum(arr) {
        let result = 0
        for(let i=0; i<arr.length; i++) {
            result += arr[i]
        }

        return result
    }

    /**
     * Calcul the average of an array
     * @param {number[]} arr
     * 
     * @returns {number}
     */
    static average(arr) {
        return this.sum(arr)/arr.length
    }

    /**
     * Calcul the median of an array
     * @param {number[]} arr
     * 
     * @returns {number}
     */
    static median(arr) {
        let rank = (arr.length+1)/2
        let copy = [...arr]
        let result = null

        copy.sort((a,b) => a-b)

        if(Number.isInteger(rank)) result = copy[Math.floor(rank)-1]
        else result = (copy[Math.floor(rank)-1] + copy[Math.ceil(rank)-1])/2

        return result
    }

    /**
     * @typedef {Object} Summary
     * @property {number} min
     * @property {number} Q1 first quartile
     * @property {number} median
     * @property {number} mQ3 third quartile
     * @property {number} max
     */

    /**
     * Return a list of informations about the data
     * @param {number[]} arr
     * 
     * @returns {Summary}
     */
    static summary(arr) {
        let copy = [...arr]
        let result = null
        let firstQ = arr.length/4
        let thirdQ = (3*arr.length)/4
        let median = this.median(arr)
        let minValue = Math.min(...arr)
        let maxValue = Math.max(...arr)

        copy.sort((a,b) => a-b)
        
        result = {
            min: minValue,
            Q1: arr[Math.floor(firstQ)],
            median: median,
            Q3: arr[Math.floor(thirdQ)],
            max: maxValue
        }

        return result
    }
}

module.exports = {Calculus}