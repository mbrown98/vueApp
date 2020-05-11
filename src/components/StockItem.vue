<template>
  <div>
    <h1 v-on:click="changeStock">{{ symbol }}</h1>
    <p>Current Price: ${{ stockData.c }}</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Stock Item",
  props: ["symbolProp"],
  data() {
    return { symbol: this.symbolProp, stockData: [] };
  },
  created() {
    axios
      .get(
        `https://finnhub.io/api/v1/quote?symbol=${this.symbol}&token=bqsr1bfrh5rc3vfduat0`
      )
      .then((response) => {
        console.log("sppp", response);
        this.stockData = response.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    changeStock: function() {
      this.$store.commit("changeStock", this.symbol);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
