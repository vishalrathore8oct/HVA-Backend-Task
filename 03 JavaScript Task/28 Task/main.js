// 1.
function higherOrderFunction(num, callback) {
    callback(num)
}
// 2.
function callbackFunction(num) {
    console.log(num);
}

higherOrderFunction(245, callbackFunction)
// 3. 
higherOrderFunction(10, function(num) {
    console.log(num);
})
// 4. 
higherOrderFunction(4, function(num) {
    console.log(num * num);
    
})
// 5. 
function newHigherOrderFunction(num1, num2, callback) {
    callback(num1, num2)
}

newHigherOrderFunction(3, 7, function(num1, num2) {
    console.log(num1 + num2);
})