function addListItem() {
    const ul = document.getElementById("list")
    let newItemCount = ul.childElementCount + 1
    let li = document.createElement("li")
    li.textContent = `New Item ${newItemCount}`
    ul.append(li)
}

const addButton = document.getElementById("addButton")

addButton.addEventListener("click", () => {
    addListItem()
    
})

function removeLastListItem() {
    const ul = document.getElementById("list")
    let lastUlItem = ul.lastElementChild

    if (lastUlItem != null) {
        ul.removeChild(lastUlItem)
    }
    
}

const removeButton = document.getElementById("removeButton")

removeButton.addEventListener("click", () => {
    removeLastListItem()
    
})