function newHigherOrderFunction(num1, num2, callBack) {
    callBack(num1, num2)
}

newHigherOrderFunction(3, 7, function (num1, num2) {
    console.log(num1 + num2);
})