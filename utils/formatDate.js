const days = ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi", "Samedi"]

const months = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"]

/**
 * 
 * @module Format Date
 * @description Format a Date object
 * @version 1.0.0
 * @author Arno Costoyannis
 * 
 */

/**
 * This function will return a complete format of a date
 * @param {Date} date the date you want to format
 * @param {string} [format] optional parameter with y:year, m:month, d:day, w:weekday
 *  
 * @returns {string} 
 */
function formatLong(date, format) {
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
                case "w": 
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
 * @property {string} [date] "y:year, m:month; w:weekday"
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
  function formatShort(date, format=null) {
    
    /** 
     *Add an optional zero to a number less than ten 
     * @param {number} nbr
     *   
     * @returns {string} 
    */
     function getZero(nbr) {
        if(nbr < 10) return "0"+nbr.toString()
        else return nbr
    }

    let options = {
        date: "wmy",
        space:" " , 
        zero:false
    }
    
    if(format) options = {...options, ...format}
  
    let arrFormat = options.date.split("")
    let formatDate = ""

    for (let element of arrFormat) {
        switch(element) {
            case "y": 
                formatDate += options.space+date.getFullYear()
                break
            case "m":
                if(options.zero) formatDate += options.space + getZero((date.getMonth() + 1))
                else formatDate += options.space + (date.getMonth() + 1)
                break
            case "w": 
                if(options.zero) formatDate += options.space + getZero(date.getDate())
                else formatDate += options.space + date.getDate()
                break
            default:
                throw Error("element not defined")
        }
    }

    if(options.space === " ") return formatDate.trim()
    else if(options.space !== "") {
        let split = formatDate.split(options.space)
        let filter = split.filter((str) => str !== '');
        let join = filter.join(options.space)
        return join
    } else return formatDate
}

/**
 * timeFormat will only return the hours, minutes and secondes of a Date object  
 * @param {Date} time date you want to extract time
 * @param {string} space space between element
 * 
 * @returns {string}
 *  
 */
  function timeFormat(time,space) {
    return time.getHours()+space+time.getMinutes()+space+time.getSeconds()
}

/**
 * It will compute the time between two Date objects
 * @param {Date} date1
 * @param {Date} date2
 *  
 * @returns {Object} {sec, min, hours, days}
 */
 function compareDates(date1,date2) {
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

export {compareDates, formatLong, formatShort, timeFormat}