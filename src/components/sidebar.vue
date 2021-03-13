<template>
  <ul id="list">
    <li v-for="todolist in getTodolists" :key="todolist.name">
      <label for="">{{todolist.name}}</label>

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
    ...mapActions("todolist", ["addTodolist", "fetchTodolist"]),
  },

  mounted() {
    this.fetchTodolist();
  },

  computed: {
    ...mapGetters("todolist", ["getTodolists"]),
  }
}
</script>

<style>
  #list {
    max-width: 20%;
  }
</style>