let allDivs = document.querySelectorAll("div")
allDivs.forEach((divEle) => {
    divEle.addEventListener("click", function(e) {
        let targetEle = e.target
        targetEle.classList.toggle("red")
    })
})

const allBtn = document.querySelectorAll("button")

allBtn.forEach((btnEle) => {
    btnEle.addEventListener("click", (e) => {
        document.getElementById("multi-div").style.backgroundColor = e.target.id
        
    })
})