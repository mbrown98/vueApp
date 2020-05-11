import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    flavor: "Choc",
    currentStock: "",
  },
  mutations: {
    change(state, flavor) {
      state.flavor = flavor;
    },
    changeStock(state, name) {
      state.currentStock = name;
    },
  },
  getters: {
    flavor: (state) => state.flavor,
    currentStock: (state) => state.currentStock,
  },
});
