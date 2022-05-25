const createTodoTitle = (title) => document.createElement("h1").appendChild(document.createTextNode(title));

function appendEntryToDom(todoEntry) {
    const {title, completed} = todoEntry;
    const main = document.getElementById("main");
    const node = document.createElement("div");
    node.classList.add("todo-item");
    node.classList.add(completed ? "completed" : "incompleted")
    node.appendChild(createTodoTitle(title));
    main.appendChild(node);
}

function fetchList() {
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(json => json.map(todo => appendEntryToDom(todo)));
}

fetchList()