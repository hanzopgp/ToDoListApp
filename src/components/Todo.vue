<template>
  <input type="checkbox" v-model="completed" :name="todo.name"> 
    <label :for="todo.name"> {{todo.name}}</label>
    <div @click="deleteTodo(todo)" class="btn delete-btn">
      <label>Supprimer</label>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
 
export default {
  name: "Todo",

  props: {
    todo: {type: Object},
  },

  data () {
    return {
      completed: Boolean(this.todo.completed),
    }
  },

  watch: {
    completed: function (bool) {
      // console.log("on entre dans la fonction");
      // console.log(bool);
      const data = {
        name: this.todo.name,
        completed: bool,
        id: this.todo.id,
        todolist_id: this.getCurrent,
      };
      // console.log("fonction setCompleted va etre exectuté");
      this.setCompleted(data);
    }
  },

  methods: {
    ...mapActions("todolist", ['setCompleted']),
  },

  computed: {
    ...mapGetters('todolist', ["getCurrent"]),
  }
}
</script>

<style>

</style>