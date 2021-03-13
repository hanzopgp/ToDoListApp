export function addTodo(state, name){
  state.todolist.push({
    id: state.todolist.length+1,
    name: name, 
    completed: false,
  });
}

export function setTodolists(state, name){
  state.todolists.push({
    name: name,
    todolist: [],
  })
}

export function deleteTodo(state, todo){
  state.todolist.splice(state.todolist.indexOf(todo), 1);
}

export function setCurrent(state, index) {
  state.current = index;
}
