let tasks = [
    {
        id: 1,
        description: 'Complete JavaScript project',
        dueDate: '2024-10-10',
        status: 'Pending',
        priority: 'High',
    },
    {
        id: 2,
        description: 'Write blog post on virtual environments',
        dueDate: '2024-10-05',
        status: 'In Progress',
        priority: 'Medium',
    },
    {
        id: 3,
        description: 'Prepare for group theory exam',
        dueDate: '2024-10-15',
        status: 'Pending',
        priority: 'High',
    },
    {
        id: 4,
        description: 'Clean desk',
        dueDate: '2024-10-03',
        status: 'Completed',
        priority: 'Low',
    },
    {
        id: 5,
        description: 'Fix bugs in FastAPI project',
        dueDate: '2024-10-07',
        status: 'Pending',
        priority: 'High',
    }
];

console.log(tasks);


class Task {
    constructor(id, description, dueDate, status, priority) {
        this.id = id,
            this.description = description,
            this.dueDate = dueDate,
            this.status = status,
            this.priority = priority
    }
}

const newClassTask = new Task(6, "Complete the all js Tasks", "2024-11-15", "Pending", "In Progress")
console.log(newClassTask);


function displayTasks (arr) {
    arr.forEach(productObj => {
        console.log(`${productObj.description} - ${productObj.dueDate} (${productObj.status})`);
        
    });
}

displayTasks(tasks)

function addTask(id, description, dueDate, status, priority) {
    const newTaskObj = new Task(id, description, dueDate, status, priority)

    tasks.push(newTaskObj)
}

addTask(6, "Complete the all js Tasks", "2024-11-15", "Pending", "In Progress")

console.log(tasks);


function updateTask(id, status) {
    const targetPro = tasks.find(element => {
        return element.id == id
    })

    targetPro.status = status
}

updateTask(3, "Near to Complete")

console.log(tasks);

function updateBookWithMap(id, status) {
    tasks.map(productObj => {
        if (productObj.id == id) {
            productObj.status = status
        }
    })
}

updateBookWithMap(6, "Complete")

console.log(tasks);

function removeTask(id) {

    const newArr = tasks.filter(productObj => {
        return productObj.id != id
    })

    tasks = newArr

}

removeTask(1)

console.log(tasks);

