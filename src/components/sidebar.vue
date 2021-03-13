<template>
  <ul id="list">
    {{ getCurrent }}
    <li class="nav" v-for="todolist in getTodolists" :key="todolist.id" @click="fetchTodos(todolist.todos)">
      <label>{{todolist.name}}</label>

    </li>
    <li>
      <input type="text" v-model="name">
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
    add: function () {
      if(this.name != ''){
        this.addTodolist(this.name);
        this.name = '';
      }
    },
    ...mapActions("todolist", ["addTodolist", "fetchTodolist", "setCurrent", "fetchTodos"]),
  },

  mounted() {
    this.fetchTodolist();
  },

  computed: {
    ...mapGetters("todolist", ["getTodolists", "getCurrent"]),
  }
}
</script>

<style>
  #list {
    max-width: 20%;
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