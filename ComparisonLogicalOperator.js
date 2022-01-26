// COMPARISON OPERATOR ---> Operator yang akan menghasilkan nilai boolean true/false
// >, >=, <, <=, ==, ===, !=

let angka1 = 10
let angka2 = 20
console.log(angka1 == angka2) // false
// = ---> Assignment operator

let angka3 = 50
let angka4 = 50
console.log(angka3 > angka4) // false
console.log(angka3 >= angka4) // true
console.log(angka3 != angka4) // false

let angka5 = 3
let angka6 = '3'
console.log(angka5 == angka6) // Hanya mengecek value nya saja
console.log(angka5 === angka6) /// Selain mengecek value, mengecek tipe datanya

console.log(5 == 5)
console.log('10' === '10')

let angka7 = 10
let angka8 = 10
let angka9 = `${angka7}` // Dianggap sebagai sebuah string
console.log(angka8 === angka9)
// Note: String dapat menyimpan 2 bentuk data, alfabet dan numeric