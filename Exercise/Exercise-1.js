// PATTERN
// Ex.
//  1 2 3
//  2 4 6
//  3 6 9

let result = ''
for(let i=1; i<=3; i++){
    for(let j=1; j<=3; j++){
        result += `${j * i} `
    }
    result += '\n'
}

console.log(result)