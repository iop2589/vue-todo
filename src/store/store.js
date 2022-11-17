import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const storage = {
    fetch() {
        let arr = [];
        if (localStorage.length > 0) {
            const strTodo = localStorage.getItem("todoList");
            if (strTodo !== null) {
                arr = JSON.parse(strTodo);
            }
        }
        return arr;
    },
    setLocalStorageItem(todoList) {
        localStorage.setItem("todoList", JSON.stringify(todoList));
    }
};

const commonFunc = {
    todoFilter(liId, todoId) {
        return todoId !== liId;
    }
}

export const store = new Vuex.Store({
    state: {
        todoList: storage.fetch()
    },
    mutations: {
        addTodo(state, newTodoItem) {
            const newTodoObj = {
                  id : Date.now(),
                  todo : newTodoItem,
                  completed: false
                }
            state.todoList.push(newTodoObj);
            storage.setLocalStorageItem(state.todoList);
        },
        deleteTodo(state, liId) {
            state.todoList = state.todoList.filter((item) => commonFunc.todoFilter(parseInt(liId), item.id));
            storage.setLocalStorageItem(state.todoList);
        },
        toggleComplete(state, index) {
            state.todoList[index].completed = !state.todoList[index].completed;
            storage.setLocalStorageItem(state.todoList);
          },
        clearAllItem (state) {
            localStorage.clear();
            state.todoList = [];
        }
    }
});