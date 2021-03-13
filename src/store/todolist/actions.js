import axios from 'axios';

export async function fetchTodo({commit}, todo) {
  await axios.get("http://138.68.74.39/api/todos", todo.id).then((response) => {
    commit("addTodo", response.data);
  }).catch((err) => {
    console.log(err);
  });
}

export async function fetchTodolist({commit}) {
  await axios.get("http://138.68.74.39/api/todolists").then((response) => {
    commit("setTodolists", response.data);
  }).catch((err) => {
    console.log(err);
  });
}

export function deleteTodo({commit}, todo) {
  commit("deleteTodo", todo);
}

export function addTodolist({commit}, name) {
  commit("addTodolist", name);
}