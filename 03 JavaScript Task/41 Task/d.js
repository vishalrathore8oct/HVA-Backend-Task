const friend = {
    name: "Amit Kumar",
    email: "amit@gmail.com",
    age: 22,
    address: {
        country: "Canada",
        city: "Fathepur",
        pin_code: 325533
    },
    greet: function () {
        console.log(`Hello ${this.name}!`);
    }
}

friend.greet()

console.log(friend);