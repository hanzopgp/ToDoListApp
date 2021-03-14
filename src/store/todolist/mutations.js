export function addTodos(state, todo){
  state.todos.push(todo);
}

export function setTodos(state, todos) {
  state.todos = todos;
}

export function setTodolists(state, todolists){
  state.todolists = todolists;
}

export function addTodolist(state, todolist) {
  state.todolists.push(todolist);
}

export function deleteTodo(state, todo){
  state.todolist.splice(state.todolist.indexOf(todo), 1);
}

export function setCurrent(state, index) {
  state.current = index;
}
