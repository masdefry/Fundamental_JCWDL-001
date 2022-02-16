// ALPHABET POSITION

function AlphabetPosisition(kalimat){
    kalimat = kalimat.toLowerCase()
    console.log(kalimat)
    let huruf = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let output = ''

    for(let i=0; i<kalimat.length; i++){
        if(kalimat[i] !== ' '){
            output += (huruf.indexOf(kalimat[i]) + 1) + ' '
        }
    }

    console.log(output)
}

AlphabetPosisition('Defryan Muhammad')