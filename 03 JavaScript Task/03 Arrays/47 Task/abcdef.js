const fruits = ["apple", "banana", "cherry", "date"]

fruits.forEach(function (element) {
    console.log(element[0].toUpperCase() + element.slice(1));

})

fruits.forEach((element) => {
    console.log(element[0].toUpperCase() + element.slice(1));

})

let totalCharacters = 0

fruits.forEach(function (element) {
    totalCharacters += element.length
})

console.log(totalCharacters);

let reversedFruits = fruits.map(function (element) {
    return element.split("").reverse().join("")
})

console.log(reversedFruits);

reversedFruits = fruits.map((element) => {
    return element.split("").reverse().join("")
})

console.log(reversedFruits);


let longFurits = fruits.filter(function (element) {
    return element.length > 5
})

console.log(longFurits);

longFurits = fruits.filter((element) => {
    return element.length > 5
})

console.log(longFurits);



let aFruitsUpper = fruits.filter(function (element) {
    return element.includes("a")
}).map(function (element) {
    return element.toUpperCase()
})

console.log(aFruitsUpper);


