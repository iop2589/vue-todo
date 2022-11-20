import storage from '../common/storage';
import commonFunc from '../common/commonFunc';

const state = {
    todoList: storage.fetch()
};

const mutations = {   
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
};


export default {
    state,
    mutations
};