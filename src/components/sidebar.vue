<template>
  <ul id="list">
<<<<<<< HEAD
    <li v-for="todolist in getTodolists" :key="todolist.name">
      <label for="">{{todolist.name}}</label>

    </li>
    <li>
      <input type="text" v-model="name">
=======
    {{ getCurrent }}
    <li class="nav" v-for="todolist in getTodolists" :key="todolist.id" @click="fetchTodos(todolist)">
      <label>{{todolist.name}}</label>
      <div class="btn delete-btn" @click="this.deleteTodolist(todolist.id)">
        <span></span>
        <span id="span-mirror"></span>
      </div>
    </li>
    <li>
      <input type="text" v-model="this.name">
>>>>>>> f52d71de74329fc739f2a17141d070ab9b9f87b9
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
<<<<<<< HEAD
    add: function () {
      if(this.name != ''){
        this.addTodolist(this.name);
        this.name = '';
      }
    },
    ...mapActions("todolist", ["addTodolist", "fetchTodolist"]),
=======
    add: async function () {
      if(this.name != ''){
        await this.createTodolist(this.name).then(() => {
          this.name = '';
          console.log(this.name)
        });
      }
    },

    ...mapActions("todolist", ["fetchTodolist", "fetchTodos", "createTodolist", "deleteTodolist"]),
>>>>>>> f52d71de74329fc739f2a17141d070ab9b9f87b9
  },

  mounted() {
    this.fetchTodolist();
  },

  computed: {
<<<<<<< HEAD
    ...mapGetters("todolist", ["getTodolists"]),
=======
    ...mapGetters("todolist", ["getTodolists", "getCurrent"]),
>>>>>>> f52d71de74329fc739f2a17141d070ab9b9f87b9
  }
}
</script>

<style>
  #list {
    max-width: 20%;
  }
<<<<<<< HEAD
=======

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
>>>>>>> f52d71de74329fc739f2a17141d070ab9b9f87b9
</style>