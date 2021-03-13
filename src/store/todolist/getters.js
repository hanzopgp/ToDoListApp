export const getTodolists = (state) => {
  return state.todolists;
}

export const getTodolist = (state) => (index) => {
  return state.todolists[index].todolist;
  
}

export const getCurrent = (state) => {
  return state.current;
}
