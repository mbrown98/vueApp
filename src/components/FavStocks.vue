<template>
  <div id="favStocks" v-on:click="changeStock">
    <h1>Stocks</h1>
    <p>{{ stockData.c }}</p>
  </div>
</template>

<script>
// import TopRated from "./TopRated";
import axios from "axios";
export default {
  name: "Stocks",
  components: {},
  data() {
    return { userStocks: [], stockData: [] };
  },
  created() {
    axios
      .get(
        "https://finnhub.io/api/v1/quote?symbol=AAPL&token=bqsr1bfrh5rc3vfduat0"
      )
      .then((response) => {
        this.stockData = response.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    changeStock: function() {
      this.$emit("changeStock");
      console.log("hello");
    },
  },
};
</script>

<style>
#favStocks {
  background-color: aqua;
}
</style>
