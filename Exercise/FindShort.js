// FIND SHORT
// Ex. Purwadhika Digital School ---> 6

function FindShort(kalimat){
    kalimatToSplit = kalimat.split(' ') // [Ryan, Safira, Aisyah]
    
    let karakterTerpendek = kalimatToSplit[0].length // 4

    for(let i=1; i<kalimatToSplit.length; i++){
        if(kalimatToSplit[i].length < karakterTerpendek){
            karakterTerpendek = kalimatToSplit[i].length
        }
    }

    console.log(karakterTerpendek)
}

FindShort('Purwadhika Digital School')
FindShort('ABCDE AB ABCDEFG')
FindShort('Ryan', 'Safira', 'Aisyah')