const days = ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi", "Samedi"]

const months = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"]

/**
 * Format style
 * @module Format
 */

/**
 * Format a date
 * @param {Date} date the date you want to format
 * @param {string} [format] y:year, m:month, d:day, D:date
 *  
 * @returns {string} 
 */
exports.formatLong = function(date, format) {
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
 * @typedef {Object} format
 * @property {string} [date] "y:year, m:month; D:date"
 * @property {string} [space] space between elements
 * @property {boolean} [zero] 
*/

/**
 * Example: 31/12/2023 with space = "/"
 * @param {Date} date date you want to format
 * @param {format} [format]
 *  
 * @returns {string} 
 */
exports.formatShort = function(date, format={date: "Dmy", space:"" , zero:false}) {
    /** 
     *Add an optional zero to a number less than ten 
     * @param {number} nbr
     *   
     * @returns {string} 
    */
    
    function getZero(nbr) {
        if(nbr < 10) {
            return "0"+nbr.toString()
        }
    }
    
    if(!format.space) format.space = ""

    if(format.date) {
        let arrFormat = format.date.split("")
        let formatDate = ""

        for (let element of arrFormat) {
            switch(element) {
                case "y": 
                    formatDate += format.space+date.getFullYear()
                    break
                case "m":
                    if(format.zero) formatDate += format.space + getZero((date.getMonth() + 1))
                    else formatDate += format.space + (date.getMonth() + 1)
                    break
                case "D": 
                    if(format.zero) formatDate += format.space + getZero(date.getDate())
                    else formatDate += format.space + date.getDate()
                    break
                default:
                    throw Error("element not defined")
            }
        }

        if(format.space === " ") return formatDate.trim()
        else if(format.space !== ""){
            let step = formatDate.split("")
            step.shift()
            let result = step.join("")
            return result
        } else return formatDate
    } else {
        if(format.zero) return `${getZero(date.getDate())}${format.space}${getZero(date.getMonth()+1)}${format.space}${date.getFullYear()}`
        else return `${date.getDate()}${format.space}${date.getMonth()+1}${format.space}${date.getFullYear()}`
    }
}

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

/**
 * Example: 31/12/2023 with space = "/"
 * @param {Date} time date you want to format
 * @param {string} space space between element
 *  
 */
exports.timeFormat = function(time,space) {
    return time.getHours()+space+time.getMinutes()+space+time.getSeconds()
}

/**
 * Compare two dates
 * @param {Date} date1
 * @param {Date} date2
 *  
 * @returns {Object} 
 */
exports.compareDates = function(date1,date2) {
    let ms = Math.abs(date1.getTime() - date2.getTime())
    let days = Math.trunc(ms /(1000*60*60*24))
    let hours = Math.trunc(ms /(1000*60*60)) - (24*days)
    let min = Math.trunc(ms /(1000*60)) - (24*60*days + 60*hours)
    let sec = Math.trunc(ms /1000) - (24*60*60*days + 60*60*hours + 60*min)
    return {
        sec,
        min,
        hours,
        days
    }
}