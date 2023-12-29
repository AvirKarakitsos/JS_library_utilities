//@ts-check

const { compareDates, formatShort } = require("./utils/format")

const date1 = new Date("1995-07-09T03:24:07")
const date2 = new Date("1995-12-19T05:50:07")
let res = compareDates(date1,date2)

let test = formatShort(date1,{space:" ", date:"ymD",zero:false})
console.log(test)
