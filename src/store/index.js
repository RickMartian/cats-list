import Vue from 'vue';
import Vuex from 'vuex';
import { modules, initialState } from './modules';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules,
    mutations: {
        reset(state) {
            Object.keys(state).forEach(key => {
                state[key] = { ...initialState[key] }
            })
        }
    }
})

export default store;