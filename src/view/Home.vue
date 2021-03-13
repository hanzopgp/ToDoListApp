<template>
  <div class="home">
    <sidebar id="sidebar"></sidebar>
    <todo-list />
  </div>
</template>

<script>
// @ is an alias to /src
import TodoList from '@/components/TodoList.vue';
import Sidebar from '@/components/sidebar.vue';

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

}
</script>

<style>
  div .home {
    display: flex;
    width: 100%;
  }

  #sidebar {
    border-right: 1px black solid;
  }
</style>
