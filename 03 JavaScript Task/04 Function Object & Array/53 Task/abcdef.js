let expenses = [
    { id: 1, name: 'Banana', amount: 199, date: 5 },
    { id: 2, name: 'Shampoo', amount: 549, date: 3 },
    { id: 3, name: 'Laptop', amount: 999, date: 2 },
    { id: 4, name: 'Apple', amount: 700, date: 6 },
    { id: 5, name: 'T-Shirt', amount: 159, date: 4 }
]

console.log(expenses);

class Expense {
    constructor(id, name, amount, date) {
        this.id = id, 
        this.name = name, 
        this.amount = amount, 
        this.date = date
    }
}

let newClassExpen = new Expense(6, "computer", 888, 9)
console.log(newClassExpen);

function displayExpenses(arr) {
    arr.forEach(productObj => {
        console.log(`${productObj.name} - $${productObj.amount} (${productObj.date}/08/2024)`);
        
    });
}

displayExpenses(expenses)

function addExpense(id, name, amount, date) {
    const newProObj = new Expense(id, name, amount, date)
    expenses.push(newProObj)

}

addExpense(6, "computer", 888, 8)

console.log(expenses);


function updateExpense(expenId, expenAmount) {
    const targetPro = expenses.find((element) => {
        return element.id == expenId
    })

    targetPro.amount = expenAmount

}

updateExpense(3, 300)

console.log(expenses);


function updateExpenseWithMap(expenId, expenAmount) {
    expenses.map(productObj => {
        if (productObj.id == expenId) {
            productObj.amount = expenAmount
        }
    })
}

updateExpenseWithMap(6, 600)

console.log(expenses);


function removeExpense(expenId) {

    const newArr = expenses.filter(productObj => {
        return productObj.id != expenId
    })

    expenses = newArr
    
}

removeExpense(1)

console.log(expenses);