const people = [
    {
        name: 'vishal',
        age: 30
    },
    {
        name: 'amit',
        age: 25
    },
    {
        name: 'kaustubh',
        age: 35
    },
    {
        name: 'ravi',
        age: 28
    },
    {
        name: 'patre',
        age: 32
    }
]

function calculateAverageAge(people) {
    let sumOfAllPerson = 0
    let sumOfAllAges = 0
    people.forEach(element => {
        sumOfAllAges += element.age
        sumOfAllPerson++
    });

    let averageAge = sumOfAllAges / sumOfAllPerson
    return `The average age will be ${averageAge}`
}

console.log(calculateAverageAge(people));
