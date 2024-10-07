const myDiv = document.getElementById("myDiv")
console.log(myDiv.textContent);

const myClass = document.getElementsByClassName("myClass")

for (let i = 0; i < myClass.length; i++) {
    console.log(myClass[i].textContent);
}

const myPara = document.getElementsByTagName("p")

for (let i = 0; i < myPara.length; i++) {
    console.log(myPara[i].textContent);
}

const allSpan = document.querySelectorAll(".highlight")

for (let i = 0; i < allSpan.length; i++) {
    console.log(allSpan[i].textContent);
}

const firstSpan = document.querySelector(".highlight")

console.log(firstSpan.textContent);

