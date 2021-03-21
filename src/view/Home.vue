<template>

  <div class="flex">
    <div class="w-1/4 transition-all" id="menu">
      <sidebar class="p-3"></sidebar>
    </div>
    <div class="w-3/4 transition-all bg-white" id="content">
      <div class="bg-gray-200 p-1 flex justify-between">
        <div class="p-2 cursor-pointer" v-on:click="menu">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 20 20">
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
          </svg>
        </div>
        <div class="rounded-lg hover:text-red-600 p-2 cursor-pointer" v-on:click="this.logout">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="20" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
        </div>
      </div>
      
      <div class="home p-3">
        <todo-list />
      </div>
    </div>
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

    menu: function () {
      const menu = document.querySelector('#menu');
      const content = document.querySelector('#content');

      if(content.classList.contains('w-3/4')){
        menu.classList.replace('w-1/4', 'w-0');
        menu.classList.add('invisible');
        content.classList.replace('w-3/4', 'w-full');
      } else {
        menu.classList.replace('w-0', 'w-1/4');
        menu.classList.remove('invisible');
        content.classList.replace('w-full', 'w-3/4');
      }
    },
  }

}
</script>

<style>

  #logout-btn:hover {
    background: red;
  }

  #sidebar {
    border-right: 1px black solid;
  }
</style>
