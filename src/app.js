const addBtn = document.getElementById("liveToastBtn")
const getNewTask = document.getElementById("task")
const ulDom = document.getElementById("list")

const toastSuccess = document.getElementById("liveToastSuccess")
const toastError = document.getElementById("liveToastError")

let todos = new Array()


function newElement(){
    let newLi = document.createElement("li")
    if(getNewTask.value.trim() == "" ) {
        $(toastError).toast("show")
    } else {
        $(toastSuccess).toast("show")
        newLi.innerHTML = `${getNewTask.value}<i class="far fa-times-circle float-right align-center"></i>`
        ulDom.appendChild(newLi)
        todos.push(getNewTask.value)
        console.log(todos)
        localStorage.setItem("todos", JSON.stringify(todos))
        getNewTask.value = ""
    }
    
}

let todosString = localStorage.getItem("todos")
todos = JSON.parse(todosString)

ulDom.addEventListener("click", (event) => {
    if (event.target.tagName === "I") { 
        let deletedTodo = event.target.parentNode.textContent
        todos = todos.filter(e => e !== deletedTodo); 
        localStorage.setItem("todos", JSON.stringify(todos))

        event.target.parentNode.remove()
        
    } else {event.target.classList.add("checked")}

})


function setTodos(todoItems) {
    todoItems.forEach(todo => {
        let li = document.createElement("li")
        li.innerHTML = `${todo}<i class="far fa-times-circle float-right align-center"></i>`
        ulDom.appendChild(li)
    })  
}

