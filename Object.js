// OBJECT
// Sama seperti array, berfungsi untuk menyimpan data lebih dari 1
// Jika di array, data diberi label index penomoran. Object diberi label menggunakan pasangan "key" & "value"

// ANALOGI ---> Semua benda yang kita lihat, itu merupakan sebuah object
//         ---> Object itu memiliki properti

// Ex. Object : Laptop
//     Properties :
//          - Merk : Lenovo Ideapad
//          - Warna : Hitam
//          - Ukuran Layar : 15.6
//          - ...

// CRUD (Create, Read, Update, Delete)
// CREATE
// Syntax Literal
let laptop1 = {
    merk: 'Lenovo Ideapad',
    warna: 'Hitam',
    ukuran: 15.6
}

let laptop2 = {
    merk: 'ASUS TUF',
    warna: 'Putih',
    ukuran: 15
}

// Syntax New
let laptop3 = new Object()
laptop3.merk = 'HP Pavilion'
laptop3.warna = 'Hitam'
laptop3.ukuran = 15.6

// READ 
console.log(laptop3)
console.log(laptop3.merk)
console.log(laptop3.warna)
console.log(laptop3.ukuran)

let laptop4 = {
    merk: 'ASUS TUF',
    warna: {
        warna1: 'Hitam',
        warna2: 'Putih',
        warna3: 'Silver'
    },
    ukuran: 15.6
}
// console.log(laptop4.warna3) ---> Undefined
console.log(laptop4.warna.warna3)
// console.log(laptop4.warna[2]) ---> Undefined

let laptop5 = {
    merk: 'Lenovo Ideapad',
    warna: 'Putih',
    ukuran: [15.6, 15, 14.5, 14, 13.5]
}
console.log(laptop5.ukuran[4])

// UPDATE
laptop5.merk = 'Lenovo Ideapad Gaming'
console.log(laptop5)
laptop5.ukuran[4] = 20
console.log(laptop5)

// DELETE
delete laptop5.ukuran 
console.log(laptop5)



// #####



// CLASS OBJECT
// Blueprint untuk membuat banyak object dengan property yang sama

// Case. Punya banyak data siswa yg disimpan kedalam variable object
// let siswa1 = {
//     nama: 'Kevin',
//     umur: 17,
//     asal: 'Jawa Timur'
// }

// let siswa2 = {
//     nama: 'Safira',
//     umur: 17,
//     asal: 'Jawa Timur'
// }

// let siswa3 = {
//     nama: 'Haekal',
//     umur: 17,
//     asal: 'Jawa Timur'
// }

class Siswa{
    constructor(a, b, c){ // Create Properties
        this.nama = a 
        this.umur = b 
        this.asal = c
    }
}

let siswa1 = new Siswa('Kevin', 17, 'Jawa Timur')
console.log(siswa1)
let siswa2 = new Siswa('Aisyah', 17, 'Jawa Timur')
console.log(siswa2)