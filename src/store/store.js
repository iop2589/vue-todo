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
    }
};

export const store = new Vuex.Store({
    state: {
        todoList: storage.fetch()
    }
});