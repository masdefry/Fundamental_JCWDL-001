// ### Show Data Products
function showDataProducts(idx){
    let output = ''
    dataProducts.forEach((value, index) => {
        if(idx == index){
            output += `
                <tr>
                    <td>
                        ${index}
                    </td>
                    <td>
                        <input type="text" value="${value.name}">
                    </td>
                    <td>
                        <input type="number" value="${value.price}">
                    </td>
                    <td>
                        <input type="number" value="${value.stock}">
                    </td>
                    <td>
                        <image src="${value.image}" width="100px" />
                    </td>
                    <td>
                        <input type="button" value="Edit" onClick="showDataProducts(${index})">
                        <input type="button" value="Delete" onClick="DeleteDataProduct(${index})">
                    </td>
                </tr>
            `
        }else{
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
                        <image src="${value.image}" width="100px" />
                    </td>
                    <td>
                        <input type="button" value="Edit" onClick="showDataProducts(${index})">
                        <input type="button" value="Delete" onClick="DeleteDataProduct(${index})">
                    </td>
                </tr>
            `
        }
    })

    let getTable = document.getElementById('tableProducts').getElementsByTagName('tbody')[0]
    getTable.innerHTML = output
}
showDataProducts()

// ### Add Data Product
document.getElementById('buttonSubmit').addEventListener('click', AddDataProduct)
function AddDataProduct(){
    let inputs = document.getElementsByClassName('inputProduct')
    
    let productName = inputs[0].value 
    let productPrice = inputs[1].value 
    let productStock = inputs[2].value 
    let productImage = inputs[3].value 

    if(productName && productPrice && productStock && productImage){
        // Push Datanya
        dataProducts.push(
            {
                name: productName,
                price: productPrice,
                stock: productStock,
                image: productImage
            }
        )

        showDataProducts()

        inputs[0].value = ''
        inputs[1].value = ''
        inputs[2].value = ''
        inputs[3].value = ''

        document.getElementById('errorMessage').innerHTML = ''
    }else{
        document.getElementById('errorMessage').innerHTML = 'Data Must Be Filled!'
    }
}

// ### Delete Data Product
function DeleteDataProduct(index){
    let confirmBox = confirm(`
        Are you sure want to delete ${dataProducts[index].name}?
    `)

    if(confirmBox){ // confirmBox === true
        // Delete Data
        dataProducts.splice(index, 1)
        alert('Delete Product Success!')
        showDataProducts()
    }
}