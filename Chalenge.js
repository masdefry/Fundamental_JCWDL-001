// COUNT VOWELS
// Ex. Text : 'Purwadhika'
//     TotalVowels: 4

function CountVowels(text){
    let vowels = ['a', 'i', 'u', 'e', 'o']
    let totalVowels = 0

    for(let i=0; i<text.length; i++){
        if(vowels.includes(text[i])){
            totalVowels++
        }
    }

    console.log(totalVowels)
}

CountVowels('Purwadhika')

// SQUARE NUMBERS
// Ex.  1 2 3
//      2 4 6
//      3 6 9