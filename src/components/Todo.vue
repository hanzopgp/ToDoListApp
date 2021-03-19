<template >
  <input type="checkbox" v-model="completed" :name="todo.name" v-if="!isModifying"> 
  <label :for="todo.name" v-if="!isModifying">{{todo.name}}</label>
  <input type="text" name="modify" v-model="newName" v-else class="newTodo">
  <div v-if="!isModifying" class="btns">
    <div @click="toModify()" class="btn modify-btn">
      <label>Modifier</label>
    </div>
    <div class="btn delete-btn" @click="deleteTodo(todo.id)">
      <span></span>
      <span id="span-mirror"></span>
    </div>
  </div>
  <div class="btn valid-btn" v-else @click="modify">
    <label>Valider</label>
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
      isModifying: false,
      newName: this.todo.name,
      
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
    },

  },

  methods: {
    ...mapActions("todolist", ['setCompleted', 'modifyTodo', 'deleteTodo']),

    toModify: function () {
      this.isModifying = !this.isModifying;
    },

    modify: async function () {
      const data = {
        name: this.newName,
        completed: this.todo.completed,
        id: this.todo.id,
        todolist_id: this.getCurrent,
      };

      await this.modifyTodo(data).then(() => { 
        this.toModify();
      });
    },
  },

  computed: {
    ...mapGetters('todolist', ["getCurrent", "getFilter"]),
  }
}
</script>

<style>
  .btns {
    display: flex;
  }

  .delete-btn {
    width: auto !important;
    position: relative;
    margin-right: 10px;
  }


  .delete-btn span {
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    transform: rotate(45deg);
    display: block;
    height: 2px;
    width: 20px;
    background: grey;
  }

  #span-mirror {
    transform: rotate(-45deg);
  }

  .valid-btn {
    background: rgb(182, 255, 182);
  }

  .valid-btn:hover {
    background: rgb(0, 202, 0);
    color:white;
  }
</style>