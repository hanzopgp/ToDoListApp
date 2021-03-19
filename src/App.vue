<template>
<h1>TodoList</h1>
  <!-- <div id="nav">
    <router-link to="/">HOME</router-link>
    <br>
    <router-link to="/login">LOGIN</router-link>
  </div> -->
  <router-view/>
</template>

<script>



export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
