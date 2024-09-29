const numbers = [1, 2, 3, 4, 5]

numbers.forEach(function (element) {
    console.log(element);

})

numbers.forEach(function (element) {
    console.log(element * 2);

})

let squaredNumbers = numbers.map(function (element) {
    return element * element
})

console.log(squaredNumbers);


squaredNumbers = numbers.map((element) => {
    return element * element
})

console.log(squaredNumbers);


let evenNumbers = numbers.filter(function(element) {
    return element % 2 == 0
})

console.log(evenNumbers);


evenNumbers = numbers.filter((element) => {
    return element % 2 == 0
})

console.log(evenNumbers);

