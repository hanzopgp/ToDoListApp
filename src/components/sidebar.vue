<template>
  
  <ul id="list">
    <label for="">TodoLists</label>
    <li class="nav" v-for="todolist in getTodolists" :key="todolist.id" @click="fetchTodos(todolist)">
      <label>{{todolist.name}}</label>
      <div class="btn delete-btn" @click="this.deleteTodolist(todolist.id)">
        <span></span>
        <span id="span-mirror"></span>
      </div>
    </li>
    <li>
      <input type="text" v-model="this.name">
      <input type="button" value="Ajouter" @click="add">
    </li>
  </ul>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Sidebar',

  data() {
    return {
      name: '',
    }
  },

  methods: {
    add: async function () {
      if(this.name != ''){
        await this.createTodolist(this.name).then(() => {
          this.name = '';
          console.log(this.name)
        });
      }
    },

    //recupere actions from store/todolist/actions.js
    ...mapActions("todolist", ["fetchTodolist", "fetchTodos", "createTodolist", "deleteTodolist"]),
  },

  mounted() {
    this.fetchTodolist();
  },

  computed: {
    //recupere getters from store/todolist/getters.js
    ...mapGetters("todolist", ["getTodolists", "getCurrent"]),
  }
}
</script>

<style>
  #list {
    max-width: 20%;
  }

  #list label {
    text-align: start;
  }

  .nav {
    padding: 10px;
    text-align: center;
  }

  .nav:hover {
    background: rgb(247, 247, 247);
    cursor: pointer;
  }

  .nav label:hover {
    cursor: pointer;
  }
</style>