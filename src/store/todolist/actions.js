

export function fetchTodo({commit}, todo) {
  commit("addTodo", todo);
}

export function deleteTodo({commit}, todo) {
  commit("deleteTodo", todo);
}

export function addTodolist({commit}, name) {
  commit("addTodolist", name);
}