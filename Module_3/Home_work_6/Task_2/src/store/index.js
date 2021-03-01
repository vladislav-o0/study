import { createStore } from 'vuex'

export default createStore({
  state: {
    products: []
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    manProducts(state) {
      return state.products.filter(elem => elem.category == 'men clothing');
    },
    womenProducts(state) {
      return state.products.filter(elem => elem.category == 'women clothing');
    }
  }
})
