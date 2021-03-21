import axios from '@/api';

// recupere les todos d'une todolist 
export async function fetchTodos({commit}, todolist) {
  const todos = todolist.todos;
  const current = todolist.id;
  
  commit("setTodos", todos); 
  commit("setCurrent", current);
}

// charge une todolist de l'api puis on la stock dans le state via mutations.js (avec commit)
export async function fetchTodolist({commit}) {

  let msg = '';

  await axios.get("http://138.68.74.39/api/todolists").then((response) => {
    commit("setTodolists", response.data);
  }).catch((err) => {
    msg = "Une erreur est survenu lors du chargement de la todolist. Status : " + err.response.status;
  });

  return msg;
}


export async function createTodolist({commit}, title) {
  const todolistName = title;
  
  let msg = '';

  await axios.post("http://138.68.74.39/api/todolist",{name: todolistName}).then((response) => {
    commit('addTodolist', response.data);
  }).catch((err) => {
    msg = "Une erreur est survenu lors de la création de la todolist. Status : " + err.response.status;
  });

  return msg;
}

export async function createTodo({commit}, todo) {
  const name = todo.name;
  const completed = todo.completed;
  const todolist_id = todo.todolist_id;

  let msg = '';

  axios.post("http://138.68.74.39/api/todo", {name: name, completed: completed, todolist_id: todolist_id}).then((response) => {
    commit('addTodos', response.data);
  }).catch((err) => {
    msg = "Une erreur est survenu lors de la creation de la todo. Status : " + err.response.status;
  });

  return msg;
}

export async function setCompleted({commit}, todo) {
  const name = todo.name;
  const completed = todo.completed;
  const todolist_id = todo.todolist_id;

  const todo_id = todo.id;

  let msg = '';

  await axios.post(`http://138.68.74.39/api/completeTodo/${todo_id}`, {name: name, completed: completed, todolist_id: todolist_id}).then((response) => {
    commit('setCompleted', response.data);   
  }).catch((err) => {
    msg = "Une erreur est survenu lors de la complétion de la todo. Status : " + err.response.status;
  });

  return msg;
}

export async function modifyTodo({commit}, todo) {
  const name = todo.name;
  const completed = todo.completed;
  const todolist_id = todo.todolist_id;

  const todo_id = todo.id;

  let msg = '';

  await axios.patch(`http://138.68.74.39/api/todo/${todo_id}`, {name: name, completed: completed, todolist_id: todolist_id}).then((response) => {
    commit('setName', response.data);
  }).catch((err) => {
    msg = "Une erreur est survenu lors de la modification de la todo. Status : " + err.response.status;
  });

  return msg;
}

export async function deleteTodolist({commit}, id) {
  const todolist_id = id;

  let msg = '';

  await axios.delete(`http://138.68.74.39/api/todolist/${todolist_id}`).then(() => {
    commit("deleteTodolist", todolist_id);
  }).catch((err) => {
    msg = "Une erreur est survenu lors de la suppression de la todolist. Status : " + err.response.status;
  });

  return msg;
}

export async function deleteTodo({commit}, id) {
  const todo_id = id;

  let msg = '';

  await axios.delete(`http://138.68.74.39/api/todo/${todo_id}`).then(() => {
    commit("deleteTodo", todo_id);
  }).catch((err) => {
    msg = "Une erreur est survenu lors de la creation de la suppression de la todo. Status : " + err.response.status;
  });

  return msg;
}

export function setFilter({commit}, type) {
  commit('setFilter', type);
}

export function setCurrent({commit}, current) {
  commit("setCurrent", current);
}