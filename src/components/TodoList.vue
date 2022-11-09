<template>
    <div>
      <ul>
        <li v-for="todo in todoList" v-bind:key="todo.id" class="shadow">
          {{todo.todo}}
          <span class="removeBtn" v-on:click="removeTodo" >
            <i v-bind:todokey="todo.id" class="fas fa-trash-alt"></i>
          </span>
          
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  created: function () {
    let strTodo = localStorage.getItem("todoList");
    this.todoList = JSON.parse(strTodo);
  },
  data: function () {
    return {
      todoList : []
    }
  },
  methods: {
    removeTodo: function (event) {
      let liId = event.target.attributes.todokey.value;
      console.log(event.target.attributes.todokey.value);
      console.dir(event.target);
      this.todoList = this.todoList.filter((item) => this.todoFilter(parseInt(liId), item.id));
      console.log(this.todoList);
      localStorage.setItem("todoList", JSON.stringify(this.todoList));
    },
    todoFilter: function (liId, todoId) {
      return todoId !== liId;
    }
  }
}
</script>

<style scoped>
  ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
  }
  li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
  }
  .checkBtn {
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
  }

  .checkBtnCompleted {
    color: #b3adad;
  }

  .textCompleted {
    text-decoration: line-through;
    color: #b3adad;
  }
  .removeBtn {
    margin-left: auto;
    color: #de3434;
  }
</style>