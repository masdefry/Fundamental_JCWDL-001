// FIND SHORT
// Ex. Purwadhika Digital School ---> 6

function FindShort(kalimat){
    kalimatToSplit = kalimat.split(' ')
    
    let karakterTerpendek = kalimatToSplit[0].length // 10 ---> 7 < 10? 7 ---> 6 < 7? 6

    for(let i=1; i<kalimatToSplit.length; i++){
        if(kalimatToSplit[i].length < karakterTerpendek){
            karakterTerpendek = kalimatToSplit[i].length
        }
    }

    console.log(karakterTerpendek)
}

FindShort('Purwadhika Digital School')