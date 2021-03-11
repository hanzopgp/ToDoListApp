<template>
  <ul id="todolist">
    <li>
      <input type="text" name="newTodo" id="newTodo" v-model="newTodo" placeholder="Ex: Aller faire le projet d'App Mobile.">
      <div @click="add" class="btn">
        <label>Ajouter</label>
      </div>
    </li>
    <li v-for="todo in this.getTodolist(getCurrent)" :key="todo.id">
      <input type="checkbox" v-model="todo.completed" :name="todo.name"> 
      <label :for="todo.name"> {{todo.name}}</label>
      <div @click="deleteTodo(todo)" class="btn delete-btn">
        <label>Supprimer</label>
      </div>
    </li>
  </ul>
 
  
  
</template>

<script>
import { mapGetters, mapActions } from 'vuex'; 

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
    // add: function () {
    //   if(this.newTodo != ''){
    //     this.todos.push({
    //       id: this.todos.length+1,
    //       name: this.newTodo,
    //       completed: false,
    //     });
    //     this.newTodo = '';
    //   }
    // },

    // deleted: function (todo) {
    //   this.todos.splice(this.todos.indexOf(todo), 1);
    // }
    add: function () {
      if(this.newTodo != ''){
        this.fetchTodo(this.newTodo);
        this.newTodo = '';
      }
    },
    ...mapActions("todolists", ["fetchTodo", "deleteTodo"]),
  },

  props: {
    
  },

  computed:{
    ...mapGetters("todolist", ["getTodolists", "getTodolist", "getCurrent"]),
  },
}
</script>

<style>
  #todolist {
    width: 100%;
  }

  li {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    margin: 10px;
    border-bottom: 1px rgb(212, 212, 212) solid;
  }
  
  #newTodo {
    width: 100%;
    border: none;
  }

  input:focus {
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
    width: 100%;
  }
</style>