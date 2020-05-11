<template>
  <div id="app" class="grid-container">
    <FavStocks @changeStock="updateStock" />

    <GeneralNews v-if="!$store.getters.currentStock" />
    <CompanyNews v-if="$store.getters.currentStock" />
    <Main />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import GeneralNews from "./components/GeneralNews";
import Main from "./components/Main";
import FavStocks from "./components/FavStocks";
import CompanyNews from "./components/CompanyNews";
import { store } from "./store/store";

export default {
  name: "App",
  store,
  components: {
    // HelloWorld,
    GeneralNews,
    CompanyNews,
    Main,
    FavStocks,
  },
  data() {
    return { currentStock: "" };
  },
  methods: {
    updateStock: function(arg) {
      this.currentStock = arg;
      console.log("stock chnaged");
    },
  },
};
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
.grid-container {
  display: grid;
  grid-template-columns: 25% 50% 25%;
  grid-gap: 20px;
}
</style>
