let inventory = [
    { id: 1, author: 'Vishal', price: 199, quantity: 5, title: "Horror" },
    { id: 2, author: 'Amit', price: 249, quantity: 3, title: "Suspense" },
    { id: 3, author: 'Nikhil', price: 399, quantity: 2, title: "Thriller" },
    { id: 4, author: 'Shivam', price: 499, quantity: 6, title: "Action" },
    { id: 5, author: 'Deepak', price: 599, quantity: 4, title: "Comedy" }
]

console.log(inventory);


class Book {
    constructor(id, title, author, price, quantity) {
        this.id = id, 
        this.title = title, 
        this.author = author, 
        this.price = price, 
        this.quantity = quantity
    }
}

let newClassPro = new Book(6, "Drama", "Sangeeta", 699, 7)
console.log(newClassPro);




function displayBooks(arr) {
    arr.forEach(productObj => {
        console.log(`${productObj.title} - ${productObj.author} ($${productObj.price})`);
        
    });
}

displayBooks(inventory)


function addBook(id, title, author, price, quantity) {
    const newBookObj = new Book(id, title, author, price, quantity)
    inventory.push(newBookObj)

}

addBook(6, "Drama", "Sangeeta", 699, 7)

console.log(inventory);


function updateBook(proId, proQuan) {
    const targetPro = inventory.find((element) => {
        return element.id == proId
    })

    targetPro.quantity = proQuan

}

updateBook(3, 300)

console.log(inventory);


function updateBookWithBook(proId, proQuan) {
    inventory.map(productObj => {
        if (productObj.id == proId) {
            productObj.quantity = proQuan
        }
    })
}

updateBookWithBook(6, 600)

console.log(inventory);


function removeBook(proId) {

    const newArr = inventory.filter(productObj => {
        return productObj.id != proId
    })

    inventory = newArr
    
}


removeBook(1)

console.log(inventory);


