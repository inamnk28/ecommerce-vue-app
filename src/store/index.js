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
      fetch("http://localhost:3000/items")
      .then((res) => res.json())
      .then((items) => context.commit("setItems", items))
    },
    getItem: async (context, id) => {
      fetch("http://localhost:3000/items/" + id)
      .then((res) => res.json())
      .then((item) => context.commit("setItem", item))
    },
  },
});
