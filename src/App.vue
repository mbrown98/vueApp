<template>
  <div id="app" class="grid-container" v-on:change-stock="size += 1">
    <FavStocks @changeStock="updateStock" />

    <Main />

    <News />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import News from "./components/News";
import Main from "./components/Main";
import FavStocks from "./components/FavStocks";

export default {
  name: "App",
  components: {
    // HelloWorld,
    News,
    Main,
    FavStocks,
  },
  data() {
    return { currentStock: "", size: 0 };
  },
  methods: {
    updateStock: function() {
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
