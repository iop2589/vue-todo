<template>
  <div id="app">
    <todo-header></todo-header>
    <todo-input v-on:addTodo="addTodo"></todo-input>
    <todo-list v-bind:todolist="todoList" v-on:deleteTodo="deleteTodo" v-on:toggleComplete="toggleComplete"></todo-list>
    <todo-footer v-on:clearAllItem="clearAllItem"></todo-footer>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";

export default {
  data () {
    return {
      todoList: []
    }
  },
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  },
  created() {
    if (localStorage.length > 0) {
      const strTodo = localStorage.getItem("todoList");
      if (strTodo !== null) {
        this.todoList = JSON.parse(strTodo);
      }
    }
  },
  methods: {
    addTodo(newTodoItem) {
      const newTodoObj = {
            id : Date.now(),
            todo : newTodoItem,
            completed: false
          }
      this.todoList.push(newTodoObj);
      this.setLocalStorageItem();
    },
    deleteTodo(liId) {
      this.todoList = this.todoList.filter((item) => this.todoFilter(parseInt(liId), item.id));
      this.setLocalStorageItem();
    },
    toggleComplete(index) {
      this.todoList[index].completed = !this.todoList[index].completed;
      this.setLocalStorageItem();
    },
    todoFilter(liId, todoId) {
      return todoId !== liId;
    },
    clearAllItem() {
      localStorage.clear();
      this.todoList = [];
    },
    setLocalStorageItem() {
      localStorage.setItem("todoList", JSON.stringify(this.todoList));
    }
  }
}
</script>

<style>
  body {
    text-align: center;
    background-color: #f6f6f6;
  }
  input {
    border-style: groove;
    width: 200px;
  }
  button {
    border-style: groove;
  }
  .shadow {
    box-shadow: 5px 10px 10xp rgba(0, 0, 0, 0.3);
  }
</style>
