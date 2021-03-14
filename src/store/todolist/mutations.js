export function addTodos(state, todo){
  state.todos.push(todo);
}

export function setTodos(state, todos) {
  if(todos == undefined) {
    todos = [];
  }
  state.todos = todos;
  
}

export function setTodolists(state, todolists){
  state.todolists = todolists;
}

export function addTodolist(state, todolist) {
  state.todolists.push(todolist);
}

export function setCompleted(state, todo_data) {
  const todo = state.todos.find(todo => todo.id == todo_data.id);
  console.log(todo);
  todo.completed = todo_data.completed;
}

export function deleteTodo(state, todo){
  state.todolist.splice(state.todolist.indexOf(todo), 1);
}

export function setCurrent(state, index) {
  state.current = index;
}
