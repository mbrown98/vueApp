<template>
  <div v-if="selectedStock" id="main">Main {{ selectedStock }}</div>
</template>

<script>
// import TopRated from "./TopRated";
export default {
  name: "Main",
  components: {},
  props: ["currentStock"],
  data() {
    return { selectedStock: "aaa" };
  },
  watch: {
    currentStock: function() {
      this.selectedStock = this.currentStock;
    },
  },
};
</script>

<style>
#main {
  background-color: brown;
}
</style>
