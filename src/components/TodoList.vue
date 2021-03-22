<template>
  <ul id="todolist">
    <div class="w-full flex justify-between">
      <div class="text-gray-300">
        <label v-if="isSelected">Il reste {{ remaining }} todo(s) à faire.</label>
      </div>
      <div class="flex">  
        <div :class="{selected: this.getFilter === 'all'}" class="btn" v-on:click="setFilter('all')">
          <label>All</label>
        </div>      
        <div :class="{selected: this.getFilter === 'todo'}" class="btn" v-on:click="setFilter('todo')">
          <label>Todo</label>
        </div>
        <div :class="{selected: this.getFilter === 'done'}" class="btn" v-on:click="setFilter('done')">
          <label>Done</label>
        </div>

      </div>
    </div>
    <li v-if="isSelected">
      <input type="text" name="newTodo" class="newTodo" v-model="newTodo" placeholder="Ex: Aller faire le projet d'App Mobile.">
      <div @click="add" class="btn rounded-lg">
        <label>Ajouter</label>
      </div>
    </li> 
    <div style="margin-top: 50px; opacity: .5" v-else>
      <label>Veuillez sélectionner une todolist pour y voir son contenu.</label>
    </div>
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
    
    add: async function () {
      if(this.newTodo != ''){
        const result = await this.createTodo({
          name: this.newTodo, 
          completed: 0, 
          todolist_id: this.getCurrent
        });
        this.newTodo = '';
        if(result != '') {
          alert(result);
        }
      }
    },

    //recupere actions from store/todolist/actions.js
    //recupere actions from store/account/actions.js
    ...mapActions("todolist", ["fetchTodo", "createTodo", "setCompleted", 'setFilter']),
    ...mapActions('account', ['logout']),
  },

  computed:{
    //recupere actions from store/todolist/getters.js
    ...mapGetters("todolist", ["getTodolists", "getTodolist", "getCurrent", "getFilter"]),

    filter: function () {
      let todolist = this.getTodolist;
      const fltr = this.getFilter;
      if(fltr === "done") {
        return todolist.filter(todo => todo.completed);
      } else if (fltr === "todo") {
        return todolist.filter(todo => !todo.completed);
      }
      return todolist;
    },

    remaining () {
      return this.getTodolist.filter(todo => !todo.completed).length;
    },

    isSelected: function () {
      return this.getCurrent != 0;
    }
  },
}
</script>

<style>
  #todolist {
    width: 100%;
  } 

  .selected {
    border-bottom: 2px black solid;
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
    padding: 5px;
    transition-property: background, color;
    transition-duration: .2s;
  }
  
  .btn label {
    cursor: pointer;
    width: 100%;
  }
</style>