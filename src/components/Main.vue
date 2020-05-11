<template>
  <div v-if="selectedStock" id="main">Main</div>
</template>

<script>
// import TopRated from "./TopRated";
export default {
  name: "Main",
  components: {},
  data() {
    return { selectedStock: "" };
  },
};
</script>

<style>
#main {
  background-color: brown;
}
</style>
