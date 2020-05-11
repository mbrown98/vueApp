<template>
  <div id="news">
    <h1>News {{ stock }}</h1>

    <div v-for="data in newsData" :key="data.id">
      <a href="`${data.url}`">{{ data.headline }}</a>
    </div>
  </div>
</template>

<script>
// import TopRated from "./TopRated";
import axios from "axios";

// var key = "bqsr1bfrh5rc3vfduat0";

export default {
  name: "CompanyNews",
  components: {},
  props: ["currentStock"],
  data() {
    return {
      name: "",
      newsData: {},
    };
  },
  computed: {
    stock() {
      return this.$store.getters.currentStock;
    },
  },
  watch: {
    stock() {
      this.updateNews();
    },
  },
  created() {
    this.updateNews();
  },

  methods: {
    updateNews: function() {
      console.log("mews");
      axios
        .get(
          `https://finnhub.io/api/v1/company-news?symbol=${this.stock}&from=2020-04-30&to=2020-05-01&token=bqsr1bfrh5rc3vfduat0`
        )
        .then((response) => {
          this.newsData = response.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
#news {
  background-color: blueviolet;
}
</style>
