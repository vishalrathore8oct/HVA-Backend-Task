const myArr = [11, 22, 33, 44, 55]

function filterArray(arr, callback) {
    let newArr = []

    for (let index = 0; index < arr.length; index++) {
        if (callback(arr[index])) {
            newArr.push(arr[index])
        }
        
    }

    return newArr
}

console.log(filterArray(myArr, (element) => {
    return element > 43
}));
