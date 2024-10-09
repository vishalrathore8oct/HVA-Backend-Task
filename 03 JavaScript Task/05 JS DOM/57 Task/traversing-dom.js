const list1 = document.getElementById("list1")

let list1FirstItem = list1.firstElementChild

while (list1FirstItem != null) {
    console.log(list1FirstItem.textContent);
    list1FirstItem = list1FirstItem.nextElementSibling
}


const list2 = document.getElementById("list2")

let list2LastItem = list2.lastElementChild

while (list2LastItem) {
    console.log(list2LastItem.textContent);
    list2LastItem = list2LastItem.previousElementSibling
    
}

const list3 = document.getElementById("list3")

allList3Child = list3.children

for (let index = 0; index < allList3Child.length; index++) {
    const element = allList3Child[index];
    console.log(element.textContent);
    
}




