class Proba {
    /**
     * Draw with replacement
     * @param {Array<(number|string)>} arr 
     * @param {Number} nbr number of draws
     * 
     * @returns {Array<(number|string)>}
     */
    static withReplacement(arr, nbr) {
        let result = []
        let indice = null
        
        for(let i=0; i<nbr; i++) {
            indice = Math.floor(Math.random() * arr.length)
            result.push(arr[indice])
        }
    
        return result
    }

    /**
     * Frequency of each element
     * @param {Array<(number|string)>} arr 
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
     * Draw without replacement
     * @param {Array<(number|string)>} arr 
     * @param {Number} draw draw n elements simultaneous 
     * 
     * @returns {Array<(number|string)>}
     */
    static withoutReplacement(arr,draw=null) {
        if(draw > arr.length) {
            throw Error("Second argument must be less than the length of array")
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
 
module.exports = {Proba}