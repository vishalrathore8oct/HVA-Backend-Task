function calculateAreaWithDefaults(width = 1, height = 1) {
    const areaOfRectangle = width * height
    return areaOfRectangle
}

console.log(calculateAreaWithDefaults());
console.log(calculateAreaWithDefaults(5, 10));

