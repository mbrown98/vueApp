<template>
  <div id="news">
    <h1>News {{selectedStock}}</h1>

    <div v-for="data in newsData" :key="data.headline">
      <a href="`${data.url}`">{{ data.headline }}</a>
    </div>
  </div>
</template>

<script>
// import TopRated from "./TopRated";
import axios from "axios";
// var key = "bqsr1bfrh5rc3vfduat0";

export default {
  name: "News",
  components: {},
  props: ["currentStock"],
  data() {
    return { name: "", newsData: {}, selectedStock: this.currentStock };
  },
  created() {
    axios
      .get(
        `https://finnhub.io/api/v1/news?category=general&token=bqsr1bfrh5rc3vfduat0`
      )
      .then(response => {
        this.newsData = response.data;
      })
      .catch(err => {
        console.log(err);
      });
  },
  watch: {
    currentStock: function() {
      this.selectedStock = this.currentStock;
    }
  }
};
</script>

<style>
#news {
  background-color: blueviolet;
}
</style>
