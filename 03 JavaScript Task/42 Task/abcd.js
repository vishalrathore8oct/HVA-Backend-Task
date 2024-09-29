class Employee {
    constructor(name, email, age, department, position, salary) {
        this.name = name, 
        this.email = email, 
        this.age = age, 
        this.department = department, 
        this.position = position, 
        this.salary = salary
    }

    introduce() {
        console.log(`Hello I am ${this.name}, ${this.position}.`);
    }

    displaySalary() {
        console.log(`Salary: $${this.salary}`);
    }
}

const manager = new Employee("Nikhil Pratap", "nikhil@gui.org", 30, "Project Development", "Chief Manager", 1000000)

const newEmployee = new Employee("Shivam Dubey", "shivam@gui.org", 30, "UI Designer", "Junior Developer", 500000)

console.log(manager);

manager.introduce()
manager.displaySalary()

console.log(newEmployee);


newEmployee.introduce()
newEmployee.displaySalary()



