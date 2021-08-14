import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

const countOptions = {
    namespaced: true,
    actions: {
        jia(context, value) {
            context.commit("JIA", value)
        }
    },
    mutations: {
        JIA(state, value) {
            state.num += value
        }
    },
    state: {
        sum: 0
    },
    getters: {
        bigSum(state) {
            return state.sum * 10;
        }
    }
}

// const actions = {
//     jia(context, value) {
//         context.commit("JIA", value)
//     }
// }
// const mutations = {
//     JIA(state, value) {
//         state.num += value
//     }
// }
// const state = {
//     sum: 0
// }
// const getters = {
//     bigSum(state) {
//         return state.sum * 10;
//     }
// }

export default new Vuex.Store({

    // actions,
    // mutations,
    // state,
    // getters,

    modules: {
        countOptions
    }
})