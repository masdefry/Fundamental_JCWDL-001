// ARRAY SPECIAL METHOD
// .forEach
// Indirect Callback 
let students = ['Kevin', 'Kiki', 'Safira']
let cb = (value) => {
    console.log(value)
}

students.forEach(cb)

// Direct Callback
students.forEach((value, index) => {
    console.log(`Index Ke-${index} = ${value}`)
})

// .map
// - Cb function selalu me-return suatu nilai, dimana nilai yg di return akan dimasukan kedalam array baru
//   yg dibuat secara internal oleh .map tanpa kita harus membuatnya
// - Karena menghasilkan array bentuk baru, maka kita sering gunakan untuk memodifikasi data
let days = ['Senin', 'Selasa', 'Rabu']

let result = days.map((value) => { // ['Senin', 'Selasa', 'Rabu']
    return value
})
console.log(result)

// Semisal menggunakan forEach
let newDays = []
days.forEach((value) => {
    newDays.push(value)
})
console.log(newDays)

// Ex. 
let studentsPwd = [
    ['Safira', 'Cewek'],
    ['Kiki', 'Cowok'],
    ['Rian', 'Cowok']
]
// Cewek: Mrs
// Cowok: Mr

let printStudentsPwd = studentsPwd.map((value) => {
    // value ['Safira', 'Cewek']
    if(value[1] === 'Cewek'){
        return `Mrs. ${value[0]}`
    }else if(value[1] === 'Cowok'){
        return `Mr. ${value[0]}`
    }
})

console.log(printStudentsPwd)

// .filter
// - Mirip dengan .map
// - Array baru yg dihasilkan panjangnya tidak sama dengan array aslinya
let dataAcak = [10, 'Javascript', null, undefined, 'Purwadhika']
let newData = dataAcak.filter((value) => {
    return typeof(value) === 'string'
})
console.log(dataAcak)
console.log(newData)
