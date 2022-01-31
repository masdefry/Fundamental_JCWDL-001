// SCOPE VARIABLE JAVASCRIPT
// - Global Scope
// - Local Scope

// Global Scope ---> Dapat diakses dimana saja (termasuk local scope)
var nama = 'Defryan'
console.log(nama)

let kampus = 'Purwadhika'
console.log(kampus)

// Local Scope ---> {...} / (...)
//             ---> Hanya bisa diakses di dalam scope tersebut / di nested scope berikutnya

{
    let student = 'Haekal'
}

// console.log(student)

// var x let & const
// var : Tidak mengenal yang namanya scope
var namaStudent = 'Safira'
{
    console.log(namaStudent)
}

// let & const : - Mengenal global scope maupun local scope
//               - Ketika di declare didalam local scope, maka dia hanya dapat diakses didalam scope itu saja 
//                 atau didalam scope berikutnya

let namaSiswa = 'Kevin'
{
    console.log(namaSiswa)
}

{
    let studentPwd = 'Aisyah'
}
// console.log(studentPwd)

{
    let siswaPwd = 'Rian'
    {
        console.log(siswaPwd)
    }
}

// Ex.
var food = 'Seblak'
{
    var food = 'Pizza'
    {
        var food = 'Gorengan'
    }
}

console.log(food)

let laptop = 'Asus'
{
    let laptop = 'Lenovo'
}
console.log(laptop)

for(let i=0; i<3; i++){
    console.log(i)
    for(let i=0; i<3; i++){
        console.log(i)
    }
}

const number = 10
{
    console.log(number)
    {
        console.log(number)
    }
}
console.log(number)













