/**
 * 
 * @module Format String
 */

/**
 * Transform the first letter of each word into uppercase
 * @param {string} title title to transform
 * @param {boolean} [option] exclude a list of word
 * 
 * @returns {string} 
 */
exports.titleUpperCase = function(title,option=false) {
    let excludes = ["le","la","les","de","des","l'","of"]
    let words = title.split(" ")
    let result = []
    words.map((word,index) => {
        let transform = ""
        option ?
            ((excludes.includes(word)) && (index !== 0)) ? transform = word : transform = word.toUpperCase()[0]+word.slice(1)
           : transform = word.toUpperCase()[0]+word.slice(1)
        result.push(transform)
    })

    return result.join(" ")
}