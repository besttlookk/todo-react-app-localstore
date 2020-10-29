
const getFromStore = () =>{
    const todos = JSON.parse(localStorage.getItem('todos'))
    if(todos) return todos

    return []
}

const addToStore = (todo, id) =>{
    const todoList = getFromStore()
    const value = todo.trim().toLowerCase()

    const existingTodo = todoList.find(todo => todo.value === value)

    if(existingTodo){
        return {
            error: "Already added"
        }
    }
    todoList.push({id,value, completed: false})
    localStorage.setItem('todos', JSON.stringify(todoList))
    return {todoList}
}

const removeFromStore =(id) =>{
    const todos = getFromStore()
    const filterTodos = todos.filter(todo => todo.id !== id)

    if(todos.length === filterTodos.length){
        return {
            error: "No item found"
        }
    }

    localStorage.setItem('todos', JSON.stringify(filterTodos))

    return {filterTodos}
}

const markComplete = (id)=>{
    const todos = getFromStore()
    todos.forEach(todo => {
        if(todo.id === id){
            todo.completed = true
        }
    })

    localStorage.setItem('todos', JSON.stringify(todos))

    return {editedTodos : todos}
}
const redo = (id)=>{
    const todos = getFromStore()
    todos.forEach(todo => {
        if(todo.id === id){
            todo.completed = false
        }
    })

    localStorage.setItem('todos', JSON.stringify(todos))

    return {editedTodos : todos}
}


module.exports = {
    getFromStore,
    addToStore,
    removeFromStore,
    markComplete,
    redo
}