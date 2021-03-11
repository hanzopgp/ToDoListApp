export default function () {
  return {
    todolists: [
      {
        name: "1ere todolist",
        todolist: [
          {
            id: 1,
            name : 'tache-1',
            completed : false
          },
          {
            id: 2,
            name : 'tache-2',
            completed: true
          }
        ],
      }
    ],
    current: 0,
  };
}