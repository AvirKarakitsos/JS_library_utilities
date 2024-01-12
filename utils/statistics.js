/**
 * Descriptive statistics
 * @class Statistics
 */

class Statistics {
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
     * Return a list of  statistics informations about the data
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

    /**
     * Return an SVG element of a box plot according to the data
     * @param {Summary} data
     * @param {object} options
     * 
     * @returns {string}
     */

    static boxPlot(data, options={height: 300, width: 50}) {
        let result = this.summary(data)

        let range = result.Q3 - result.Q1
        let min = Math.max(result.min, result.Q1 - 1.5*range)
        let max = Math.min(result.max, result.Q3 + 1.5*range)
        let long = max - min

        let med = (result.median / long)*100
        let q1 = (result.Q1 / long)*100
        let q3 = (result.Q3 / long)*100
        let widthBox = q3 - q1

       let element = `<svg width="${options.height}" height="${options.width}">
                        <rect x="${q1}%" y="0" width="${widthBox}%" height="100%" fill="none" stroke="black"/>
                        <line x1="0" y1="50%" x2="100%" y2="50%" stroke="black"/>
                        <line x1="0" y1="0" x2="0" y2="100%" stroke="black"/>
                        <line x1="100%" y1="0" x2="100%" y2="100%" stroke="black"/>
                        <line x1="${med}%" y1="0" x2="${med}%" y2="100%" stroke="black" stroke-width="3px"/>
                    </svg>`
        
        return element
    }
}

export {Statistics}