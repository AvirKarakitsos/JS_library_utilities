const { Calculus } = require("./utils/calculus");
const { Proba } = require("./utils/probability");

let test = ["blue","blue","blue","blue","red","blue","red","red","green"]

let result = Proba.frequency(test)

console.log(result)