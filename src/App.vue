<template>
  <div id="app">
    <MattHello msg="true" />
    <Movies />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import MattHello from "./components/MattHello.vue";
import Movies from "./components/Movies";

export default {
  name: "App",
  components: {
    // HelloWorld,
    MattHello,
    Movies
  }
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
  text-align: center;
}
</style>
