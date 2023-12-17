//@ts-check

const { timeFormat } = require("./utils/format")

const heure = new Date()
let res = timeFormat(heure,":")

console.log(res)