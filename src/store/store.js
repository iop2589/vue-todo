import Vue from 'vue'
import Vuex from 'vuex'
import todo from './modules/todoApp'

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        todo
    }
});