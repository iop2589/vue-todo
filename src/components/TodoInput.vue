<template>
  <div class="inputBox shadow">
      <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
      <!-- <button class="addBtn" v-on:click="addTodo">add</button> -->
      <span class="addContainer">
        <i class="fas fa-plus addBtn" v-on:click="addTodo"></i>
      </span>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      newTodoItem : "",
      newTodoItemList : []
    }
  },
  methods: {
    addTodo: function () {
      const newTodoObj = {
        id : Date.now(),
        todo : this.newTodoItem
      }
      this.newTodoItemList.push(newTodoObj);
      localStorage.setItem("todoList", JSON.stringify(this.newTodoItemList));
      this.clearInput();
    },
    clearInput: function () {
      this.newTodoItem = "";
    }
  }
}
</script>

<style scoped>
  input:focus {
    outline: none;
  }

  .inputBox {
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
  }

  .inputBox input {
    border-style: none;
    font-size: 0.9rem;
  }

  .addContainer {
    float: right;
    background: linear-gradient(to right, #6478fb, #8763fb);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
  }

  .addBtn {
    color: white;
    vertical-align: middle;
  }
</style>