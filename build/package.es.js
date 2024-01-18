/*! package v1.0.0 |  | Copyright 2024 | ISC licence */
const days = ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi", "Samedi"];

const months = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"];

/**
 * Format a Date object
 * @module Format Date
 */

/**
 * This function will return a complete format of a date
 * @param {Date} date the date you want to format
 * @param {string} [format] optional parameter with y:year, m:month, d:day, w:weekday
 *  
 * @returns {string} 
 */
function formatLong(date, format) {
    let formatDate = "";

    if(format) {
        let arrFormat = format.split("");

        for (let element of arrFormat) {
            switch(element) {
                case "y": 
                    formatDate += " "+date.getFullYear();
                    break
                case "m": 
                    formatDate += " "+months[date.getMonth()];
                    break
                case "d": 
                    formatDate += " "+days[date.getDay()];
                    break
                case "w": 
                    formatDate += " "+date.getDate();
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
    };
    
    if(format) options = {...options, ...format};
  
    let arrFormat = options.date.split("");
    let formatDate = "";

    for (let element of arrFormat) {
        switch(element) {
            case "y": 
                formatDate += options.space+date.getFullYear();
                break
            case "m":
                if(options.zero) formatDate += options.space + getZero((date.getMonth() + 1));
                else formatDate += options.space + (date.getMonth() + 1);
                break
            case "w": 
                if(options.zero) formatDate += options.space + getZero(date.getDate());
                else formatDate += options.space + date.getDate();
                break
            default:
                throw Error("element not defined")
        }
    }

    if(options.space === " ") return formatDate.trim()
    else if(options.space !== "") {
        let split = formatDate.split(options.space);
        let filter = split.filter((str) => str !== '');
        let join = filter.join(options.space);
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
    let ms = Math.abs(date1.getTime() - date2.getTime());
    let days = Math.trunc(ms /(1000*60*60*24));
    let hours = Math.trunc(ms /(1000*60*60)) - (24*days);
    let min = Math.trunc(ms /(1000*60)) - (24*60*days + 60*hours);
    let sec = Math.trunc(ms /1000) - (24*60*60*days + 60*60*hours + 60*min);
    return {
        sec,
        min,
        hours,
        days
    }
}

/**
 * Format a String object
 * @module Format String
 */

/**
 * Transform the first letter of each word into uppercase
 * @param {string} title title to transform
 * @param {boolean} [option] exclude a list of word : ["le","la","les","de","des","l'","of"]
 * 
 * @returns {string} 
 */
function titleUpperCase(title,option=false) {
    let excludes = ["le","la","les","de","des","l'","of"];
    let words = title.split(" ");
    let result = [];
    words.map((word,index) => {
        let transform = "";
        option ?
            ((excludes.includes(word)) && (index !== 0)) ? transform = word : transform = word.toUpperCase()[0]+word.slice(1)
           : transform = word.toUpperCase()[0]+word.slice(1);
        result.push(transform);
    });

    return result.join(" ")
}

/**
 * Build an array of items corresponding to the number of pages we want 
 * @module Pagination
 */

/**
 * @typedef {Object} PageInfo
 * @property {Array} data
 * @property {number} numberPages - Number of pages
 * 
 */

/**
 * Return the data corresponding of the page argument. It contains itemPerPage elements
 * @param {Array} data 
 * @param {number} page 
 * @param {number} itemPerPage
 * 
 * @returns {PageInfo}
 */
function pagination(data, page, itemPerPage) {
    let numberPages = data.length / itemPerPage;
    let copyData = null;

    if(!Number.isInteger(numberPages)) numberPages = Math.trunc(numberPages) + 1;
    

    if(!page) {
        copyData = data.slice(0,itemPerPage);
        return {data: copyData, numberPages}
    } else {
        if(page === numberPages) {
            copyData = data.slice(itemPerPage*page-itemPerPage);
            return {data: copyData, numberPages}
        } else {
            copyData = data.slice(itemPerPage*page-itemPerPage,itemPerPage*page);
            return {data: copyData, numberPages}
        }
    }
}

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
        let result = 0;
        for(let i=0; i<arr.length; i++) {
            result += arr[i];
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
        let rank = (arr.length+1)/2;
        let copy = [...arr];
        let result = null;

        copy.sort((a,b) => a-b);

        if(Number.isInteger(rank)) result = copy[Math.floor(rank)-1];
        else result = (copy[Math.floor(rank)-1] + copy[Math.ceil(rank)-1])/2;

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
        [...arr];
        let result = null;
        let firstQ = arr.length/4;
        let thirdQ = (3*arr.length)/4;
        let median = this.median(arr);
        let minValue = Math.min(...arr);
        let maxValue = Math.max(...arr);
        
        result = {
            min: minValue,
            Q1: arr[Math.floor(firstQ)],
            median: median,
            Q3: arr[Math.floor(thirdQ)],
            max: maxValue
        };

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
        let result = this.summary(data);

        let range = result.Q3 - result.Q1;
        let min = Math.max(result.min, result.Q1 - 1.5*range);
        let max = Math.min(result.max, result.Q3 + 1.5*range);
        let long = max - min;

        let med = (result.median / long)*100;
        let q1 = (result.Q1 / long)*100;
        let q3 = (result.Q3 / long)*100;
        let widthBox = q3 - q1;

       let element = `<svg width="${options.height}" height="${options.width}">
                        <rect x="${q1}%" y="0" width="${widthBox}%" height="100%" fill="none" stroke="black"/>
                        <line x1="0" y1="50%" x2="100%" y2="50%" stroke="black"/>
                        <line x1="0" y1="0" x2="0" y2="100%" stroke="black"/>
                        <line x1="100%" y1="0" x2="100%" y2="100%" stroke="black"/>
                        <line x1="${med}%" y1="0" x2="${med}%" y2="100%" stroke="black" stroke-width="3px"/>
                    </svg>`;
        
        return element
    }
}

/**
 * Probability
 * @class Proba
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
        let result = [];
        let indice = null;
        
        for(let i=0; i<n; i++) {
            indice = Math.floor(Math.random() * arr.length);
            result.push(arr[indice]);
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
             total[current] = ++total[current];
            } else {
             total[current] = 1;
            }
            return total
         },{});
    
         return obj
    }

    /**
     * Frequency of each words in a sentance
     * @param {string} sentence The input string containing words.
     * 
     * @returns {Map<string, number>}
     */
    static wordFrequency(sentence) {
        let wordsSplited = sentence.toLowerCase().split(/\W+/);
    
        let result = new Map();
        for(let word of wordsSplited) {
            if(word === "") continue 
            else if(result.get(word)) {    
                result.set(word, result.get(word) + 1);
            } else {
                result.set(word, 1);
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
    
        let size = null;
        let copy = [...arr];
        let result = [];
        let indice = null;
        
        if((draw === null || (draw === 0))) size = arr.length;
        else size = draw;
    
        for(let i=0; i<size; i++) {
            indice = Math.floor(Math.random() * copy.length);
            result.push(copy[indice]);
            copy.splice(indice,1);
        }
    
        return result
    }
}

export { Proba, Statistics, compareDates, formatLong, formatShort, pagination, timeFormat, titleUpperCase };
