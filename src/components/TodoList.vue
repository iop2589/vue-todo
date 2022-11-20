<template>
    <div>
      <transition-group name="list" tag="ul">
          <li v-for="(todo, index) in this.todoList" v-bind:key="todo.id" class="shadow">
            <i class="checkBtn fas fa-check" v-bind:class="{checkBtnCompleted: todo.completed}" v-on:click="toggleComplete(index)"></i>
            <span v-bind:class="{textCompleted: todo.completed}">{{todo.todo}}</span> 
            <span class="removeBtn" v-on:click="deleteTodo(todo.id)" >
              <i v-bind:todokey="todo.id" class="fas fa-trash-alt"></i>
            </span>
          </li>
      </transition-group> 
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
  computed: {
    ...mapState(['todoList'])
  },
  methods: {
    ...mapMutations(['deleteTodo', 'toggleComplete'])
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

  /* 리스트 아이템 트랜지션 구현 */
  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(30px);
  }
</style>