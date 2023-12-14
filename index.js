const { formatLong, formatShort } = require("./utils/formatDate");

const d = new Date(2021, 6, 25);

const res = formatShort(d," ")

console.log(res)