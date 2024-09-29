class Student {
    constructor(name, email, age, country, city, pin_code) {
        this.name = name, 
        this.email = email, 
        this.age = age, 
        this.address = {
            country: country, 
            city: city, 
            pin_code: pin_code 
        }
    }

    greet() {
        console.log(`Hello ${this.name}!`);
    }

    getFullAddress() {
        return `${this.address.country}, ${this.address.city} - ${this.address.pin_code}`
    }
}


const yourSelf = new Student("Vishal Rathore", "vishal@example.com", 24, "India", "Bangalore", 560038);
const yourFriend = new Student("Rahul Sharma", "rahul@example.com", 23, "India", "Mumbai", 400001);
const anotherStudent = new Student("Anjali Singh", "anjali@example.com", 22, "India", "Delhi", 110001);

console.log(yourSelf);
console.log(yourFriend);
console.log(anotherStudent);


yourSelf.greet()
yourFriend.greet()
anotherStudent.greet()


console.log(yourSelf.getFullAddress());
console.log(yourFriend.getFullAddress());
console.log(anotherStudent.getFullAddress());
