let menu = 2
if(menu === 1){
    document.getElementsByClassName('menuCustomer')[0].setAttribute('hidden', true)
    document.getElementsByClassName('menuCustomer')[1].setAttribute('hidden', true)
}else{
    document.getElementsByClassName('menuKasir')[0].setAttribute('hidden', true)
}

// ### Show Data Products
function showDataProducts(idx){ // idx ---> Didapat ketika kita klik button edit
    let output = ''
    dataProducts.forEach((value, index) => {
        if(idx == index){
            output += `
                <tr>
                    <td>
                        ${index}
                    </td>
                    <td>
                        <input type="text" class="editProduct" value="${value.name}">
                    </td>
                    <td>
                        <input type="number" class="editProduct" value="${value.price}">
                    </td>
                    <td>
                        <input type="number" class="editProduct" value="${value.stock}">
                    </td>
                    <td>
                        <select class="editProduct">
                            <option value="${value.category}">${value.category}</option>
                            <option value="Computer">Computer</option>
                            <option value="Handphone">Handphone</option>
                            <option value="Air Conditioner">Air Conditioner</option>
                            <option value="Lemari Es">Lemari Es</option>
                        </select>
                    </td>
                    <td>
                        <image src="${value.image}" width="100px" />
                    </td>
                    <td>
                        <input type="button" value="Save" onClick="onSaveDataProduct(${index})">
                        <input type="button" value="Cancel" onClick="showDataProducts()">
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
                        ${value.category}
                    </td>
                    <td>
                        <image src="${value.image}" width="100px" />
                    </td>
                    <td>
                        <input type="button" value="Edit" onClick="showDataProducts(${index})" ${menu===2? 'hidden':''}>
                        <input type="button" value="Delete" onClick="DeleteDataProduct(${index})"  ${menu===2? 'hidden':''}>
                        <input type="button" value="+ Add To Cart" onClick="addToCart(${index})"  ${menu===1? 'hidden':''}>
                    </td>
                </tr>
            `
        }
    })

    let getTable = document.getElementById('tableProducts').getElementsByTagName('tbody')[0]
    console.log(getTable)
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
    let productCategory = inputs[3].value
    let productImage = inputs[4].value 

    if(productName && productPrice && productStock && productImage && productCategory){
        // Push Datanya
        dataProducts.push(
            {
                name: productName,
                price: productPrice,
                stock: productStock,
                image: productImage,
                category: productCategory
            }
        )

        showDataProducts()

        inputs[0].value = ''
        inputs[1].value = ''
        inputs[2].value = ''
        inputs[3].value = ''
        inputs[4].value = ''

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

// ### Edit Data Product
function onSaveDataProduct(index){
    let inputEdit = document.getElementsByClassName('editProduct')
    
    let newProductName = inputEdit[0].value
    let newProductPrice = inputEdit[1].value 
    let newProductStock = inputEdit[2].value 
    let newProductCategory = inputEdit[3].value

    if(newProductName && newProductPrice && newProductStock && newProductCategory){
        dataProducts[index].name = newProductName
        dataProducts[index].price = newProductPrice
        dataProducts[index].stock = newProductStock
        dataProducts[index].category = newProductCategory

        document.getElementById('errorMessage1').innerHTML = ""

        showDataProducts()
    }else{
        document.getElementById('errorMessage1').innerHTML = "Data Must Be Filled!"
    }
}

// ### Show Data Carts
function showDataCarts(){
    let output = ''
    dataCarts.forEach((value, index) => {
        output += `
            <tr>
                <td>
                    ${value.id}
                </td>
                <td>
                    ${value.name}
                </td>
                <td>
                    <image src="${value.image}" width="75px">
                </td>
                <td>
                    ${value.price}
                </td>
                <td>
                    ${value.quantity}
                </td>
                <td>
                    ${value.total}
                </td>
                <td>
                    <input type="button" value="Delete">
                </td>
            </tr>
        `
    })
    document.getElementById('tableCarts').getElementsByTagName('tbody')[0].innerHTML = output
    document.getElementById('totalCarts').innerHTML = `Carts : ${dataCarts.length}`
    // Step. Disable Button ketika cart = 0
    if(dataCarts.length > 0){
        document.getElementsByClassName('menuCustomer')[1].removeAttribute('disabled')
    }
}

// ### Add To Cart
function addToCart(index){
    let quantity = Number(prompt('Silahkan Masukan Quantity :'))

    if(dataProducts[index].stock < quantity || quantity === 0){
        alert('Quantity Melebihi Stock / Quantity Masih Kosong')
    }else{
        // Step. Melakukan pengecekan apakah data product sudah ada didalam cart?
        let checkProductExist = false 
        let indexProductExist
        // [{id: 0, name: "Lenovo Ideapad Gaming", quantity: 4}]
        dataCarts.forEach((value, idx) => {
            if(index === value.id){
                checkProductExist = true 
                indexProductExist = idx
            }
        })

        // Step. Apabila sudah ada didalam cart
        if(checkProductExist){ // checkProductExist === true
            let totalQuantity = dataCarts[indexProductExist].quantity + quantity

            if(totalQuantity > dataProducts[index].stock){
                alert('Total Quantity Melebihi Stock!')
            }else{
                dataCarts[indexProductExist].quantity += quantity
                dataCarts[indexProductExist].total = dataCarts[indexProductExist].quantity * dataCarts[indexProductExist].price
                showDataCarts()
            }
        }else{ // Step. Apabila datanya belum ada didalam cart
            let dataToSave = {
                id: index,
                name: dataProducts[index].name,
                image: dataProducts[index].image, 
                price: dataProducts[index].price,
                quantity: quantity,
                total: quantity * dataProducts[index].price
            }
    
            dataCarts.push(dataToSave)
    
            document.getElementById('totalCarts').innerHTML = `Carts : ${dataCarts.length}`
            showDataCarts()
        }
    }
}

// ### Payment
function onPayment(){
    dataCarts.forEach((value) => {
        let dataToSave = {
            id: value.id, 
            name: value.name,
            price: value.price,
            quantity: value.quantity,
            total: value.total
        }

        dataTransaction.push(dataToSave)
    })
    
    let output = ''
    dataTransaction.forEach((value, index) => {
        output += `
            <tr>
                <td>
                    ${value.id}
                </td>
                <td>
                    ${value.name}
                </td>
                <td>
                    ${value.price}
                </td>
                <td>
                    ${value.quantity}
                </td>
                <td>
                    ${value.total}
                </td>
            </tr>
        `
    })
    dataCarts.forEach(value => {
        dataProducts[value.id].stock -= value.quantity
    })
    showDataProducts()

    dataCarts = []
    showDataCarts()
    
    let tablePayment = document.getElementById('tablePayment').getElementsByTagName('tbody')[0]
    tablePayment.innerHTML = output
}