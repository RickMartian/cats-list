export default {
    namespaced: true,
    state: {
        cats: []
    },
    getters: {
        getCats: (state) => state.cats,
    },
    actions: {
        updateCats({
            commit,
        }, payload) {
            commit('UPDATE_CATS', payload)
        }
    },
    mutations: {
        UPDATE_CATS(state, payload) {
            state.cats = payload;
        }
    }
}