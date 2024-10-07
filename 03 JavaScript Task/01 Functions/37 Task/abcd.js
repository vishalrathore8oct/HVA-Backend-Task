function higherOrderFunction(num, callBack) {
    callBack(num)
}

function callBackFunction(num) {
    console.log(num);
}

higherOrderFunction(5, callBackFunction)

higherOrderFunction(10, function (num) {
    console.log(num);
})

higherOrderFunction(4, function (num) {
    console.log(num * num);
})
