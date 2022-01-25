// METHOD
// String : https://www.w3schools.com/js/js_string_methods.asp
let caption = 'Belajar Bahasa Pemrograman Javascript'
console.log(caption.length)
console.log(caption.indexOf('m')) // Mencari posisi karakter m berada di index ke berapa? (index dimulai dari 0)
console.log(caption.slice(0, 3)) // Mengambil karakter dari index ke-... sampai index ke-... (index paling akhir, tidak diikutkan)
console.log(caption.substring(0, 3)) // Mengambil karakter dari index ke-... sebanyak 3 karakter

// Number : https://www.w3schools.com/js/js_number_methods.asp
let number = 10.113
console.log(number.toFixed(0))
console.log(number.toFixed(6))

let numberToString = number.toString() // Mengkonversi angka menjadi string
console.log(typeof(numberToString))

// Case. Membuat program untuk mengambil 3 angka pertama dari nomor hp
// Step: 1. Kita ubah dulu number menjadi string
//       2. Ambil 3 string pertama menggunakan substring
let nomorHp = 6281111333999
// Step1.
let nomorHpToString = nomorHp.toString()

//  Step2.
let tigaAngkaPertama = nomorHpToString.substring(0, 3)
console.log(tigaAngkaPertama)