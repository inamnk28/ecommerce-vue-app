import { createStore } from 'vuex'

export default createStore({
  state: {
    items: null,
    item: null,
  },
  mutations: {
    setItems: (state, items) => {
      state.items = items;
    },
    setItem: (state, item) => {
      state.item = item
    }
  },
  actions: {
    getItems: async (context) => {
      fetch("https://github.com/inamnk28/ecommerce-practice-vue.io.git")
      .then((res) => res.json())
      .then((items) => context.commit("setItems", items))
    },
    getItem: async (context, id) => {
      fetch("https://github.com/inamnk28/ecommerce-practice-vue.io.git/" + id)
      .then((res) => res.json())
      .then((item) => context.commit("setItem", item))
    },
  },
});
