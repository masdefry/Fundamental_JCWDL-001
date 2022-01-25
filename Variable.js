// VARIABLE ---> Tempat untuk menyimpan data
//          ---> Hanya dapat menyimpan 1 data

// Case. Client menyuruh kita membuat program untuk menampilkan kata Hello World! 
//       sebanyak 3 kata di terminal
// console.log('Hai, Dunia!')
// console.log('Hai, Dunia!')
// console.log('Hai, Dunia!')

// 1. Cara Membuat Variable / Declare Variable : var nama_variable
var kata

// 2. Cara Untuk Nge-assign Variable
kata = 'Hello, World!'

console.log(kata)
console.log(kata)
console.log(kata)

var nama = 'Haekal' // Membuat variable sekaligus assign value kedalam variable (Declare sekaligus assign)
console.log(nama)

var namaSiswa = 'Safira'
var namaSiswa = 'Kiki'
console.log(namaSiswa)

var siswa1 = 'Kevin'
var siswa1 = 'Asyah'
siswa1 = 'Defryan' // Replace
console.log(siswa1)

var namaKota = 'Jakarta'
namaKota = 'Bogor'
console.log(namaKota)

// Declare Multiple Variable : var nama_variable1, nama_variable2, nama_variable3
var namaSaya, usiaSaya, hobiSaya
namaSaya = 'Defryan'
usiaSaya = '22'
hobiSaya = 'Futsal'
console.log(namaSaya)
console.log(hobiSaya)
console.log(usiaSaya)

// Aturan Penamaan Variable
// 1. Berilah variable dengan nama yang jelas (tidak general)
var dataNama = 'Patimura'
var namaStudent = 'Patimura'

// 2. Tidak boleh memberikan nama variable dengan syntax bawaan dari Javascript
// var var
// var console.log

// 3. Penamaan variable hanya boleh diawali dengan huruf, _, $ (tidak boleh diawali dengan angka dan special character lainnya)
// var 1namaku
// var #namaku
var namaKu
var $namaKu
var _namaKu
var student1purwadhika

// 4. Penamaan variable tidak boleh menggunakan spasi (sambungkan dengan _ atau gunkana 'camelCase')
var student_purwadhika
var studentPurwadhika 
var studentPurwadhikaBsd

// "Javascript Case sensitive"
var namaBuah = 'Semangka'
var namabuah = 'Apel'
console.log(namaBuah)

var NamaBuah

// Modern Syntax Declaration ---> Declare variable dengan syntax terbaru : let & const (ES6)
// let : let nama_variable
let namaLecture = 'Defryan'
let asalLecture = 'Jawa Timur'
let usiaLecutre = 22

// const -> Constant -> Variable yang dideclare menggunakan const, valuenya tidak dapat diubah
const color = 'Biru'
// color = 'Merah'
// console.log(color)

// Perbedaan antara var x let
// var : Bisa membuat variable dengan nama yg sama lebih dari 1
var game1 = 'PES 2021'
var game2 = 'FIFA 2021'
// ...
// ...
// ...
// ...
// ...
// console.log(game)

// let & const : Tidak bisa membuat variable dengan nama yg sama lebih dari 1
let laptop1 = 'Asus'
let laptop2 = 'Lenovo'
// ...
// ...
// ...
console.log(laptop1)

// Perbedaan var, let x const
// var, let : Valuenya dapat diubah
// const    : Valuenya tidak dapat diubah



var siswa1 = 'Haekal'
var siswa2 = 'Safira'
// ...
// ...
// ...
var siswa30 = 'Kiki'
var siswa30 = 'Kevin'

console.log(siswa30)

let student1 = 'Defryan'
let student2 = 'Tridya'
// ...
let student30 = 'Isfandy'
let student31 = 'Ryan'
console.log(student30)

