const days = ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi", "Samedi"]

const months = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"]

/**
 * Format a Date object
 * @module Format Date
 */

/**
 * This function will return a complete format of a date
 * @param {Date} date the date you want to format
 * @param {string} [format] optional parameter with y:year, m:month, d:day, D:date
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
 * formatShort will return a short fomat of a date. For example: 25/09/2023 with optional object {date: "Dmy", space:"/" , zero:true}
 * @param {Date} date date you want to format
 * @param {format} [format] optional parameter
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
 * timeFormat will only return the hours, minutes and secondes of a Date object  
 * @param {Date} time date you want to extract time
 * @param {string} space space between element
 * 
 * @returns {string}
 *  
 */
exports.timeFormat = function(time,space) {
    return time.getHours()+space+time.getMinutes()+space+time.getSeconds()
}

/**
 * It will compute the time between two Date objects
 * @param {Date} date1
 * @param {Date} date2
 *  
 * @returns {Object} {sec, min, hours, days}
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