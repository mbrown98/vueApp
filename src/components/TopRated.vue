<template>
  <div>
    <span>Top Rated</span>
    <span>{{hello}}</span>
  </div>
</template>

<script>
export default {
  name: "TopRated",
  props: {},
  data() {
    return { name: "Movies", hello: "how are you?" };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>