const products = [
    { id: 1, name: 'Banana', price: 1.99, category: 'Food' },
    { id: 2, name: 'Shampoo', price: 5.49, category: 'Personal Care' },
    { id: 3, name: 'Laptop', price: 999.99, category: 'Electronics' },
    { id: 4, name: 'Apple', price: 0.99, category: 'Food' },
    { id: 5, name: 'T-Shirt', price: 15.99, category: 'Clothing' }
]

console.log(products);


function displayProducts(arr) {
    arr.forEach(productObj => {
        if (productObj.price) {
            console.log(`${productObj.name} - $${productObj.price}`);
        }
        if (productObj.priceWithTax) {
            console.log(`${productObj.name} - $${productObj.priceWithTax}`);
        }
    });
}

displayProducts(products)


const productsWithTax = products.map(productObj => {

    productObj = {...productObj}
    const priceAfterTax = productObj.price + (productObj.price * 0.10)
    productObj.priceWithTax = Number(priceAfterTax.toFixed(2))
    delete productObj.price
    return productObj

    // return ({
    //     id: productObj.id,
    //     name: productObj.name,
    //     category: productObj.category,
    //     priceWithTax: Number((productObj.price + (productObj.price * 0.10)).toFixed(2))
    // })

    


})


console.log(productsWithTax);


displayProducts(productsWithTax)



const foodProducts = productsWithTax.filter(productObj => {
    return productObj.category == "Food"
})

console.log(foodProducts);

displayProducts(foodProducts)



const affordableProducts = productsWithTax.filter(productObj => {
    return productObj.priceWithTax > 10
})


console.log(affordableProducts);

const affordableProductsStrings = affordableProducts.map(productObj => {
    return `${productObj.name} - $${productObj.priceWithTax}`
})

console.log(affordableProductsStrings);

let totalPrice = 0



for (let i = 0; i < productsWithTax.length; i++) {
    
    totalPrice += productsWithTax[i].priceWithTax
    
}

console.log(`Total price of all product is = ${totalPrice.toFixed(2)}`);






