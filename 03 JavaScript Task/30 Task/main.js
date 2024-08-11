// 1. 
function addNumbers(num1, num2) {
    return num1 + num2
}
function multiplyNumbers(num1, num2) {
    return num1 * num2
}
function substractNumbers(num1, num2) {
    return num1 - num2
}
function divideNumbers(num1, num2) {
    if (num2 == 0) {
        return "Error: Num2 should not be 0"
    }
    return num1 / num2
}
// 2. 
function performArithmetic(num1, num2, operation) {
    return operation(num1, num2)
}
// 3. 
console.log(performArithmetic(5, 3, addNumbers));
console.log(performArithmetic(5, 3, multiplyNumbers));
console.log(performArithmetic(5, 3, substractNumbers));
console.log(performArithmetic(5, 3, divideNumbers));