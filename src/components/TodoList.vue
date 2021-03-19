<template>
  <ul id="todolist">
    <div id="filter">
      <div class="btn" v-on:click="setFilter('todo')">
        <label>Todo</label>
      </div>
      <div class="btn" v-on:click="setFilter('done')">
        <label>Done</label>
      </div>
      <div class="btn" v-on:click="setFilter('all')">
        <label>All</label>
      </div>
      
      <div></div>
    </div>
    <li>
      <input type="text" name="newTodo" class="newTodo" v-model="newTodo" placeholder="Ex: Aller faire le projet d'App Mobile.">
      <div @click="add" class="btn">
        <label>Ajouter</label>
      </div>
    </li> 
    <li v-for="todo in this.filter" :key="todo.id">
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
    }
  },

  methods: {
    
    add: function () {
      if(this.newTodo != ''){
        this.createTodo({
          name: this.newTodo, 
          completed: 0, 
          todolist_id: this.getCurrent
        });
        this.newTodo = '';
      }
    },

    ...mapActions("todolist", ["fetchTodo", "createTodo", "setCompleted", 'setFilter']),
    ...mapActions('account', ['logout']),
  },

  computed:{
    ...mapGetters("todolist", ["getTodolists", "getTodolist", "getCurrent", "getFilter"]),

    filter: function () {
      let todolist = this.getTodolist;
      let fltr = this.getFilter;
      if(fltr != "all") {
        let tmp = [];
        for(let todo of todolist) {
          if((todo.completed && fltr == 'done') || (!todo.completed && fltr == 'todo')) {
            tmp.push(todo);
          } 
        }
        return tmp;
      }
      return todolist;
    }
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
  
  .newTodo {
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

  #filter {
    display: flex;
    direction: rtl;

    transition-property: background;
    transition-duration: .2s;
  }

  #filter div:hover {
    background: rgb(235, 235, 235);
  }
</style>