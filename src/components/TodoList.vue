<template>
  <ul>
    <li>
      <input type="text" name="newTodo" id="newTodo" v-model="newTodo" placeholder="Ex: Aller faire le projet d'App Mobile.">
      <div @click="add" class="btn">
        <label>Ajouter</label>
      </div>
    </li>
    <li v-for="todo in todos" :key="todo.id">
      <input type="checkbox" v-model="todo.completed" :name="todo.name"> 
      <label :for="todo.name"> {{todo.name}}</label>
      <div @click="deleted(todo)" class="btn delete-btn">
        <label>Supprimer</label>
      </div>
    </li>
  </ul>
 
  
  
</template>

<script>

export default {
 
  name: 'TodoList',
  components: {

  },

  data() {
    return {
      newTodo: '',
      filter: 'all',
    }
  },

  methods: {
    add: function () {
      if(this.newTodo != ''){
        this.todos.push({
          id: this.todos.length+1,
          name: this.newTodo,
          completed: false,
        });
        this.newTodo = '';
      }
    },

    deleted: function (todo) {
      this.todos.splice(this.todos.indexOf(todo), 1);
    }
  },

  props: {

  },

  computed:{
    ...mapGetters("todo", ["getTodo"]),
  },
  }
}
</script>

<style>
  li {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    margin: 10px;
  }
  #newTodo {
    width: 100%;
    border: none;
  }

  #newTodo:focus {
    outline: none;
  }

  .btn {
    width: 100px;
    cursor: pointer;
    border-radius: 5px;
    padding: 5px;
  }

  .delete-btn {
    background: rgb(255, 135, 135);
    color: white;
  }

  .delete-btn:hover{
    background: red;
  }

  .btn label {
    cursor: pointer;
  }
</style>