import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// let all = window.localStorage.getItem('all');
let dataUser = window.localStorage.getItem('dataUser');

export default new Vuex.Store({
    state: {
        // all: all ? JSON.parse(all) : [],
        dataUser: dataUser ? JSON.parse(dataUser) : false,
    },
    // getters: {
    //     totalPrice: state => {
    //         let total = 0;
    //         state.all.filter((item) => {
    //             total += item.discountedPrice;
    //         });
    //         return total;
    //     }
    // },
    mutations: {
        // addProduct(state, payload) {
        //     state.all.push(payload)
        //     this.commit('saveData');
        // },
        // removeProduct(state, payload) {
        //     const index = state.all.indexOf(payload);
        //     state.all.splice(index, 1);
        //     this.commit('saveData');
        // },
        // removeAllProduct(state) {
        //     state.all.length = 0
        //     this.commit('saveData');
        // },
        // saveData(state) {
        //     window.localStorage.setItem('all', JSON.stringify(state.all));
        // },
        addDataUser(state, payload) {
            state.dataUser = payload;
            this.commit('saveDataUser')
        },
        saveDataUser(state) {
            window.localStorage.setItem('dataUser', JSON.stringify(state.dataUser));
        },
        logOut(state) {
            state.dataUser = false
            this.commit('saveDataUser');
        },
    },
    actions: {
        async createDataUser({ commit }, payload) {
            commit("addDataUser", payload);
        },
        // async createProduct({ commit }, payload) {
        //     commit("addProduct", payload);
        // }
    }
})