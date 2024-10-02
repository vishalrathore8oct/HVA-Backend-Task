const myArr = [11, 22, 33, 44, 55]

function forEachArray(arr, callback) {
    for (let index = 0; index < arr.length; index++) {
        callback(arr[index], index, arr)
    }
}

forEachArray(myArr, (element, index, arr1) => {
    console.log(element, index, arr1);

})
