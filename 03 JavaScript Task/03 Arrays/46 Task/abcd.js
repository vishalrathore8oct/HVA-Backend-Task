const temperatures = [-3, 14, 22, 5, -10]

temperatures.forEach(function(ele) {
    console.log(ele);
    
})

temperatures.forEach((ele) => {
    console.log(ele);
    
})

temperatures.forEach(function(ele) {
    console.log((ele * (9/5)) + 32);
    
})

temperatures.forEach((ele) => {
    console.log((ele * (9/5)) + 32);
    
})


let temperaturesInFahrenheit = temperatures.map(function(ele) {
     return ((ele * (9/5)) + 32)
})

console.log(temperaturesInFahrenheit);

temperaturesInFahrenheit = temperatures.map((ele) => {
    return ((ele * (9/5)) + 32)
})

console.log(temperaturesInFahrenheit);


let belowFreezing = temperatures.filter(function(ele) {
    return ele < 0
})

console.log(belowFreezing);

belowFreezing = temperatures.filter((ele) => {
    return ele < 0
})

console.log(belowFreezing);
