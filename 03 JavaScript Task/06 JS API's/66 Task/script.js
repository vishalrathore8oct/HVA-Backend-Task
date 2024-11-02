const form = document.getElementById("todo-form");
let pendingTodoList = document.getElementById("pending-todos-list");

let todos = JSON.parse(localStorage.getItem("todos")) || []
let editTodoId = -1;

renderTodos();

form.addEventListener("submit", (e) => {
    e.preventDefault();

    saveTodo();

    renderTodos();

    localStorage.setItem("todos", JSON.stringify(todos))
})

function saveTodo() {

    let title = document.getElementById("title");
    let description = document.getElementById("description");
    let date = document.getElementById("date");
    let priority = document.getElementById("priority");

    if (editTodoId >= 0) {

        let newArr = todos.map((todo, index) => {
            return {
                title: index == editTodoId ? title.value : todo.title,
                description: index == editTodoId ? description.value : todo.description,
                date: index == editTodoId ? date.value : todo.date,
                priority: index == editTodoId ? priority.value : todo.priority,
                checked: todo.checked
            }
        })

        todos = newArr;
        editTodoId = -1;

    } else {
        let todo = {
            title: title.value,
            description: description.value,
            date: date.value,
            priority: priority.value,
            checked: false
        }

        todos.push(todo)

        // console.log(todos);


    }

    title.value = "";
    description.value = "";
    date.value = "";
    priority.value = "";


}


function renderTodos() {

    if (todos.length == 0) {
        pendingTodoList.innerHTML = `<center><h1>No Previous Todos Found</center></h1>`
        return;
    }

    pendingTodoList.innerHTML = "";

    todos.forEach((todo, index) => {

        pendingTodoList.innerHTML += `
        <div class="todo" id="${index}">
            <i data-action="check"  class="${todo.checked ? "fa-solid fa-circle-check" : "fa-regular fa-circle"}"></i>
            <h2 class="${todo.checked ? "checked" : ""}" data-action="check">${todo.title}</h2>
            <p class="${todo.checked ? "checked" : ""}" >${todo.description}</p>
            <p class="${todo.checked ? "checked" : ""}" >${todo.date}</p>
            <p class="${todo.checked ? "checked" : ""}" >${todo.priority}</p>
            <i data-action="edit" class="fa-solid fa-pen-to-square"></i>
            <i data-action="delete" class="fa-solid fa-trash-can"></i>
        </div>
        `
    })
}

pendingTodoList.addEventListener("click", (e) => {
    let target = e.target;
    let parentElement = target.parentElement;

    // console.log(parentElement);

    if (parentElement.className !== "todo") return;

    // console.log(parentElement);

    const todo = parentElement;
    const todoId = todo.id;

    // console.log(todoId);

    const action = target.dataset.action;

    console.log(action);


    if (action === "delete") deleteTodo(todoId);
    if (action === "edit") editTodo(todoId);
    if (action === "check") checkTodo(todoId);

})

function checkTodo(todoId) {
    let newArr = todos.map((todo, index) => {
        return {
            title: todo.title,
            description: todo.description,
            date: todo.date,
            priority: todo.priority,
            checked: index == todoId ? !todo.checked : todo.checked
        }
    })

    todos = newArr;


    renderTodos();

    localStorage.setItem("todos", JSON.stringify(todos))


}


function editTodo(todoId) {

    let title = document.getElementById("title");
    let description = document.getElementById("description");
    let date = document.getElementById("date");
    let priority = document.getElementById("priority");

    title.value = todos[todoId].title;
    description.value = todos[todoId].description;
    date.value = todos[todoId].date;
    priority.value = todos[todoId].priority;

    editTodoId = todoId;
}

function deleteTodo(todoId) {

    let newArr = todos.filter((todo, index) => {
        return index != todoId
    })

    todos = newArr

    renderTodos();

    localStorage.setItem("todos", JSON.stringify(todos))

}


function sepreateCompletedTodos() {
    let newArr = todos.filter((todo) => {
        return todo.checked
    })

    
}