export function addTodo(state, name){
  state.todolist.push({
    id: state.todolist.length+1,
    name: name, 
    completed: false,
  });
}

export function setTodos(state, todos) {
  state.todos = todos;
}

export function setTodolists(state, todolists){
  state.todolists = todolists;
}

export function deleteTodo(state, todo){
  state.todolist.splice(state.todolist.indexOf(todo), 1);
}

export function setCurrent(state, index) {
  state.current = index;
}
