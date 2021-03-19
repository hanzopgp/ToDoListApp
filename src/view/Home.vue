<template>
  <div class="btn" id="logout-btn" v-on:click="this.logout">
    <label for="">Logout</label>
  </div>
  <div class="home">
    <sidebar id="sidebar"></sidebar>
    <todo-list />
  </div>
</template>

<script>
// @ is an alias to /src
import TodoList from '@/components/TodoList.vue';
import Sidebar from '@/components/sidebar.vue';

import { mapActions } from 'vuex';

export default {
  name: 'Home',
  components: {
    TodoList,
    Sidebar
  },

  data() {
    return {
      
    }
  },

  methods: {
    ...mapActions('account', ['logout']),
  }

}
</script>

<style>

  #logout-btn {
    background: rgb(255, 147, 147);
    color: white;
    float: right;
  }

  #logout-btn:hover {
    background: red;
  }

  div .home {
    display: flex;
    width: 100%;
  }

  #sidebar {
    border-right: 1px black solid;
  }
</style>
