/**
 * Build an object composed of an array of element sand the number of pages needed 
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

export {pagination}