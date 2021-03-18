import axios from 'axios';
import router from '@/router';

export async function fetchTodos({commit}, todolist) {
  // await axios.get("http://138.68.74.39/api/todos", todo.id).then((response) => {
  //   commit("setTodos", response.data);
  // }).catch((err) => {
  //   console.log(err);
  // });
  const todos = todolist.todos;
  const current = todolist.id;
  
  commit("setTodos", todos); 
  commit("setCurrent", current);
}

export async function fetchTodolist({commit}) {
  await axios.get("http://138.68.74.39/api/todolists").then((response) => {
    commit("setTodolists", response.data);
    console.log(response.data);
  }).catch((err) => {
    const code = err.response.status;
    if(code == 401) {
      router.push("login");
    }
  });
}

export async function createTodolist({commit}, title) {
  const todolistName = title;
  console.log(title);
  await axios.post("http://138.68.74.39/api/todolist",{name: todolistName}).then((response) => {
    commit('addTodolist', response.data);
    console.log(response.data);
  }).catch((err) => {
    console.log(err);
  });
}

export async function createTodo({commit}, todo) {
  const name = todo.name;
  const completed = todo.completed;
  const todolist_id = todo.todolist_id;

  console.log(name);
  console.log(completed);
  console.log(todolist_id);

  axios.post("http://138.68.74.39/api/todo", {name: name, completed: completed, todolist_id: todolist_id}).then((response) => {
    commit('addTodos', response.data);
    console.log(response.data);
  }).catch((err) => {
    console.log(err);
  });
}

export async function setCompleted({commit}, todo) {
  const name = todo.name;
  const completed = todo.completed;
  const todolist_id = todo.todolist_id;

  const todo_id = todo.id;

  await axios.post(`http://138.68.74.39/api/completeTodo/${todo_id}`, {name: name, completed: completed, todolist_id: todolist_id}).then((response) => {
    console.log(response.data);
    commit('setCompleted', response.data);   
  }).catch((err) => {
    console.log(err);
  });
}

export async function modifyTodo({commit}, todo) {
  const name = todo.name;
  const completed = todo.completed;
  const todolist_id = todo.todolist_id;

  const todo_id = todo.id;

  await axios.patch(`http://138.68.74.39/api/todo/${todo_id}`, {name: name, completed: completed, todolist_id: todolist_id}).then((response) => {
    console.log(response.data);
    commit('setName', response.data);
  }).catch((err) => {
    console.log(err);
  });
}

export async function deleteTodolist({commit}, id) {
  console.log("on est dans del");
  const todolist_id = id;

  await axios.delete(`http://138.68.74.39/api/todolist/${todolist_id}`).then((response) => {
    console.log(response.data);
    commit("deleteTodolist", todolist_id);
  }).catch((err) => {
    console.log(err);
  });


}

export async function deleteTodo({commit}, id) {
  const todo_id = id;

  await axios.delete(`http://138.68.74.39/api/todo/${todo_id}`).then((response) => {
    console.log(response.data);
    commit("deleteTodo", todo_id);
  }).catch((err) => {
    console.log(err);
  });
}

export function setCurrent({commit}, current) {
  commit("setCurrent", current);
}