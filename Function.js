// FUNCTION
// Block of code/sekumpulan baris yang memiliki nama dan dapat digunakan berulang-ulang (reusable)

// Case. Tampilkan kata Javascript sebanyak 3x
// let kata = 'Javascript'
// for(let i=0; i<3; i++){
//     console.log(kata)
// }
// ...
// ...
// ...
// for(let i=0; i<3; i++){
//     console.log(kata)
// }
// ...
// ...
// ...
// for(let i=0; i<3; i++){
//     console.log(kata)
// }

// Syntax :
//     function namaFunction(){
            //Block of code
//     }

// Tahapan membuat function :
//      - Build ---> Buat function 1x
//      - Call  ---> Bisa gunakan function nya secara berulang-ulang

function printPesan(){
    let kata = 'Javascript'

    for(let i=0; i<3; i++){
        console.log(kata)
    }
}

printPesan()
// ...
// ...
// ...
printPesan()

// 2 Tipe Function :
//      - Function Declaration
declaration()
function declaration(){
    console.log('Function Declaration')
}

//      - Function Expression
// expression()
let expression = function(){ // Anonymous Function
    console.log('Function Expression')
}

let arrowFunction = () => { // Anonymous Function
    console.log('Arrow Function')
}

// declaration()
// expression()

// Ex. Buatlah function untuk menampilkan data diri
function dataDiri(){
    console.log('Nama Saya Defry')
    console.log('Hobi Saya Sepakbola')
    console.log('Asal Saya Jawa Timur')
}

dataDiri()

// FUNCTION WITH PARAMETER
// Function yang menerima argument/inputan dari luar
// Karena memiliki parameter, membuat function lebih fleksibel
function dataDiriNew(nama, hobi, asal){
    console.log(`Nama Saya ${nama}`)
    console.log(`Hobi Saya ${hobi}`)
    console.log(`Asal Saya ${asal}`)
}
dataDiriNew('Kevin', 'Sepakbola', 'Jawa Tengah')

// Ex. Buatlah function untuk menjumlahkan 2 buah bilangan
function penjumlahan(angka1, angka2){
    console.log(angka1 + angka2)
}

penjumlahan(2, 3) // Direct argument

let x = 2
let y = 3
penjumlahan(x, y) // Indirect argument

// FUNCTION WITH DEFAULT PARAMETER
// Fungsinya : Untuk mengantisipasi apabila function yang kita buat tidak menerima argument/inputan
function sapa(nama = 'Anonymous', hobi = 'Belum Ada'){
    console.log(`Hello, ${nama}! Hobi Anda ${hobi}`)
}

sapa('Rian', 'Futsal')
sapa()

// Ex. Function inside scope
// if(1 < 2){
//     function sapa(){
//         console.log('Hai, Student Purwadhika!')
//     }
// }

// sapa()



// FUNCTION WITH RETURN
// Function yang menghasilkan sebuah value
// Value tersebut dapat kita gunakan untuk mengerjakan task berikutnya/lainnya
function Penjumlahan1(angka1, angka2){
    let hasil = angka1 + angka2 
    // console.log(hasil)
}

function Penjumlahan2(angka1, angka2){
    let hasil = angka1 + angka2

    return hasil // Return : Berfungsi untuk menghentikan sebuah program
    console.log('Hello!')
}

Penjumlahan1(1, 2)
Penjumlahan2(3, 4)

let hasilPenjumlahan1 = Penjumlahan1(1, 2) + 1
let hasilPenjumlahan2 = Penjumlahan2(3, 4) + 1
// console.log(hasilPenjumlahan1)
// console.log(hasilPenjumlahan2)

function Data1(nama){
    console.log(nama)
}

function Data2(nama){
    return nama
}

// console.log(Data1('Safira') + 'Haekal')
// console.log(Data2('Kevin') + 'Kiki' + 'Rian')
// console.log(Data2('Aisyah')) // Aisyah

function BanyakData(nama, hobi){
    let dataBaru = nama + hobi
    return dataBaru
}

console.log(BanyakData('Safira', 'Ngoding'))

let DataStudent = (nama) => {
    if(nama.length < 5){
        return 'Terlalu Pendek Namanya'
    }else{
        return 'Terlalu Panjang Namanya'
    }
}

let hasilFunction = DataStudent('Rian')
console.log(hasilFunction)

// CALLBACK FUNCTION
// Function yang dijadikan sebuah argument untuk sebuah function lainnya 

let tambah = (num1, num2) => {
    return num1 + num2
}

let kali = (num1, num2) => {
    return num1 * num2 
}

let calculator = (a, b, cb) => {
    // a: 3,
    // b: 2
    // cb: kali
    return cb(a, b) // kali(3, 2)
}

let hasil1 = calculator(2, 3, tambah)
let hasil2 = calculator(3, 2, kali)
console.log(hasil2)

// Indirect Cb Function
let indirect = (arr, cb) => {
    // arr: [1, 2, 3]
    // cb: fnPrint
    return cb(arr) // fnPrint([1, 2, 3])
}

let fnPrint = (arr) => {
    return arr
}

// let result = indirect(numbers, fnPrint) // [1, 2, 3], fnPrint
// console.log(result)

// Ex1.
let fnPertama = (days, callback) => {
    // days: 'Senin'
    // callback: fnDua
    return callback(days) // fnDua('Senin')
}

let fnDua = (days) => { // days: 'Senin'
    return days // return 'Senin'
}

let hasil = fnPertama('Senin', fnDua)
console.log(hasil)

// Ex2. DIRECT FUNCTION
let fnKedua = (number, callback) => {
    // number: 3
    // callback: fnKetiga
    return callback(number) // fnKetiga(3)
}

let hasilFn = fnKedua(3, (number) => {
    // number: 3
    return number * 3 // 3 * 3 = 9
})
console.log(hasilFn)

// Real Case. Semisal kita ingin memvalidasi email user sebelum kita simpan kedalam variable
let emailUser = ''

let terimaDataEmail = (email, callback) => {
    // Validasi inputan email != ''
    if(email != ''){
        return callback(email)
    }else{
        console.log('Email Tidak Boleh Kosong!')
    }
}

let fnValidasiEmail = (email) => {
    if(email.includes('@')){
        return emailUser = email
    }
}

let results = terimaDataEmail('ryan@gmail.com', fnValidasiEmail)
console.log(results)