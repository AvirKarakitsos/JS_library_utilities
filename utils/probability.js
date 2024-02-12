/**
 * @class Proba
 * @description Several statics methods for withdraws.
 */

class Proba {
    /**
     * Draw n times with replacement
     * @param {Array.<number|string>} arr sample used for the draws
     * @param {Number} n number of draws
     * 
     * @returns {Array.<number|string>}
     */
    static withReplacement(arr, n) {
        let result = []
        let indice = null
        
        for(let i=0; i<n; i++) {
            indice = Math.floor(Math.random() * arr.length)
            result.push(arr[indice])
        }
    
        return result
    }

    /**
     * Frequency of each unique element in an array
     * @param {Array.<(number|string)>} arr
     * 
     * @returns {Object}
     */
    static frequency(arr) {
        let obj = arr.reduce((total,current)=> {
            if(total[current]) {
             total[current] = ++total[current]
            } else {
             total[current] = 1
            }
            return total
         },{})
    
         return obj
    }

    /**
     * Frequency of each words in a sentance
     * @param {string} sentence The input string containing words.
     * 
     * @returns {Map<string, number>}
     */
    static wordFrequency(sentence) {
        let wordsSplited = sentence.toLowerCase().split(/\W+/)
    
        let result = new Map()
        for(let word of wordsSplited) {
            if(word === "") continue 
            else if(result.get(word)) {    
                result.set(word, result.get(word) + 1)
            } else {
                result.set(word, 1)
            }
        }
    
        return result
    }

    /**
     * Draw without replacement
     * @param {Array.<(number|string)>} arr sample used for the draw
     * @param {Number} draw draw n elements simultaneously 
     * 
     * @returns {Array.<(number|string)>}
     */
    static withoutReplacement(arr,draw=null) {
        if(draw > arr.length) {
            throw Error("Second argument must be less than the length of the array")
        }
    
        let size = null
        let copy = [...arr]
        let result = []
        let indice = null
        
        if((draw === null || (draw === 0))) size = arr.length
        else size = draw
    
        for(let i=0; i<size; i++) {
            indice = Math.floor(Math.random() * copy.length)
            result.push(copy[indice])
            copy.splice(indice,1)
        }
    
        return result
    }
}
 
export {Proba}