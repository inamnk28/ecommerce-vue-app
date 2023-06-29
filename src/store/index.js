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
      fetch("https://inamnk28.github.io/data/db.json")
      .then((res) => res.json())
      .then((items) => context.commit("setItems", items))
    },
    getItem: async (context, id) => {
      fetch("https://inamnk28.github.io/data/db.json" + id)
      .then((res) => res.json())
      .then((item) => context.commit("setItem", item))
    },
  },
});
