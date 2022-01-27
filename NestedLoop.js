// NESTED LOOP ---> Loop didalam Loop

for(let i=0; i<3; i++){ // Outside Loop 
    for(let j=0; j<3; j++){ // Inside Loop
        console.log(`Outside Loop ${i}, Inside Loop ${j}`)
    }
}

// i = 0, 0 < 3? true ---> j = 0, 0 < 3? true -> console.log jalan
//                    ---> j = 1, 1 < 3? true -> console.log jalan
//                    ---> j = 2, 2 < 3? true -> console.log jalan
//                    ---> j = 3, 3 < 3? false -> Balik ke Outside Loop
// i = 1, 1 < 3? true ---> j = 0, 0 < 3? true -> console.log jalan
//                    ---> j = 1, 1 < 3? true -> console.log jalan
//                    ---> j = 2, 2 < 3? true -> console.log jalan
//                    ---> j = 3, 3 < 3? false -> Balik ke Outside Loop
// i = 2, 2 < 3? true ---> j = 0, 0 < 3? true -> console.log jalan
//                    ---> j = 1, 1 < 3? true -> console.log jalan
//                    ---> j = 2, 2 < 3? true -> console.log jalan
//                    ---> j = 3, 3 < 3? false -> Balik ke Outside Loop