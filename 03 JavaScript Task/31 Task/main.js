// 1. 
function areaOfRectangle(length, width) {
    const area = length * width
    return area
}
function areaOfCircle(radius) {
    const area = 3.14 * (radius**2)
    return area
}
function areaOfTriangle(base, height) {
    const area = 0.5 * base * height
    return area
}
// 2. 
function calculatePaintingCost(dimension1, dimension2, calculateArea) {
    const area = calculateArea(dimension1, dimension2)
    const costPerUnit = 2
    const totalCost = costPerUnit * area
    return totalCost
}
// 3. 
console.log(calculatePaintingCost(5, 10, areaOfRectangle));
console.log(calculatePaintingCost(3, null,  areaOfCircle));
console.log(calculatePaintingCost(6, 8, areaOfTriangle));
