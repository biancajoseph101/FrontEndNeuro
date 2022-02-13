<template>
  <div>
    <h1 class="news-header">LATEST IN NEURONEWS</h1>
    <!-- <div class="container">
      <div class="news-card">
        <h1>{{ news[9].title }}</h1>
        <h5>Author: {{ news[9].author }} | {{ news[9].publishedAt }}</h5>
        <img :src="news[9].urlToImage" />
        <h5>{{ news[9].description }}</h5>
        <h5 class="source">source: {{ news[9].url }}</h5>
      </div>
      <div class="news-card">
        <h1>{{ news[1].title }}</h1>
        <h5>Author: {{ news[1].author }} | {{ news[1].publishedAt }}</h5>
        <img :src="news[1].urlToImage" />
        <h5>{{ news[1].description }}</h5>
        <h5 class="source">source: {{ news[1].url }}</h5>
      </div>
      <div class="news-card">
        <h1>{{ news[2].title }}</h1>
        <h5>Author: {{ news[2].author }} | {{ news[2].publishedAt }}</h5>
        <img :src="news[2].urlToImage" />
        <h5>{{ news[2].description }}</h5>
        <h5 class="source">source: {{ news[2].url }}</h5>
      </div>
      <div class="news-card">
        <h1>{{ news[8].title }}</h1>
        <h5>Author: {{ news[8].author }} | {{ news[8].publishedAt }}</h5>
        <img :src="news[8].urlToImage" />
        <h5>{{ news[8].description }}</h5>
        <h5 class="source">source: {{ news[8].url }}</h5>
      </div>

      <div class="news-card">
        <h1>{{ news[0].title }}</h1>
        <h5>Author: {{ news[0].author }} | {{ news[0].publishedAt }}</h5>
        <img :src="news[0].urlToImage" />
        <h5>{{ news[0].description }}</h5>
        <h5 class="source">source: {{ news[0].url }}</h5>
      </div>
      <div class="news-card">
        <h1>{{ news[15].title }}</h1>
        <h5>Author: {{ news[15].author }} | {{ news[15].publishedAt }}</h5>
        <img :src="news[15].urlToImage" />
        <h5>{{ news[15].description }}</h5>
        <h5 class="source">source: {{ news[15].url }}</h5>
      </div>
    </div> -->
  </div>
</template>

<script>
// import axios from 'axios';
// const API_KEY = process.env.VUE_APP_API_KEY;
export default {
  name: 'News'
  // data: () => ({
  //   news: Object
  // }),
  // mounted() {
  //   this.getNews();
  // },
  // methods: {
  //   async getNews() {
  //     const res = await axios.get(
  //       `https://newsapi.org/v2/everything?q=neuroscience&apiKey=9b14a33f320e44b8a1906e3619bb679f`
  //     );
  //     this.news = res.data.articles;
  //     // console.log(this.news);
  //   }
  // }
};
</script>

<style scoped>
.news-header {
  color: #80cbc4;
  font-size: 50px;
}
.news-card {
  max-width: 390px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  margin: 10px;
  justify-content: center;
  background: rgba(128, 128, 128, 0.342);
}
.container {
  text-transform: initial;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.source {
  background-color: rgba(230, 218, 218, 0.425);
  padding: 10px;
  color: white;
  border-radius: 12px;
  max-height: 95px;
  max-width: 700px;
  white-space: pre-line;
}

.source:hover {
  text-decoration: underline;
}
img {
  max-height: 200px;
  border-radius: 7px 7px 0 0;
}
</style>
