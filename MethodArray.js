// METHOD ARRAY
// Push ---> Menambah data baru setelah index terakhir
let students = ['Haekal', 'Kevin', 'Rian', 'Kiki', 'Safira', 'Defry', 'Aisyah']
students.push('Asisyah')
students.push('Defryan')
console.log(students)

// Unshift ---> Menambah data baru sebelum index paling awal
// students.unshift('Budi')
// students.unshift('Arif')
console.log(students)

let newArr = []
for(let i=0; i<students.length; i++){
    if(i === 1){
        newArr.push('Ryan Defryan')
        newArr.push(students[i])
    }else{
        newArr.push(students[i])
    }
}

console.log(newArr)