<template>
  <ul id="todolist">
    <li>
      <input type="text" name="newTodo" class="newTodo" v-model="newTodo" placeholder="Ex: Aller faire le projet d'App Mobile.">
      <div @click="add" class="btn">
        <label>Ajouter</label>
      </div>
<<<<<<< HEAD
    </li>
    <li v-for="todo in this.getTodolist(getCurrent)" :key="todo.id">
      <input type="checkbox" v-model="todo.completed" :name="todo.name"> 
      <label :for="todo.name"> {{todo.name}}</label>
      <div @click="deleteTodo(todo)" class="btn delete-btn">
        <label>Supprimer</label>
      </div>
=======
    </li> 
    <li v-for="todo in this.getTodolist" :key="todo.id">
      <todo :todo="todo"></todo>
>>>>>>> f52d71de74329fc739f2a17141d070ab9b9f87b9
    </li>
  </ul>
 
  
  
</template>

<script>
import { mapGetters, mapActions } from 'vuex'; 
<<<<<<< HEAD
=======
import Todo from './Todo';
>>>>>>> f52d71de74329fc739f2a17141d070ab9b9f87b9

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
<<<<<<< HEAD
        this.fetchTodo(this.newTodo);
        this.newTodo = '';
      }
    },
    ...mapActions("todolist", ["fetchTodo", "deleteTodo"]),
  },

  props: {
    
=======
        this.createTodo({
          name: this.newTodo, 
          completed: 0, 
          todolist_id: this.getCurrent
        });
        this.newTodo = '';
      }
    },
    ...mapActions("todolist", ["fetchTodo", "createTodo", "setCompleted"]),
  },

  watch: {
    isCompleted: function () {}
>>>>>>> f52d71de74329fc739f2a17141d070ab9b9f87b9
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
  
<<<<<<< HEAD
  #newTodo {
=======
  .newTodo {
>>>>>>> f52d71de74329fc739f2a17141d070ab9b9f87b9
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
    transition-property: background, color;
    transition-duration: .2s;
  }

  .modify-btn {
    background: rgb(255, 213, 159);
    color: white;
    
  }

  .modify-btn:hover{
    background: rgb(255, 166, 0);
  }
  
  .btn label {
    cursor: pointer;
    width: 100%;
  }
</style>