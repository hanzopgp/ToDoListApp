<template>
  <ul id="todolist">
    <li>
      <input type="text" name="newTodo" id="newTodo" v-model="newTodo" placeholder="Ex: Aller faire le projet d'App Mobile.">
      <div @click="createTodo({name: this.newTodo, completed: 0, todolist_id: this.getCurrent})" class="btn">
        <label>Ajouter</label>
      </div>
    </li> 
    <li v-for="todo in this.getTodolist" :key="todo.id">
      <todo :todo="todo"></todo>
    </li>
  </ul>
 
  
  
</template>

<script>
import { mapGetters, mapActions } from 'vuex'; 
import Todo from './Todo';

export default {
 
  name: 'TodoList',
  components: {
    Todo,
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
        this.fetchTodo(this.newTodo);
        this.newTodo = '';
      }
    },
    ...mapActions("todolist", ["fetchTodo", "deleteTodo", "createTodo", "setCompleted"]),
  },

  watch: {
    isCompleted: function () {}
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