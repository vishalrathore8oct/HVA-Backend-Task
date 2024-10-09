document.querySelector("button").addEventListener("click", () => {
    console.log("Button click event executed");

})

document.getElementsByTagName("div")[0].addEventListener("mouseover", () => {
    console.log("Mouseover event on div executed");
})


document.querySelector("input").addEventListener("input", () => {
    console.log("Input event executed");
   
})
