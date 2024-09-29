const topper = {
    name: "Anjali Singh",
    email: "anjali@example.com",
    age: 22,
    address: {
        country: "India",
        city: "Delhi",
        pin_code: 110001
    },
    greet: function() {
        console.log(`Hello, ${this.name}!`);
    }
}

topper.greet()

console.log(topper);