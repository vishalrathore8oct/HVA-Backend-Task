const myArr = [11, 22, 33, 44, 55]


function mapArray(arr, callback) {
    let newArr = []
    for (let index = 0; index < arr.length; index++) {
        newArr.push(callback(arr[index]))
    }
    
    return newArr
    
}

console.log(mapArray(myArr, (element) => {
    return element * 2

}));




