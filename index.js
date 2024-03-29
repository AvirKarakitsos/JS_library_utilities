//@ts-check

const { Proba, formatShort, formatLong } = require("./build/package.cjs")

const arr = [
    {name: "Arno", age: 33},
    {name: "Anna", age: 21},
    {name: "Kioss", age: 31},
    {name: "Kev", age: 31},
    {name: "test", age: 31},
    {name: "autre", age: 31},
    {name: "Tiky", age: 21},
    {name: "Le Kram", age: 33}
]

const test = Proba.withReplacement(["blue","red","green"],10)
//const res= formatLong(new Date())

const a = new Date().toLocaleDateString()
const b = new Date().toLocaleTimeString()

const date = new Date()
const birthday3 = new Date(1995, 11, 17);
let res = formatShort(date, {date:"ymD"})

console.log(formatShort(birthday3))
