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
// function sapa(nama = 'Anonymous'){
//     console.log(`Hello, ${nama}!`)
// }

// sapa('Rian')
// sapa()

// Ex. Function inside scope
if(1 < 2){
    function sapa(){
        console.log('Hai, Student Purwadhika!')
    }
}

sapa()