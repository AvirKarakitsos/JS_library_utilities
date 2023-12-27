//@ts-check

const { compareDates } = require("./utils/format")

const date1 = new Date("1995-12-19T03:24:00")
const date2 = new Date("1995-12-17T03:24:00")
let res = compareDates(date1,date2)
console.log(typeof res)
