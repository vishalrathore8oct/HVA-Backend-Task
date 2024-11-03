const form = document.getElementById("todo-form");
let pendingTodoList = document.getElementById("pending-todos-list");
let completedTodoList = document.getElementById("completed-todos-list");

let todos = JSON.parse(localStorage.getItem("todos")) || [];
let editTodoId = -1;

renderTodos();

form.addEventListener("submit", (e) => {
    e.preventDefault();

    saveTodo();

    renderTodos();

    localStorage.setItem("todos", JSON.stringify(todos));
});

function saveTodo() {
    let title = document.getElementById("title");
    let description = document.getElementById("description");
    let date = document.getElementById("date");
    let priority = document.getElementById("priority");

    if (editTodoId >= 0) {
        todos[editTodoId] = {
            title: title.value,
            description: description.value,
            date: date.value,
            priority: priority.value,
            checked: todos[editTodoId].checked
        };
        editTodoId = -1;
    } else {
        let todo = {
            title: title.value,
            description: description.value,
            date: date.value,
            priority: priority.value,
            checked: false
        };

        todos.push(todo);
    }

    title.value = "";
    description.value = "";
    date.value = "";
    priority.value = "";
}

function renderTodos() {
    pendingTodoList.innerHTML = "";
    completedTodoList.innerHTML = "";

    todos.forEach((todo, index) => {
        const todoElement = `
            <div class="todo" id="${index}">
                <i data-action="check" class="${todo.checked ? "fa-solid fa-circle-check" : "fa-regular fa-circle"}"></i>
                <h2 class="${todo.checked ? "checked" : ""}" data-action="check">${todo.title}</h2>
                <p class="${todo.checked ? "checked" : ""}">${todo.description}</p>
                <p class="${todo.checked ? "checked" : ""}">${todo.date}</p>
                <p class="${todo.checked ? "checked" : ""}">${todo.priority}</p>
                <i data-action="edit" class="fa-solid fa-pen-to-square"></i>
                <i data-action="delete" class="fa-solid fa-trash-can"></i>
            </div>
        `;

        if (todo.checked) {
            completedTodoList.innerHTML += todoElement;
        } else {
            pendingTodoList.innerHTML += todoElement;
        }
    });
}

pendingTodoList.addEventListener("click", (e) => {
    handleTodoClick(e);
});

completedTodoList.addEventListener("click", (e) => {
    handleTodoClick(e);
});

function handleTodoClick(e) {
    let target = e.target;

    let parentElement = target.parentElement;
    if (parentElement.className !== "todo") return;


    const todoId = parentElement.id;
    const action = target.dataset.action;

    if (action === "delete") deleteTodo(todoId);
    if (action === "edit") editTodo(todoId);
    if (action === "check") checkTodo(todoId);
}

function checkTodo(todoId) {
    todos[todoId].checked = !todos[todoId].checked;

    renderTodos();

    localStorage.setItem("todos", JSON.stringify(todos));
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
    todos = todos.filter((todo, index) => index != todoId);

    renderTodos();

    localStorage.setItem("todos", JSON.stringify(todos));
}
