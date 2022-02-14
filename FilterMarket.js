// ### Function Filter by Name
function FilterByName(){
    let filterName = document.getElementById('filterName').value // Lenovo; lenovo
    filterName = filterName.toLowerCase() // lenovo; lenovo

    let dataFilterByName = dataProducts.filter(value => {
        let nameToLowerCase = value.name.toLowerCase()

        return nameToLowerCase.includes(filterName) // Apakah karakter inputan user terdapat didalam value.namenya?
    })
    // [
    //     {
    //         name: 'ASUS TUF',
    //         price: 12500000,
    //         stock: 50, 
    //         image: 'https://img.tek.id/img/content/2019/07/23/18559/tuf-gaming-fx505-dt-laptop-gaming-murah-yang-hampir-sempurna-Lx7LHkyT4i.jpg',
    //         category: 'Laptop'
    //     }
    // ]

    return RenderDataFilter(dataFilterByName)
}   

// ### Function Rendering Data Filter
function RenderDataFilter(newArr){
    let output = ''
    newArr.forEach((value, index) => {
        output += `
                <tr>
                    <td>
                        ${index}
                    </td>
                    <td>
                        ${value.name}
                    </td>
                    <td>
                        ${value.price}
                    </td>
                    <td>
                        ${value.stock}
                    </td>
                    <td>
                        ${value.category}
                    </td>
                    <td>
                        <image src="${value.image}" width="100px" />
                    </td>
                    <td>
                        <input type="button" value="Edit" onClick="showDataProducts(${index})">
                        <input type="button" value="Delete" onClick="DeleteDataProduct(${index})">
                        <input type="button" value="+ Add To Cart" onClick="addToCart(${index})">
                    </td>
                </tr>
            `
    })

    let getTable = document.getElementById('tableProducts').getElementsByTagName('tbody')[0]
    console.log(getTable)
    getTable.innerHTML = output
}