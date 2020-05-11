<template>
  <div id="favStocks">
    <h1 v-on:click="changeStore">Stocks {{ $store.getters.flavor }}</h1>
    <StockItem
      v-for="stock in userStocks"
      :key="stock"
      :symbolProp="stock"
      @changeStock="updateStock"
    />
  </div>
</template>

<script>
// import TopRated from "./TopRated";
// import axios from "axios";
import StockItem from "./StockItem";
import { store } from "../store/store";
export default {
  name: "Stocks",
  store,
  components: { StockItem },
  data() {
    return { userStocks: ["AAPL", "AMZN", "WMT"], stockData: [] };
  },
  created() {},
  methods: {
    updateStock: function(arg) {
      console.log(arg);
      this.$emit("changeStock", arg);
    },
    changeStore: function() {
      this.$store.commit("change", "van");
    },
  },
};
</script>

<style>
#favStocks {
  background-color: aqua;
}
</style>
