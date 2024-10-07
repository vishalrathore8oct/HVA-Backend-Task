const student = {}

student.name = "Vishal Rathore"
student.email = "vishal.rathore8oct@gmail.com"
student.age = 23

console.log(student.name);

student.age = 10

console.log(student.age);

student.greet = function () {
    console.log(`Hello ${this.name}!`);
}

student.greet("Vishal")

student.address = {
    country: "India",
    city: "Agra",
    pin_code: 282001
}

console.log(student.address.country);

student.address.pin_code = 282006

console.log(student.address);
