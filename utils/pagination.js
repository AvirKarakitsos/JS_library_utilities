/**
 * @typedef {Object} PageInfo
 * @property {Array} data
 * @property {number} numberPages - Number of pages
 * 
 * Return the data corresponding of the page argument and containing itemPerPage elements
 * @param {Array} data 
 * @param {number} page 
 * @param {number} itemPerPage
 * 
 * @returns {PageInfo}
 */

exports.pagination = (data, page, itemPerPage) => {
    let numberPages = data.length / itemPerPage
    let copyData = null

    if(!Number.isInteger(numberPages)) numberPages = Math.trunc(numberPages) + 1
    

    if(!page) {
        copyData = data.slice(0,itemPerPage)
        return {data: copyData, numberPages}
    } else {
        if(page === numberPages) {
            copyData = data.slice(itemPerPage*page-itemPerPage)
            return {data: copyData, numberPages}
        } else {
            copyData = data.slice(itemPerPage*page-itemPerPage,itemPerPage*page)
            return {data: copyData, numberPages}
        }
    }
}