<template>
  <div class="inputBox shadow">
      <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
      <span class="addContainer">
        <i class="fas fa-plus addBtn" v-on:click="addTodo"></i>
      </span>
      <Modal v-if="showModal" @close="showModal = false">
        <h3 slot="header">
          할일 입력 필수
          <i class="closeModalBtn fas fa-times" @click="showModal = false" v-on:keyup.enter="showModal = false"></i>
        </h3>
        <div slot="body">
          할일을 입력하고 다시 시도해주세요.
        </div>
      </Modal>
  </div>
</template>

<script>
import Modal from './common/CommonModal.vue';
export default {
  data() {
    return {
      newTodoItem : "",
      showModal: false
    }
  },
  methods: {
    addTodo() {
        if (this.newTodoItem !== "") {
          this.$store.commit("addTodo", this.newTodoItem);
          this.clearInput();
        } else {
          this.showModal = !this.showModal;
        }
    },
    clearInput() {
      this.newTodoItem = "";
    }
  },
  components: {
    Modal
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
  .closeModalBtn {
    color:#42b983;
  }
</style>