
document.querySelector("button").addEventListener("click", () => {
    document.querySelector("p").textContent = "Text has been changed!"
})

document.querySelector("div").addEventListener("mouseover", (e) => {
    let targetedDiv = e.target
    targetedDiv.style.backgroundColor = "yellow"
    targetedDiv.style.color = "blue"
    
})

document.getElementById("in-button").addEventListener("click", () => {
    
   document.getElementById("htmlContent").innerHTML = '<p>Hello this is para <h1>This is span</h1></p>'
    
})

document.getElementById("tog-btn").addEventListener("click", () => {
    togglePara = document.getElementById("tog-para")
    togglePara.classList.toggle('hidden')

})