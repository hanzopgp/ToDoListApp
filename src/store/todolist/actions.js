import axios from 'axios';

export async function fetchTodos({commit}, todos) {
  // await axios.get("http://138.68.74.39/api/todos", todo.id).then((response) => {
  //   commit("setTodos", response.data);
  // }).catch((err) => {
  //   console.log(err);
  // });

  commit("setTodos", todos);
}

export async function fetchTodolist({commit}) {
  await axios.get("http://138.68.74.39/api/todolists").then((response) => {
    commit("setTodolists", response.data);
    console.log(response.data);
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

export function setCurrent({commit}, current) {
  commit("setCurrent", current);
}