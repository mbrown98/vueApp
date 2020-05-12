<template>
  <div id="news">
    <h1>News {{ stock }}</h1>

    <!-- <div v-for="data in newsData" :key="data.id">
      <a href="`${data.url}`">{{ data.headline }}</a>
    </div> -->
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
      peers: [],
      majorDevelopments: [],
      recTrends: [],
    };
  },
  computed: {
    stock() {
      return this.$store.getters.currentStock;
    },
  },
  watch: {
    stock() {
      //   this.getCompanyNews();
      //   this.getPeers();
      //   this.getMajorDevelopments();
      this.getNewsSentiment();
      this.getRecommendationTrends();
    },
  },
  created() {
    this.getCompanyNews();
    this.getPeers();
  },

  methods: {
    getCompanyNews: function() {
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
    getPeers: function() {
      axios
        .get(
          `https://finnhub.io/api/v1/stock/peers?symbol=${this.stock}&token=bqsr1bfrh5rc3vfduat0`
        )
        .then((response) => {
          console.log("peer", response);
          this.peers = response.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getMajorDevelopments() {
      axios
        .get(
          `https://finnhub.io/api/v1/major-development?symbol=${this.stock}&token=bqsr1bfrh5rc3vfduat0`
        )
        .then((response) => {
          console.log("major", response.data.majorDevelopment);
          this.majorDevelopments = response.data.majorDevelopment;
        })
        .then.catch((err) => {
          console.log(err);
        });
    },
    getNewsSentiment() {
      axios
        .get(
          `https://finnhub.io/api/v1/news-sentiment?symbol=${this.stock}&token=bqsr1bfrh5rc3vfduat0`
        )
        .then((response) => {
          console.log(response);
          this.newsSentiment = response.data;
        })
        .then.catch((err) => {
          console.log(err);
        });
    },
    getRecommendationTrends() {
      axios
        .get(
          `https://finnhub.io/api/v1/stock/recommendation?symbol=${this.stock}&token=bqsr1bfrh5rc3vfduat0`
        )
        .then((response) => {
          this.recTrends = response.data;
        })
        .then.catch((err) => {
          console.log(err);
        });
    },
    getHistoricalPrices() {
      axios
        .get(``)
        .then((response) => {
          this.newsData = response.data;
        })
        .then.catch((err) => {
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
