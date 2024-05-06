import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    inventory: [],
    users: []
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    setInventory(state, inventory) {
      state.inventory = inventory;
    },
    setUsers(state, users) {
      state.users = users;
    }
  },
  actions: {
    fetchProducts({ commit }) {
      axios.get('/products')
        .then(response => commit('setProducts', response.data))
        .catch(error => console.error(error));
    }
  }
});
