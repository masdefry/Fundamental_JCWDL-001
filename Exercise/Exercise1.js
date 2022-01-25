// Step1. Declare 3 variable x, y, z
let x = 4
let y = 3
let z = 2

// let w = Math.pow((x+(y*z)) / (x*y), z)

let w = (x + (y * z)) / (x * y) 
let finalScore = Math.pow(w, z)
console.log(finalScore)