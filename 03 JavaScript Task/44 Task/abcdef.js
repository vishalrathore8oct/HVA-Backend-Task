const colors = ["red", "green", "blue"]

console.log(colors[0]);

colors[1] = "yellow"

console.log(colors[1]);

colors[colors.length] = "pink"

console.log(colors[colors.length - 1]);

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

i = 0
while (i < colors.length) {
    console.log(colors[i]);
    i++
}


for (const element of colors) {
    console.log(element);
}

console.log(typeof colors);

console.log(colors.length);

colors.push("magenta")

console.log(colors);


colors.pop()

console.log(colors);


console.log(colors.indexOf("blue"));

colors["owner"] = "Vishal"

console.log(colors);

for (const eachColor in colors) {
    console.log(`${eachColor}: ${colors[eachColor]}`);
}


