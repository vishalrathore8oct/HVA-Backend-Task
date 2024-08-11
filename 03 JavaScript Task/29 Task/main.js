// 1. 
function doubleNumber(num) {
    return num * 2
}

function squareNumber(num) {
    return num * num
}

function incrementNumber(num) {
    return num + 1
}
// 2. 
function performOperation(num, operation) {
    return operation(num)
}
// 3. 
console.log(performOperation(5, doubleNumber));
console.log(performOperation(5, squareNumber));
console.log(performOperation(5, incrementNumber));
