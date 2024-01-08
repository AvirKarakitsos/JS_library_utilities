//@ts-check

const { pagination } = require("./utils/pagination")

const arr = [
    {name: "Arno", age: 33},
    {name: "Anna", age: 21},
    {name: "Kioss", age: 31},
    {name: "Kioss", age: 31},
    {name: "test", age: 31},
    {name: "autre", age: 31},
    {name: "Kabcioss", age: 31},
    {name: "Le Kram", age: 33}
]

const res= pagination(arr,2,3)

console.log(res.data)
