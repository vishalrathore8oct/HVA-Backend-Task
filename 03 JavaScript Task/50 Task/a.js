const cart = [
    { name: 'Headphones', price: 1000, quantity: 1 },
    { name: 'Cycle', price: 25, quantity: 2 },
    { name: 'Game', price: 50, quantity: 4 },
    { name: 'Bulldog', price: 300, quantity: 5 },
    { name: 'Laptop', price: 75, quantity: 3 }
]

function calculateTotalPrice(cart) {
    let totalPrice = 0
    cart.forEach(element => {
        totalPrice += (element.price * element.quantity)
    });

    return `The total price of this cart is ${totalPrice}`
}

console.log(calculateTotalPrice(cart));
