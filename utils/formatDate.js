const days = ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi", "Samedi"]

const months = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"]


/**
 * 
 * @param {string} format y:year, m:month, d:day, D:date
 *  
 * @returns {string} 
 */
Date.prototype.formatLong = function(format) {
    let date = new Date()
    let formatDate = ""

    if(format) {
        let arrFormat = format.split("")

        for (let element of arrFormat) {
            switch(element) {
                case "y": 
                    formatDate += " "+date.getFullYear()
                    break
                case "m": 
                    formatDate += " "+months[date.getMonth()]
                    break
                case "d": 
                    formatDate += " "+days[date.getDay()]
                    break
                case "D": 
                    formatDate += " "+date.getDate()
                    break
                default:
                    throw Error("element not defined")
            }
        }
        return formatDate.trim()
    }
    else {
        return `${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
    }   
}

/**
 * Example: 31/12/2023 with space = "/"
 * @param {string} space space between element
 * 
 * @param {string} format y:year, m:month, D:date
 *  
 * @returns {string} 
 */
Date.prototype.formatShort = function(space,format) {
    let date = new Date()

    if(format) {
        let arrFormat = format.split("")
        let formatDate = ""

        for (let element of arrFormat) {
            switch(element) {
                case "y": 
                    formatDate += space+date.getFullYear()
                    break
                case "m": 
                    formatDate += space+date.getMonth()
                    break
                case "D": 
                    formatDate += space+date.getDate()
                    break
                default:
                    throw Error("element not defined")
            }
        }

        if(space === " ") return formatDate.trim()
        else if(space !== ""){
            let step = formatDate.split("")
            step.shift()
            let result = step.join("")
            return result
        } else return formatDate
    } else {
        return `${date.getDate()}${space}${date.getMonth()+1}${space}${date.getFullYear()}`
    }
}

module.exports = {Date}