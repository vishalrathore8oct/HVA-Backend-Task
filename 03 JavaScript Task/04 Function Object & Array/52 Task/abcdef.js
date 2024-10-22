let inventory = [
    { id: 1, name: 'Banana', price: 1.99, quantity: 5 },
    { id: 2, name: 'Shampoo', price: 5.49, quantity: 3 },
    { id: 3, name: 'Laptop', price: 999.99, quantity: 2 },
    { id: 4, name: 'Apple', price: 0.99, quantity: 6 },
    { id: 5, name: 'T-Shirt', price: 15.99, quantity: 4 }
]

console.log(inventory);


class Product {
    constructor(id, name, price, quantity) {
        this.id = id, 
        this.name = name, 
        this.price = price, 
        this.quantity = quantity
    }
}

let newClassPro = new Product(7, "computer", 9999, 10)
console.log(newClassPro);




function displayProducts(arr) {
    arr.forEach(productObj => {
        console.log(`${productObj.name} - $${productObj.price}`);
        
    });
}

displayProducts(inventory)


function addProduct(id, name, price, quantity) {
    const newProObj = new Product(id, name, price, quantity)
    inventory.push(newProObj)

}

addProduct(6, "computer", 9999, 10)

console.log(inventory);


function updateProduct(proId, proQuan) {
    const targetPro = inventory.find((element) => {
        return element.id == proId
    })

    targetPro.quantity = proQuan

}

updateProduct(3, 300)

console.log(inventory);


function updateProductWithMap(proId, proQuan) {
    inventory.map(productObj => {
        if (productObj.id == proId) {
            productObj.quantity = proQuan
        }
    })
}

updateProductWithMap(6, 600)

console.log(inventory);

function removeProduct(proId) {

    const newArr = inventory.filter(productObj => {
        return productObj.id != proId
    })

    inventory = newArr
    
}


removeProduct(1)

console.log(inventory);





