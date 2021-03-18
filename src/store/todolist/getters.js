export const getTodolists = (state) => {
  return state.todolists;
}

<<<<<<< HEAD
export const getTodolist = (state) => (index) => {
  return state.todolists[index].todolist;
  
=======
export const getTodolist = (state) => {
  return state.todos;
>>>>>>> f52d71de74329fc739f2a17141d070ab9b9f87b9
}

export const getCurrent = (state) => {
  return state.current;
}
